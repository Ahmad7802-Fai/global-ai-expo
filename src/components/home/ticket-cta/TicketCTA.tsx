"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Ticket,
  Building2,
  Rocket,
} from "lucide-react";

export default function TicketCTA() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-36

        bg-[#07110C]
      "
    >

      {/* glow */}
      <div
        className="
          absolute
          left-[-140px]
          top-[120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-emerald-400/12

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[0px]

          h-[360px]
          w-[360px]

          rounded-full

          bg-teal-400/10

          blur-[140px]
        "
      />

      {/* grid */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
      />

      <div className="container-ai relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative

            overflow-hidden

            rounded-[44px]

            border
            border-white/10

            bg-[linear-gradient(135deg,rgba(47,209,123,.14),rgba(14,165,164,.10),rgba(255,255,255,.04))]

            p-12
            md:p-16

            backdrop-blur-3xl

            shadow-[0_30px_120px_rgba(0,0,0,.35)]
          "
        >

          {/* inner glow */}
          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top_right,rgba(47,209,123,.20),transparent_30%)]
            "
          />

          {/* top line */}
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

            {/* badge */}
            <div
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-emerald-400/20

                bg-emerald-400/10

                px-5
                py-2

                text-[11px]
                font-semibold

                uppercase

                tracking-[0.30em]

                text-emerald-300
              "
            >
              Global AI Expo 2026
            </div>

            {/* title */}
            <h2
              className="
                mt-8

                max-w-5xl

                text-5xl
                md:text-6xl
                xl:text-7xl

                font-black

                leading-[0.95]

                tracking-[-0.06em]

                text-white
              "
            >

              Join The Most
              <span className="text-emerald-400">
                {" "}Immersive AI Event
              </span>

            </h2>

            {/* desc */}
            <p
              className="
                mt-8

                max-w-3xl

                text-lg

                leading-9

                text-slate-300
              "
            >

              Experience global networking,
              visionary AI conferences,
              startup showcases, robotics,
              investor matchmaking, and next-generation
              technology innovation.

            </p>

            {/* mini countdown */}
            <div className="mt-12 flex flex-wrap gap-5">

              {[
                ["163", "Days"],
                ["18", "Hours"],
                ["45", "Minutes"],
              ].map(([value, label]) => (

                <div
                  key={label}
                  className="
                    rounded-[24px]

                    border
                    border-white/10

                    bg-white/[0.06]

                    px-8
                    py-5

                    backdrop-blur-xl
                  "
                >

                  <div
                    className="
                      text-5xl

                      font-black

                      tracking-[-0.05em]

                      text-white
                    "
                  >
                    {value}
                  </div>

                  <div
                    className="
                      mt-2

                      text-[11px]

                      uppercase

                      tracking-[0.28em]

                      text-slate-400
                    "
                  >
                    {label}
                  </div>

                </div>

              ))}

            </div>

            {/* actions */}
            <div className="mt-14 flex flex-wrap gap-5">

              {/* tickets */}
              <button
                className="
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

                  shadow-[0_0_50px_rgba(47,209,123,.25)]

                  transition-all
                  duration-300

                  hover:scale-[1.03]
                "
              >

                <Ticket size={18} />

                Get Tickets

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </button>

              {/* sponsor */}
              <button
                className="
                  flex
                  h-14
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.06]

                  px-8

                  text-sm
                  font-semibold

                  text-white

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:bg-white/[0.10]
                "
              >

                <Building2 size={18} />

                Become Sponsor

              </button>

              {/* startup */}
              <button
                className="
                  flex
                  h-14
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.06]

                  px-8

                  text-sm
                  font-semibold

                  text-white

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:bg-white/[0.10]
                "
              >

                <Rocket size={18} />

                Apply Startup

              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}