import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  customlink?: string
}
const Button = ({ variant, text, icon, onClick, customlink }: ButtonProps) => {
  return (
    <a
      className=" shadow-[var(--ds-shadow-small)] rounded-full flex justify-center gap-2 items-center bg-[rgb(var(--ds-background-100))] text-sm px-[10px] h-10 border border-[var(--ds-gray-alpha-400)]"
      href={customlink ? customlink : "#"}
    >
      {text}
      {icon && icon}
    </a>
  );
};

export default Button;
