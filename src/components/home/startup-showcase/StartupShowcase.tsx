"use client";

import { motion } from "framer-motion";

import {
  HeartPulse,
  Landmark,
  Bot,
  GraduationCap,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const startups = [
  {
    name: "MediCore AI",
    category: "AI Healthcare",
    valuation: "$120M Valuation",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Advanced diagnostics and predictive healthcare systems powered by AI.",
  },

  {
    name: "QuantFlow",
    category: "AI Finance",
    valuation: "$240M Valuation",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Intelligent financial analytics and autonomous AI trading infrastructure.",
  },

  {
    name: "RoboSphere",
    category: "AI Robotics",
    valuation: "$310M Valuation",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1600&auto=format&fit=crop",
    description:
      "Building next-generation robotics and autonomous physical AI systems.",
  },

  {
    name: "NeuroLearn",
    category: "AI Education",
    valuation: "$85M Valuation",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Adaptive AI learning ecosystems and personalized education platforms.",
  },

  {
    name: "Sentinel AI",
    category: "AI Security",
    valuation: "$175M Valuation",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    description:
      "Enterprise AI cybersecurity and intelligent threat detection systems.",
  },
];

export default function StartupShowcase() {

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

          h-[380px]
          w-[380px]

          rounded-full

          bg-emerald-400/10

          blur-[140px]
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

        {/* top */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

          <div>

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

                tracking-[0.28em]

                text-emerald-300
              "
            >
              Startup Showcase
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

                text-white
              "
            >

              Meet The Most
              <span className="text-emerald-400">
                {" "}Innovative AI Startups
              </span>

            </h2>

          </div>

          <div>

            <p
              className="
                max-w-xl

                text-lg

                leading-9

                text-slate-400
              "
            >

              Discover emerging startups transforming
              healthcare, robotics, finance, education,
              and cybersecurity through intelligent
              technologies.

            </p>

          </div>

        </div>

        {/* cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {startups.map((startup, index) => {

            const Icon = startup.icon;

            return (
              <motion.div
                key={startup.name}

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
                  delay: index * 0.08,
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
                  border-white/10

                  bg-white/[0.04]

                  backdrop-blur-2xl

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-emerald-400/20
                  hover:bg-white/[0.06]
                "
              >

                {/* futuristic glow */}
                <div
                  className="
                    absolute
                    right-[-40px]
                    top-[120px]

                    h-[220px]
                    w-[220px]

                    rounded-full

                    bg-emerald-400/10

                    blur-[80px]

                    transition-all
                    duration-700

                    group-hover:scale-125
                  "
                />

                {/* orb */}
                <div
                  className="
                    absolute
                    right-10
                    top-[120px]

                    h-24
                    w-24

                    rounded-full

                    border
                    border-emerald-400/20

                    bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.45),rgba(16,185,129,.15),transparent_72%)]

                    shadow-[0_0_40px_rgba(16,185,129,.22)]

                    backdrop-blur-2xl

                    transition-all
                    duration-700

                    group-hover:rotate-[25deg]
                    group-hover:scale-110
                  "
                />

                {/* ring */}
                <div
                  className="
                    absolute
                    right-[72px]
                    top-[150px]

                    h-10
                    w-10

                    rounded-full

                    border
                    border-emerald-300/30
                  "
                />

                {/* hologram sweep */}
                <div
                  className="
                    absolute
                    left-0
                    top-0

                    h-full
                    w-[120px]

                    bg-gradient-to-r
                    from-emerald-400/10
                    via-emerald-300/5
                    to-transparent

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:translate-x-10
                    group-hover:opacity-100
                  "
                />

                {/* image */}
                <div
                  className="
                    relative

                    h-[260px]

                    overflow-hidden
                  "
                >

                  <img
                    src={startup.image}
                    alt={startup.name}
                    className="
                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />

                  {/* overlay */}
                  <div
                    className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-[#07110C]
                      via-[#07110C]/20
                      to-transparent
                    "
                  />

                  {/* category */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6

                      rounded-full

                      border
                      border-white/10

                      bg-black/30

                      px-4
                      py-2

                      text-[10px]
                      font-semibold

                      uppercase

                      tracking-[0.24em]

                      text-white

                      backdrop-blur-xl
                    "
                  >
                    {startup.category}
                  </div>

                </div>

                {/* content */}
                <div className="relative z-10 p-8">

                  {/* icon */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-emerald-400/10

                      text-emerald-300
                    "
                  >

                    <Icon size={24} />

                  </div>

                  {/* title */}
                  <h3
                    className="
                      mt-8

                      text-3xl

                      font-black

                      tracking-[-0.04em]

                      text-white
                    "
                  >
                    {startup.name}
                  </h3>

                  {/* valuation */}
                  <div
                    className="
                      mt-3

                      text-sm
                      font-semibold

                      uppercase

                      tracking-[0.18em]

                      text-emerald-300
                    "
                  >
                    {startup.valuation}
                  </div>

                  {/* desc */}
                  <p
                    className="
                      mt-6

                      leading-8

                      text-slate-400
                    "
                  >
                    {startup.description}
                  </p>

                  {/* action */}
                  <div
                    className="
                      mt-8

                      flex
                      items-center
                      gap-3

                      text-sm
                      font-semibold

                      text-emerald-300
                    "
                  >

                    View Startup

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

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}