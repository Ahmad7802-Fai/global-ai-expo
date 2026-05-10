"use client";

import { motion } from "framer-motion";

import {
  Building2,
  Globe2,
  Landmark,
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

const organizers = [
  {
    title: "Global Organizers",

    icon: Globe2,

    description:
      "International innovation organizations and ecosystem builders supporting the future of global AI collaboration.",
  },

  {
    title: "Strategic Partners",

    icon: Building2,

    description:
      "Enterprise technology companies, AI infrastructure providers, and innovation accelerators worldwide.",
  },

  {
    title: "Government Alliances",

    icon: Landmark,

    description:
      "Public-sector collaborations supporting smart nation initiatives, policy innovation, and AI transformation.",
  },
];

const logos = [
  "OPEN AI LABS",
  "NEXUS AI",
  "QUANTUM TECH",
  "FUTURE GRID",
  "AI VENTURES",
  "GLOBAL ROBOTICS",
];

export default function Organizers() {

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
      <GlowOrb
        className="
          left-[-120px]
          top-[120px]

          h-[340px]
          w-[340px]

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
        <div className="max-w-5xl mx-auto text-center">

          <SectionBadge
            center
            icon={Sparkles}
          >
            Organizers & Partners
          </SectionBadge>

          <SectionTitle dark>

            Powered By

            <br />

            <GradientText glow={false}>
              Global Collaboration
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

            Global AI Expo is supported by worldwide
            innovation leaders, enterprises,
            governments, ecosystem builders,
            and strategic AI partners.

          </p>

        </div>

        {/* cards */}
        <div
          className="
            mt-20

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {organizers.map((item, index) => {

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
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
              >

                <GlassCard
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
                        border-emerald-500/10

                        bg-emerald-500/10

                        text-emerald-700

                        shadow-[0_10px_30px_rgba(16,185,129,.08)]

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

                        text-[#07110C]
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
                        from-emerald-500/30
                        via-black/5
                        to-transparent
                      "
                    />

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

        {/* logo cloud */}
        <GlassCard
          hover={false}
          className="
            mt-24

            rounded-[40px]

            p-10
          "
        >

          <div
            className="
              grid
              gap-6

              md:grid-cols-3
              xl:grid-cols-6
            "
          >

            {logos.map((logo) => (

              <div
                key={logo}

                className="
                  group

                  flex
                  h-24

                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-black/5

                  bg-[#F7FBF8]

                  text-center

                  text-sm
                  font-black

                  tracking-[0.20em]

                  text-slate-700

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-emerald-500/20
                  hover:bg-white
                  hover:text-emerald-700
                  hover:shadow-[0_10px_30px_rgba(16,185,129,.08)]
                "
              >
                {logo}
              </div>

            ))}

          </div>

        </GlassCard>

      </SectionContainer>

    </section>
  );
}