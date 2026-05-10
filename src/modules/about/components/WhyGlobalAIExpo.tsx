"use client";

import { motion } from "framer-motion";

import {
  Globe2,
  Landmark,
  Cpu,
  Rocket,
  Network,
  ShieldCheck,
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

const features = [
  {
    title: "Global AI Ecosystem",

    icon: Globe2,

    description:
      "Connecting international AI innovators, governments, enterprises, and startups into one collaborative ecosystem.",
  },

  {
    title: "Government Collaboration",

    icon: Landmark,

    description:
      "Strategic partnerships with policymakers and smart nation initiatives shaping future AI regulation.",
  },

  {
    title: "Enterprise Innovation",

    icon: Cpu,

    description:
      "Enterprise AI transformation showcases from infrastructure, cloud, automation, and data intelligence leaders.",
  },

  {
    title: "Startup Acceleration",

    icon: Rocket,

    description:
      "Empowering early-stage startups through exposure, networking, investment opportunities, and partnerships.",
  },

  {
    title: "Connected Intelligence",

    icon: Network,

    description:
      "Cross-industry collaboration creating integrated intelligence ecosystems for the future economy.",
  },

  {
    title: "Ethical AI Future",

    icon: ShieldCheck,

    description:
      "Supporting responsible AI innovation focused on sustainability, ethics, and long-term global impact.",
  },
];

export default function WhyGlobalAIExpo() {

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
      <GlowOrb
        className="
          left-[-140px]
          top-[120px]

          h-[420px]
          w-[420px]

          bg-emerald-400/10
        "
      />

      <GlowOrb
        className="
          right-[-140px]
          bottom-[20px]

          h-[360px]
          w-[360px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground />

      <SectionContainer>

        {/* top */}
        <div
          className="
            grid
            gap-14

            lg:grid-cols-2
            lg:items-end
          "
        >

          <div>

            <SectionBadge
              dark
              icon={Sparkles}
            >
              Why Global AI Expo
            </SectionBadge>

            <SectionTitle
              className="
                mt-7

                text-white
              "
            >

              More Than

              <br />

              <GradientText>
                An AI Event
              </GradientText>

            </SectionTitle>

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

              Global AI Expo is designed as a
              next-generation AI ecosystem platform
              where innovation, business, policy,
              infrastructure, and future technologies
              converge together.

            </p>

          </div>

        </div>

        {/* features */}
        <div
          className="
            mt-20

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {features.map((item, index) => {

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
              >

                <GlassCard
                  dark
                  className="
                    h-full

                    p-8
                  "
                >

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
                        border-white/10

                        bg-white/[0.05]

                        text-emerald-300

                        shadow-[0_10px_30px_rgba(16,185,129,.10)]

                        transition-all
                        duration-500

                        group-hover:scale-110
                        group-hover:rotate-3
                      "
                    >

                      <Icon size={28} />

                    </div>

                    {/* title */}
                    <h3
                      className="
                        mt-10

                        text-[30px]

                        font-black

                        leading-tight

                        tracking-[-0.05em]

                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    {/* divider */}
                    <div
                      className="
                        mt-6

                        h-px
                        w-full

                        bg-gradient-to-r
                        from-emerald-400/30
                        via-white/10
                        to-transparent
                      "
                    />

                    {/* desc */}
                    <p
                      className="
                        mt-6

                        leading-8

                        text-slate-400
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