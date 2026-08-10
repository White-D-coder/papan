"use client";

import { useState, useCallback, MouseEvent } from "react";

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

export function use3DTilt(maxTiltDeg = 12, maxScale = 1.03) {
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPercentage = (mouseX / width - 0.5) * 2;
      const yPercentage = (mouseY / height - 0.5) * 2;

      setTilt({
        rotateX: -yPercentage * maxTiltDeg,
        rotateY: xPercentage * maxTiltDeg,
        scale: maxScale,
      });
    },
    [maxTiltDeg, maxScale]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  return {
    tilt,
    handleMouseMove,
    handleMouseLeave,
    tiltStyle: {
      transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
      transition: "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)",
    },
  };
}
