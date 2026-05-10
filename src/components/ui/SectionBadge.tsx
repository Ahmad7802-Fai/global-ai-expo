import { ReactNode } from "react";

import { LucideIcon } from "lucide-react";

type SectionBadgeProps = {
  children: ReactNode;

  dark?: boolean;

  center?: boolean;

  className?: string;

  icon?: LucideIcon;
};

export default function SectionBadge({
  children,
  dark = false,
  center = false,
  className = "",
  icon: Icon,
}: SectionBadgeProps) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-3

        rounded-full
        border

        px-5
        py-2.5

        text-[11px]
        font-semibold

        uppercase
        tracking-[0.28em]

        backdrop-blur-xl

        ${
          dark
            ? `
              border-emerald-400/20
              bg-emerald-400/10
              text-emerald-300
            `
            : `
              border-emerald-500/20
              bg-white/70
              text-emerald-700
            `
        }

        ${
          center
            ? "mx-auto"
            : ""
        }

        ${className}
      `}
    >

      {Icon && (
        <Icon size={14} />
      )}

      {children}

    </div>
  );
}