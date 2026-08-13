//           background:
//             #9e3b30;
//         }

//         /* =================================================
//            NAVBAR
//         ================================================= */

//         /* =================================================
//            NAVBAR — REDESIGNED
//         ================================================= */

//         .navbar {
//           position: fixed;
//           z-index: 1000;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 72px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 0 40px;
//           background: rgba(245, 240, 230, 0.85);
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           border-bottom: 1px solid rgba(58, 43, 31, 0.08);
//           transition: box-shadow 0.3s ease, background 0.3s ease;
//         }

//         .navbar-scrolled {
//           box-shadow: 0 4px 24px rgba(45, 30, 18, 0.1);
//           background: rgba(245, 240, 230, 0.96);
//         }

//         /* Brand */
//         .nav-brand {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           text-decoration: none;
//           color: #28211b;
//         }

//         .nav-brand-kanji {
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           background: #9e3b30;
//           color: #f5eee3;
//           display: grid;
//           place-items: center;
//           font-family: "Noto Serif JP", serif;
//           font-size: 16px;
//         }

//         .nav-brand-text {
//           font-family: var(--font-mono), monospace;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.25em;
//           color: #302821;
//         }

//         /* Nav */
//         .navbar nav {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }

//         .nav-item {
//           position: relative;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 1px;
//           padding: 6px 16px;
//           border-radius: 8px;
//           text-decoration: none;
//           color: #5a4f44;
//           transition: color 0.2s, background 0.2s;
//         }

//         .nav-item:hover,
//         .nav-item.active {
//           color: #9e3b30;
//           background: rgba(158, 59, 48, 0.06);
//         }

//         .nav-label {
//           font-family: var(--font-mono), monospace;
//           font-size: 9px;
//           font-weight: 600;
//           letter-spacing: 0.18em;
//           line-height: 1;
//         }

//         .nav-kanji {
//           font-family: "Noto Serif JP", serif;
//           font-size: 11px;
//           color: #9e3b30;
//           line-height: 1;
//         }

//         .nav-underline {
//           position: absolute;
//           bottom: 3px;
//           left: 16px;
//           right: 16px;
//           height: 1.5px;
//           background: #9e3b30;
//           transform-origin: left;
//           border-radius: 2px;
//         }

//         /* Back button */
//         .nav-back {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 8px 18px;
//           border: 1px solid rgba(48, 40, 33, 0.2);
//           border-radius: 24px;
//           text-decoration: none;
//           font-family: var(--font-mono), monospace;
//           font-size: 9px;
//           font-weight: 600;
//           letter-spacing: 0.18em;
//           color: #302821;
//           transition: background 0.2s, border-color 0.2s;
//         }

//         .nav-back:hover {
//           background: #302821;
//           color: #f5eee3;
//           border-color: #302821;
//         }

//         .nav-paper {
//           position: absolute;
//           inset: 0;

//           border-radius: inherit;

//           background:
//             linear-gradient(
//               105deg,
//               #d3c4ae,
//               #e8dfcf 25%,
//               #d7cab7 52%,
//               #e8dfcf 76%,
//               #d4c5b0
//             );
//         }

//         .nav-wrinkles {
//           position: absolute;
//           inset: 0;

//           border-radius: inherit;

//           opacity: .4;

//           background:
//             repeating-linear-gradient(
//               4deg,
//               transparent 0,
//               transparent 6px,
//               rgba(66,47,32,.035) 7px,
//               transparent 10px
//             ),
//             radial-gradient(
//               ellipse at 20% 20%,
//               rgba(255,255,255,.4),
//               transparent 40%
//             ),
//             radial-gradient(
//               ellipse at 80% 80%,
//               rgba(70,45,30,.1),
//               transparent 45%
//             );
//         }

//         .navbar nav {
//           position: relative;
//           z-index: 10;

//           height: 100%;

//           display: flex;
//           align-items: center;
//           justify-content: space-between;

//           padding:
//             0 15px;
//         }

//         .nav-item {
//           position: relative;

//           height: 100%;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           padding:
//             0 20px;

//           color:
//             #4a4036;

//           text-decoration: none;

//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size: 15px;

//           font-weight: 600;

//           letter-spacing:
//             .2em;

//           white-space: nowrap;
//         }

//         .nav-item:first-child::before {
//           content: "";

//           position: absolute;
//           inset: 7px 1px;

//           z-index: -1;

//           border-radius: 30px;

//           background:
//             #201914;
//         }

//         .nav-item:first-child {
//           color:
//             #f2eadf;
//         }

//         .nav-item .kanji {
//           position: absolute;

//           top: 3px;
//           right: 6px;

//           color:
//             #92352c;

//           font-family:
//             "Noto Serif JP",
//             serif;

//           font-size: 13px;

//           opacity: 0;
//         }

//         .nav-item.active .kanji {
//           opacity: .2;
//         }

//         .nav-item i {
//           position: absolute;

//           left: 20%;
//           right: 17%;

//           bottom: 10px;

//           height: 2px;

//           background:
//             #9e382f;

//           transform-origin:
//             left;
//         }

//         .nav-sun {
//           position: absolute;

//           z-index: 5;

//           top: -25px;
//           right: 105px;

//           width: 50px;
//           height: 50px;

//           border-radius: 50%;

//           display: grid;
//           place-items: center;

//           background:
//             #a43a2e;

//           color:
//             #ead9c4;

//           font-family:
//             "Noto Serif JP",
//             serif;

//           font-size: 19px;

//           transform:
//             rotate(-8deg);
//         }

//         .nav-mountain {
//           position: absolute;

//           z-index: 2;

//           right: 10%;
//           bottom: -22px;

//           width: 280px;
//           height: 70px;

//           pointer-events: none;
//         }

//         .nav-mountain path:first-child {
//           fill:
//             rgba(53,43,34,.16);
//         }

//         .nav-mountain .snow {
//           fill:
//             rgba(245,238,226,.9);
//         }

//         .nav-stamp {
//           position: absolute;

//           z-index: 30;

//           right: 20px;
//           bottom: -21px;

//           width: 40px;
//           height: 40px;

//           display: grid;
//           place-items: center;

//           border:
//             2px solid
//             rgba(143,48,40,.5);

//           color:
//             #8f3028;

//           background:
//             rgba(229,215,195,.8);

//           font-family:
//             "Noto Serif JP",
//             serif;

//           transform:
//             rotate(7deg);
//         }

//         /* =================================================
//            HERO
//         ================================================= */

//         .hero {
//           position: relative;

//           min-height:
//             100vh;

//           display:
//             flex;

//           align-items:
//             center;

//           overflow:
//             hidden;

//           background:
//             #f4eee3;
//         }

//         .hero-paper {
//           position: absolute;
//           inset: 0;

//           opacity: .5;

//           background:
//             radial-gradient(
//               ellipse at 20% 20%,
//               rgba(255,255,255,.6),
//               transparent 40%
//             ),
//             radial-gradient(
//               ellipse at 80% 80%,
//               rgba(90,60,40,.08),
//               transparent 45%
//             );
//         }

//         .hero-copy {
//           position: relative;
//           z-index: 5;

//           width:
//             min(
//               1180px,
//               calc(100% - 64px)
//             );

//           margin: auto;

//           padding-top:
//             80px;
//         }

//         .hero h1 {
//           margin:
//             35px 0 0;

//           font-size:
//             clamp(
//               6rem,
//               17vw,
//               15rem
//             );

//           line-height:
//             .72;

//           letter-spacing:
//             -.075em;

//           color:
//             #28211b;
//         }

//         .hero h1 em {
//           font-family:
//             "Noto Serif JP",
//             Georgia,
//             serif;

//           font-style:
//             normal;

//           color:
//             #9f3c30;

//           font-size:
//             .55em;

//           margin-left:
//             .18em;
//         }

//         .hero p {
//           margin:
//             50px 0 0;

//           color:
//             #6c6053;

//           line-height:
//             1.7;

//           font-size:
//             16px;
//         }

//         .hero-link {
//           display:
//             inline-block;

//           margin-top:
//             32px;

//           padding-bottom:
//             8px;

//           border-bottom:
//             1px solid
//             #9f3c30;

//           text-decoration:
//             none;

//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size:
//             9px;

//           letter-spacing:
//             .18em;
//         }

//         .hero-sun {
//           position:
//             absolute;

//           right:
//             13%;

//           top:
//             23%;

//           width:
//             260px;

//           height:
//             260px;

//           border-radius:
//             50%;

//           display:
//             grid;

//           place-items:
//             center;

//           background:
//             #a43a2e;

//           opacity:
//             .92;
//         }

//         .hero-sun span {
//           color:
//             rgba(245,232,215,.8);

//           font-family:
//             "Noto Serif JP",
//             serif;

//           font-size:
//             30px;
//         }

//         .hero-mountains {
//           position:
//             absolute;

//           inset:
//             auto 0 0;

//           height:
//             45%;
//         }

//         .hero-mountains svg {
//           width:
//             100%;

//           height:
//             100%;
//         }

//         .hero-mountains path {
//           fill:
//             rgba(48,41,35,.13);
//         }

//         .hero-side {
//           position:
//             absolute;

//           right:
//             3%;

//           top:
//             50%;

//           writing-mode:
//             vertical-rl;

//           font-family:
//             "Noto Serif JP",
//             serif;

//           color:
//             rgba(62,48,36,.4);

//           letter-spacing:
//             .35em;
//         }

//         .hero-footer {
//           position:
//             absolute;

//           left:
//             32px;

//           right:
//             32px;

//           bottom:
//             30px;

//           display:
//             flex;

//           justify-content:
//             space-between;

//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size:
//             8px;

//           letter-spacing:
//             .18em;

//           color:
//             #65584b;
//         }

//         /* =================================================
//            CINEMA — HANGING PHOTO WALL
//         ================================================= */

//         .cinema {
//           position: relative;
//           min-height: 100vh;
//           overflow: hidden;
//           background: #e7ded0;
//         }

//         .cinema-copy {
//           position: absolute;
//           z-index: 20;
//           top: 15%;
//           left: 8%;
//         }

//         .cinema-copy h2 {
//           margin: 35px 0 0;
//           font-size: clamp(4rem, 8vw, 8rem);
//           line-height: .82;
//           letter-spacing: -.06em;
//         }

//         .cinema-copy h2 em {
//           font-family: Georgia, serif;
//           font-weight: 400;
//           color: #ffffffff;
//         }

//         .cinema-copy p {
//           max-width: 300px;
//           margin-top: 28px;
//           color: #e29736ff;
//           line-height: 1.6;
//         }

//         /* Photo installation */
//         .cinema-wall {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 5;
//           pointer-events: none;
//         }

//         /* Wooden danda */
//         .wooden-danda {
//           position: absolute;
//           top: 10%;
//           left: 5%;
//           right: 5%;
//           height: 25px;
//           border-radius: 50px;
//           background:
//             linear-gradient(
//               180deg,
//               #8b603b 0%,
//               #a97749 25%,
//               #70472b 55%,
//               #996b43 75%,
//               #684329 100%
//             );
//           box-shadow:
//             0 8px 14px rgba(60, 38, 22, .18),
//             inset 0 2px 2px rgba(255,255,255,.18),
//             inset 0 -3px 5px rgba(40,25,15,.25);
//           transform: rotate(-.35deg);
//         }

//         .wood-grain {
//           position: absolute;
//           inset: 0;
//           border-radius: inherit;
//           opacity: .45;
//           background:
//             repeating-linear-gradient(
//               92deg,
//               transparent 0,
//               transparent 38px,
//               rgba(45,25,12,.18) 40px,
//               transparent 44px
//             ),
//             repeating-linear-gradient(
//               8deg,
//               transparent 0,
//               transparent 9px,
//               rgba(255,220,175,.12) 10px,
//               transparent 13px
//             );
//         }

//         /* Vines */
//         .vine {
//           position: absolute;
//           z-index: 10;
//           pointer-events: none;
//         }

//         .vine svg {
//           width: 100%;
//           height: 100%;
//           overflow: visible;
//         }

//         .vine-stem {
//           fill: none;
//           stroke: #536747;
//           stroke-width: 5;
//           stroke-linecap: round;
//         }

//         .vine ellipse {
//           fill: #637d52;
//           stroke: #4e6540;
//           stroke-width: 1;
//         }

//         .vine-left {
//           width: 430px;
//           height: 190px;
//           top: 5%;
//           left: 3%;
//           transform: rotate(-3deg);
//         }

//         .vine-right {
//           width: 450px;
//           height: 190px;
//           top: 5%;
//           right: 2%;
//           transform: rotate(3deg);
//         }

//         /* Ropes */
//         .hanging-ropes {
//           position: absolute;
//           inset: 0;
//           z-index: 15;
//         }

//         .hanging-rope {
//           position: absolute;
//           left: var(--rope-x);
//           top: 10%;
//           width: 1px;
//           height: var(--rope-height);
//         }

//         .rope-string {
//           position: absolute;
//           top: 12px;
//           left: 0;
//           width: 2px;
//           height: 100%;
//           background:
//             repeating-linear-gradient(
//               0deg,
//               #9c876c 0px,
//               #9c876c 5px,
//               #b6a083 6px,
//               #8c755c 8px
//             );
//           box-shadow: 1px 0 1px rgba(60,40,25,.15);
//           border-radius: 50%;
//         }

//         /* Photo cards */
//         .hanging-photo {
//           position: absolute;
//           left: 50%;
//           bottom: 0;
//           width: clamp(135px, 13vw, 190px);
//           aspect-ratio: .78;
//           padding: 8px;
//           background: #f8f4eb;
//           box-shadow:
//             0 18px 35px rgba(54,38,26,.16),
//             0 3px 8px rgba(54,38,26,.08);
//           transform:
//             translateX(-50%)
//             rotate(var(--card-rotate));
//           transform-origin: top center;
//           overflow: visible;
//         }

