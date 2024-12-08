import React from "react";

const ChatBoxLeft = ({ text }: { text: string }) => {
  const customStyle = {
    "--text-color": "var(--ds-gray-1000)",
    "--text-size": "0.75rem",
    "--text-line-height": "1rem",
    "--text-letter-spacing": "initial",
    "--text-weight": 400,
    color: "var(--text-color)",
    fontSize: "var(--text-size)",
    lineHeight: "var(--text-line-height)",
    letterSpacing: "var(--text-letter-spacing)",
    fontWeight: "var(--text-weight)",
  };

  return (
    <div className="my-2 flex w-full justify-start chat-bubble">
      {/* <div
          className="bg-[var(--ds-background-100)] border border-[#252525] relative w-fit origin-bottom-left rounded-full px-4 py-3 shadow-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
        style={{
            transitionTimingFunction: `linear(0 0%, 0.006 1.3%, 0.024 2.6%, 0.055 4.15%, 0.099 5.7%, 0.196 8.6%, 0.534 17.8%, 0.634 20.86%, 0.718 23.92%, 0.788 26.98%, 0.847 30.04%, 0.896 33.1%, 0.935 36.55%, 0.965 40%, 0.987 43.9%, 1.002 48.2%, 1.01 53.1%, 1.013 61.7%, 1.004 83.8%, 1 100%)`,

        }}>
          <p
            
            style={customStyle}>
            <span className="sr-only">You: </span> {text}
          </p>
          <svg
            aria-hidden="true"
            className=" absolute bottom-[-3px] left-[-7px]"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H24V24H0z" fill="var(--ds-background-100)"></path>
            <mask
              height="24"
              id="a"
              maskUnits="userSpaceOnUse"
              width="24"
              x="0"
              y="0"
              style={{maskType: "alpha"}}
            >
              <path d="M0 0h24v24H0V0z" fill="#D9D9D9"></path>
            </mask>
            <g filter="url(#filter0_d_1761_12195)" mask="url(#a)">
              <mask
                fill="var(--ds-background-100)"
                height="42"
                id="b"
                maskUnits="userSpaceOnUse"
                width="46"
                x="2"
                y="-20"
              >
                <path d="M2 -20H48V22H2z" fill="#fff"></path>
                <path
                  clipRule="evenodd"
                  d="M27-19C15.954-19 7-10.046 7 1c0 .335.008.669.025 1H7v10a15 15 0 01-3 9c4.116 0 7.845-1.658 10.555-4.342A19.915 19.915 0 0027 21c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                  fillRule="evenodd"
                ></path>
              </mask>
              <path
                clipRule="evenodd"
                d="M27-19C15.954-19 7-10.046 7 1c0 .335.008.669.025 1H7v10a15 15 0 01-3 9c4.116 0 7.845-1.658 10.555-4.342A19.915 19.915 0 0027 21c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                fill="#fff"
                fillRule="evenodd"
              ></path>
              <path
                d="M7.025 2v1h1.05l-.052-1.05-.998.05zM7 2V1H6v1h1zM4 21l-.8-.6L2 22h2v-1zm10.555-4.342l.623-.783-.695-.553-.631.625.703.71zM8 1c0-10.493 8.507-19 19-19v-2C15.402-20 6-10.598 6 1h2zm.023.95A19.327 19.327 0 018 1H6c0 .352.009.702.026 1.05l1.997-.1zM7 3h.025V1H7v2zm1 9V2H6v10h2zm-3.2 9.6A16 16 0 008 12H6a14 14 0 01-2.8 8.4l1.6 1.2zm9.052-5.653A13.952 13.952 0 014 20v2c4.39 0 8.37-1.77 11.259-4.632l-1.407-1.42zM27 20c-4.47 0-8.577-1.542-11.822-4.125l-1.245 1.565A20.915 20.915 0 0027 22v-2zM46 1c0 10.493-8.507 19-19 19v2c11.598 0 21-9.402 21-21h-2zM27-18c10.493 0 19 8.507 19 19h2c0-11.598-9.402-21-21-21v2z"
                fill="#000"
                fill-opacity="0.08"
                mask="url(#b)"
              ></path>
            </g>
            <defs>
              <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="46"
                id="filter0_d_1761_12195"
                width="50"
                x="0"
                y="-21"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
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
                  result="effect1_dropShadow_1761_12195"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1761_12195"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <svg
            className=" tail_showDark__YinNx absolute bottom-[-3px] left-[-7px]"
            fill="var(--ds-background-100)"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="var(--ds-background-100)" height="24" width="24"></rect>
            <mask
              height="24"
              id="mask0_1762_12230"
              maskUnits="userSpaceOnUse"
              width="24"
              x="0"
              y="0"
              style={{maskType: "alpha"}}
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
                  <rect
                    fill="white"
                    height="42"
                    width="46"
                    x="2"
                    y="-20"
                  ></rect>
                  <path
                    clipRule="evenodd"
                    d="M27 -19C15.9543 -19 7 -10.0457 7 1C7 1.33533 7.00825 1.66872 7.02456 2H7V12C7 15.2456 5.94733 18.4036 4 21C8.11612 21 11.845 19.3421 14.5553 16.6576C17.9708 19.3758 22.2957 21 27 21C38.0457 21 47 12.0457 47 1C47 -10.0457 38.0457 -19 27 -19Z"
                    fillRule="evenodd"
                  ></path>
                </mask>
                <path
                  clipRule="evenodd"
                  d="M27 -19C15.9543 -19 7 -10.0457 7 1C7 1.33533 7.00825 1.66872 7.02456 2H7V12C7 15.2456 5.94733 18.4036 4 21C8.11612 21 11.845 19.3421 14.5553 16.6576C17.9708 19.3758 22.2957 21 27 21C38.0457 21 47 12.0457 47 1C47 -10.0457 38.0457 -19 27 -19Z"
                  fill="inherit"
                  fillRule="evenodd"
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
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
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
        </div> */}
 
      <p className="receive">{text}</p>
    </div>
  );
};

export default ChatBoxLeft;
