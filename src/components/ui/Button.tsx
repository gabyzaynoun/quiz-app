import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" };

export function Button({ className = "", variant = "solid", ...props }: Props) {
  const base = "rounded-lg px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-gray-300 hover:bg-gray-100"
      : "bg-black text-white hover:opacity-90";
  return <button {...props} className={`${base} ${styles} ${className}`} />;
}
