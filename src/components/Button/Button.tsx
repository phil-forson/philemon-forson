import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  customlink?: string;
  showGradientAnimation?: boolean;
}
const Button = ({
  variant,
  text,
  icon,
  onClick,
  customlink,
  showGradientAnimation = true,
}: ButtonProps) => {
  return (
    <a
      className={
        "shadow-[var(--ds-shadow-small)] rounded-full flex justify-center gap-2 items-center text-sm px-6 h-12 border transition-all duration-200 hover:scale-105 " +
        (variant === "primary"
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent hover:from-blue-600 hover:to-purple-700"
          : "bg-[rgba(var(--color-background))] text-[rgb(var(--color-foreground))] border-[var(--ds-gray-200-value)] hover:border-blue-300 hover:bg-[var(--ds-gray-100-value)]") +
        (showGradientAnimation && variant === "primary"
          ? " gradient-border"
          : "")
      }
      href={customlink ? customlink : "#"}
    >
      {text}
      {icon && icon}
    </a>
  );
};

export default Button;
