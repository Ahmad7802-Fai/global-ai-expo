"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;

  className?: string;

  hover?: boolean;

  dark?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  dark = false,
}: GlassCardProps) {

  return (
    <div
      className={`
        group

        relative

        overflow-hidden

        rounded-[32px]

        border

        ${
          dark
            ? "border-white/10 bg-white/[0.03]"
            : "border-black/[0.06] bg-white/[0.68]"
        }

        backdrop-blur-[24px]

        shadow-[0_10px_50px_rgba(0,0,0,.10)]

        ${
          hover
            ? `
              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-[0_30px_100px_rgba(16,185,129,.16)]
            `
            : ""
        }

        ${className}
      `}
    >

      {/* top highlight */}
      <div
        className="
          absolute
          inset-x-0
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
        "
      />

      {/* emerald glow */}
      <div
        className="
          absolute
          -right-10
          -top-10

          h-40
          w-40

          rounded-full

          bg-emerald-400/10

          blur-3xl

          transition-all
          duration-700

          group-hover:scale-125
        "
      />

      {/* secondary glow */}
      <div
        className="
          absolute
          bottom-[-80px]
          left-[-60px]

          h-40
          w-40

          rounded-full

          bg-teal-400/10

          blur-3xl
        "
      />

      {/* glass gradient */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.02))]

          pointer-events-none
        "
      />

      {/* inner shadow */}
      <div
        className="
          absolute
          inset-0

          rounded-[32px]

          shadow-[inset_0_1px_0_rgba(255,255,255,.10)]

          pointer-events-none
        "
      />

      {/* hologram line */}
      <div
        className="
          absolute
          left-0
          top-0

          h-full
          w-[120px]

          bg-gradient-to-r
          from-white/10
          via-white/[0.03]
          to-transparent

          opacity-0

          transition-all
          duration-700

          group-hover:translate-x-12
          group-hover:opacity-100
        "
      />

      {/* content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}