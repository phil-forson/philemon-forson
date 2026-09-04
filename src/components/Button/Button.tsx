import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  customlink?: string;
}
const Button = ({
  variant,
  text,
  icon,
  onClick,
  customlink,
}: ButtonProps) => {
  return (
    <a
      className={
        "shadow-[var(--ds-shadow-small)] rounded-full flex justify-center gap-2 items-center text-sm px-6 h-12 border transition-all duration-200 hover:scale-105 motion-reduce:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 " +
        (variant === "primary"
          ? "bg-blue-600 text-white border-transparent hover:bg-blue-700"
          : "bg-[rgba(var(--color-background))] text-[rgb(var(--color-foreground))] border-[var(--ds-gray-200-value)] hover:border-blue-300 hover:bg-[var(--ds-gray-100-value)]")
      }
      href={customlink ? customlink : "#"}
    >
      {text}
      {icon && icon}
    </a>
  );
};

export default Button;
