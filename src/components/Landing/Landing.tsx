import React from "react";


const Landing = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-300"></div>

      {/* Wireframe Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1] transition-opacity duration-300">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsla(0,0%,92%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,92%,0.3) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
        <div
          className="absolute inset-0 dark:block hidden"
          style={{
            backgroundImage: `linear-gradient(var(--ds-background-200) 1px, transparent 1px), linear-gradient(90deg, var(--ds-background-200) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* 3D Wireframe Globe */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-16">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px]">
          <svg
            aria-hidden="true"
            height="100%"
            viewBox="-1 -1 802 402"
            width="100%"
            className="animate-spin-slow"
          >
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="globe-gradient"
                x1="0"
                x2="0"
                y1="0"
                y2="400"
              >
                <stop offset="0%" stopColor="var(--ds-stop-color)"></stop>
                <stop offset="100%" stopColor="var(--ds-stop-color)"></stop>
              </linearGradient>

              {/* Filter for glow effects */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Radial gradients for moving head and fading trail effect */}
              <radialGradient
                id="trail-gradient-1"
                cx="400"
                cy="0"
                r="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#00FFFF" stopOpacity="0"></stop>
                <animate
                  attributeName="cx"
                  dur="3s"
                  repeatCount="indefinite"
                  values="400;500;600;650;700;701.26"
                  begin="0s"
                ></animate>
                <animate
                  attributeName="cy"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;120;160;200;240"
                  begin="0s"
                ></animate>
                <animate
                  attributeName="r"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;80;80;80;80;0"
                  begin="0s"
                ></animate>
              </radialGradient>

              <radialGradient
                id="trail-gradient-2"
                cx="400"
                cy="0"
                r="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#00FFFF" stopOpacity="0"></stop>
                <animate
                  attributeName="cx"
                  dur="3s"
                  repeatCount="indefinite"
                  values="400;350;300;250;200;150;100;77.94"
                  begin="1s"
                ></animate>
                <animate
                  attributeName="cy"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;120;160;200;240;280;320"
                  begin="1s"
                ></animate>
                <animate
                  attributeName="r"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;80;80;80;80;80;80;0"
                  begin="1s"
                ></animate>
              </radialGradient>

              <radialGradient
                id="trail-gradient-3"
                cx="400"
                cy="0"
                r="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#00FFFF" stopOpacity="0"></stop>
                <animate
                  attributeName="cx"
                  dur="3s"
                  repeatCount="indefinite"
                  values="400;430;460;480;498.48"
                  begin="2s"
                ></animate>
                <animate
                  attributeName="cy"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;120;160"
                  begin="2s"
                ></animate>
                <animate
                  attributeName="r"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;80;80;0"
                  begin="2s"
                ></animate>
              </radialGradient>

              <radialGradient
                id="trail-gradient-4"
                cx="400"
                cy="0"
                r="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#00FFFF" stopOpacity="0"></stop>
                <animate
                  attributeName="cx"
                  dur="3s"
                  repeatCount="indefinite"
                  values="400;380;350;300;258.79"
                  begin="3s"
                ></animate>
                <animate
                  attributeName="cy"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;60;80"
                  begin="3s"
                ></animate>
                <animate
                  attributeName="r"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;80;0"
                  begin="3s"
                ></animate>
              </radialGradient>

              <radialGradient
                id="trail-gradient-5"
                cx="400"
                cy="0"
                r="80"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="#00FFFF" stopOpacity="0"></stop>
                <animate
                  attributeName="cx"
                  dur="3s"
                  repeatCount="indefinite"
                  values="400;400;400;350;300;287.18"
                  begin="4s"
                ></animate>
                <animate
                  attributeName="cy"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;120;160;200;220;230;235;240"
                  begin="4s"
                ></animate>
                <animate
                  attributeName="r"
                  dur="3s"
                  repeatCount="indefinite"
                  values="0;40;80;80;80;80;80;0"
                  begin="4s"
                ></animate>
              </radialGradient>
            </defs>

            {/* Globe Wireframe */}
            <g data-testid="globe-wireframe">
              <circle
                cx="400"
                cy="400"
                fill="hsla(0,0%,92%,0.1)"
                className="dark:fill-black"
                r="400"
              ></circle>
              <path
                d="M 400 800 A -400 400 0 0 0 400 0"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 800 A -328.701 400 0 0 0 400 0"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 800 A -235.355 400 0 0 0 400 0"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 800 A -123.097 400 0 0 0 400 0"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 800 A 0 400 0 0 0 400 0"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 0 A 123.097 400 0 0 0 400 800"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 0 A 235.355 400 0 0 0 400 800"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 0 A 328.701 400 0 0 0 400 800"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M 400 0 A 400 400 0 0 0 400 800"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M160,80 h480"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M80,160 h640"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M33.394,240 h733.212"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M8.082,320 h783.837"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M0,400 h800"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M8.082,480 h783.837"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M33.394,560 h733.212"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M80,640 h640"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
              <path
                d="M160,720 h480"
                fill="none"
                stroke="url(#globe-gradient)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              ></path>
            </g>

            {/* Network Nodes */}
            <g data-testid="globe-nodes">
              {/* Node 1 - Top Right - Code/Development */}
              <g data-testid="deploy-node-3-5-ddd">
                <g opacity="1">
                  <g id="ddd35" opacity="1">
                    <path
                      id="path-ddd35"
                      d="M 597.221 80 A 328.701 400 0 0 0 400 0M 662.961 160 A 328.701 400 0 0 0 597.221 80M 701.26 240 A 328.701 400 0 0 0 662.961 160"
                      fill="none"
                      stroke="url(#trail-gradient-1)"
                      strokeLinecap="round"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                      filter="url(#glow)"
                    ></path>
                  </g>
                </g>
                <g data-testid="node">
                  <g opacity="1">
                    <circle
                      cx="701.2596786376284"
                      cy="240"
                      fill="none"
                      r="0"
                      stroke="#45DEC4"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="r"
                        dur="2s"
                        id="r-_r_1l_-r-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;12;18;24;0;0"
                      ></animate>
                      <animate
                        attributeName="opacity"
                        dur="2s"
                        id="opacity-_r_1l_-opacity-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;1;0.5;0;0;0"
                      ></animate>
                    </circle>
                  </g>
                  <circle
                    className="node-module__node"
                    cx="701.2596786376284"
                    cy="240"
                    r="16"
                    fill="var(--ds-stop-bg)"
                    stroke="url(#globe-gradient)"
                    vectorEffect="non-scaling-stroke"
                  ></circle>
                  <circle
                    className="node-module__dot "
                    cx="701.2596786376284"
                    cy="240"
                    fill="var(--ds-stop-color)"
                    r="8"
                  ></circle>
                  <g
                    fill="#61dafb"
                    transform="translate(687.2596786376284, 226) scale(0.22)"
                  >
                    <circle cx="64" cy="64" r="11.4" />
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4" />
                  </g>

                  {/* Code Icon */}
                  {/* <foreignObject x="-12" y="-12" width="24" height="24">
                    <div className="flex items-center justify-center w-full h-full">
                      <FaLaptopCode className="w-4 h-4 text-cyan-400" />
                    </div>
                  </foreignObject> */}
                </g>
              </g>

              {/* Node 2 - Bottom Left - Database */}
              <g data-testid="deploy-node--3-5-dddd">
                <g opacity="1">
                  <g id="dddd-35" opacity="1">
                    <path
                      id="path-dddd-35"
                      d="M 400 0 A -328.701 400 0 0 0 202.779 80M 202.779 80 A -328.701 400 0 0 0 137.039 160M 137.039 160 A -328.701 400 0 0 0 98.74 240M 98.74 240 A -328.701 400 0 0 0 77.94 320"
                      fill="none"
                      stroke="url(#trail-gradient-2)"
                      strokeLinecap="round"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                      filter="url(#glow)"
                    ></path>
                  </g>
                </g>
                <g data-testid="node">
                  <g opacity="1">
                    <circle
                      cx="77.93985659667823"
                      cy="320"
                      fill="none"
                      r="0"
                      stroke="#45DEC4"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="r"
                        dur="2s"
                        id="r-_r_1m_-r-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;12;18;24;0;0"
                      ></animate>
                      <animate
                        attributeName="opacity"
                        dur="2s"
                        id="opacity-_r_1m_-opacity-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;1;0.5;0;0;0"
                      ></animate>
                    </circle>
                  </g>
                  <circle
                    className="node-module__node "
                    cx="77.93985659667823"
                    cy="320"
                    fill="var(--ds-stop-bg)"
                    r="16"
                    stroke="url(#globe-gradient)"
                    vectorEffect="non-scaling-stroke"
                  ></circle>
                  <circle
                    className="node-module__dot dark:fill-[var(--ds-background-200)]"
                    cx="77.93985659667823"
                    cy="320"
                    fill="var(--ds-stop-color)"
                    r="8"
                  ></circle>
                  <g transform="translate(63.93985659667823, 304) scale(1.3)">
                    <path
                      fill="#0288d1"
                      d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16"
                    />
                  </g>
                  {/* Database Icon */}
                  {/* <foreignObject x="-12" y="-12" width="24" height="24">
                    <div className="flex items-center justify-center w-full h-full">
                      <FaDatabase className="w-4 h-4 text-cyan-400" />
                    </div>
                  </foreignObject> */}
                </g>
              </g>

              {/* Node 3 - Top Center Right - Data Analysis */}
              <g data-testid="deploy-node-1-5-dd">
                <g opacity="1">
                  <g id="dd15" opacity="1">
                    <path
                      id="path-dd15"
                      d="M 473.858 80 A 123.097 400 0 0 0 400 0M 498.478 160 A 123.097 400 0 0 0 473.858 80"
                      fill="none"
                      stroke="url(#trail-gradient-3)"
                      strokeLinecap="round"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                      filter="url(#glow)"
                    ></path>
                  </g>
                </g>
                <g data-testid="node">
                  <g opacity="1">
                    <circle
                      cx="498.47759065022575"
                      cy="160"
                      fill="none"
                      r="0"
                      stroke="#45DEC4"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="r"
                        dur="2s"
                        id="r-_r_1n_-r-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;12;18;24;0;0"
                      ></animate>
                      <animate
                        attributeName="opacity"
                        dur="2s"
                        id="opacity-_r_1n_-opacity-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;1;0.5;0;0;0"
                      ></animate>
                    </circle>
                  </g>
                  <circle
                    className="node-module__node dark:fill-[var(--ds-background-200)]"
                    cx="498.47759065022575"
                    cy="160"
                    fill="var(--ds-stop-bg)"
                    r="16"
                    stroke="url(#globe-gradient)"
                    vectorEffect="non-scaling-stroke"
                  ></circle>
                  <circle
                    className="node-module__dot dark:fill-[var(--ds-background-200)]"
                    cx="498.47759065022575"
                    cy="160"
                    fill="var(--ds-stop-color)"
                    r="8"
                  ></circle>
                  <g transform="translate(485.47759065022575, 148) scale(1.1)">
                    <path
                      fill="#0288d1"
                      d="M9.86 2A2.86 2.86 0 0 0 7 4.86v1.68h4.29c.39 0 .71.57.71.96H4.86A2.86 2.86 0 0 0 2 10.36v3.781a2.86 2.86 0 0 0 2.86 2.86h1.18v-2.68a2.85 2.85 0 0 1 2.85-2.86h5.25c1.58 0 2.86-1.271 2.86-2.851V4.86A2.86 2.86 0 0 0 14.14 2zm-.72 1.61c.4 0 .72.12.72.71s-.32.891-.72.891c-.39 0-.71-.3-.71-.89s.32-.711.71-.711"
                    />
                    <path
                      fill="#fdd835"
                      d="M17.959 7v2.68a2.85 2.85 0 0 1-2.85 2.859H9.86A2.85 2.85 0 0 0 7 15.389v3.75a2.86 2.86 0 0 0 2.86 2.86h4.28A2.86 2.86 0 0 0 17 19.14v-1.68h-4.291c-.39 0-.709-.57-.709-.96h7.14A2.86 2.86 0 0 0 22 13.64V9.86A2.86 2.86 0 0 0 19.14 7zM8.32 11.513l-.004.004l.038-.004zm6.54 7.276c.39 0 .71.3.71.89a.71.71 0 0 1-.71.71c-.4 0-.72-.12-.72-.71s.32-.89.72-.89"
                    />
                  </g>
                  {/* Chart Icon */}
                  {/* <foreignObject x="-12" y="-12" width="24" height="24">
                    <div className="flex items-center justify-center w-full h-full">
                      <FaChartLine className="w-4 h-4 text-cyan-400" />
                    </div>
                  </foreignObject> */}
                </g>
              </g>

              {/* Node 4 - Top Center Left - Machine Learning */}
              <g data-testid="deploy-node--1-5-dl">
                <g opacity="1">
                  <g id="dl-15" opacity="1">
                    <path
                      id="path-dl-15"
                      d="M 400 0 A -123.097 400 0 0 0 326.142 80M326.142,80 h-67.355"
                      fill="none"
                      stroke="url(#trail-gradient-4)"
                      strokeLinecap="round"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                      filter="url(#glow)"
                    ></path>
                  </g>
                </g>
                <g data-testid="node">
                  <g opacity="1">
                    <circle
                      cx="258.7867965644036"
                      cy="80"
                      fill="none"
                      r="0"
                      stroke="#45DEC4"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="r"
                        dur="2s"
                        id="r-_r_1o_-r-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;12;18;24;0;0"
                      ></animate>
                      <animate
                        attributeName="opacity"
                        dur="2s"
                        id="opacity-_r_1o_-opacity-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;1;0.5;0;0;0"
                      ></animate>
                    </circle>
                  </g>
                  <circle
                    className="node-module__node"
                    cx="258.7867965644036"
                    cy="80"
                    fill="var(--ds-stop-bg)"
                    r="16"
                    stroke="url(#globe-gradient)"
                    vectorEffect="non-scaling-stroke"
                  ></circle>
                  <circle
                    className="node-module__dot dark:fill-[var(--ds-background-200)]"
                    cx="258.7867965644036"
                    cy="80"
                    fill="var(--ds-stop-color)"
                    r="8"
                  ></circle>

                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    transform="translate(245.7867965644036, 67) scale(1.1)"
                  >
                    <path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z" />
                    <path
                      strokeLinecap="round"
                      d="m7.5 15l1.842-5.526a.694.694 0 0 1 1.316 0L12.5 15m-4-2h3m4-4v6M8 2v2m8-2v2m-4-2v2M8 20v2m4-2v2m4-2v2m6-6h-2M4 8H2m2 8H2m2-4H2m20-4h-2m2 4h-2"
                    />
                  </g>
                  {/* Brain Icon */}
                  {/* <foreignObject x="-12" y="-12" width="24" height="24">
                    <div className="flex items-center justify-center w-full h-full">
                      <FaBrain className="w-4 h-4 text-cyan-400" />
                    </div>
                  </foreignObject> */}
                </g>
              </g>

              {/* Node 5 - Center Left - Full Stack */}
              <g data-testid="deploy-node-0-5-dddl">
                <g opacity="1">
                  <g id="dddl05" opacity="1">
                    <path
                      id="path-dddl05"
                      d="M 400 80 A 0 400 0 0 0 400 0M 400 160 A 0 400 0 0 0 400 80M 400 240 A 0 400 0 0 0 400 160M400,240 h-112.82"
                      fill="none"
                      stroke="url(#trail-gradient-5)"
                      strokeLinecap="round"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                      filter="url(#glow)"
                    ></path>
                  </g>
                </g>
                <g data-testid="node">
                  <g opacity="1">
                    <circle
                      cx="287.17974664711625"
                      cy="240"
                      fill="none"
                      r="0"
                      stroke="#45DEC4"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="r"
                        dur="2s"
                        id="r-_r_1p_-r-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;12;18;24;0;0"
                      ></animate>
                      <animate
                        attributeName="opacity"
                        dur="2s"
                        id="opacity-_r_1p_-opacity-pulse"
                        keyTimes="0;0.167;0.333;0.5;0.667;1"
                        repeatCount="indefinite"
                        values="0;1;0.5;0;0;0"
                      ></animate>
                    </circle>
                  </g>
                  <circle
                    className="node-module__node"
                    cx="287.17974664711625"
                    cy="240"
                    fill="var(--ds-stop-bg)"
                    r="16"
                    stroke="url(#globe-gradient)"
                    vectorEffect="non-scaling-stroke"
                  ></circle>
                  <circle
                    className="node-module__dot "
                    cx="287.17974664711625"
                    cy="240"
                    fill="var(--ds-stop-color)"
                    r="8"
                  ></circle>
                  <g
                    transform="translate(276.17974664711625, 228) scale(1.4)"
                  >
                    <path
                      fill="#ffca28"
                      fillRule="evenodd"
                      d="M11 12c2.485 0 4.5-.833 4.5-2.5V6.322a5 5 0 0 1-.635.388c-1.1.564-2.487.79-3.865.79zm0-6h-.035c-.186-1.3-1.089-2.193-2.1-2.71c-.64-.328-1.376-.541-2.15-.663C7.296 1.542 8.995 1 11 1c2.485 0 4.5.833 4.5 2.5S13.485 6 11 6m-1.5 6.5C9.5 14.167 7.485 15 5 15S.5 14.167.5 12.5V9.322q.305.22.635.388c1.1.564 2.487.79 3.865.79s2.764-.226 3.865-.79q.33-.168.635-.388zM5 9c2.485 0 4.5-.833 4.5-2.5S7.485 4 5 4S.5 4.833.5 6.5S2.515 9 5 9"
                      clipRule="evenodd"
                    />
                  </g>
                  {/* Laptop Icon */}
                  {/* <foreignObject x="-12" y="-12" width="24" height="24">
                    <div className="flex items-center justify-center w-full h-full">
                      <FaDocker className="w-4 h-4 text-cyan-400" />
                    </div>
                  </foreignObject> */}
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 text-center">
        {/* Hero Text Above Globe */}
        {/* <div className="mb-8 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies. From frontend
            elegance to backend robustness, I build solutions that connect the
            world through code.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <FaGithub className="w-4 h-4" />
              Full-Stack Development
            </span>
            <span className="flex items-center gap-2">
              <FaServer className="w-4 h-4" />
              Backend Architecture
            </span>
            <span className="flex items-center gap-2">
              <FaBrain className="w-4 h-4" />
              AI & Machine Learning
            </span>
            <span className="flex items-center gap-2">
              <FaChartLine className="w-4 h-4" />
              Data Analytics
            </span>
          </div>
        </div> */}

        {/* Call to Action */}
        {/* <div className="mt-12 space-y-4">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Ready to bring your ideas to life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              text="View My Work"
              icon={<MdOutlineTouchApp className="w-5 h-5" />}
              customlink="/projects"
            />
            <Button variant="secondary" text="Learn More" customlink="/about" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Landing;
