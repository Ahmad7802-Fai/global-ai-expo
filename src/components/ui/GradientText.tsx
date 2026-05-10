"use client";

import { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;

  className?: string;

  glow?: boolean;

  animated?: boolean;

  dark?: boolean;
};

export default function GradientText({
  children,
  className = "",
  glow = true,
  animated = false,
  dark = false,
}: GradientTextProps) {

  return (
    <span
      className={`
        relative
        inline-block

        bg-gradient-to-r

        ${
          dark
            ? `
              from-[#10B981]
              via-[#059669]
              to-[#34D399]
            `
            : `
              from-[#A7F3D0]
              via-[#34D399]
              to-[#10B981]
            `
        }

        bg-[length:200%_100%]

        bg-clip-text

        text-transparent

        ${
          animated
            ? "animate-[gradientFlow_8s_linear_infinite]"
            : ""
        }

        ${
          glow
            ? `
              drop-shadow-[0_0_12px_rgba(16,185,129,.16)]
            `
            : ""
        }

        ${className}
      `}
    >

      {/* soft glow */}
      {glow && (
        <span
          className="
            absolute
            inset-0

            -z-10

            opacity-20

            blur-[6px]
          "
        >
          {children}
        </span>
      )}

      {children}

    </span>
  );
}