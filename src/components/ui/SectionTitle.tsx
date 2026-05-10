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
        text-[52px]
        leading-[0.92]

        md:text-[72px]

        xl:text-[96px]

        font-black

        tracking-[-0.07em]

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
              <br />

              <GradientText dark={dark}>
                {highlight}
              </GradientText>
            </>
          )}
        </>
      )}

    </h2>
  );
}