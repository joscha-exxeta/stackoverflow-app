import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  classes?: string;
  children: ReactNode;
  type?: "primary" | "secondary";
  size?: "lg" | "md";
}

export const Button = ({
  onClick,
  classes,
  children,
  type = "primary",
  size = "lg",
}: ButtonProps) => {
  const typeStyles =
    type === "primary"
      ? "border-2 border-purple-600 bg-purple-600 text-white hover:bg-purple-800 hover:border-purple-800"
      : "border-2 border-white text-white hover:bg-white hover:text-black";
  const sizeStyles = size === "lg" ? "px-4 py-2" : "px-3 py-1";

  return (
    <button
      onClick={onClick}
      className={`${classes} flex items-center gap-2 ${typeStyles} font-bold transition-all rounded-md ${sizeStyles}`}
    >
      {children}
    </button>
  );
};
