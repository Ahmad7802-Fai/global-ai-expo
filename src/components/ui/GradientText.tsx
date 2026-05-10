"use client";

import { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;

  className?: string;

  glow?: boolean;

  animated?: boolean;
};

export default function GradientText({
  children,
  className = "",
  glow = true,
  animated = true,
}: GradientTextProps) {

  return (
    <span
      className={`
        relative
        inline-block

        bg-[linear-gradient(92deg,#ffffff_0%,#A7F3D0_18%,#34D399_40%,#10B981_62%,#6EE7B7_82%,#ffffff_100%)]

        bg-[length:220%_100%]

        bg-clip-text

        text-transparent

        ${
          animated
            ? "animate-[gradientFlow_8s_linear_infinite]"
            : ""
        }

        ${
          glow
            ? "drop-shadow-[0_0_18px_rgba(16,185,129,.22)]"
            : ""
        }

        ${className}
      `}
    >

      {/* glow layer */}
      {glow && (
        <span
          className="
            absolute
            inset-0

            -z-10

            bg-[linear-gradient(92deg,#A7F3D0_0%,#34D399_35%,#10B981_65%,#6EE7B7_100%)]

            bg-clip-text

            text-transparent

            opacity-40

            blur-[10px]
          "
        >
          {children}
        </span>
      )}

      {children}

    </span>
  );
}