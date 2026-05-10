"use client";

import GradientText from "./GradientText";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  highlight,
  center = false,
  dark = false,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`
        text-5xl
        md:text-6xl
        xl:text-7xl

        font-black

        leading-[0.95]

        tracking-[-0.06em]

        ${
          dark
            ? "text-[#07110C]"
            : "text-white"
        }

        ${
          center
            ? "text-center"
            : ""
        }

        ${className}
      `}
    >

      {title}

      {highlight && (
        <>
          {" "}

          <GradientText>
            {highlight}
          </GradientText>
        </>
      )}

    </h2>
  );
}