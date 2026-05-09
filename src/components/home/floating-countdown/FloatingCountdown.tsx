"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

export default function FloatingCountdown() {

  const targetDate = new Date("2026-10-20T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, [targetDate]);

  const items = [
    {
      label: "Days",
      value: timeLeft.days,
    },
    {
      label: "Hours",
      value: timeLeft.hours,
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
    },
  ];

  return (
    <div
      className="
        fixed

        bottom-4
        left-1/2

        z-50

        w-full

        -translate-x-1/2

        px-4
        md:px-6
      "
    >

      <div
        className="
          relative

          mx-auto

          w-full
          max-w-[920px]

          overflow-hidden

          rounded-[26px]
          md:rounded-[30px]

          border
          border-white/10

          bg-[rgba(6,16,12,.68)]

          px-3
          py-3

          md:px-5
          md:py-4

          backdrop-blur-[28px]

          shadow-[0_20px_80px_rgba(0,0,0,.45)]
        "
      >

        {/* adaptive glow */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,.10),transparent_32%)]
          "
        />

        {/* overlay */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-white/[0.03]
            to-transparent
          "
        />

        {/* top border */}
        <div
          className="
            absolute
            inset-x-0
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-emerald-400/50
            to-transparent
          "
        />

        <div className="relative z-10">

          {/* heading */}
          <div
            className="
              mb-3

              flex
              items-center
              justify-center
              gap-2

              text-[9px]
              md:text-[11px]

              font-semibold

              uppercase

              tracking-[0.28em]
              md:tracking-[0.34em]

              text-emerald-300
            "
          >

            <CalendarDays size={12} />

            GLOBAL AI EXPO 2026

          </div>

          {/* countdown */}
          <div
            className="
              grid

              grid-cols-2
              gap-3

              sm:grid-cols-4
              sm:gap-4
            "
          >

            {items.map((item) => (

              <div
                key={item.label}
                className="
                  relative

                  overflow-hidden

                  rounded-[18px]
                  md:rounded-[22px]

                  border
                  border-white/10

                  bg-white/[0.05]

                  px-3
                  py-3

                  md:px-5
                  md:py-4

                  text-center

                  backdrop-blur-xl
                "
              >

                {/* inner glow */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top,rgba(34,197,94,.08),transparent_60%)]
                  "
                />

                {/* value */}
                <div
                  className="
                    relative

                    text-2xl
                    md:text-3xl
                    lg:text-4xl

                    font-black

                    leading-none

                    tracking-[-0.05em]

                    text-white
                  "
                >
                  {item.value}
                </div>

                {/* label */}
                <div
                  className="
                    relative

                    mt-2

                    text-[9px]
                    md:text-[10px]

                    font-semibold

                    uppercase

                    tracking-[0.22em]
                    md:tracking-[0.30em]

                    text-slate-300
                  "
                >
                  {item.label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}