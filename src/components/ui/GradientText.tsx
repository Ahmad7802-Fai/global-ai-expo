"use client";

import { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  return (
    <span
      className={`
        inline-block

        bg-gradient-to-r
        from-emerald-300
        via-green-400
        to-emerald-500

        bg-clip-text
        [-webkit-background-clip:text]

        text-transparent
        [-webkit-text-fill-color:transparent]

        drop-shadow-[0_0_12px_rgba(16,185,129,.18)]

        ${className}
      `}
    >
      {children}
    </span>
  );
}