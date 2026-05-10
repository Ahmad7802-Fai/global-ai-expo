"use client";

import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function SectionBadge({
  children,
  dark = false,
  className,
}: SectionBadgeProps) {
  return (
    <div
      className={cn(
        `
        relative

        inline-flex
        items-center
        gap-3

        overflow-hidden

        rounded-full

        border

        px-6
        py-3

        backdrop-blur-2xl

        transition-all
        duration-300
      `,

        dark
          ? `
            border-emerald-500/20

            bg-white/55

            text-emerald-700

            shadow-[0_10px_30px_rgba(16,185,129,.08)]
          `
          : `
            border-emerald-400/20

            bg-white/[0.04]

            text-emerald-300

            shadow-[0_10px_30px_rgba(0,0,0,.18)]
          `,

        className
      )}
    >

      {/* glow */}
      <div
        className={cn(
          `
          absolute
          inset-0

          opacity-70
        `,
          dark
            ? `
              bg-[radial-gradient(circle_at_left,rgba(16,185,129,.14),transparent_45%)]
            `
            : `
              bg-[radial-gradient(circle_at_left,rgba(52,211,153,.12),transparent_45%)]
            `
        )}
      />

      {/* dot */}
      <div
        className={cn(
          `
          relative
          z-10

          h-2.5
          w-2.5

          rounded-full
        `,
          dark
            ? "bg-emerald-600"
            : "bg-emerald-300"
        )}
      />

      {/* text */}
      <span
        className="
          relative
          z-10

          text-[11px]
          font-bold

          uppercase

          tracking-[0.34em]
        "
      >
        {children}
      </span>

    </div>
  );
}