//         .hanging-photo::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border: 1px solid rgba(80,60,40,.08);
//           pointer-events: none;
//         }

//         .hanging-photo img {
//           display: block;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           filter: saturate(.82) contrast(.96);
//         }

//         .photo-pin {
//           position: absolute;
//           top: -5px;
//           left: 50%;
//           width: 9px;
//           height: 9px;
//           transform: translateX(-50%);
//           border-radius: 50%;
//           background: #79634d;
//           box-shadow: 0 1px 2px rgba(30,20,10,.35);
//           z-index: 5;
//         }

//         .photo-pin::after {
//           content: "";
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           width: 3px;
//           height: 3px;
//           transform: translate(-50%, -50%);
//           border-radius: 50%;
//           background: #d5c5ad;
//         }

//         .photo-number {
//           position: absolute;
//           bottom: -24px;
//           left: 0;
//           font-family: var(--font-mono), monospace;
//           font-size: 8px;
//           letter-spacing: .18em;
//           color: #776a5c;
//         }

//         /* Individual movement — intentionally asynchronous */
//         .rope-1 .hanging-photo { animation: hanging-sway-1 6s ease-in-out infinite; }
//         .rope-2 .hanging-photo { animation: hanging-sway-2 7.2s ease-in-out infinite; }
//         .rope-3 .hanging-photo { animation: hanging-sway-3 5.8s ease-in-out infinite; }
//         .rope-4 .hanging-photo { animation: hanging-sway-4 8s ease-in-out infinite; }
//         .rope-5 .hanging-photo { animation: hanging-sway-5 6.5s ease-in-out infinite; }
//         .rope-6 .hanging-photo { animation: hanging-sway-6 7.5s ease-in-out infinite; }

//         @keyframes hanging-sway-1 {
//           0%, 100% { transform: translateX(-50%) rotate(-3deg); }
//           50% { transform: translateX(-50%) rotate(0deg); }
//         }

//         @keyframes hanging-sway-2 {
//           0%, 100% { transform: translateX(-50%) rotate(2deg); }
//           50% { transform: translateX(-50%) rotate(-1deg); }
//         }

//         @keyframes hanging-sway-3 {
//           0%, 100% { transform: translateX(-50%) rotate(-2deg); }
//           50% { transform: translateX(-50%) rotate(1deg); }
//         }

//         @keyframes hanging-sway-4 {
//           0%, 100% { transform: translateX(-50%) rotate(3deg); }
//           50% { transform: translateX(-50%) rotate(-1deg); }
//         }

//         @keyframes hanging-sway-5 {
//           0%, 100% { transform: translateX(-50%) rotate(-3deg); }
//           50% { transform: translateX(-50%) rotate(1deg); }
//         }

//         @keyframes hanging-sway-6 {
//           0%, 100% { transform: translateX(-50%) rotate(2deg); }
//           50% { transform: translateX(-50%) rotate(-1deg); }
//         }

//         /* Small dangling vines */
//         .dangling-vine {
//           position: absolute;
//           z-index: 12;
//           width: 3px;
//           background: #637b51;
//           border-radius: 50%;
//         }

//         .dangling-vine span,
//         .dangling-vine i,
//         .dangling-vine b {
//           position: absolute;
//           width: 22px;
//           height: 11px;
//           border-radius: 100% 0 100% 0;
//           background: #6d8559;
//           display: block;
//         }

//         .dangling-vine span {
//           top: 45px;
//           left: -17px;
//           transform: rotate(-35deg);
//         }

//         .dangling-vine i {
//           top: 85px;
//           left: 2px;
//           transform: rotate(35deg);
//         }

//         .dangling-vine b {
//           top: 125px;
//           left: -17px;
//           transform: rotate(-35deg);
//         }

//         .dangling-vine-1 {
//           top: 10%;
//           left: 17%;
//           height: 150px;
//           transform: rotate(5deg);
//         }

//         .dangling-vine-2 {
//           top: 10%;
//           right: 18%;
//           height: 175px;
//           transform: rotate(-5deg);
//         }

//         .cinema-footer {
//           position: absolute;
//           z-index: 30;
//           bottom: 30px;
//           left: 8%;
//           font-family: var(--font-mono), monospace;
//           font-size: 9px;
//           letter-spacing: .2em;
//           color: #65594c;
//         }

//         /* Responsive */
//         @media (max-width: 800px) {
//           .cinema {
//             min-height: 900px;
//           }

//           .cinema-copy {
//             top: 11%;
//             left: 7%;
//           }

//           .cinema-copy h2 {
//             font-size: clamp(3.5rem, 15vw, 6rem);
//           }

//           .cinema-copy p {
//             font-size: 13px;
//           }

//           .wooden-danda {
//             top: 29%;
//             left: 3%;
//             right: 3%;
//             height: 18px;
//           }

//           .vine-left {
//             top: 24%;
//             left: -10%;
//             width: 300px;
//             height: 130px;
//           }

//           .vine-right {
//             top: 24%;
//             right: -15%;
//             width: 320px;
//             height: 130px;
//           }

//           .hanging-photo {
//             width: 110px;
//             padding: 6px;
//           }

//           .hanging-rope {
//             top: 29%;
//           }

//           .rope-1 { left: 8% !important; }
//           .rope-2 { left: 25% !important; }
//           .rope-3 { left: 42% !important; }
//           .rope-4 { left: 59% !important; }
//           .rope-5 { left: 76% !important; }
//           .rope-6 { left: 92% !important; }

//           .photo-number {
//             font-size: 7px;
//           }

//           .cinema-footer {
//             left: 7%;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .hanging-photo {
//             animation: none !important;
//           }
//         }

// /* =================================================
//            SECTION HEADINGS
//         ================================================= */

//         .section-heading {
//           display:
//             grid;

//           grid-template-columns:
//             1.2fr .8fr;

//           gap:
//             80px;

//           align-items:
//             end;

//           margin:
//             55px 0 90px;
//         }

//         .section-heading h2 {
//           margin:
//             0;

//           font-size:
//             clamp(
//               4rem,
//               8vw,
//               8rem
//             );

//           line-height:
//             .84;

//           letter-spacing:
//             -.065em;
//         }

//         .section-heading h2 em {
//           font-family:
//             Georgia,
//             serif;

//           font-weight:
//             400;

//           color:
//             #75695c;
//         }

//         .section-heading p {
//           max-width:
//             340px;

//           margin:
//             0 0 8px;

//           color:
//             #6e6255;

//           line-height:
//             1.7;
//         }

//         /* =================================================
//            DAYS
//         ================================================= */

//         .days-layout {
//           display:
//             grid;

//           grid-template-columns:
//             .7fr 1.4fr .7fr;

//           gap:
//             34px;

//           align-items:
//             center;
//         }

//         .day-list {
//           border-top:
//             1px solid
//             rgba(54,43,33,.2);
//         }

//         .day-list button {
//           width:
//             100%;

//           display:
//             grid;

//           grid-template-columns:
//             40px 1fr 20px;

//           gap:
//             12px;

//           padding:
//             24px 0;

//           border:
//             0;

//           border-bottom:
//             1px solid
//             rgba(54,43,33,.2);

//           background:
//             transparent;

//           color:
//             #776b5e;

//           text-align:
//             left;

//           cursor:
//             pointer;
//         }

//         .day-list button span,
//         .day-list button i {
//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size:
//             9px;
//         }

//         .day-list button strong {
//           font-size:
//             18px;
//         }

//         .day-list button.selected {
//           color:
//             #9f3c30;
//         }

//         .day-image {
//           position:
//             relative;

//           height:
//             580px;
//         }

//         .day-image .image {
//           height:
//             100%;
//         }

//         .day-image > div:last-child {
//           position:
//             absolute;

//           left:
//             30px;

//           bottom:
//             30px;

//           display:
//             flex;

//           flex-direction:
//             column;

//           color:
//             white;

//           text-shadow:
//             0 3px 20px
//             rgba(0,0,0,.35);
//         }

//         .day-image > div:last-child span {
//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size:
//             9px;
//         }

//         .day-image > div:last-child strong {
//           font-size:
//             32px;
//         }

//         .day-text span {
//           color:
//             #9f3c30;

//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size:
//             9px;

//           letter-spacing:
//             .18em;
//         }

//         .day-text h3 {
//           font-size:
//             32px;

//           line-height:
//             1;

//           margin:
//             18px 0;
//         }

//         .day-text p {
//           color:
//             #6e6255;

//           line-height:
//             1.7;
//         }

//         /* =================================================
//            HOTELS
//         ================================================= */

//         .hotel-grid {
//           display:
//             grid;

//           grid-template-columns:
//             1.1fr .8fr 1fr;

//           gap:
//             28px;

//           align-items:
//             start;
//         }

//         .hotel.second {
//           margin-top:
//             90px;
//         }

//         .hotel .image {
//           height:
//             480px;
//         }

//         .hotel.second .image {
//           height:
//             400px;
//         }

//         .hotel-meta {
//           display:
//             flex;

//           justify-content:
//             space-between;

//           margin-top:
//             18px;

//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size:
//             8px;

//           letter-spacing:
//             .16em;

//           color:
//             #76695c;
//         }

//         .hotel h3 {
//           max-width:
//             280px;

//           margin:
//             18px 0;

//           font-size:
//             28px;

//           line-height:
//             1;
//         }

//         .hotel-line {
//           height:
//             1px;

//           background:
//             rgba(54,43,33,.18);
//         }

//         .hotel-link {
//           display:
//             block;

//           margin-top:
//             12px;

//           font-family:
//             var(--font-mono),
//             monospace;

//           font-size:
//             8px;

//           letter-spacing:
//             .16em;
//         }

//         /* =================================================
//            FOOD — JAPANESE EDITORIAL JOURNAL
//         ================================================= */

//         .food {
//           position: relative;

//           min-height: 100vh;

//           overflow: hidden;

//           padding: 150px 0 100px;

//           color: #302821;

//           background: #e6dccb;
//         }

//         .food-paper {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;

//           background:
//             radial-gradient(
//               ellipse at 18% 18%,
//               rgba(255,255,255,.58),
//               transparent 34%
//             ),
//             radial-gradient(
//               ellipse at 82% 70%,
//               rgba(96,67,43,.08),
//               transparent 40%
//             ),
//             repeating-linear-gradient(
//               4deg,
//               transparent 0,
//               transparent 7px,
//               rgba(66,47,32,.025) 8px,
//               transparent 11px
//             );
//         }

//         .food::before {
//           content: "";
//           position: absolute;
//           inset: 24px;
//           border: 1px solid rgba(65,48,34,.15);
//           pointer-events: none;
//         }

//         .food-inner {
//           position: relative;
//           width: min(1180px, calc(100% - 64px));
//           min-height: 720px;
//           margin: auto;
//         }

//         .food-header {
//           position: relative;
//           z-index: 20;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .food-header-meta {
//           display: flex;
//           align-items: center;
//           gap: 25px;
//           font-family: var(--font-mono), monospace;
//           font-size: 7px;
//           letter-spacing: .18em;
//           color: #75695c;
//         }

//         .food-title {
//           position: absolute;
//           z-index: 8;
//           left: 0;
//           top: 105px;
//         }

//         .food-title h2 {
//           position: relative;
//           margin: 0;
//           font-size: clamp(5rem, 10vw, 10rem);
//           line-height: .76;
//           letter-spacing: -.075em;
//           color: #302821;
//         }

//         .food-title h2 em {
//           font-family: Georgia, "Times New Roman", serif;
//           font-weight: 400;
//           color: #75695c;
//         }

//         .food-title p {
//           margin-top: 35px;
//           font-size: 14px;
//           line-height: 1.7;
//           color: #75695c;
//         }

//         .food-jp-title {
//           position: absolute;
//           left: -25px;
//           top: -70px;
//           z-index: -1;
//           font-family: "Noto Serif JP", serif;
//           font-size: 150px;
//           line-height: 1;
//           color: rgba(159,60,48,.08);
//           pointer-events: none;
//         }

//         .food-photo-wrap {
//           position: absolute;
//           z-index: 5;
//           left: 30%;
//           top: 105px;
//           width: 390px;
//           transform-origin: center center;
//         }

//         .food-photo {
//           position: relative;
//           width: 100%;
//           height: 480px;
//           padding: 10px;
//           overflow: hidden;
//           background: #f7f2e9;
//           box-shadow: 0 30px 70px rgba(55,39,25,.18);
//         }

//         .food-photo .image {
//           width: 100%;
//           height: 100%;
//         }

//         .food-photo img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           filter: saturate(.86) contrast(.96);
//         }

//         .food-photo-overlay {
//           position: absolute;
//           inset: 10px;
//           pointer-events: none;
//           background: linear-gradient(
//             145deg,
//             rgba(255,255,255,.08),
//             transparent 45%,
//             rgba(54,38,26,.08)
//           );
//           mix-blend-mode: multiply;
//         }

//         .food-photo-caption {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 9px 4px 2px;
//           font-family: var(--font-mono), monospace;
//           font-size: 6px;
//           letter-spacing: .17em;
//           color: #75695c;
//         }

//         .food-stamp {
//           position: absolute;
//           z-index: 30;
//           left: 57%;
//           top: 75px;
//           width: 82px;
//           height: 82px;
//           display: grid;
//           place-items: center;
//           border: 2px solid rgba(150,56,46,.65);
//           border-radius: 50%;
//           color: #96382e;
//           background: rgba(235,222,203,.72);
//           font-family: "Noto Serif JP", serif;
//         }

