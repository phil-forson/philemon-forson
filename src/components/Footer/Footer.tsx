import React from "react";

const Footer = () => {
  return (
    <div className="h-auto md:px-36 md:py-16 px-4 py-8 border-t border-[var(--ds-gray-200-value)] w-full">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <p className="text-sm">Philemon Forson</p>
          <p className="px-2 py-1 text-xs bg-[var(--muted)] rounded-md">
            Software Developer And Data Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
