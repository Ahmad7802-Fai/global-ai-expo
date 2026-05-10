import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: Props) {
  return (
    <div
      className={`
        relative

        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-2xl

        ${
          hover
            ? `
            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-emerald-400/20
            hover:bg-white/[0.06]
          `
            : ""
        }

        ${className}
      `}
    >

      {/* glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(47,209,123,.08),transparent_30%)]

          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}