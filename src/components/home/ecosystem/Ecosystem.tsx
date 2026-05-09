"use client";

import { motion } from "framer-motion";
import {
  Building2,
  BriefcaseBusiness,
  Landmark,
  Wallet,
  Microscope,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    title: "AI Startup",
    icon: Building2,
    desc: "Accelerating next-generation AI innovation through global startup collaboration and exposure.",
  },
  {
    title: "Enterprise",
    icon: BriefcaseBusiness,
    desc: "Connecting enterprises with scalable AI solutions, infrastructure, and strategic partnerships.",
  },
  {
    title: "Government",
    icon: Landmark,
    desc: "Empowering smart nation initiatives and public-sector AI transformation ecosystems.",
  },
  {
    title: "Investors",
    icon: Wallet,
    desc: "Creating opportunities for venture capital, business matching, and funding access.",
  },
  {
    title: "Research",
    icon: Microscope,
    desc: "Bridging advanced AI research, deep technology, and industry implementation.",
  },
  {
    title: "Academy",
    icon: GraduationCap,
    desc: "Developing future AI talent, education ecosystems, and collaborative learning networks.",
  },
];

export default function Ecosystem() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[linear-gradient(180deg,#DCEEDF_0%,#C5E7CF_50%,#A8DDB8_100%)]
      "
    >

      {/* soft glow */}
      <div
        className="
          absolute
          left-[-120px]
          top-[100px]

          h-[360px]
          w-[360px]

          rounded-full

          bg-emerald-400/20

          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[0px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-green-500/20

          blur-[120px]
        "
      />

      {/* grid */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
      />

      <div className="container-ai relative z-10">

        {/* top */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

          <div>

            <div
              className="
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
              AI Ecosystem Network
            </div>

            <h2
              className="
                mt-6

                max-w-4xl

                text-5xl
                md:text-6xl

                font-black

                leading-[0.95]

                tracking-[-0.05em]

                text-[#07111F]
              "
            >

              Connected Global
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

              Integrating startups, enterprises,
              investors, research institutions,
              governments, and academia into one
              collaborative AI innovation ecosystem.

            </p>

          </div>

        </div>

        {/* cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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

                  rounded-[36px]

                  border
                  border-white/40

                  bg-white/55

                  p-10

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,.08)]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:bg-white/70
                  hover:shadow-[0_20px_60px_rgba(16,185,129,.18)]
                "
              >

                {/* glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0

                    h-28
                    w-28

                    rounded-full

                    bg-emerald-400/20

                    blur-3xl
                  "
                />

                {/* icon */}
                <div
                  className="
                    relative

                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-2xl

                    bg-emerald-50

                    text-emerald-600
                  "
                >
                  <Icon size={28} />
                </div>

                {/* title */}
                <h3
                  className="
                    relative

                    mt-10

                    text-3xl

                    font-black

                    tracking-[-0.03em]

                    text-[#07111F]
                  "
                >
                  {item.title}
                </h3>

                {/* desc */}
                <p
                  className="
                    relative

                    mt-5

                    leading-8

                    text-slate-600
                  "
                >
                  {item.desc}
                </p>

                {/* bottom */}
                <div
                  className="
                    relative

                    mt-10

                    flex
                    items-center
                    gap-3

                    text-sm
                    font-semibold

                    text-emerald-700
                  "
                >

                  Explore Ecosystem

                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}