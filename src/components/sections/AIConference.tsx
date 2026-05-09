"use client";

import { motion } from "framer-motion";
import {
  Mic2,
  Cpu,
  Rocket,
  Building2,
  Bot,
  ArrowUpRight,
} from "lucide-react";

const zones = [
  {
    title: "Global AI Conference",
    desc: "Keynotes, panels, and visionary talks from world-class AI leaders and innovators.",
    icon: Mic2,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    large: true,
  },
  {
    title: "Startup Pavilion",
    desc: "Meet breakthrough AI startups shaping the future of technology.",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "AI Infrastructure",
    desc: "Explore next-generation compute, cloud, and enterprise AI systems.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Government Forum",
    desc: "Policy, governance, and AI transformation for smart nations.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Robotics Arena",
    desc: "Immersive robotics, automation, and real-world AI demonstrations.",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
    wide: true,
  },
];

export default function AIConference() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[linear-gradient(180deg,#F8FBF9_0%,#EDF7F1_50%,#E5F3EA_100%)]
      "
    >

      {/* glow */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-emerald-400/12

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

          bg-teal-400/10

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
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

          <div>

            <div
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-emerald-500/20

                bg-white/70

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
              Expo Experience
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

              Discover The Core
              <span className="text-emerald-600">
                {" "}AI Experience
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

              Explore immersive conference zones,
              startup ecosystems, robotics showcases,
              investor networking, and next-generation
              AI innovation experiences.

            </p>

          </div>

        </div>

        {/* bento */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">

          {zones.map((zone, index) => {
            const Icon = zone.icon;

            return (
              <motion.div
                key={zone.title}
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
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]

                  border
                  border-white/50

                  shadow-[0_10px_40px_rgba(15,23,42,.08)]

                  ${zone.large
                    ? "lg:col-span-7 h-[620px]"
                    : zone.wide
                    ? "lg:col-span-7 h-[320px]"
                    : "lg:col-span-5 h-[300px]"
                  }
                `}
              >

                {/* image */}
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="
                    absolute
                    inset-0

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
                    from-[#07110C]/90
                    via-[#07110C]/30
                    to-transparent
                  "
                />

                {/* glow */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top_right,rgba(47,209,123,.18),transparent_35%)]
                  "
                />

                {/* content */}
                <div
                  className="
                    relative
                    z-10

                    flex
                    h-full
                    flex-col
                    justify-between

                    p-8
                  "
                >

                  {/* top */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.08]

                      text-white

                      backdrop-blur-xl
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* bottom */}
                  <div>

                    <h3
                      className="
                        text-3xl
                        md:text-4xl

                        font-black

                        leading-tight

                        tracking-[-0.04em]

                        text-white
                      "
                    >
                      {zone.title}
                    </h3>

                    <p
                      className="
                        mt-5

                        max-w-xl

                        leading-8

                        text-slate-200
                      "
                    >
                      {zone.desc}
                    </p>

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

                      Explore Experience

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

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}