//         .food-stamp::before {
//           content: "";
//           position: absolute;
//           inset: 6px;
//           border: 1px solid rgba(150,56,46,.35);
//           border-radius: 50%;
//         }

//         .food-stamp span {
//           font-size: 27px;
//           line-height: 1;
//         }

//         .food-stamp small {
//           position: absolute;
//           bottom: 13px;
//           font-family: var(--font-mono), monospace;
//           font-size: 5px;
//           line-height: 1.1;
//           letter-spacing: .13em;
//           text-align: center;
//         }

//         .food-menu {
//           position: absolute;
//           z-index: 15;
//           right: 0;
//           top: 155px;
//           width: 350px;
//         }

//         .food-menu-label {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           margin-bottom: 10px;
//           font-family: var(--font-mono), monospace;
//           font-size: 7px;
//           letter-spacing: .2em;
//           color: #8a7b69;
//         }

//         .food-menu-label span:first-child {
//           color: #9f3c30;
//         }

//         .food-item {
//           position: relative;
//           width: 100%;
//           display: grid;
//           grid-template-columns: 35px 42px 1fr 30px;
//           align-items: center;
//           gap: 8px;
//           padding: 20px 0;
//           border: 0;
//           border-bottom: 1px solid rgba(65,48,34,.18);
//           background: transparent;
//           color: #75695c;
//           text-align: left;
//           cursor: pointer;
//           transition: color .3s ease;
//         }

//         .food-item-number {
//           font-family: var(--font-mono), monospace;
//           font-size: 7px;
//           color: #9b8b79;
//         }

//         .food-item-jp {
//           font-family: "Noto Serif JP", serif;
//           font-size: 18px;
//         }

//         .food-item strong {
//           font-size: 18px;
//           font-weight: 500;
//           letter-spacing: -.02em;
//         }

//         .food-item i {
//           width: 27px;
//           height: 27px;
//           display: grid;
//           place-items: center;
//           border: 1px solid rgba(65,48,34,.18);
//           border-radius: 50%;
//           font-family: var(--font-mono), monospace;
//           font-size: 9px;
//           font-style: normal;
//           color: #96382e;
//           transition: background .3s ease, color .3s ease;
//         }

//         .food-item.active {
//           color: #96382e;
//         }

//         .food-item.active i {
//           color: #f5ecdf;
//           background: #96382e;
//           border-color: #96382e;
//         }

//         .food-item-line {
//           position: absolute;
//           left: 0;
//           bottom: -1px;
//           width: 100%;
//           height: 2px;
//           background: #96382e;
//           transform-origin: left;
//         }

//         .food-info {
//           position: absolute;
//           z-index: 10;
//           left: 31%;
//           bottom: 45px;
//           width: 230px;
//           padding-left: 16px;
//           border-left: 1px solid #96382e;
//         }

//         .food-info span {
//           display: block;
//           font-family: "Noto Serif JP", serif;
//           font-size: 18px;
//           color: #96382e;
//         }

//         .food-info strong {
//           display: block;
//           margin-top: 4px;
//           font-family: var(--font-mono), monospace;
//           font-size: 10px;
//           letter-spacing: .15em;
//         }

//         .food-info p {
//           margin: 10px 0 0;
//           font-size: 11px;
//           line-height: 1.6;
//           color: #75695c;
//         }

//         .food-brush {
//           position: absolute;
//           right: 8%;
//           bottom: 20%;
//           width: 100px;
//           height: 90px;
//           opacity: .14;
//           transform: rotate(-12deg);
//         }

//         .food-brush span {
//           position: absolute;
//           display: block;
//           height: 3px;
//           border-radius: 100%;
//           background: #40352c;
//           transform-origin: left center;
//         }

//         .food-brush span:nth-child(1) {
//           width: 85px;
//           top: 15px;
//           left: 5px;
//           transform: rotate(18deg);
//         }

//         .food-brush span:nth-child(2) {
//           width: 70px;
//           top: 39px;
//           left: 12px;
//           transform: rotate(-13deg);
//         }

//         .food-brush span:nth-child(3) {
//           width: 55px;
//           top: 62px;
//           left: 20px;
//           transform: rotate(21deg);
//         }

//         .food-character {
//           position: absolute;
//           right: 4%;
//           top: 34%;
//           font-family: "Noto Serif JP", serif;
//           font-size: 85px;
//           color: rgba(48,40,33,.055);
//           transform: rotate(8deg);
//           user-select: none;
//         }

//         .food-footer {
//           position: absolute;
//           left: 0;
//           right: 0;
//           bottom: 5px;
//           display: flex;
//           justify-content: space-between;
//           font-family: var(--font-mono), monospace;
//           font-size: 7px;
//           letter-spacing: .18em;
//           color: #75695c;
//         }

//         /* =================================================
//            TIPS
//         ================================================= */

//         .tips-grid {
//           display:
//             grid;

//           grid-template-columns:
//             repeat(2,1fr);

//           border-top:
//             1px solid
//             rgba(54,43,33,.2);

//           border-left:
//             1px solid
//             rgba(54,43,33,.2);
//         }

//         .tips-grid article {
//           position: relative;

//           min-height:
//             230px;

//           display:
//             grid;

//           grid-template-columns:
//             45px 1fr 20px;

//           gap:
//             20px;

//           padding:
//             32px;

//           border-right:
//             1px solid
//             rgba(54,43,33,.2);

//           border-bottom:
//             1px solid
//             rgba(54,43,33,.2);

//           overflow: visible;

//           cursor: pointer;
//         }

//         .tip-hover-thumb {
//           position: absolute;
//           z-index: 50;
//           top: 20px;
//           right: 35px;
//           width: 125px;
//           height: 125px;
//           padding: 6px;
//           background: #f5eee3;
//           border-radius: 8px;
//           box-shadow: 0 16px 36px rgba(45,30,18,.25);
//           pointer-events: none;
//         }

//         .tip-hover-thumb img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//             font-size:
//               11px;

//             letter-spacing:
//               .14em;
//           }

//           .days-layout {
//             grid-template-columns:
//               .7fr 1.4fr;
//           }

//           .day-text {
//             grid-column:
//               2;
//           }

//           .hotel-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .hotel.second {
//             margin-top:
//               0;
//           }

//           .hotel:last-child {
//             grid-column:
//               1 / -1;

//             max-width:
//               50%;
//           }
//         }

//         @media (max-width: 760px) {

//           .container {
//             width:
//               calc(100% - 40px);
//           }

//           .navbar {
//             top:
//               8px;

//             left:
//               8px;

//             right:
//               8px;

//             height:
//               58px;

//             overflow-x:
//               auto;

//             scrollbar-width:
//               none;
//           }

//           .navbar::-webkit-scrollbar {
//             display:
//               none;
//           }

//           .navbar nav {
//             width:
//               max-content;

//             min-width:
//               100%;

//             justify-content:
//               flex-start;
//           }

//           .nav-item {
//             padding:
//               0 14px;

//             font-size:
//               10px;
//           }

//           .nav-sun,
//           .nav-mountain,
//           .nav-stamp {
//             display:
//               none;
//           }

//           .hero-copy {
//             width:
//               calc(100% - 40px);
//           }

//           .hero h1 {
//             font-size:
//               clamp(
//                 5rem,
//                 25vw,
//                 9rem
//               );
//           }

//           .hero-sun {
//             width:
//               170px;

//             height:
//               170px;

//             right:
//               -30px;
//           }

//           .hero-footer span:first-child,
//           .hero-footer span:nth-child(2) {
//             display:
//               none;
//           }

//           .hero-footer {
//             justify-content:
//               flex-end;
//           }

//           .section {
//             padding:
//               110px 0;
//           }

//           .section-heading {
//             grid-template-columns:
//               1fr;

//             gap:
//               30px;

//             margin-bottom:
//               60px;
//           }

//           .section-heading h2 {
//             font-size:
//               clamp(
//                 3.5rem,
//                 17vw,
//                 6rem
//               );
//           }

//           .days-layout {
//             grid-template-columns:
//               1fr;
//           }

//           .day-image {
//             height:
//               470px;
//           }

//           .hotel-grid {
//             grid-template-columns:
//               1fr;
//           }

//           .hotel:last-child {
//             max-width:
//               none;
//           }

//           /* FOOD */
//           .food {
//             min-height: auto;
//             padding: 110px 0 70px;
//           }

//           .food::before {
//             inset: 12px;
//           }

//           .food-inner {
//             width: calc(100% - 40px);
//             min-height: 1120px;
//           }

//           .food-header-meta {
//             display: none;
//           }

//           .food-title {
//             position: relative;
//             top: auto;
//             left: auto;
//             margin-top: 70px;
//           }

//           .food-title h2 {
//             font-size: clamp(5rem, 23vw, 8rem);
//           }

//           .food-jp-title {
//             left: -10px;
//             top: -45px;
//             font-size: 100px;
//           }

//           .food-photo-wrap {
//             position: relative;
//             left: auto;
//             top: auto;
//             width: min(86%, 380px);
//             margin: 60px auto 0;
//           }

//           .food-photo {
//             height: 420px;
//           }

//           .food-stamp {
//             top: 405px;
//             right: 3%;
//             left: auto;
//           }

//           .food-menu {
//             position: relative;
//             right: auto;
//             top: auto;
//             width: 100%;
//             margin-top: 65px;
//           }

//           .food-item {
//             grid-template-columns: 32px 40px 1fr 28px;
//             padding: 18px 0;
//           }

//           .food-item strong {
//             font-size: 16px;
//           }

//           .food-info {
//             position: relative;
//             left: auto;
//             bottom: auto;
//             width: 80%;
//             margin-top: 45px;
//           }

//           .food-character {
//             right: 5%;
//             top: 42%;
//             font-size: 65px;
//           }

//           .food-brush {
//             display: none;
//           }

//           .food-footer {
//             bottom: 0;
//           }

//           .tips-grid {
//             grid-template-columns:
//               1fr;
//           }

//           .pack {
//             padding:
//               70px 20px;
//           }

//           .pack-paper {
//             padding:
//               55px 25px;
//           }

//           .pack-layout {
//             grid-template-columns:
//               1fr;
//           }

//           .foliage-content {
//             width:
//               calc(100% - 40px);

//             padding-top:
//               100px;
//           }

//           .season-copy {
//             margin-top:
//               100px;
//           }

//           .season-tabs {
//             left:
//               0;

//             right:
//               auto;

//             bottom:
//               45px;

//             max-width:
//               100%;

//             overflow-x:
//               auto;
//           }

//           .visa-row {
//             grid-template-columns:
//               40px 1fr 25px;
//           }

//           .visa-row p {
//             grid-column:
//               2 / -1;
//           }

//           .budget {
//             padding:
//               110px 20px;
//           }

//           .budget-row {
//             grid-template-columns:
//               35px 1fr;

//             gap:
//               10px;
//           }

//           .budget-row i {
//             display:
//               none;
//           }

//           .budget-row b {
//             grid-column:
//               2;

//             text-align:
//               left;

//             color:
//               #bbaea0;
//           }

//           .budget-total strong {
//             font-size:
//               30px;
//           }

//           .footer {
//             min-height:
//               60vh;
//           }
//         }

//       `}</style>
//     </main>
//   );
// }
"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const NAV = [
  ["TOP", "#top", "旅"],
  ["CINEMA", "#cinema", "映"],
  ["DAYS", "#days", "日"],
  ["HOTELS", "#hotels", "宿"],
  ["FOOD", "#food", "食"],
  ["TIPS", "#tips", "知"],
  ["PACK", "#pack", "荷"],
  ["FOLIAGE", "#foliage", "森"],
  ["VISA", "#visa", "印"],
  ["BUDGET", "#budget", "円"],
];

const DAYS = [
  {
    day: "01",
    city: "TOKYO",
    title: "The city that never stops.",
    text: "Start with the energy of Tokyo — quiet shrines in the morning, tiny alleys at night and everything between.",
    image: "/images/japan/tokyo.jpg",
  },
  {
    day: "02",
    city: "KYOTO",
    title: "Slow down. Look closer.",
    text: "Traditional streets, temple gardens and the quieter side of Japan. Kyoto is where the pace changes.",
    image: "/images/japan/kyoto.jpg",
  },
  {
    day: "03",
    city: "OSAKA",
    title: "Eat your way through it.",
    text: "Neon streets, local markets and food stops that deserve their own itinerary.",
    image: "/images/japan/osaka.jpg",
  },
];

const HOTELS = [
  {
    city: "TOKYO",
    type: "DESIGN HOTEL",
    title: "A quiet room above the city.",
    image: "/images/japan/hotel-tokyo.jpg",
  },
  {
    city: "KYOTO",
    type: "RYOKAN",
    title: "Traditional nights, slower mornings.",
    image: "/images/japan/hotel-kyoto.jpg",
  },
  {
    city: "OSAKA",
    type: "CITY STAY",
    title: "Stay central. Walk everywhere.",
    image: "/images/japan/hotel-osaka.jpg",
  },
];

const FOODS = [
  ["RAMEN", "ラーメン", "/images/pexels-markus-winkler-1430818-19902239.jpg"],
  ["SUSHI", "寿司", "/images/pexels-o-dodo-2154460908-34088054.jpg"],
  ["YAKINIKU", "焼肉", "/images/pexels-leongsan-35132140.jpg"],
  ["SWEETS", "甘味", "/images/pexels-julias-torten-und-tortchen-434418-19021559.jpg"],
  ["MATCHA", "抹茶", "/images/pexels-bertellifotografia-13869852.jpg"],
];

const TIP_KANJI = [
  "交",
  "鉄",
  "円",
  "信",
  "礼",
  "荷",
];

// 交 transit · 鉄 rail · 円 yen · 信 signal · 礼 manners · 荷 luggage

