import React from "react";

const Line = () => {
  return (
    <svg
      data-size="large"
      fill="none"
      height="152"
      viewBox="0 0 117 152"
      width="117"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Path with gradient stroke */}
      <path
        d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152"
        stroke="url(#paint0_linear_1364_100888)"
        strokeWidth="2"
      ></path>
      <path
        d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152"
        stroke="url(#paint1_linear_1364_100888)"
        strokeWidth="2"
      ></path>

      {/* Triangle decoration */}
      <g clipPath="url(#clip0_1364_100888)">
        <path
          clipRule="evenodd"
          d="M4 0.5L8 7.5H0L4 0.5Z"
          fill="#45DEC4"
          fillRule="evenodd"
        ></path>
      </g>

      {/* Definitions for gradients and clipping */}
      <defs>
        <linearGradient
          id="paint0_linear_1364_100888"
          x1="116"
          y1="72"
          x2="4"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5484D"></stop>
          <stop offset="0.5" stopColor="#FFC634"></stop>
          <stop offset="1" stopColor="#45DEC4"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1364_100888"
          x1="116"
          y1="152"
          x2="116"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--ds-background-200)"></stop>
          <stop offset="0.322368" stopColor="var(--ds-background-200)" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="clip0_1364_100888">
          <rect width="8" height="8" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Line;
