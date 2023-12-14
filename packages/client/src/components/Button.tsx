import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  classes?: string;
  children: ReactNode;
  type: "primary" | "secondary";
}

export const Button = ({
  onClick,
  classes,
  children,
  type = "primary",
}: ButtonProps) => {
  const styles =
    type === "primary"
      ? "border-2 border-purple-600 bg-purple-600 text-white hover:bg-purple-800 hover:border-purple-800"
      : "border-2 border-white text-white hover:bg-white hover:text-black";

  return (
    <button
      onClick={onClick}
      className={`${classes} flex items-center gap-2 ${styles} font-bold transition-all rounded-md px-3 py-1`}
    >
      {children}
    </button>
  );
};
