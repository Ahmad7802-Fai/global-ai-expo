"use client";

import { motion } from "framer-motion";
import {
  Users,
  Rocket,
  Landmark,
  Globe2,
} from "lucide-react";

const stats = [
  {
    value: "25K+",
    label: "Global Visitors",
    icon: Users,
  },
  {
    value: "500+",
    label: "AI Startups",
    icon: Rocket,
  },
  {
    value: "120+",
    label: "Investors",
    icon: Landmark,
  },
  {
    value: "80+",
    label: "Countries",
    icon: Globe2,
  },
];

export default function Stats() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[linear-gradient(180deg,#07111F_0%,#DCEEDF_35%,#B8E2C6_100%)]
      "
    >

      {/* SOFT GREEN GLOW */}
      <div
        className="
          absolute
          left-[-100px]
          top-[120px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-emerald-400/20

          blur-[100px]
        "
      />

      {/* GREEN GLOW */}
      <div
        className="
          absolute
          right-[-120px]
          bottom-[40px]

          h-[360px]
          w-[360px]

          rounded-full

          bg-green-500/20

          blur-[120px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
      />

      <div className="container-ai relative z-10">

        {/* TOP STATS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group

                  relative

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-white/40

                  bg-white/55

                  p-8

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,.08)]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:bg-white/70
                "
              >

                {/* glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0

                    h-24
                    w-24

                    rounded-full

                    bg-emerald-400/20

                    blur-3xl
                  "
                />

                {/* top */}
                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-emerald-50

                      text-emerald-600
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <div
                    className="
                      text-[11px]
                      font-semibold

                      uppercase
                      tracking-[0.28em]

                      text-slate-400
                    "
                  >
                    AI EXPO
                  </div>

                </div>

                {/* value */}
                <div
                  className="
                    mt-10

                    text-6xl

                    font-black

                    tracking-[-0.05em]

                    text-[#07111F]
                  "
                >
                  {item.value}
                </div>

                {/* label */}
                <div
                  className="
                    mt-3

                    text-lg

                    text-slate-600
                  "
                >
                  {item.label}
                </div>

                {/* divider */}
                <div
                  className="
                    mt-8

                    h-[2px]
                    w-full

                    rounded-full

                    bg-gradient-to-r
                    from-emerald-500
                    to-transparent
                  "
                />

              </motion.div>
            );
          })}

        </div>

        {/* CONTENT */}
        <div className="mt-28 grid gap-14 lg:grid-cols-2 lg:items-end">

          <div>

            <div
              className="
                mb-6

                inline-flex
                items-center

                rounded-full

                border
                border-emerald-500/20

                bg-white/60

                px-5
                py-2

                text-[11px]
                font-semibold

                uppercase
                tracking-[0.28em]

                text-emerald-700

                backdrop-blur-xl
              "
            >
              Global Scale Event
            </div>

            <h2
              className="
                max-w-3xl

                text-5xl
                md:text-6xl

                font-black

                leading-[0.95]

                tracking-[-0.05em]

                text-[#07111F]
              "
            >

              Building The Largest
              <span className="text-emerald-600">
                {" "}AI Ecosystem
              </span>

            </h2>

          </div>

          <div>

            <p
              className="
                max-w-xl

                text-lg

                leading-9

                text-slate-700
              "
            >

              Bringing together AI startups,
              enterprises, investors, governments,
              and technology leaders from around the
              world into one immersive ecosystem.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}