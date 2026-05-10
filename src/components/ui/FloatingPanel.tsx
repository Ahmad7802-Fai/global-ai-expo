import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function FloatingPanel({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[32px]

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-2xl

        shadow-[0_20px_80px_rgba(0,0,0,.35)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}