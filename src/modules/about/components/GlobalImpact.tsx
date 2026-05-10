"use client";

import { motion } from "framer-motion";

import {
  Globe2,
  Users,
  Building2,
  Rocket,
  Sparkles,
} from "lucide-react";

import {
  SectionBadge,
  SectionTitle,
  SectionContainer,
  GlassCard,
  GlowOrb,
  GridBackground,
  GradientText,
} from "@/components/ui";

const stats = [
  {
    label: "Countries",

    value: "80+",

    icon: Globe2,

    description:
      "Global participation from AI ecosystems worldwide.",
  },

  {
    label: "Attendees",

    value: "25K+",

    icon: Users,

    description:
      "Founders, innovators, investors, and enterprises.",
  },

  {
    label: "Companies",

    value: "500+",

    icon: Building2,

    description:
      "Enterprise exhibitors and AI technology leaders.",
  },

  {
    label: "Startups",

    value: "300+",

    icon: Rocket,

    description:
      "Emerging startups shaping future intelligence.",
  },
];

export default function GlobalImpact() {

  return (
    <section
      className="
        relative
        overflow-hidden
        py-32

        bg-[linear-gradient(180deg,#F7FBF8_0%,#ECF6F0_100%)]
      "
    >

      {/* glow */}
      <GlowOrb
        className="
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]

          bg-emerald-400/10
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[320px]
          w-[320px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground dark />

      <SectionContainer>

        {/* top */}
        <div
          className="
            mx-auto
            max-w-5xl

            text-center
          "
        >

          <SectionBadge
            icon={Sparkles}
            className="mx-auto"
          >
            Global Impact
          </SectionBadge>

          <SectionTitle dark>

            Connecting The World's

            <br />

            <GradientText>
              AI Ecosystem
            </GradientText>

          </SectionTitle>

          <p
            className="
              mx-auto
              mt-8

              max-w-3xl

              text-lg

              leading-9

              text-slate-700
            "
          >

            Global AI Expo brings together world-class
            innovators, startups, enterprises,
            governments, and investors into one
            integrated future technology platform.

          </p>

        </div>

        {/* stats */}
        <div
          className="
            mt-20

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.label}
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
              >

                <GlassCard
                  className="
                    group

                    relative

                    h-full

                    overflow-hidden

                    rounded-[32px]

                    border-black/5

                    bg-white/80

                    p-8

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-emerald-500/20
                    hover:bg-white
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

                  {/* top line */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      top-0

                      h-px

                      bg-gradient-to-r
                      from-transparent
                      via-emerald-500/40
                      to-transparent
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

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:rotate-3
                      "
                    >

                      <Icon size={28} />

                    </div>

                    {/* number */}
                    <div
                      className="
                        mt-10

                        text-6xl

                        font-black

                        leading-none

                        tracking-[-0.06em]

                        text-[#07110C]
                      "
                    >
                      {item.value}
                    </div>

                    {/* label */}
                    <div
                      className="
                        mt-4

                        text-sm
                        font-bold

                        uppercase

                        tracking-[0.24em]

                        text-emerald-700
                      "
                    >
                      {item.label}
                    </div>

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

                </GlassCard>

              </motion.div>

            );
          })}

        </div>

      </SectionContainer>

    </section>
  );
}