const FIELD_TIPS = [
  {
    number: "01",
    tag: "LOGISTICS",
    title: "IC CARDS & SUICA",
    text: "Use a digital IC card (Suica or Pasmo) for seamless transit on trains, subways, buses, vending machines and convenience stores.",
    proTip: "Add Suica directly to Apple Wallet / Google Pay before landing — tap in & out instantly without physical cards or buying tickets.",
    image: "/images/japan/tokyo.jpg",
  },
  {
    number: "02",
    tag: "TRANSIT",
    title: "TRAIN ROUTE EFFICIENCY",
    text: "Build your daily itinerary around specific train lines (like Tokyo's Yamanote loop) rather than crossing the city repeatedly.",
    proTip: "Rush hours are 7:30-9:00 AM & 5:30-7:00 PM — travel with light daypacks during peak commuter hours.",
    image: "/images/japan/osaka.jpg",
  },
  {
    number: "03",
    tag: "CURRENCY",
    title: "CASH & YEN MANAGEMENT",
    text: "While 80%+ of urban shops accept credit cards, small ramen bars, temple stalls, and rural buses strictly require physical Yen.",
    proTip: "7-Bank ATMs inside 7-Eleven accept international debit cards with low fees and 24/7 reliability.",
    image: "/images/japan/kyoto.jpg",
  },
  {
    number: "04",
    tag: "CONNECTIVITY",
    title: "eSIM & HIGH-SPEED DATA",
    text: "A reliable eSIM or Pocket WiFi is essential. Navigation apps provide real-time train car numbers and exact platform transfers.",
    proTip: "Google Maps and Navitime indicate exact station exit numbers (e.g. Exit 4B) to minimize walking inside huge stations.",
    image: "/images/japan/cinema-1.jpg",
  },
  {
    number: "05",
    tag: "ETIQUETTE",
    title: "LOCAL MANNERS",
    text: "Keep phone calls off train cars, walk on the designated side of escalators, and avoid walking while eating street food.",
    proTip: "Public trash bins are rare — carry a small trash bag in your daypack for convenience.",
    image: "/images/japan/hotel-kyoto.jpg",
  },
  {
    number: "06",
    tag: "LUGGAGE",
    title: "TAKKYUBIN FORWARDING",
    text: "Forward heavy luggage between cities (e.g. Tokyo to Kyoto) using hotel front-desk luggage forwarding services.",
    proTip: "Cost is ~¥2,000 per bag for next-day delivery — travel light on bullet trains without bulky bags.",
    image: "/images/japan/spring.jpg",
  },
];

const PACK = [
  "Walking shoes",
  "Light jacket",
  "Universal adapter",
  "Power bank",
  "Travel documents",
  "Compact umbrella",
];

const SEASONS = [
  {
    name: "SPRING",
    jp: "春",
    title: "Cherry blossom season.",
    text: "Soft pink streets, cool mornings and one of the most visually striking times to travel through Japan.",
    image: "/images/pexels-le-thanh-huyen-1056408622-34420369.jpg",
  },
  {
    name: "SUMMER",
    jp: "夏",
    title: "Green mountains & long days.",
    text: "Warm weather, festivals, mountain escapes and a much greener side of the country.",
    image: "/images/pexels-marianne-tang-1019062-4087897.jpg",
  },
  {
    name: "AUTUMN",
    jp: "秋",
    title: "Red, gold and quiet.",
    text: "Cooler air, deep colors and some of Japan's most beautiful landscapes.",
    image: "/images/pexels-marianne-tang-1019062-4094519.jpg",
  },
  {
    name: "WINTER",
    jp: "冬",
    title: "Snow Japan.",
    text: "Snow-covered towns, winter food and mountain landscapes create another Japan.",
    image: "/images/pexels-sristi-saha-661973020-17727740.jpg",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Label({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="label">
      <span>{number}</span>
      <i />
      <strong>{children}</strong>
    </div>
  );
}

function Image({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div className="image">
      <img src={src} alt={alt} />
      <div className="image-noise" />
    </div>
  );
}

/* =========================================================
   JAPAN NAVBAR
========================================================= */

function JapanNavbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
      {/* Brand */}
      <a href="#top" className="nav-brand">
        <span className="nav-brand-kanji">旅</span>
        <span className="nav-brand-text">JAPAN</span>
      </a>

      {/* Nav links */}
      <nav>
        {NAV.slice(1).map(([label, href, kanji]) => {
          const active = hovered === label;
          return (
            <a
              key={label}
              href={href}
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
              className={active ? "nav-item active" : "nav-item"}
            >
              <span className="nav-label">{label}</span>
              <motion.span
                className="nav-kanji"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: active ? 1 : 0, y: active ? 0 : 4 }}
                transition={{ duration: 0.2 }}
              >
                {kanji}
              </motion.span>
              <motion.span
                className="nav-underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: active ? 1 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              />
            </a>
          );
        })}
      </nav>

      {/* Right action */}
      <a href="/#destinations" className="nav-back">
        <span>←</span>
        <span>BACK</span>
      </a>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-paper" />

      <div className="hero-copy">
        <Label number="00">
          JAPAN TRAVEL JOURNAL
        </Label>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          JAPAN
          <em>旅</em>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
        >
          A visual travel journal through
          <br />
          Japan — one place, one meal,
          <br />
          one memory at a time.
        </motion.p>

        <a href="#cinema" className="hero-link">
          START THE JOURNEY ↓
        </a>
      </div>

      <div className="hero-sun">
        <span>日本</span>
      </div>

      <div className="hero-mountains">
        <svg viewBox="0 0 1200 500">
          <path
            d="
              M0 430
              L130 350
              L220 390
              L400 210
              L560 360
              L710 180
              L900 350
              L1050 250
              L1200 370
              V500 H0Z
            "
          />
        </svg>
      </div>

      <div className="hero-side">
        旅の記憶
      </div>

      <div className="hero-footer">
        <span>35° 41′ N</span>
        <span>139° 41′ E</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

/* =========================================================
   CINEMA
========================================================= */

