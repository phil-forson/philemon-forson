import React from "react";

const ChatBoxRight = ({ text }: { text: string }) => {
  // const customStyle = {
  //   "--text-color": "var(--ds-gray-1000)",
  //   "--text-size": "0.75rem",
  //   "--text-line-height": "1rem",
  //   "--text-letter-spacing": "initial",
  //   "--text-weight": 400,
  //   color: "var(--text-color)",
  //   fontSize: "var(--text-size)",
  //   lineHeight: "var(--text-line-height)",
  //   letterSpacing: "var(--text-letter-spacing)",
  //   fontWeight: "var(--text-weight)",
  // };

  return (
    <div className="flex w-full justify-end my-2 chat-bubble">
    {/* <div className="bg-[var(--ds-background-100)] border border-[#252525] relative w-fit origin-bottom-left rounded-full px-4 py-3 shadow-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ">
      {" "}
      <svg
        aria-hidden="true"
        className=" tail_hideDark__Wdafy absolute bottom-[-3px] right-[-7px]"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H24V24H0z"
          fill="var(--ds-background-100)"
          transform="matrix(-1 0 0 1 24 0)"
        ></path>
        <mask
          height="24"
          id="ad"
          maskUnits="userSpaceOnUse"
          width="24"
          x="0"
          y="0"
          style={{ maskType: "alpha" }}
        >
          <path d="M24 0H0v24h24V0z" fill="#D9D9D9"></path>
        </mask>
        <g filter="url(#filter0_d_1762_122304)" mask="url(#ad)">
          <mask
            fill="#000"
            height="42"
            id="ba"
            maskUnits="userSpaceOnUse"
            width="46"
            x="-24"
            y="-20"
          >
            <path d="M-24 -20H22V22H-24z" fill="#fff"></path>
            <path
              clip-rule="evenodd"
              d="M-3-19c11.046 0 20 8.954 20 20 0 .335-.008.669-.025 1H17v10a15 15 0 003 9 14.952 14.952 0 01-10.555-4.342A19.915 19.915 0 01-3 21c-11.046 0-20-8.954-20-20s8.954-20 20-20z"
              fill-rule="evenodd"
            ></path>
          </mask>
          <path
            clip-rule="evenodd"
            d="M-3-19c11.046 0 20 8.954 20 20 0 .335-.008.669-.025 1H17v10a15 15 0 003 9 14.952 14.952 0 01-10.555-4.342A19.915 19.915 0 01-3 21c-11.046 0-20-8.954-20-20s8.954-20 20-20z"
            fill="var(--ds-background-100)"
            fill-rule="evenodd"
          ></path>
          <path
            d="M16.975 2v1h-1.05l.052-1.05.998.05zM17 2V1h1v1h-1zm3 19l.8-.6L22 22h-2v-1zM9.445 16.658l-.623-.783.695-.553.631.625-.703.71zM16 1C16-9.493 7.493-18-3-18v-2c11.598 0 21 9.402 21 21h-2zm-.023.95C15.992 1.637 16 1.32 16 1h2c0 .352-.009.702-.026 1.05l-1.997-.1zM17 3h-.025V1H17v2zm-1 9V2h2v10h-2zm3.2 9.6A16 16 0 0116 12h2a14 14 0 002.8 8.4l-1.6 1.2zm-9.052-5.653A13.952 13.952 0 0020 20v2c-4.39 0-8.37-1.77-11.259-4.632l1.407-1.42zM-3 20c4.47 0 8.577-1.542 11.822-4.125l1.245 1.565A20.915 20.915 0 01-3 22v-2zM-22 1c0 10.493 8.507 19 19 19v2c-11.598 0-21-9.402-21-21h2zm19-19c-10.493 0-19 8.507-19 19h-2c0-11.598 9.402-21 21-21v2z"
            fill="#000"
            fill-opacity="0.08"
            mask="url(#ba)"
          ></path>
        </g>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="46"
            id="filter0_d_1762_122304"
            width="50"
            x="-26"
            y="-21"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1762_12230"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1762_12230"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
      <svg
        className=" tail_showDark__YinNx absolute bottom-[-3px] right-[-7px]"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(-1, 1)" }}
      >
        <rect fill="var(--ds-background-100)" height="24" width="24"></rect>
        <mask
          height="24"
          id="mask0_1762_12230"
          maskUnits="userSpaceOnUse"
          width="24"
          x="0"
          y="0"
          style={{ maskType: "alpha" }}
        >
          <path d="M0 0H24V24H0V0Z" fill="#D9D9D9"></path>
        </mask>
        <g mask="url(#mask0_1762_12230)">
          <g filter="url(#filter0_d_1762_12230)">
            <mask
              fill="black"
              height="42"
              id="path-3-outside-1_1762_12230"
              maskUnits="userSpaceOnUse"
              width="46"
              x="2"
              y="-20"
            >
              <rect fill="white" height="42" width="46" x="2" y="-20"></rect>
              <path
                clip-rule="evenodd"
                d="M27 -19C15.9543 -19 7 -10.0457 7 1C7 1.33533 7.00825 1.66872 7.02456 2H7V12C7 15.2456 5.94733 18.4036 4 21C8.11612 21 11.845 19.3421 14.5553 16.6576C17.9708 19.3758 22.2957 21 27 21C38.0457 21 47 12.0457 47 1C47 -10.0457 38.0457 -19 27 -19Z"
                fill-rule="evenodd"
              ></path>
            </mask>
            <path
              clip-rule="evenodd"
              d="M27 -19C15.9543 -19 7 -10.0457 7 1C7 1.33533 7.00825 1.66872 7.02456 2H7V12C7 15.2456 5.94733 18.4036 4 21C8.11612 21 11.845 19.3421 14.5553 16.6576C17.9708 19.3758 22.2957 21 27 21C38.0457 21 47 12.0457 47 1C47 -10.0457 38.0457 -19 27 -19Z"
              fill="var(--ds-background-100)"
              fill-rule="evenodd"
            ></path>
            <path
              d="M7.02456 2V3H8.07502L8.02335 1.95082L7.02456 2ZM7 2V1H6V2H7ZM4 21L3.2 20.4L2 22H4V21ZM14.5553 16.6576L15.178 15.8752L14.4829 15.3219L13.8516 15.9471L14.5553 16.6576ZM8 1C8 -9.49341 16.5066 -18 27 -18V-20C15.402 -20 6 -10.598 6 1H8ZM8.02335 1.95082C8.00785 1.63591 8 1.31892 8 1H6C6 1.35173 6.00866 1.70153 6.02578 2.04918L8.02335 1.95082ZM7 3H7.02456V1H7V3ZM8 12V2H6V12H8ZM4.8 21.6C6.87715 18.8305 8 15.4619 8 12H6C6 15.0292 5.01751 17.9767 3.2 20.4L4.8 21.6ZM13.8516 15.9471C11.3209 18.4537 7.84202 20 4 20V22C8.39022 22 12.3691 20.2305 15.259 17.3681L13.8516 15.9471ZM27 20C22.5299 20 18.4229 18.4576 15.178 15.8752L13.9326 17.4401C17.5187 20.2941 22.0615 22 27 22V20ZM46 1C46 11.4934 37.4934 20 27 20V22C38.598 22 48 12.598 48 1H46ZM27 -18C37.4934 -18 46 -9.49341 46 1H48C48 -10.598 38.598 -20 27 -20V-18Z"
              fill="#252525"
              mask="url(#path-3-outside-1_1762_12230)"
            ></path>
          </g>
        </g>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="46"
            id="filter0_d_1762_12230"
            width="50"
            x="0"
            y="-21"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="1"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
            ></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_1762_12230"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_1762_12230"
              mode="normal"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
      <p className="text_wrapper__i87JK" data-version="v1" style={customStyle}>
        <span className="sr-only">You: </span>
        {text}
      </p>
    </div> */}
          <p className="send">{text}</p>

    </div>
  );
};

export default ChatBoxRight;
