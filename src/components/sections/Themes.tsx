"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Building2,
  Stethoscope,
  Bot,
  Factory,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const themes = [
  {
    title: "Generative AI",
    icon: BrainCircuit,
    desc: "Exploring frontier generative models, multimodal AI, and next-generation creativity systems.",
  },
  {
    title: "AI Infrastructure",
    icon: Cpu,
    desc: "Cloud compute, GPU ecosystems, inference scaling, and enterprise AI deployment.",
  },
  {
    title: "AI Security",
    icon: ShieldCheck,
    desc: "Building safe, secure, and trustworthy AI systems for the future economy.",
  },
  {
    title: "Smart Government",
    icon: Building2,
    desc: "Public-sector transformation powered by AI automation and intelligent infrastructure.",
  },
  {
    title: "AI Healthcare",
    icon: Stethoscope,
    desc: "Healthcare innovation, diagnostics, biotech AI, and intelligent medical ecosystems.",
  },
  {
    title: "Robotics",
    icon: Bot,
    desc: "Autonomous robotics, industrial automation, and physical AI applications.",
  },
  {
    title: "Future Industry",
    icon: Factory,
    desc: "Smart manufacturing, industrial AI, predictive systems, and future operations.",
  },
  {
    title: "Global AI Society",
    icon: Globe2,
    desc: "Ethics, governance, sustainability, and the future impact of AI globally.",
  },
];

export default function Themes() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[linear-gradient(180deg,#DDEEDF_0%,#CDE7D5_40%,#B8DFC4_100%)]
      "
    >

      {/* TOP FADE */}
      <div
        className="
          absolute
          inset-x-0
          top-0

          h-40

          bg-gradient-to-b
          from-[#08120D]
          to-transparent
        "
      />

      {/* SOFT GLOW */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]

          rounded-full

          bg-emerald-400/15

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

          bg-teal-400/12

          blur-[120px]
        "
      />

      {/* GRID */}
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

        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

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
              Innovation Tracks
            </div>

            <h2
              className="
                mt-6

                max-w-5xl

                text-5xl
                md:text-6xl
                xl:text-7xl

                font-black

                leading-[0.95]

                tracking-[-0.06em]

                text-[#07110C]
              "
            >

              Explore The Future
              <span className="text-emerald-600">
                {" "}of AI Innovation
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

              Discover immersive innovation tracks
              covering generative AI, robotics,
              healthcare, infrastructure, governance,
              and the future of intelligent systems.

            </p>

          </div>

        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {themes.map((theme, index) => {
            const Icon = theme.icon;

            return (
              <motion.div
                key={theme.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  group

                  relative

                  overflow-hidden

                  rounded-[34px]

                  border
                  border-white/50

                  bg-white/55

                  p-8

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,.06)]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:bg-white/72
                  hover:shadow-[0_20px_60px_rgba(34,197,94,.14)]
                "
              >

                {/* CARD GLOW */}
                <div
                  className="
                    absolute
                    right-0
                    top-0

                    h-24
                    w-24

                    rounded-full

                    bg-emerald-400/15

                    blur-3xl
                  "
                />

                {/* ICON */}
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

                {/* TITLE */}
                <h3
                  className="
                    relative

                    mt-10

                    text-2xl

                    font-black

                    leading-tight

                    tracking-[-0.03em]

                    text-[#07110C]
                  "
                >
                  {theme.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    relative

                    mt-5

                    leading-8

                    text-slate-600
                  "
                >
                  {theme.desc}
                </p>

                {/* BOTTOM */}
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

                  Explore Theme

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
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