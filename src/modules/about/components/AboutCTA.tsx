"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Ticket,
} from "lucide-react";

export default function AboutCTA() {

  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[#07110C]
      "
    >

      {/* glow */}
      <div
        className="
          absolute
          left-[-120px]
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
          bottom-[-40px]

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

          bg-[size:52px_52px]
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
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="
            relative

            overflow-hidden

            rounded-[48px]

            border
            border-white/10

            bg-white/[0.04]

            px-8
            py-20

            text-center

            backdrop-blur-3xl

            md:px-16
          "
        >

          {/* inner glow */}
          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top,rgba(47,209,123,.14),transparent_40%)]
            "
          />

          {/* floating blur */}
          <div
            className="
              absolute
              left-1/2
              top-[-120px]

              h-[280px]
              w-[280px]

              -translate-x-1/2

              rounded-full

              bg-emerald-400/10

              blur-[120px]
            "
          />

          <div className="relative z-10">

            {/* badge */}
            <div
              className="
                inline-flex
                items-center
                gap-3

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

              <Sparkles size={13} />

              Join The AI Revolution

            </div>

            {/* title */}
            <h2
              className="
                mx-auto
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

              Be Part Of The
              <span className="text-emerald-400">
                {" "}Future AI Ecosystem
              </span>

            </h2>

            {/* desc */}
            <p
              className="
                mx-auto
                mt-10

                max-w-3xl

                text-lg

                leading-9

                text-slate-400
              "
            >

              Connect with global innovators,
              startups, investors, enterprises,
              and governments shaping the next
              generation AI economy.

            </p>

            {/* actions */}
            <div
              className="
                mt-14

                flex
                flex-wrap
                items-center
                justify-center

                gap-5
              "
            >

              {/* primary */}
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

                  shadow-[0_0_40px_rgba(47,209,123,.25)]

                  transition-all
                  duration-300

                  hover:scale-[1.03]
                  hover:shadow-[0_0_60px_rgba(47,209,123,.40)]
                "
              >

                Get Tickets

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />

              </button>

              {/* secondary */}
              <button
                className="
                  flex
                  h-14

                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/[0.05]

                  px-8

                  text-sm
                  font-semibold

                  text-white

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:bg-white/[0.08]
                "
              >

                <Ticket size={18} />

                Become Partner

              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}