function Cinema() {
  const images = [
    "/images/japan/cinema-1.jpg",
    "/images/japan/cinema-2.jpg",
    "/images/japan/cinema-3.jpg",
    "/images/japan/cinema-4.jpg",
    "/images/japan/cinema-5.jpg",
    "/images/japan/cinema-6.jpg",
  ];

  const ropes = [
    { x: "9%", height: "48%", rotate: "-3deg" },
    { x: "25%", height: "63%", rotate: "2deg" },
    { x: "42%", height: "44%", rotate: "-2deg" },
    { x: "59%", height: "67%", rotate: "3deg" },
    { x: "76%", height: "51%", rotate: "-3deg" },
    { x: "91%", height: "63%", rotate: "2deg" },
  ];

  return (
    <section className="cinema" id="cinema">
      <div className="cinema-copy">
        <Label number="01">
          CINEMA
        </Label>

        <h2>
          Japan,
          <br />
          <em>in motion.</em>
        </h2>

        <p>
          A moving archive of places,
          <br />
          people and moments from
          <br />
          the road.
        </p>
      </div>

      <div className="cinema-wall">
        {/* Wooden danda */}
        <div className="wooden-danda">
          <div className="wood-grain" />
        </div>

        {/* Vines / leaves */}
        <div className="vine vine-left">
          <svg viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M10 20 C80 0 100 80 150 45 C210 5 220 120 300 75 C340 50 365 90 395 55"
              className="vine-stem"
            />
            <ellipse cx="55" cy="28" rx="18" ry="8" transform="rotate(35 55 28)" />
            <ellipse cx="88" cy="65" rx="20" ry="9" transform="rotate(-35 88 65)" />
            <ellipse cx="125" cy="47" rx="18" ry="8" transform="rotate(35 125 47)" />
            <ellipse cx="165" cy="35" rx="21" ry="9" transform="rotate(-25 165 35)" />
            <ellipse cx="205" cy="86" rx="19" ry="8" transform="rotate(35 205 86)" />
            <ellipse cx="245" cy="77" rx="21" ry="9" transform="rotate(-30 245 77)" />
            <ellipse cx="292" cy="72" rx="19" ry="8" transform="rotate(35 292 72)" />
            <ellipse cx="340" cy="68" rx="21" ry="9" transform="rotate(-25 340 68)" />
          </svg>
        </div>

        <div className="vine vine-right">
          <svg viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M5 80 C70 120 95 35 150 70 C210 110 225 20 285 55 C330 80 350 35 400 20"
              className="vine-stem"
            />
            <ellipse cx="45" cy="88" rx="19" ry="8" transform="rotate(-30 45 88)" />
            <ellipse cx="85" cy="70" rx="21" ry="9" transform="rotate(30 85 70)" />
            <ellipse cx="135" cy="70" rx="18" ry="8" transform="rotate(-30 135 70)" />
            <ellipse cx="180" cy="83" rx="21" ry="9" transform="rotate(35 180 83)" />
            <ellipse cx="225" cy="52" rx="18" ry="8" transform="rotate(-25 225 52)" />
            <ellipse cx="275" cy="52" rx="21" ry="9" transform="rotate(30 275 52)" />
            <ellipse cx="330" cy="53" rx="19" ry="8" transform="rotate(-30 330 53)" />
            <ellipse cx="375" cy="30" rx="21" ry="9" transform="rotate(30 375 30)" />
          </svg>
        </div>

        {/* Hanging ropes + photographs */}
        <div className="hanging-ropes">
          {ropes.map((rope, index) => (
            <div
              key={`${rope.x}-${index}`}
              className={`hanging-rope rope-${index + 1}`}
              style={
                {
                  "--rope-x": rope.x,
                  "--rope-height": rope.height,
                } as CSSProperties
              }
            >
              <div className="rope-string" />

              <div
                className="hanging-photo"
                style={{ "--card-rotate": rope.rotate } as CSSProperties}
              >
                <div className="photo-pin" />
                <img src={images[index]} alt="" />
                <span className="photo-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Small dangling vines */}
        <div className="dangling-vine dangling-vine-1">
          <span />
          <i />
          <b />
        </div>

        <div className="dangling-vine dangling-vine-2">
          <span />
          <i />
          <b />
        </div>
      </div>

      <div className="cinema-footer">
        SCROLL / WATCH / REMEMBER
      </div>
    </section>
  );
}

/* =========================================================
   DAYS
========================================================= */

function Days() {
  const [active, setActive] =
    useState(0);

  const day = DAYS[active];

  return (
    <section className="days section" id="days">
      <div className="container">
        <Label number="02">
          DAYS
        </Label>

        <div className="section-heading">
          <h2>
            Days worth
            <br />
            <em>remembering.</em>
          </h2>

          <p>
            Don&apos;t try to see everything.
            Build a route that gives each
            place enough time to become
            a memory.
          </p>
        </div>

        <div className="days-layout">
          <div className="day-list">
            {DAYS.map((item, index) => (
              <button
                key={item.day}
                onMouseEnter={() =>
                  setActive(index)
                }
                onClick={() =>
                  setActive(index)
                }
                className={
                  active === index
                    ? "selected"
                    : ""
                }
              >
                <span>{item.day}</span>
                <strong>{item.city}</strong>
                <i>↗</i>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={day.day}
              className="day-image"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
              }}
            >
              <Image
                src={day.image}
                alt={day.city}
              />

              <div>
                <span>{day.day}</span>
                <strong>{day.city}</strong>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${day.day}-text`}
              className="day-text"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
            >
              <span>{day.city}</span>
              <h3>{day.title}</h3>
              <p>{day.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOTELS
========================================================= */

function Hotels() {
  return (
    <section
      className="hotels section alt"
      id="hotels"
    >
      <div className="container">
        <Label number="03">
          HOTELS
        </Label>

        <div className="section-heading">
          <h2>
            Stay
            <br />
            <em>somewhere memorable.</em>
          </h2>

          <p>
            Location, atmosphere and whether
            a place actually makes the trip
            easier.
          </p>
        </div>

        <div className="hotel-grid">
          {HOTELS.map((hotel, index) => (
            <motion.article
              key={hotel.city}
              className={
                index === 1
                  ? "hotel second"
                  : "hotel"
              }
              whileHover={{
                y: -10,
              }}
            >
              <Image
                src={hotel.image}
                alt={hotel.title}
              />

              <div className="hotel-meta">
                <span>{hotel.city}</span>
                <span>{hotel.type}</span>
              </div>

              <h3>{hotel.title}</h3>

              <div className="hotel-line" />

              <span className="hotel-link">
                VIEW STAY ↗
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOD — JAPANESE EDITORIAL JOURNAL
========================================================= */

function Food() {
  const [active, setActive] = useState(0);
  const food = FOODS[active];

  return (
    <section className="food" id="food">
      <div className="food-paper" />

      <div className="food-inner">
        {/* HEADER */}
        <div className="food-header">
          <Label number="04">
            FOOD JOURNAL
          </Label>

          <div className="food-header-meta">
            <span>食 / EAT</span>
            <span>JAPAN / 2026</span>
          </div>
        </div>

        {/* TITLE */}
        <motion.div
          className="food-title"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="food-jp-title">食</span>

          <h2>
            Eat
            <br />
            <em>Japan.</em>
          </h2>

          <p>
            The dishes worth
            <br />
            making room for.
          </p>
        </motion.div>

        {/* MAIN FOOD IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={food[0]}
            className="food-photo-wrap"
            initial={{
              opacity: 0,
              scale: 0.94,
              rotate: -5,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -2,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1.04,
              rotate: 2,
              y: -10,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="food-photo">
              <Image
                src={food[2]}
                alt={food[0]}
              />
              <div className="food-photo-overlay" />
            </div>

            <div className="food-photo-caption">
              <span>
                {String(active + 1).padStart(2, "0")}
              </span>
              <span>JAPAN / FOOD</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RED JAPANESE STAMP */}
        <motion.div
          className="food-stamp"
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -15,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: active % 2 === 0 ? -7 : 5,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>食</span>
          <small>
            GOOD
            <br />
            EATS
          </small>
        </motion.div>

        {/* MENU */}
        <div className="food-menu">
          <div className="food-menu-label">
            <span>01</span>
            <span>WHAT TO EAT</span>
          </div>

          {FOODS.map(([name, jp], index) => {
            const isActive = active === index;

            return (
              <motion.button
                key={name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={
                  isActive
                    ? "food-item active"
                    : "food-item"
                }
                animate={{
                  x: isActive ? 12 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="food-item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="food-item-jp">
                  {jp}
                </span>

                <strong>{name}</strong>

                <motion.i
                  animate={{
                    rotate: isActive ? 45 : 0,
                    scale: isActive ? 1.15 : 1,
                  }}
                >
                  ↗
                </motion.i>

                <motion.div
                  className="food-item-line"
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* ACTIVE FOOD INFORMATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${food[0]}-info`}
            className="food-info"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            <span>{food[1]}</span>
            <strong>{food[0]}</strong>
            <p>
              A small part of the
              journey worth stopping for.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* DECORATIVE BRUSH */}
        <div className="food-brush">
          <span />
          <span />
          <span />
        </div>

        {/* LARGE JAPANESE CHARACTER */}
        <div className="food-character">和</div>

        {/* FOOTER */}
        <div className="food-footer">
          <span>EAT SLOW / LOOK CLOSE</span>
          <span>04 — 04</span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TIPS
========================================================= */

function Tips() {
  const [hoveredIndex, setHoveredIndex] =
    useState<number | null>(null);

  return (
    <section
      className="tips section"
      id="tips"
    >
      <div className="container">
        {/* SECTION LABEL */}

        <Label number="05">
          FIELD NOTES & ESSENTIALS
        </Label>

        {/* JAPANESE WATERMARK */}

        <div
          className="tips-jp-watermark"
          aria-hidden="true"
        >
          知
        </div>

        {/* HEADING */}

        <div className="section-heading">
          <h2>
            Things we wish
            <br />
            <em>we knew first.</em>
          </h2>

          <p>
            Practical details, insider hacks,
            and field-tested advice that turn
            a good journey into an effortless,
            smooth one.
          </p>
        </div>

        {/* TIPS GRID */}

        <div className="tips-grid">
          {FIELD_TIPS.map(
            (tip, index) => {
              const isHovered =
                hoveredIndex === index;

              return (
                <article
                  key={tip.number}
                  className={
                    isHovered
                      ? "tip-card hovered"
                      : "tip-card"
                  }
                  onMouseEnter={() =>
                    setHoveredIndex(index)
                  }
                  onMouseLeave={() =>
                    setHoveredIndex(null)
                  }
                >
                  {/* NUMBER */}

                  <span className="tip-number">
                    {tip.number}
                  </span>

                  {/* CONTENT */}

                  <div className="tip-body">
                    <div className="tip-heading">
                      <h3>
                        {tip.title}
                      </h3>

                      <span className="tip-kanji">
                        {
                          TIP_KANJI[
                            index %
                              TIP_KANJI.length
                          ]
                        }
                      </span>
                    </div>

                    <p>
                      {tip.text}
                    </p>

                    {/* PRO TIP */}

                    {tip.proTip && (
                      <div className="tip-pro">
                        <span>
                          PRO TIP
                        </span>

                        <p>
                          {tip.proTip}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* ARROW */}

                  <i className="tip-arrow">
                    ↗
                  </i>

                  {/* HOVER IMAGE */}

                  <AnimatePresence>
                    {isHovered &&
                      tip.image && (
                        <motion.div
                          className="tip-hover-thumb"
                          initial={{
                            opacity: 0,
                            x: 18,
                            scale: 0.9,
                            rotate: 4,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            rotate: -2,
                          }}
                          exit={{
                            opacity: 0,
                            x: 18,
                            scale: 0.9,
                            rotate: 4,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [
                              0.16,
                              1,
                              0.3,
                              1,
                            ],
                          }}
                        >
                          <img
                            src={tip.image}
                            alt={tip.title}
                          />

                          <span className="tip-hover-tag">
                            {tip.tag}
                          </span>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PACK
========================================================= */

function Pack() {
  return (
    <section
      className="pack"
      id="pack"
    >
      <div className="pack-paper">
        <Label number="06">
          PACK
        </Label>

        <div className="section-heading">
          <h2>
            Pack light.
            <br />
            <em>Walk far.</em>
          </h2>

          <p>
            Japan rewards comfortable
            shoes and a bag you can carry
            all day.
          </p>
        </div>

        <div className="pack-layout">
          <div className="pack-list">
            {PACK.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{
                  x: 8,
                }}
              >
                <span>
                  0{index + 1}
                </span>

                <strong>{item}</strong>

                <i>+</i>
              </motion.div>
            ))}
          </div>

          <div className="bag-area">
            <div className="bag-handle" />

            <div className="bag">
              旅
            </div>

            <span className="note note-a">
              PASSPORT
            </span>

            <span className="note note-b">
              CAMERA
            </span>

            <span className="note note-c">
              COMFORT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOLIAGE
========================================================= */

function Foliage() {
  const [active, setActive] =
    useState(0);

  const season =
    SEASONS[active];

  return (
    <section
      className="foliage"
      id="foliage"
    >
      <div className="foliage-image">
        <AnimatePresence mode="wait">
          <motion.img
            key={season.name}
            src={season.image}
            alt={season.name}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.9,
            }}
          />
        </AnimatePresence>
      </div>

      <div className="foliage-overlay" />

      <div className="foliage-content">
        <Label number="07">
          FOLIAGE
        </Label>

        <div className="giant-jp">
          {season.jp}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={season.name}
            className="season-copy"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
          >
            <span>{season.name}</span>
            <h2>{season.title}</h2>
            <p>{season.text}</p>
          </motion.div>
        </AnimatePresence>

        <div className="season-tabs">
          {SEASONS.map(
            (item, index) => (
              <button
                key={item.name}
                className={
                  active === index
                    ? "active"
                    : ""
                }
                onMouseEnter={() =>
                  setActive(index)
                }
              >
                0{index + 1}{" "}
                {item.name}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   VISA
========================================================= */

function Visa() {
  const items = [
    [
      "01",
      "PASSPORT",
      "Keep your passport valid and accessible throughout the journey.",
    ],
    [
      "02",
      "VISA",
      "Check the current requirements for your nationality before booking.",
    ],
    [
      "03",
      "INSURANCE",
      "Keep your travel insurance information accessible.",
    ],
    [
      "04",
      "ENTRY",
      "Verify the latest immigration and customs requirements.",
    ],
  ];

  return (
    <section
      className="visa section"
      id="visa"
    >
      <div className="container">
        <Label number="08">
          BEFORE YOU GO
        </Label>

        <div className="section-heading">
          <h2>
            The boring stuff
            <br />
            <em>matters.</em>
          </h2>

          <p>
            Requirements change. Always
            verify current rules before
            making non-refundable plans.
          </p>
        </div>

        <div className="visa-list">
          {items.map(
            ([number, title, text]) => (
              <motion.div
                key={number}
                className="visa-row"
                whileHover={{
                  x: 10,
                }}
              >
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{text}</p>
                <i>↗</i>
              </motion.div>
            )
          )}
        </div>

        <div className="visa-note">
          <span>NOTE</span>

          <p>
            Visa and entry information is
            time-sensitive. Verify final
            requirements through official
            Japanese government sources.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BUDGET
========================================================= */

function Budget() {
  const rows = [
    "FLIGHTS",
    "STAY",
    "TRANSPORT",
    "FOOD",
    "ACTIVITIES",
  ];

  return (
    <section
      className="budget"
      id="budget"
    >
      <div className="budget-inner">
        <Label number="09">
          THE NUMBERS
        </Label>

        <div className="section-heading">
          <h2>
            What does
            <br />
            <em>Japan cost?</em>
          </h2>

          <p>
            Replace these placeholders
            with your actual researched
            trip costs. No fabricated
            prices.
          </p>
        </div>

        <div className="budget-table">
          {rows.map((row, index) => (
            <motion.div
              key={row}
              className="budget-row"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                delay: index * 0.06,
              }}
            >
              <span>
                0{index + 1}
              </span>

              <strong>{row}</strong>

              <i />

              <b>
                ₹ XX,XXX
              </b>
            </motion.div>
          ))}

          <div className="budget-total">
            <span>TOTAL</span>
            <strong>
              ₹ XX,XXX
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function JapanPage() {
  const { scrollYProgress } =
    useScroll();

  const smoothProgress =
    useSpring(scrollYProgress, {
      stiffness: 80,
      damping: 28,
      mass: 0.7,
    });

  const progressHeight =
    useTransform(
      smoothProgress,
      [0, 1],
      ["0%", "100%"]
    );

  return (
    <main className="japan-page">
      <JapanNavbar />

      <div className="page-progress">
        <motion.div
          style={{
            height: progressHeight,
          }}
        />
      </div>

      <Hero />
      <Cinema />
      <Days />
      <Hotels />
      <Food />
      <Tips />
      <Pack />
      <Foliage />
      <Visa />
      <Budget />

      <footer className="footer">
        <div className="footer-kanji">
          旅
        </div>

        <h2>
          Until the
          <br />
          <em>next journey.</em>
        </h2>

        <a href="#top">
          BACK TO TOP ↑
        </a>

        <div className="footer-bottom">
          <span>
            JAPAN TRAVEL JOURNAL
          </span>

          <span>
            © 2026
          </span>
        </div>
      </footer>

      {/* ===================================================
          GLOBAL STYLES
      =================================================== */}

      <style jsx global>{`

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f5f0e6;
        }

        * {
          box-sizing: border-box;
        }

        .japan-page {
          overflow: hidden;
          color: #302821;
          background: #f5f0e6;
          font-family:
            var(--font-display),
            Georgia,
            serif;
        }

        .container {
          width:
            min(
              1180px,
              calc(100% - 64px)
            );

          margin: auto;
        }

        .section {
          padding:
            180px 0;
        }

        .alt {
          background:
            #e3d8c7;
        }

        /* =================================================
           LABEL
        ================================================= */

        .label {
          display: flex;
          align-items: center;
          gap: 12px;

          font-family:
            var(--font-mono),
            monospace;

          font-size: 9px;

          letter-spacing:
            .2em;

          color:
            #625649;
        }

        .label span {
          color:
            #9e3b30;
        }

        .label i {
          width: 38px;
          height: 1px;

          background:
            rgba(60,45,34,.25);
        }

        /* =================================================
           PROGRESS
        ================================================= */

        .page-progress {
          position: fixed;
          z-index: 2000;

          top: 50%;
          right: 7px;

          width: 2px;
          height: 100px;

          transform:
            translateY(-50%);

          background:
            rgba(45,34,25,.12);
        }

        .page-progress div {
          width: 100%;
          background:
            #9e3b30;
        }

        /* =================================================
           NAVBAR
        ================================================= */

        /* =================================================
           NAVBAR — REDESIGNED
        ================================================= */

        .navbar {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          background: rgba(245, 240, 230, 0.85);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(58, 43, 31, 0.08);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }

        .navbar-scrolled {
          box-shadow: 0 4px 24px rgba(45, 30, 18, 0.1);
          background: rgba(245, 240, 230, 0.96);
        }

        /* Brand */
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #28211b;
        }

        .nav-brand-kanji {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #9e3b30;
          color: #f5eee3;
          display: grid;
          place-items: center;
          font-family: "Noto Serif JP", serif;
          font-size: 16px;
        }

        .nav-brand-text {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: #302821;
        }

        /* Nav */
        .navbar nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1px;
          padding: 6px 16px;
          border-radius: 8px;
          text-decoration: none;
          color: #5a4f44;
          transition: color 0.2s, background 0.2s;
        }

        .nav-item:hover,
        .nav-item.active {
          color: #9e3b30;
          background: rgba(158, 59, 48, 0.06);
        }

        .nav-label {
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          line-height: 1;
        }

        .nav-kanji {
          font-family: "Noto Serif JP", serif;
          font-size: 11px;
          color: #9e3b30;
          line-height: 1;
        }

        .nav-underline {
          position: absolute;
          bottom: 3px;
          left: 16px;
          right: 16px;
          height: 1.5px;
          background: #9e3b30;
          transform-origin: left;
          border-radius: 2px;
        }

        /* Back button */
        .nav-back {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border: 1px solid rgba(48, 40, 33, 0.2);
          border-radius: 24px;
          text-decoration: none;
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #302821;
          transition: background 0.2s, border-color 0.2s;
        }

        .nav-back:hover {
          background: #302821;
          color: #f5eee3;
          border-color: #302821;
        }

        .nav-paper {
          position: absolute;
          inset: 0;

          border-radius: inherit;

          background:
            linear-gradient(
              105deg,
              #d3c4ae,
              #e8dfcf 25%,
              #d7cab7 52%,
              #e8dfcf 76%,
              #d4c5b0
            );
        }

        .nav-wrinkles {
          position: absolute;
          inset: 0;

          border-radius: inherit;

          opacity: .4;

          background:
            repeating-linear-gradient(
              4deg,
              transparent 0,
              transparent 6px,
              rgba(66,47,32,.035) 7px,
              transparent 10px
            ),
            radial-gradient(
              ellipse at 20% 20%,
              rgba(255,255,255,.4),
              transparent 40%
            ),
            radial-gradient(
              ellipse at 80% 80%,
              rgba(70,45,30,.1),
              transparent 45%
            );
        }

        .navbar nav {
          position: relative;
          z-index: 10;

          height: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding:
            0 15px;
        }

        .nav-item {
          position: relative;

          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          padding:
            0 20px;

          color:
            #4a4036;

          text-decoration: none;

          font-family:
            var(--font-mono),
            monospace;

          font-size: 15px;

          font-weight: 600;

          letter-spacing:
            .2em;

          white-space: nowrap;
        }

        .nav-item:first-child::before {
          content: "";

          position: absolute;
          inset: 7px 1px;

          z-index: -1;

          border-radius: 30px;

          background:
            #201914;
        }

        .nav-item:first-child {
          color:
            #f2eadf;
        }

        .nav-item .kanji {
          position: absolute;

          top: 3px;
          right: 6px;

          color:
            #92352c;

          font-family:
            "Noto Serif JP",
            serif;

          font-size: 13px;

          opacity: 0;
        }

        .nav-item.active .kanji {
          opacity: .2;
        }

        .nav-item i {
          position: absolute;

          left: 20%;
          right: 17%;

          bottom: 10px;

          height: 2px;

          background:
            #9e382f;

          transform-origin:
            left;
        }

        .nav-sun {
          position: absolute;

          z-index: 5;

          top: -25px;
          right: 105px;

          width: 50px;
          height: 50px;

          border-radius: 50%;

          display: grid;
          place-items: center;

          background:
            #a43a2e;

          color:
            #ead9c4;

          font-family:
            "Noto Serif JP",
            serif;

          font-size: 19px;

          transform:
            rotate(-8deg);
        }

        .nav-mountain {
          position: absolute;

          z-index: 2;

          right: 10%;
          bottom: -22px;

          width: 280px;
          height: 70px;

          pointer-events: none;
        }

        .nav-mountain path:first-child {
          fill:
            rgba(53,43,34,.16);
        }

        .nav-mountain .snow {
          fill:
            rgba(245,238,226,.9);
        }

        .nav-stamp {
          position: absolute;

          z-index: 30;

          right: 20px;
          bottom: -21px;

          width: 40px;
          height: 40px;

          display: grid;
          place-items: center;

          border:
            2px solid
            rgba(143,48,40,.5);

          color:
            #8f3028;

          background:
            rgba(229,215,195,.8);

          font-family:
            "Noto Serif JP",
            serif;

          transform:
            rotate(7deg);
        }

        /* =================================================
           HERO
        ================================================= */

        .hero {
          position: relative;

          min-height:
            100vh;

          display:
            flex;

          align-items:
            center;

          overflow:
            hidden;

          background:
            #f4eee3;
        }

        .hero-paper {
          position: absolute;
          inset: 0;

          opacity: .5;

          background:
            radial-gradient(
              ellipse at 20% 20%,
              rgba(255,255,255,.6),
              transparent 40%
            ),
            radial-gradient(
              ellipse at 80% 80%,
              rgba(90,60,40,.08),
              transparent 45%
            );
        }

        .hero-copy {
          position: relative;
          z-index: 5;

          width:
            min(
              1180px,
              calc(100% - 64px)
            );

          margin: auto;

          padding-top:
            80px;
        }

        .hero h1 {
          margin:
            35px 0 0;

          font-size:
            clamp(
              6rem,
              17vw,
              15rem
            );

          line-height:
            .72;

          letter-spacing:
            -.075em;

          color:
            #28211b;
        }

        .hero h1 em {
          font-family:
            "Noto Serif JP",
            Georgia,
            serif;

          font-style:
            normal;

          color:
            #9f3c30;

          font-size:
            .55em;

          margin-left:
            .18em;
        }

        .hero p {
          margin:
            50px 0 0;

          color:
            #6c6053;

          line-height:
            1.7;

          font-size:
            16px;
        }

        .hero-link {
          display:
            inline-block;

          margin-top:
            32px;

          padding-bottom:
            8px;

          border-bottom:
            1px solid
            #9f3c30;

          text-decoration:
            none;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          letter-spacing:
            .18em;
        }

        .hero-sun {
          position:
            absolute;

          right:
            13%;

          top:
            23%;

          width:
            260px;

          height:
            260px;

          border-radius:
            50%;

          display:
            grid;

          place-items:
            center;

          background:
            #a43a2e;

          opacity:
            .92;
        }

        .hero-sun span {
          color:
            rgba(245,232,215,.8);

          font-family:
            "Noto Serif JP",
            serif;

          font-size:
            30px;
        }

        .hero-mountains {
          position:
            absolute;

          inset:
            auto 0 0;

          height:
            45%;
        }

        .hero-mountains svg {
          width:
            100%;

          height:
            100%;
        }

        .hero-mountains path {
          fill:
            rgba(48,41,35,.13);
        }

        .hero-side {
          position:
            absolute;

          right:
            3%;

          top:
            50%;

          writing-mode:
            vertical-rl;

          font-family:
            "Noto Serif JP",
            serif;

          color:
            rgba(62,48,36,.4);

          letter-spacing:
            .35em;
        }

        .hero-footer {
          position:
            absolute;

          left:
            32px;

          right:
            32px;

          bottom:
            30px;

          display:
            flex;

          justify-content:
            space-between;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            8px;

          letter-spacing:
            .18em;

          color:
            #65584b;
        }

        /* =================================================
           CINEMA — HANGING PHOTO WALL
        ================================================= */

        .cinema {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #e7ded0;
        }

        .cinema-copy {
          position: absolute;
          z-index: 20;
          top: 15%;
          left: 8%;
        }

        .cinema-copy h2 {
          margin: 35px 0 0;
          font-size: clamp(4rem, 8vw, 8rem);
          line-height: .82;
          letter-spacing: -.06em;
        }

        .cinema-copy h2 em {
          font-family: Georgia, serif;
          font-weight: 400;
          color: #ffffffff;
        }

        .cinema-copy p {
          max-width: 300px;
          margin-top: 28px;
          color: #e29736ff;
          line-height: 1.6;
        }

        /* Photo installation */
        .cinema-wall {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        /* Wooden danda */
        .wooden-danda {
          position: absolute;
          top: 10%;
          left: 5%;
          right: 5%;
          height: 25px;
          border-radius: 50px;
          background:
            linear-gradient(
              180deg,
              #8b603b 0%,
              #a97749 25%,
              #70472b 55%,
              #996b43 75%,
              #684329 100%
            );
          box-shadow:
            0 8px 14px rgba(60, 38, 22, .18),
            inset 0 2px 2px rgba(255,255,255,.18),
            inset 0 -3px 5px rgba(40,25,15,.25);
          transform: rotate(-.35deg);
        }

        .wood-grain {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: .45;
          background:
            repeating-linear-gradient(
              92deg,
              transparent 0,
              transparent 38px,
              rgba(45,25,12,.18) 40px,
              transparent 44px
            ),
            repeating-linear-gradient(
              8deg,
              transparent 0,
              transparent 9px,
              rgba(255,220,175,.12) 10px,
              transparent 13px
            );
        }

        /* Vines */
        .vine {
          position: absolute;
          z-index: 10;
          pointer-events: none;
        }

        .vine svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .vine-stem {
          fill: none;
          stroke: #536747;
          stroke-width: 5;
          stroke-linecap: round;
        }

        .vine ellipse {
          fill: #637d52;
          stroke: #4e6540;
          stroke-width: 1;
        }

        .vine-left {
          width: 430px;
          height: 190px;
          top: 5%;
          left: 3%;
          transform: rotate(-3deg);
        }

        .vine-right {
          width: 450px;
          height: 190px;
          top: 5%;
          right: 2%;
          transform: rotate(3deg);
        }

        /* Ropes */
        .hanging-ropes {
          position: absolute;
          inset: 0;
          z-index: 15;
        }

        .hanging-rope {
          position: absolute;
          left: var(--rope-x);
          top: 10%;
          width: 1px;
          height: var(--rope-height);
        }

        .rope-string {
          position: absolute;
          top: 12px;
          left: 0;
          width: 2px;
          height: 100%;
          background:
            repeating-linear-gradient(
              0deg,
              #9c876c 0px,
              #9c876c 5px,
              #b6a083 6px,
              #8c755c 8px
            );
          box-shadow: 1px 0 1px rgba(60,40,25,.15);
          border-radius: 50%;
        }

        /* Photo cards */
        .hanging-photo {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: clamp(135px, 13vw, 190px);
          aspect-ratio: .78;
          padding: 8px;
          background: #f8f4eb;
          box-shadow:
            0 18px 35px rgba(54,38,26,.16),
            0 3px 8px rgba(54,38,26,.08);
          transform:
            translateX(-50%)
            rotate(var(--card-rotate));
          transform-origin: top center;
          overflow: visible;
        }

        .hanging-photo::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 1px solid rgba(80,60,40,.08);
          pointer-events: none;
        }

        .hanging-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(.82) contrast(.96);
        }

        .photo-pin {
          position: absolute;
          top: -5px;
          left: 50%;
          width: 9px;
          height: 9px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: #79634d;
          box-shadow: 0 1px 2px rgba(30,20,10,.35);
          z-index: 5;
        }

        .photo-pin::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 3px;
          height: 3px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: #d5c5ad;
        }

        .photo-number {
          position: absolute;
          bottom: -24px;
          left: 0;
          font-family: var(--font-mono), monospace;
          font-size: 8px;
          letter-spacing: .18em;
          color: #776a5c;
        }

        /* Individual movement — intentionally asynchronous */
        .rope-1 .hanging-photo { animation: hanging-sway-1 6s ease-in-out infinite; }
        .rope-2 .hanging-photo { animation: hanging-sway-2 7.2s ease-in-out infinite; }
        .rope-3 .hanging-photo { animation: hanging-sway-3 5.8s ease-in-out infinite; }
        .rope-4 .hanging-photo { animation: hanging-sway-4 8s ease-in-out infinite; }
        .rope-5 .hanging-photo { animation: hanging-sway-5 6.5s ease-in-out infinite; }
        .rope-6 .hanging-photo { animation: hanging-sway-6 7.5s ease-in-out infinite; }

        @keyframes hanging-sway-1 {
          0%, 100% { transform: translateX(-50%) rotate(-3deg); }
          50% { transform: translateX(-50%) rotate(0deg); }
        }

        @keyframes hanging-sway-2 {
          0%, 100% { transform: translateX(-50%) rotate(2deg); }
          50% { transform: translateX(-50%) rotate(-1deg); }
        }

        @keyframes hanging-sway-3 {
          0%, 100% { transform: translateX(-50%) rotate(-2deg); }
          50% { transform: translateX(-50%) rotate(1deg); }
        }

        @keyframes hanging-sway-4 {
          0%, 100% { transform: translateX(-50%) rotate(3deg); }
          50% { transform: translateX(-50%) rotate(-1deg); }
        }

        @keyframes hanging-sway-5 {
          0%, 100% { transform: translateX(-50%) rotate(-3deg); }
          50% { transform: translateX(-50%) rotate(1deg); }
        }

        @keyframes hanging-sway-6 {
          0%, 100% { transform: translateX(-50%) rotate(2deg); }
          50% { transform: translateX(-50%) rotate(-1deg); }
        }

        /* Small dangling vines */
        .dangling-vine {
          position: absolute;
          z-index: 12;
          width: 3px;
          background: #637b51;
          border-radius: 50%;
        }

        .dangling-vine span,
        .dangling-vine i,
        .dangling-vine b {
          position: absolute;
          width: 22px;
          height: 11px;
          border-radius: 100% 0 100% 0;
          background: #6d8559;
          display: block;
        }

        .dangling-vine span {
          top: 45px;
          left: -17px;
          transform: rotate(-35deg);
        }

        .dangling-vine i {
          top: 85px;
          left: 2px;
          transform: rotate(35deg);
        }

        .dangling-vine b {
          top: 125px;
          left: -17px;
          transform: rotate(-35deg);
        }

        .dangling-vine-1 {
          top: 10%;
          left: 17%;
          height: 150px;
          transform: rotate(5deg);
        }

        .dangling-vine-2 {
          top: 10%;
          right: 18%;
          height: 175px;
          transform: rotate(-5deg);
        }

        .cinema-footer {
          position: absolute;
          z-index: 30;
          bottom: 30px;
          left: 8%;
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: .2em;
          color: #65594c;
        }

        /* Responsive */
        @media (max-width: 800px) {
          .cinema {
            min-height: 900px;
          }

          .cinema-copy {
            top: 11%;
            left: 7%;
          }

          .cinema-copy h2 {
            font-size: clamp(3.5rem, 15vw, 6rem);
          }

          .cinema-copy p {
            font-size: 13px;
          }

          .wooden-danda {
            top: 29%;
            left: 3%;
            right: 3%;
            height: 18px;
          }

          .vine-left {
            top: 24%;
            left: -10%;
            width: 300px;
            height: 130px;
          }

          .vine-right {
            top: 24%;
            right: -15%;
            width: 320px;
            height: 130px;
          }

          .hanging-photo {
            width: 110px;
            padding: 6px;
          }

          .hanging-rope {
            top: 29%;
          }

          .rope-1 { left: 8% !important; }
          .rope-2 { left: 25% !important; }
          .rope-3 { left: 42% !important; }
          .rope-4 { left: 59% !important; }
          .rope-5 { left: 76% !important; }
          .rope-6 { left: 92% !important; }

          .photo-number {
            font-size: 7px;
          }

          .cinema-footer {
            left: 7%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hanging-photo {
            animation: none !important;
          }
        }

/* =================================================
           SECTION HEADINGS
        ================================================= */

        .section-heading {
          display:
            grid;

          grid-template-columns:
            1.2fr .8fr;

          gap:
            80px;

          align-items:
            end;

          margin:
            55px 0 90px;
        }

        .section-heading h2 {
          margin:
            0;

          font-size:
            clamp(
              4rem,
              8vw,
              8rem
            );

          line-height:
            .84;

          letter-spacing:
            -.065em;
        }

        .section-heading h2 em {
          font-family:
            Georgia,
            serif;

          font-weight:
            400;

          color:
            #75695c;
        }

        .section-heading p {
          max-width:
            340px;

          margin:
            0 0 8px;

          color:
            #6e6255;

          line-height:
            1.7;
        }

        /* =================================================
           DAYS
        ================================================= */

        .days-layout {
          display:
            grid;

          grid-template-columns:
            .7fr 1.4fr .7fr;

          gap:
            34px;

          align-items:
            center;
        }

        .day-list {
          border-top:
            1px solid
            rgba(54,43,33,.2);
        }

        .day-list button {
          width:
            100%;

          display:
            grid;

          grid-template-columns:
            40px 1fr 20px;

          gap:
            12px;

          padding:
            24px 0;

          border:
            0;

          border-bottom:
            1px solid
            rgba(54,43,33,.2);

          background:
            transparent;

          color:
            #776b5e;

          text-align:
            left;

          cursor:
            pointer;
        }

        .day-list button span,
        .day-list button i {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;
        }

        .day-list button strong {
          font-size:
            18px;
        }

        .day-list button.selected {
          color:
            #9f3c30;
        }

        .day-image {
          position:
            relative;

          height:
            580px;
        }

        .day-image .image {
          height:
            100%;
        }

        .day-image > div:last-child {
          position:
            absolute;

          left:
            30px;

          bottom:
            30px;

          display:
            flex;

          flex-direction:
            column;

          color:
            white;

          text-shadow:
            0 3px 20px
            rgba(0,0,0,.35);
        }

        .day-image > div:last-child span {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;
        }

        .day-image > div:last-child strong {
          font-size:
            32px;
        }

        .day-text span {
          color:
            #9f3c30;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          letter-spacing:
            .18em;
        }

        .day-text h3 {
          font-size:
            32px;

          line-height:
            1;

          margin:
            18px 0;
        }

        .day-text p {
          color:
            #6e6255;

          line-height:
            1.7;
        }

        /* =================================================
           HOTELS
        ================================================= */

        .hotel-grid {
          display:
            grid;

          grid-template-columns:
            1.1fr .8fr 1fr;

          gap:
            28px;

          align-items:
            start;
        }

        .hotel.second {
          margin-top:
            90px;
        }

        .hotel .image {
          height:
            480px;
        }

        .hotel.second .image {
          height:
            400px;
        }

        .hotel-meta {
          display:
            flex;

          justify-content:
            space-between;

          margin-top:
            18px;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            8px;

          letter-spacing:
            .16em;

          color:
            #76695c;
        }

        .hotel h3 {
          max-width:
            280px;

          margin:
            18px 0;

          font-size:
            28px;

          line-height:
            1;
        }

        .hotel-line {
          height:
            1px;

          background:
            rgba(54,43,33,.18);
        }

        .hotel-link {
          display:
            block;

          margin-top:
            12px;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            8px;

          letter-spacing:
            .16em;
        }

        /* =================================================
           FOOD — JAPANESE EDITORIAL JOURNAL
        ================================================= */

        .food {
          position: relative;

          min-height: 100vh;

          overflow: hidden;

          padding: 150px 0 100px;

          color: #302821;

          background: #e6dccb;
        }

        .food-paper {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(
              ellipse at 18% 18%,
              rgba(255,255,255,.58),
              transparent 34%
            ),
            radial-gradient(
              ellipse at 82% 70%,
              rgba(96,67,43,.08),
              transparent 40%
            ),
            repeating-linear-gradient(
              4deg,
              transparent 0,
              transparent 7px,
              rgba(66,47,32,.025) 8px,
              transparent 11px
            );
        }

        .food::before {
          content: "";
          position: absolute;
          inset: 24px;
          border: 1px solid rgba(65,48,34,.15);
          pointer-events: none;
        }

        .food-inner {
          position: relative;
          width: min(1180px, calc(100% - 64px));
          min-height: 720px;
          margin: auto;
        }

        .food-header {
          position: relative;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .food-header-meta {
          display: flex;
          align-items: center;
          gap: 25px;
          font-family: var(--font-mono), monospace;
          font-size: 7px;
          letter-spacing: .18em;
          color: #75695c;
        }

        .food-title {
          position: absolute;
          z-index: 8;
          left: 0;
          top: 105px;
        }

        .food-title h2 {
          position: relative;
          margin: 0;
          font-size: clamp(5rem, 10vw, 10rem);
          line-height: .76;
          letter-spacing: -.075em;
          color: #302821;
        }

        .food-title h2 em {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          color: #75695c;
        }

        .food-title p {
          margin-top: 35px;
          font-size: 14px;
          line-height: 1.7;
          color: #75695c;
        }

        .food-jp-title {
          position: absolute;
          left: -25px;
          top: -70px;
          z-index: -1;
          font-family: "Noto Serif JP", serif;
          font-size: 150px;
          line-height: 1;
          color: rgba(159,60,48,.08);
          pointer-events: none;
        }

        .food-photo-wrap {
          position: absolute;
          z-index: 5;
          left: 30%;
          top: 105px;
          width: 390px;
          transform-origin: center center;
        }

        .food-photo {
          position: relative;
          width: 100%;
          height: 480px;
          padding: 10px;
          overflow: hidden;
          background: #f7f2e9;
          box-shadow: 0 30px 70px rgba(55,39,25,.18);
        }

        .food-photo .image {
          width: 100%;
          height: 100%;
        }

        .food-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(.86) contrast(.96);
        }

        .food-photo-overlay {
          position: absolute;
          inset: 10px;
          pointer-events: none;
          background: linear-gradient(
            145deg,
            rgba(255,255,255,.08),
            transparent 45%,
            rgba(54,38,26,.08)
          );
          mix-blend-mode: multiply;
        }

        .food-photo-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 4px 2px;
          font-family: var(--font-mono), monospace;
          font-size: 6px;
          letter-spacing: .17em;
          color: #75695c;
        }

        .food-stamp {
          position: absolute;
          z-index: 30;
          left: 57%;
          top: 75px;
          width: 82px;
          height: 82px;
          display: grid;
          place-items: center;
          border: 2px solid rgba(150,56,46,.65);
          border-radius: 50%;
          color: #96382e;
          background: rgba(235,222,203,.72);
          font-family: "Noto Serif JP", serif;
        }

        .food-stamp::before {
          content: "";
          position: absolute;
          inset: 6px;
          border: 1px solid rgba(150,56,46,.35);
          border-radius: 50%;
        }

        .food-stamp span {
          font-size: 27px;
          line-height: 1;
        }

        .food-stamp small {
          position: absolute;
          bottom: 13px;
          font-family: var(--font-mono), monospace;
          font-size: 5px;
          line-height: 1.1;
          letter-spacing: .13em;
          text-align: center;
        }

        .food-menu {
          position: absolute;
          z-index: 15;
          right: 0;
          top: 155px;
          width: 350px;
        }

        .food-menu-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          font-family: var(--font-mono), monospace;
          font-size: 7px;
          letter-spacing: .2em;
          color: #8a7b69;
        }

        .food-menu-label span:first-child {
          color: #9f3c30;
        }

        .food-item {
          position: relative;
          width: 100%;
          display: grid;
          grid-template-columns: 35px 42px 1fr 30px;
          align-items: center;
          gap: 8px;
          padding: 20px 0;
          border: 0;
          border-bottom: 1px solid rgba(65,48,34,.18);
          background: transparent;
          color: #75695c;
          text-align: left;
          cursor: pointer;
          transition: color .3s ease;
        }

        .food-item-number {
          font-family: var(--font-mono), monospace;
          font-size: 7px;
          color: #9b8b79;
        }

        .food-item-jp {
          font-family: "Noto Serif JP", serif;
          font-size: 18px;
        }

        .food-item strong {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: -.02em;
        }

        .food-item i {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(65,48,34,.18);
          border-radius: 50%;
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          font-style: normal;
          color: #96382e;
          transition: background .3s ease, color .3s ease;
        }

        .food-item.active {
          color: #96382e;
        }

        .food-item.active i {
          color: #f5ecdf;
          background: #96382e;
          border-color: #96382e;
        }

        .food-item-line {
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 2px;
          background: #96382e;
          transform-origin: left;
        }

        .food-info {
          position: absolute;
          z-index: 10;
          left: 31%;
          bottom: 45px;
          width: 230px;
          padding-left: 16px;
          border-left: 1px solid #96382e;
        }

        .food-info span {
          display: block;
          font-family: "Noto Serif JP", serif;
          font-size: 18px;
          color: #96382e;
        }

        .food-info strong {
          display: block;
          margin-top: 4px;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: .15em;
        }

        .food-info p {
          margin: 10px 0 0;
          font-size: 11px;
          line-height: 1.6;
          color: #75695c;
        }

        .food-brush {
          position: absolute;
          right: 8%;
          bottom: 20%;
          width: 100px;
          height: 90px;
          opacity: .14;
          transform: rotate(-12deg);
        }

        .food-brush span {
          position: absolute;
          display: block;
          height: 3px;
          border-radius: 100%;
          background: #40352c;
          transform-origin: left center;
        }

        .food-brush span:nth-child(1) {
          width: 85px;
          top: 15px;
          left: 5px;
          transform: rotate(18deg);
        }

        .food-brush span:nth-child(2) {
          width: 70px;
          top: 39px;
          left: 12px;
          transform: rotate(-13deg);
        }

        .food-brush span:nth-child(3) {
          width: 55px;
          top: 62px;
          left: 20px;
          transform: rotate(21deg);
        }

        .food-character {
          position: absolute;
          right: 4%;
          top: 34%;
          font-family: "Noto Serif JP", serif;
          font-size: 85px;
          color: rgba(48,40,33,.055);
          transform: rotate(8deg);
          user-select: none;
        }

        .food-footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 5px;
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono), monospace;
          font-size: 7px;
          letter-spacing: .18em;
          color: #75695c;
        }

        /* =================================================
           TIPS
        ================================================= */

        .tips {
          position: relative;
          background: #f5f2ed;
          padding: 120px 0;
          overflow: hidden;
        }

        .tips-jp-watermark {
          position: absolute;
          right: 2%;
          top: 4%;
          z-index: 0;
          font-family: "Noto Serif JP", serif;
          font-size: clamp(9rem, 16vw, 15rem);
          line-height: 1;
          color: rgba(159, 60, 48, 0.05);
          pointer-events: none;
          user-select: none;
        }

        .tips .label,
        .tips .section-heading,
        .tips-grid {
          position: relative;
          z-index: 1;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid rgba(54, 43, 33, 0.2);
          border-left: 1px solid rgba(54, 43, 33, 0.2);
        }

        .tip-card {
          position: relative;
          min-height: 230px;
          display: grid;
          grid-template-columns: 45px 1fr 20px;
          gap: 20px;
          padding: 32px;
          border-right: 1px solid rgba(54, 43, 33, 0.2);
          border-bottom: 1px solid rgba(54, 43, 33, 0.2);
          overflow: visible;
          cursor: pointer;
          transition: background 0.35s ease;
        }

        .tip-card.hovered {
          background: rgba(159, 60, 48, 0.035);
        }

        .tip-number {
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.1em;
          color: #9f3c30;
        }

        .tip-heading {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin: 0 0 15px;
        }

        .tip-heading h3 {
          margin: 0;
          font-size: 23px;
          letter-spacing: -0.01em;
        }

        .tip-kanji {
          font-family: "Noto Serif JP", serif;
          font-size: 15px;
          color: rgba(159, 60, 48, 0.3);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .tip-card.hovered .tip-kanji {
          color: rgba(159, 60, 48, 0.85);
          transform: translateY(-2px);
        }

        .tip-body p {
          margin: 0;
          max-width: 380px;
          color: #706458;
          line-height: 1.65;
        }

        .tip-pro {
          margin-top: 22px;
          padding-top: 14px;
          border-top: 1px solid rgba(54, 43, 33, 0.12);
        }

        .tip-pro > span {
          display: block;
          margin-bottom: 6px;
          font-family: var(--font-mono), monospace;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #9f3c30;
        }

        .tip-pro p {
          max-width: 400px;
          font-size: 11px;
          line-height: 1.55;
          color: #81766a;
        }

        .tip-arrow {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          font-style: normal;
          color: #9f3c30;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
        }

        .tip-card.hovered .tip-arrow {
          color: #6d251c;
          transform: translate(3px, -3px);
        }

        .tip-hover-thumb {
          position: absolute;
          z-index: 50;
          top: 28px;
          right: 32px;
          width: 118px;
          height: 118px;
          padding: 6px;
          background: #f5eee3;
          border-radius: 6px;
          box-shadow: 0 16px 36px rgba(45, 30, 18, 0.25);
          pointer-events: none;
        }

        .tip-hover-thumb img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 3px;
          filter: saturate(0.86) contrast(0.96);
        }

        .tip-hover-tag {
          position: absolute;
          bottom: -9px;
          left: 10px;
          padding: 3px 8px;
          background: #9f3c30;
          color: #f5eee3;
          font-family: var(--font-mono), monospace;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.1em;
          border-radius: 3px;
          white-space: nowrap;
        }

        /* =================================================
           PACK
        ================================================= */

        .pack {
          padding:
            120px 32px;

          background:
            #ded2bf;
        }

        .pack-paper {
          width:
            min(
              1180px,
              100%
            );

          margin:
            auto;

          padding:
            85px;

          background:
            #efe5d4;

          box-shadow:
            0 25px 70px
            rgba(51,38,26,.1);
        }

        .pack-layout {
          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            100px;

          align-items:
            center;
        }

        .pack-list {
          border-top:
            1px solid
            rgba(54,43,33,.2);
        }

        .pack-list > div {
          display:
            grid;

          grid-template-columns:
            50px 1fr 20px;

          align-items:
            center;

          padding:
            20px 0;

          border-bottom:
            1px solid
            rgba(54,43,33,.2);
        }

        .pack-list span,
        .pack-list i {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          color:
            #9f3c30;
        }

        .pack-list strong {
          font-size:
            18px;
        }

        .bag-area {
          position:
            relative;

          height:
            500px;

          border:
            1px dashed
            rgba(54,43,33,.25);
        }

        .bag {
          position:
            absolute;

          left:
            50%;

          top:
            50%;

          transform:
            translate(-50%,-45%);

          width:
            220px;

          height:
            280px;

          display:
            grid;

          place-items:
            center;

          border-radius:
            20px 20px 32px 32px;

          background:
            #40352b;

          color:
            #d7c6ad;

          font-family:
            "Noto Serif JP",
            serif;

          font-size:
            55px;

          box-shadow:
            15px 20px 35px
            rgba(43,31,21,.2);
        }

        .bag-handle {
          position:
            absolute;

          left:
            50%;

          top:
            calc(50% - 185px);

          width:
            100px;

          height:
            90px;

          border:
            12px solid
            #40352b;

          border-bottom:
            0;

          border-radius:
            70px 70px 0 0;

          transform:
            translateX(-50%);
        }

        .note {
          position:
            absolute;

          padding:
            8px 12px;

          background:
            #f4eadb;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            8px;

          letter-spacing:
            .12em;

          box-shadow:
            4px 6px 12px
            rgba(50,35,23,.1);
        }

        .note-a {
          top:
            20%;

          left:
            10%;

          transform:
            rotate(-7deg);
        }

        .note-b {
          top:
            65%;

          right:
            8%;

          transform:
            rotate(5deg);
        }

        .note-c {
          bottom:
            8%;

          left:
            18%;

          transform:
            rotate(-3deg);
        }

        /* =================================================
           FOLIAGE
        ================================================= */

        .foliage {
          position:
            relative;

          min-height:
            100vh;

          overflow:
            hidden;

          color:
            white;

          background:
            #353029;
        }

        .foliage-image,
        .foliage-image img,
        .foliage-overlay {
          position:
            absolute;

          inset:
            0;

          width:
            100%;

          height:
            100%;
        }

        .foliage-image img {
          object-fit:
            cover;
        }

        .foliage-overlay {
          background:
            linear-gradient(
              90deg,
              rgba(30,25,20,.75),
              rgba(30,25,20,.15) 65%,
              rgba(30,25,20,.3)
            );
        }

        .foliage-content {
          position:
            relative;

          z-index:
            5;

          width:
            min(
              1180px,
              calc(100% - 64px)
            );

          margin:
            auto;

          padding-top:
            16vh;
        }

        .foliage-content .label {
          color:
            #e8ddcd;
        }

        .giant-jp {
          position:
            absolute;

          right:
            0;

          top:
            10vh;

          font-family:
            "Noto Serif JP",
            serif;

          font-size:
            clamp(
              8rem,
              18vw,
              18rem
            );

          color:
            rgba(255,255,255,.08);
        }

        .season-copy {
          max-width:
            650px;

          margin-top:
            120px;
        }

        .season-copy span {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            10px;

          letter-spacing:
            .22em;

          color:
            #e3b4a9;
        }

        .season-copy h2 {
          margin:
            25px 0;

          font-size:
            clamp(
              4rem,
              8vw,
              8rem
            );

          line-height:
            .82;

          letter-spacing:
            -.06em;
        }

        .season-copy p {
          max-width:
            420px;

          line-height:
            1.7;

          color:
            rgba(255,255,255,.75);
        }

        .season-tabs {
          position:
            absolute;

          right:
            0;

          bottom:
            70px;

          display:
            flex;

          gap:
            25px;
        }

        .season-tabs button {
          border:
            0;

          border-bottom:
            1px solid
            rgba(255,255,255,.3);

          padding:
            10px 0;

          background:
            transparent;

          color:
            rgba(255,255,255,.5);

          cursor:
            pointer;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          letter-spacing:
            .15em;
        }

        .season-tabs button.active {
          color:
            white;

          border-color:
            white;
        }

        /* =================================================
           VISA
        ================================================= */

        .visa-list {
          border-top:
            1px solid
            rgba(54,43,33,.2);
        }

        .visa-row {
          display:
            grid;

          grid-template-columns:
            60px 220px 1fr 30px;

          align-items:
            center;

          gap:
            20px;

          padding:
            30px 0;

          border-bottom:
            1px solid
            rgba(54,43,33,.2);
        }

        .visa-row > span,
        .visa-row > i {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          color:
            #9f3c30;
        }

        .visa-row strong {
          font-size:
            22px;
        }

        .visa-row p {
          margin:
            0;

          color:
            #6e6255;

          line-height:
            1.5;
        }

        .visa-note {
          display:
            flex;

          gap:
            30px;

          margin-top:
            60px;

          padding:
            25px 0;

          border-top:
            1px solid
            #9f3c30;

          border-bottom:
            1px solid
            #9f3c30;
        }

        .visa-note span {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          color:
            #9f3c30;
        }

        .visa-note p {
          max-width:
            650px;

          margin:
            0;

          color:
            #6e6255;

          line-height:
            1.6;
        }

        /* =================================================
           BUDGET
        ================================================= */

        .budget {
          padding:
            180px 32px;

          background:
            #2b2621;

          color:
            #eee5d7;
        }

        .budget-inner {
          width:
            min(
              1050px,
              100%
            );

          margin:
            auto;
        }

        .budget .label {
          color:
            #c0b3a2;
        }

        .budget .section-heading p {
          color:
            #a99c8c;
        }

        .budget-table {
          border-top:
            1px solid
            rgba(238,229,215,.2);
        }

        .budget-row {
          display:
            grid;

          grid-template-columns:
            60px 220px 1fr 180px;

          align-items:
            center;

          gap:
            20px;

          padding:
            25px 0;

          border-bottom:
            1px solid
            rgba(238,229,215,.14);
        }

        .budget-row span {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          color:
            #9f3c30;
        }

        .budget-row strong {
          font-size:
            18px;
        }

        .budget-row i {
          height:
            1px;

          background:
            rgba(238,229,215,.16);
        }

        .budget-row b {
          text-align:
            right;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            12px;
        }

        .budget-total {
          display:
            flex;

          justify-content:
            space-between;

          align-items:
            center;

          padding-top:
            45px;
        }

        .budget-total span {
          font-family:
            var(--font-mono),
            monospace;

          font-size:
            10px;

          letter-spacing:
            .2em;

          color:
            #b9ab99;
        }

        .budget-total strong {
          font-size:
            45px;
        }

        /* =================================================
           IMAGE
        ================================================= */

        .image {
          position:
            relative;

          overflow:
            hidden;

          background:
            #453a30;
        }

        .image img {
          width:
            100%;

          height:
            100%;

          display:
            block;

          object-fit:
            cover;

          filter:
            saturate(.88)
            contrast(.96);
        }

        .image-noise {
          position:
            absolute;

          inset:
            0;

          pointer-events:
            none;

          opacity:
            .08;

          background:
            repeating-linear-gradient(
              0deg,
              transparent 0,
              transparent 3px,
              rgba(255,255,255,.18) 4px
            );

          mix-blend-mode:
            overlay;
        }

        /* =================================================
           FOOTER
        ================================================= */

        .footer {
          position:
            relative;

          min-height:
            70vh;

          display:
            flex;

          flex-direction:
            column;

          align-items:
            center;

          justify-content:
            center;

          text-align:
            center;

          padding:
            120px 32px 40px;

          background:
            #e4d9c8;
        }

        .footer-kanji {
          color:
            #9f3c30;

          font-family:
            "Noto Serif JP",
            serif;

          font-size:
            70px;
        }

        .footer h2 {
          margin:
            35px 0 60px;

          font-size:
            clamp(
              4rem,
              9vw,
              9rem
            );

          line-height:
            .8;

          letter-spacing:
            -.07em;
        }

        .footer h2 em {
          font-family:
            Georgia,
            serif;

          font-weight:
            400;

          color:
            #75695c;
        }

        .footer > a {
          padding-bottom:
            8px;

          border-bottom:
            1px solid
            #9f3c30;

          text-decoration:
            none;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            9px;

          letter-spacing:
            .18em;
        }

        .footer-bottom {
          position:
            absolute;

          left:
            32px;

          right:
            32px;

          bottom:
            30px;

          display:
            flex;

          justify-content:
            space-between;

          font-family:
            var(--font-mono),
            monospace;

          font-size:
            8px;

          letter-spacing:
            .15em;

          color:
            #776b5e;
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 1050px) {

          .nav-item {
            padding:
              0 10px;

            font-size:
              11px;

            letter-spacing:
              .14em;
          }

          .days-layout {
            grid-template-columns:
              .7fr 1.4fr;
          }

          .day-text {
            grid-column:
              2;
          }

          .hotel-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .hotel.second {
            margin-top:
              0;
          }

          .hotel:last-child {
            grid-column:
              1 / -1;

            max-width:
              50%;
          }
        }

        @media (max-width: 760px) {

          .container {
            width:
              calc(100% - 40px);
          }

          .navbar {
            top:
              8px;

            left:
              8px;

            right:
              8px;

            height:
              58px;

            overflow-x:
              auto;

            scrollbar-width:
              none;
          }

          .navbar::-webkit-scrollbar {
            display:
              none;
          }

          .navbar nav {
            width:
              max-content;

            min-width:
              100%;

            justify-content:
              flex-start;
          }

          .nav-item {
            padding:
              0 14px;

            font-size:
              10px;
          }

          .nav-sun,
          .nav-mountain,
          .nav-stamp {
            display:
              none;
          }

          .hero-copy {
            width:
              calc(100% - 40px);
          }

          .hero h1 {
            font-size:
              clamp(
                5rem,
                25vw,
                9rem
              );
          }

          .hero-sun {
            width:
              170px;

            height:
              170px;

            right:
              -30px;
          }

          .hero-footer span:first-child,
          .hero-footer span:nth-child(2) {
            display:
              none;
          }

          .hero-footer {
            justify-content:
              flex-end;
          }

          .section {
            padding:
              110px 0;
          }

          .section-heading {
            grid-template-columns:
              1fr;

            gap:
              30px;

            margin-bottom:
              60px;
          }

          .section-heading h2 {
            font-size:
              clamp(
                3.5rem,
                17vw,
                6rem
              );
          }

          .days-layout {
            grid-template-columns:
              1fr;
          }

          .day-image {
            height:
              470px;
          }

          .hotel-grid {
            grid-template-columns:
              1fr;
          }

          .hotel:last-child {
            max-width:
              none;
          }

          /* FOOD */
          .food {
            min-height: auto;
            padding: 110px 0 70px;
          }

          .food::before {
            inset: 12px;
          }

          .food-inner {
            width: calc(100% - 40px);
            min-height: 1120px;
          }

          .food-header-meta {
            display: none;
          }

          .food-title {
            position: relative;
            top: auto;
            left: auto;
            margin-top: 70px;
          }

          .food-title h2 {
            font-size: clamp(5rem, 23vw, 8rem);
          }

          .food-jp-title {
            left: -10px;
            top: -45px;
            font-size: 100px;
          }

          .food-photo-wrap {
            position: relative;
            left: auto;
            top: auto;
            width: min(86%, 380px);
            margin: 60px auto 0;
          }

          .food-photo {
            height: 420px;
          }

          .food-stamp {
            top: 405px;
            right: 3%;
            left: auto;
          }

          .food-menu {
            position: relative;
            right: auto;
            top: auto;
            width: 100%;
            margin-top: 65px;
          }

          .food-item {
            grid-template-columns: 32px 40px 1fr 28px;
            padding: 18px 0;
          }

          .food-item strong {
            font-size: 16px;
          }

          .food-info {
            position: relative;
            left: auto;
            bottom: auto;
            width: 80%;
            margin-top: 45px;
          }

          .food-character {
            right: 5%;
            top: 42%;
            font-size: 65px;
          }

          .food-brush {
            display: none;
          }

          .food-footer {
            bottom: 0;
          }

          .tips-grid {
            grid-template-columns:
              1fr;
          }

          .tip-hover-thumb {
            display: none;
          }

          .tips-jp-watermark {
            font-size: 7rem;
            top: 2%;
          }

          .pack {
            padding:
              70px 20px;
          }

          .pack-paper {
            padding:
              55px 25px;
          }

          .pack-layout {
            grid-template-columns:
              1fr;
          }

          .foliage-content {
            width:
              calc(100% - 40px);

            padding-top:
              100px;
          }

          .season-copy {
            margin-top:
              100px;
          }

          .season-tabs {
            left:
              0;

            right:
              auto;

            bottom:
              45px;

            max-width:
              100%;

            overflow-x:
              auto;
          }

          .visa-row {
            grid-template-columns:
              40px 1fr 25px;
          }

          .visa-row p {
            grid-column:
              2 / -1;
          }

          .budget {
            padding:
              110px 20px;
          }

          .budget-row {
            grid-template-columns:
              35px 1fr;

            gap:
              10px;
          }

          .budget-row i {
            display:
              none;
          }

          .budget-row b {
            grid-column:
              2;

            text-align:
              left;

            color:
              #bbaea0;
          }

          .budget-total strong {
            font-size:
              30px;
          }

          .footer {
            min-height:
              60vh;
          }
        }

      `}</style>
    </main>
  );
}