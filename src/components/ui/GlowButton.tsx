import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export default function GlowButton({
  children,
  icon,
  className = "",
}: Props) {
  return (
    <button
      className={`
        group

        flex
        h-14
        items-center
        gap-3

        rounded-2xl

        bg-gradient-to-r
        from-emerald-400
        to-green-500

        px-8

        text-sm
        font-bold

        text-[#04110A]

        shadow-[0_0_40px_rgba(47,209,123,.25)]

        transition-all
        duration-300

        hover:scale-[1.03]
        hover:shadow-[0_0_60px_rgba(47,209,123,.40)]

        ${className}
      `}
    >

      {children}

      {icon}

    </button>
  );
}