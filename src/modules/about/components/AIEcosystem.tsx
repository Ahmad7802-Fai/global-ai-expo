"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  Bot,
  Database,
  ShieldCheck,
  GraduationCap,
  HeartPulse,
  Sparkles,
} from "lucide-react";

const ecosystems = [

  {
    title: "AI Infrastructure",

    icon: Cpu,

    description:
      "Cloud computing, intelligent infrastructure, GPU acceleration, and enterprise-scale AI deployment systems.",
  },

  {
    title: "Robotics & Automation",

    icon: Bot,

    description:
      "Autonomous robotics, industrial AI systems, smart automation, and next-generation machine intelligence.",
  },

  {
    title: "Big Data & Intelligence",

    icon: Database,

    description:
      "Massive-scale data ecosystems powering predictive analytics and real-time intelligent decision making.",
  },

  {
    title: "Cybersecurity AI",

    icon: ShieldCheck,

    description:
      "AI-powered security ecosystems protecting enterprises, governments, and future digital infrastructure.",
  },

  {
    title: "AI Education",

    icon: GraduationCap,

    description:
      "Future-ready education platforms, adaptive intelligence learning systems, and research ecosystems.",
  },

  {
    title: "Healthcare AI",

    icon: HeartPulse,

    description:
      "Medical diagnostics, predictive healthcare, intelligent treatment systems, and health innovation platforms.",
  },

];

export default function AIEcosystem() {

  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[linear-gradient(180deg,#F7FBF8_0%,#EDF7F1_100%)]
      "
    >

      {/* glow */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]

          rounded-full

          bg-emerald-400/10

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[20px]

          h-[320px]
          w-[320px]

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

          bg-[linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)]

          bg-[size:52px_52px]
        "
      />

      <div className="container-ai relative z-10">

        {/* top */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-emerald-500/20

                bg-white/70

                px-5
                py-2

                text-[11px]
                font-semibold

                uppercase

                tracking-[0.30em]

                text-emerald-700

                backdrop-blur-xl
              "
            >

              <Sparkles size={13} />

              AI Ecosystem

            </div>

            <h2
              className="
                mt-7

                text-5xl
                md:text-6xl
                xl:text-7xl

                font-black

                leading-[0.95]

                tracking-[-0.06em]

                text-[#07110C]
              "
            >

              Building The Future
              <span className="text-emerald-600">
                {" "}AI Infrastructure
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

              Explore the interconnected ecosystem
              powering the future of artificial
              intelligence across industries,
              governments, enterprises, and society.

            </p>

          </div>

        </div>

        {/* ecosystem grid */}
        <div
          className="
            mt-20

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {ecosystems.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}

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

                  rounded-[32px]

                  border
                  border-black/5

                  bg-white/80

                  p-8

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,.05)]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-emerald-500/20
                  hover:shadow-[0_20px_70px_rgba(16,185,129,.10)]
                "
              >

                {/* glow */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0

                    bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,.10),transparent_35%)]

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">

                  {/* icon */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-emerald-500/10

                      bg-emerald-500/10

                      text-emerald-700
                    "
                  >

                    <Icon size={28} />

                  </div>

                  {/* title */}
                  <h3
                    className="
                      mt-10

                      text-3xl

                      font-black

                      leading-tight

                      tracking-[-0.04em]

                      text-[#07110C]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* desc */}
                  <p
                    className="
                      mt-6

                      leading-8

                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}