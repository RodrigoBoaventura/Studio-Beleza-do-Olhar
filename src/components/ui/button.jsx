import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-pink-600 hover:bg-pink-700 text-white",
    outline:
      "border border-yellow-400 text-white hover:bg-yellow-400/20",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
