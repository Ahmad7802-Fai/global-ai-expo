"use client";

import { motion } from "framer-motion";

import {
  Users,
  Rocket,
  Landmark,
  Globe2,
} from "lucide-react";

import {
  GridBackground,
  GlowOrb,
  GlassCard,
  SectionBadge,
  SectionContainer,
  SectionTitle,
} from "@/components/ui";

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

      {/* glow */}
      <GlowOrb
        className="
          left-[-100px]
          top-[120px]

          h-[320px]
          w-[320px]

          bg-emerald-400/20
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[40px]

          h-[360px]
          w-[360px]

          bg-green-500/20
        "
      />

      {/* grid */}
      <GridBackground
        className="
          opacity-[0.04]

          [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)]
        "
      />

      <SectionContainer>

        {/* stats */}
        <div
          className="
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

                    overflow-hidden

                    p-8

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
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >

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

                </GlassCard>

              </motion.div>

            );
          })}

        </div>

        {/* content */}
        <div
          className="
            mt-28

            grid
            gap-14

            lg:grid-cols-2
            lg:items-end
          "
        >

          <div>

            <SectionBadge dark>
              Global Scale Event
            </SectionBadge>

            <div className="mt-6">

              <SectionTitle
                dark
                title="Building The Largest"
                highlight="AI Ecosystem"
              />

            </div>

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

      </SectionContainer>

    </section>
  );
}