"use client";

import { ReactNode } from "react";

import GradientText from "./GradientText";

interface SectionTitleProps {
  title?: string;

  highlight?: string;

  children?: ReactNode;

  center?: boolean;

  dark?: boolean;

  className?: string;
}

export default function SectionTitle({
  title,
  highlight,
  children,
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

      {children ? (
        children
      ) : (
        <>
          {title}

          {highlight && (
            <>
              {" "}

              <GradientText>
                {highlight}
              </GradientText>
            </>
          )}
        </>
      )}

    </h2>
  );
}