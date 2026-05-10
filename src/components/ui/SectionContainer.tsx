import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        container-ai

        relative
        z-10

        ${className}
      `}
    >
      {children}
    </div>
  );
}