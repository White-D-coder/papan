"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const IMAGES = [
  "images/pexels-afhamhmsyri-34021102.jpg",
  "images/pexels-beigh-yabaar-865585625-32584961.jpg",
  "images/pexels-dudubangbang-29028514.jpg",
  "images/pexels-masoodaslami-14680969.jpg",
  "images/pexels-nathan-steele-274130124-32730210.jpg",
];

const randomBetween = (min: number, max: number) => {
  return min + Math.random() * (max - min);
};

export default function TheReel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // =====================================================
    // SCENE
    // =====================================================

    const scene = new THREE.Scene();

    scene.background = new THREE.Color("#F5F2ED");

    // =====================================================
    // CAMERA
    // =====================================================

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 8);

    // =====================================================
    // RENDERER
    // =====================================================

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace =
      THREE.SRGBColorSpace;

    container.appendChild(
      renderer.domElement
    );

    // =====================================================
    // FOG
    // =====================================================

    scene.fog = new THREE.FogExp2(
      0xf5f2ed,
      0.032
    );

    // =====================================================
    // IMAGE GROUP
    // =====================================================

    const imageGroup =
      new THREE.Group();

    scene.add(imageGroup);

    const planes: THREE.Mesh[] = [];

    // =====================================================
    // CARD SETTINGS
    // =====================================================

    const CARD_WIDTH = 2.8;
    const CARD_HEIGHT = 4.0;

    /*
     * Rounded corners.
     *
     * This is normalized inside the shader.
     */

    const CARD_RADIUS = 0.16;

    /*
     * Distance between cards.
     */

    const spacing = 4.8;

    const totalLength =
      IMAGES.length * spacing;

    // =====================================================
    // SHADER
    //
    // This gives every card the exact same
    // portrait rounded shape while preserving
    // the image's natural aspect ratio.
    // =====================================================

    const vertexShader = `
      varying vec2 vUv;

      void main() {
        vUv = uv;

        gl_Position =
          projectionMatrix *
          modelViewMatrix *
          vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform float uImageAspect;
      uniform float uCardAspect;
      uniform float uRadius;

      varying vec2 vUv;

      void main() {

        // ================================================
        // COVER-CROP IMAGE
        // ================================================

        vec2 uv = vUv;

        if (uImageAspect > uCardAspect) {

          float scale =
            uCardAspect / uImageAspect;

          uv.x =
            (uv.x - 0.5) * scale + 0.5;

        } else {

          float scale =
            uImageAspect / uCardAspect;

          uv.y =
            (uv.y - 0.5) * scale + 0.5;
        }

        vec4 color =
          texture2D(
            uTexture,
            uv
          );

        // ================================================
        // ROUNDED RECTANGLE SDF
        // ================================================

        vec2 p =
          abs(vUv - 0.5);

        vec2 b =
          vec2(
            0.5 - uRadius,
            0.5 - uRadius
          );

        vec2 q =
          p - b;

        float distanceValue =
          length(
            max(q, 0.0)
          ) +
          min(
            max(q.x, q.y),
            0.0
          ) -
          uRadius;

        // ================================================
        // SOFT CARD EDGE
        // ================================================

        float alpha =
          1.0 -
          smoothstep(
            0.0,
            0.012,
            distanceValue
          );

        color.a *= alpha;

        if (color.a < 0.01) {
          discard;
        }

        gl_FragColor = color;
      }
    `;

    // =====================================================
    // TEXTURE LOADER
    // =====================================================

    const loader =
      new THREE.TextureLoader();

    let disposed = false;

    const loadTextures =
      Promise.all(
        IMAGES.map(
          (src) =>
            new Promise<THREE.Texture>(
              (resolve, reject) => {
                loader.load(
                  src,
                  (texture) => {
                    texture.colorSpace =
                      THREE.SRGBColorSpace;

                    texture.minFilter =
                      THREE.LinearFilter;

                    texture.magFilter =
                      THREE.LinearFilter;

                    texture.wrapS =
                      THREE.ClampToEdgeWrapping;

                    texture.wrapT =
                      THREE.ClampToEdgeWrapping;

                    resolve(texture);
                  },
                  undefined,
                  reject
                );
              }
            )
        )
      );

    // =====================================================
    // CREATE CARDS AFTER TEXTURES LOAD
    // =====================================================

    loadTextures
      .then((textures) => {
        if (disposed) return;

        textures.forEach(
          (texture, index) => {
            // ============================================
            // CARD GEOMETRY
            // ============================================

            const geometry =
              new THREE.PlaneGeometry(
                CARD_WIDTH,
                CARD_HEIGHT,
                1,
                1
              );

            // ============================================
            // IMAGE ASPECT
            // ============================================

            const image =
              texture.image as
                | HTMLImageElement
                | undefined;

            const imageWidth =
              image?.naturalWidth ||
              image?.width ||
              1;

            const imageHeight =
              image?.naturalHeight ||
              image?.height ||
              1;

            const imageAspect =
              imageWidth /
              imageHeight;

            const cardAspect =
              CARD_WIDTH /
              CARD_HEIGHT;

            // ============================================
            // SHADER MATERIAL
            // ============================================

            const material =
              new THREE.ShaderMaterial({
                uniforms: {
                  uTexture: {
                    value: texture,
                  },

                  uImageAspect: {
                    value: imageAspect,
                  },

                  uCardAspect: {
                    value: cardAspect,
                  },

                  uRadius: {
                    value:
                      CARD_RADIUS /
                      CARD_HEIGHT,
                  },
                },

                vertexShader,
                fragmentShader,

                transparent: true,

                depthWrite: true,

                side: THREE.DoubleSide,
              });

            // ============================================
            // CARD
            // ============================================

            const mesh =
              new THREE.Mesh(
                geometry,
                material
              );

            // ============================================
            // RANDOM DEPTH
            // ============================================

            mesh.position.z =
              -index * spacing -
              randomBetween(0, 3);

            // ============================================
            // RANDOM X
            // ============================================

            mesh.position.x =
              randomBetween(
                -4.2,
                4.2
              );

            // ============================================
            // RANDOM Y
            // ============================================

            mesh.position.y =
              randomBetween(
                -2.8,
                2.8
              );

            // ============================================
            // RANDOM ROTATION
            // ============================================

            mesh.rotation.z =
              randomBetween(
                -0.12,
                0.12
              );

            mesh.rotation.y =
              randomBetween(
                -0.08,
                0.08
              );

            // ============================================
            // RANDOM SCALE
            // ============================================

            const scale =
              randomBetween(
                0.82,
                1.08
              );

            mesh.scale.set(
              scale,
              scale,
              scale
            );

            // ============================================
            // ADD
            // ============================================

            imageGroup.add(mesh);

            planes.push(mesh);
          }
        );
      })
      .catch((error) => {
        console.error(
          "Failed to load Reel images:",
          error
        );
      });

    // =====================================================
    // CLOUD TEXTURE
    // =====================================================

    const cloudCanvas =
      document.createElement(
        "canvas"
      );

    cloudCanvas.width = 512;
    cloudCanvas.height = 512;

    const cloudContext =
      cloudCanvas.getContext(
        "2d"
      );

    if (cloudContext) {
      const gradient =
        cloudContext.createRadialGradient(
          256,
          256,
          0,
          256,
          256,
          256
        );

      gradient.addColorStop(
        0,
        "rgba(255,255,255,0.85)"
      );

      gradient.addColorStop(
        0.35,
        "rgba(255,255,255,0.4)"
      );

      gradient.addColorStop(
        0.7,
        "rgba(255,255,255,0.12)"
      );

      gradient.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );

      cloudContext.fillStyle =
        gradient;

      cloudContext.fillRect(
        0,
        0,
        512,
        512
      );
    }

    const cloudTexture =
      new THREE.CanvasTexture(
        cloudCanvas
      );

    const cloudGeometry =
      new THREE.PlaneGeometry(
        18,
        10
      );

    const cloudMaterial =
      new THREE.MeshBasicMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.25,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

    // =====================================================
    // CLOUD 1
    // =====================================================

    const cloud1 =
      new THREE.Mesh(
        cloudGeometry,
        cloudMaterial
      );

    cloud1.position.set(
      -2,
      0,
      -18
    );

    scene.add(cloud1);

    // =====================================================
    // CLOUD 2
    // =====================================================

    const cloud2 =
      new THREE.Mesh(
        cloudGeometry.clone(),
        cloudMaterial.clone()
      );

    cloud2.position.set(
      3,
      1,
      -34
    );

    cloud2.scale.set(
      1.3,
      1.15,
      1
    );

    scene.add(cloud2);

    // =====================================================
    // ANIMATION
    // =====================================================

    let animationId = 0;

    const clock =
      new THREE.Clock();

    /*
     * ORIGINAL:
     * 0.035
     *
     * 30% slower:
     * 0.035 × 0.70 = 0.0245
     */

    const speed = 0.0245;

    const animate = () => {
      animationId =
        requestAnimationFrame(
          animate
        );

      const elapsed =
        clock.getElapsedTime();

      // =================================================
      // MOVE TUNNEL
      // =================================================

      imageGroup.position.z +=
        speed;

      // =================================================
      // LOOP IMAGES
      // =================================================

      planes.forEach(
        (mesh, index) => {
          const worldZ =
            mesh.position.z +
            imageGroup.position.z;

          // =============================================
          // IMAGE PASSED CAMERA
          // =============================================

          if (worldZ > 6) {
            /*
             * Send it back to the
             * end of the tunnel.
             */

            mesh.position.z -=
              totalLength;

            // ==========================================
            // NEW RANDOM POSITION
            // ==========================================

            mesh.position.x =
              randomBetween(
                -4.2,
                4.2
              );

            mesh.position.y =
              randomBetween(
                -2.8,
                2.8
              );

            // ==========================================
            // NEW RANDOM ROTATION
            // ==========================================

            mesh.rotation.z =
              randomBetween(
                -0.12,
                0.12
              );

            mesh.rotation.y =
              randomBetween(
                -0.08,
                0.08
              );

            // ==========================================
            // NEW RANDOM SCALE
            // ==========================================

            const newScale =
              randomBetween(
                0.82,
                1.08
              );

            mesh.scale.set(
              newScale,
              newScale,
              newScale
            );
          }

          // =============================================
          // VERY SUBTLE FLOAT
          // =============================================

          mesh.position.y +=
            Math.sin(
              elapsed * 0.35 +
                index
            ) * 0.0008;

          // =============================================
          // SUBTLE ROTATION
          // =============================================

          mesh.rotation.y +=
            Math.sin(
              elapsed * 0.25 +
                index
            ) * 0.00004;
        }
      );

      // =================================================
      // CAMERA
      // =================================================

      camera.position.x =
        Math.sin(
          elapsed * 0.22
        ) * 0.12;

      camera.position.y =
        Math.cos(
          elapsed * 0.18
        ) * 0.08;

      camera.lookAt(
        0,
        0,
        -20
      );

      // =================================================
      // CLOUD MOVEMENT
      // =================================================

      cloud1.position.x =
        -2 +
        Math.sin(
          elapsed * 0.12
        ) * 2;

      cloud1.position.y =
        Math.cos(
          elapsed * 0.15
        ) * 0.5;

      cloud1.rotation.z =
        Math.sin(
          elapsed * 0.08
        ) * 0.04;

      cloud2.position.x =
        3 +
        Math.cos(
          elapsed * 0.1
        ) * 2;

      cloud2.position.y =
        1 +
        Math.sin(
          elapsed * 0.13
        ) * 0.7;

      cloud2.rotation.z =
        Math.cos(
          elapsed * 0.07
        ) * 0.04;

      // =================================================
      // RENDER
      // =================================================

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // =====================================================
    // RESIZE
    // =====================================================

    const handleResize = () => {
      if (!container) return;

      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      disposed = true;

      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      planes.forEach(
        (mesh) => {
          mesh.geometry.dispose();

          const material =
            mesh.material as THREE.ShaderMaterial;

          material.dispose();
        }
      );

      cloudGeometry.dispose();
      cloudTexture.dispose();

      cloudMaterial.dispose();

      renderer.dispose();

      if (
        renderer.domElement
          .parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        background: "#F5F2ED",
      }}
    >
      {/* =================================================
          HEADER
      ================================================== */}

      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: "11%",
          left: "8%",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily:
              "var(--font-mono)",
            fontSize: "10px",
            letterSpacing:
              "0.25em",
            color: "#B24C35",
            marginBottom: "18px",
          }}
        >
          THE REEL
        </div>

        <h2
          style={{
            margin: 0,
            fontFamily:
              "var(--font-display)",
            fontWeight: 700,
            fontSize:
              "clamp(3.5rem, 7vw, 7rem)",
            lineHeight: 0.9,
            letterSpacing:
              "-0.055em",
            color: "#1B2A49",
          }}
        >
          Moments
          <br />

          <span
            style={{
              fontFamily:
                "Georgia, serif",
              fontWeight: 400,
              color: "#6C7788",
            }}
          >
            in motion.
          </span>
        </h2>

        <p
          style={{
            margin:
              "24px 0 0",
            maxWidth: "300px",
            fontFamily:
              "var(--font-display)",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#687180",
          }}
        >
          A collection of places,
          people and moments
          we've carried with us.
        </p>
      </div>

      {/* =================================================
          THREE.JS
      ================================================== */}

      <div
        ref={containerRef}
        style={{
          position: "absolute",
          inset: 0,
        }}
      />

      {/* =================================================
          TOP / BOTTOM FADE
      ================================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",

          background:
            "linear-gradient(to bottom, rgba(245,242,237,.78) 0%, rgba(245,242,237,0) 24%, rgba(245,242,237,0) 72%, rgba(245,242,237,.88) 100%)",
        }}
      />

      {/* =================================================
          EDGE VIGNETTE
      ================================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",

          background:
            "radial-gradient(circle at center, transparent 32%, rgba(245,242,237,.12) 68%, rgba(245,242,237,.6) 100%)",
        }}
      />

      {/* =================================================
          FOOTER
      ================================================== */}

      <div
        style={{
          position: "absolute",
          zIndex: 10,

          bottom: "8%",
          left: "8%",
          right: "8%",

          display: "flex",
          alignItems: "center",
          justifyContent:
            "space-between",

          fontFamily:
            "var(--font-mono)",

          fontSize: "9px",
          letterSpacing:
            "0.16em",

          color: "#1B2A49",

          pointerEvents: "none",
        }}
      >
        <span>
          JAPAN · KOREA · EUROPE
        </span>

        <span>
          TRAVEL ARCHIVE
        </span>

        <span>
          SCROLL TO EXPLORE ↓
        </span>
      </div>

      {/* =================================================
          MOBILE
      ================================================== */}

      <style jsx>{`
        @media (max-width: 700px) {
          section {
            min-height: 650px !important;
          }

          section > div:first-child {
            top: 8% !important;
            left: 7% !important;
          }

          section > div:first-child h2 {
            font-size: 3.5rem !important;
          }

          section > div:last-child {
            left: 7% !important;
            right: 7% !important;
          }

          section > div:last-child span:nth-child(2) {
            display: none;
          }

          section > div:last-child span {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}