"use client";

import { motion } from "framer-motion";

import {
  SectionBadge,
  SectionTitle,
  GridBackground,
  GlowOrb,
  SectionContainer,
  GlassCard,
} from "@/components/ui";

const partners = [
  "OPENAI",
  "NVIDIA",
  "MICROSOFT",
  "GOOGLE CLOUD",
  "META AI",
  "AWS",
  "IBM",
  "ANTHROPIC",
  "HUGGING FACE",
  "INTEL",
];

export default function PartnersSponsors() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-28

        bg-[linear-gradient(180deg,#EDF7F1_0%,#F8FBF9_100%)]
      "
    >

      {/* glow */}
      <GlowOrb
        className="
          left-[-120px]
          top-[100px]

          h-[320px]
          w-[320px]

          bg-emerald-400/10
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[280px]
          w-[280px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground
        className="
          opacity-[0.03]

          [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)]
        "
      />

      <SectionContainer>

        {/* top */}
        <div className="text-center">

          <SectionBadge
            className="
              border-emerald-500/20

              bg-white/70

              text-emerald-700
            "
          >
            Partners & Sponsors
          </SectionBadge>

          <div className="mt-6">

            <SectionTitle
              dark
              center
              title="Powered By Global"
              highlight="Technology Leaders"
            />

          </div>

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

            Collaborating with world-leading AI,
            cloud, enterprise, and innovation
            companies building the future of
            intelligent technology.

          </p>

        </div>

        {/* marquee */}
        <div className="mt-20 space-y-6">

          {/* row 1 */}
          <GlassCard
            className="
              overflow-hidden

              border-white/60

              bg-white/60

              py-8

              shadow-[0_10px_40px_rgba(15,23,42,.05)]
            "
          >

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                flex
                w-max
                items-center
                gap-16
              "
            >

              {[...partners, ...partners].map(
                (item, index) => (

                <div
                  key={`${item}-${index}`}
                  className="
                    flex
                    h-20
                    min-w-[260px]

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-slate-200/70

                    bg-white/80

                    px-10

                    text-center

                    text-2xl
                    font-black

                    tracking-[0.16em]

                    text-slate-800

                    transition-all
                    duration-300

                    hover:border-emerald-300
                    hover:text-emerald-600
                  "
                >
                  {item}
                </div>

              ))}

            </motion.div>

          </GlassCard>

          {/* row 2 */}
          <GlassCard
            className="
              overflow-hidden

              border-white/60

              bg-white/50

              py-8

              shadow-[0_10px_40px_rgba(15,23,42,.05)]
            "
          >

            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                flex
                w-max
                items-center
                gap-16
              "
            >

              {[...partners, ...partners].map(
                (item, index) => (

                <div
                  key={`${item}-bottom-${index}`}
                  className="
                    flex
                    h-20
                    min-w-[260px]

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-slate-200/70

                    bg-white/80

                    px-10

                    text-center

                    text-2xl
                    font-black

                    tracking-[0.16em]

                    text-slate-800

                    transition-all
                    duration-300

                    hover:border-emerald-300
                    hover:text-emerald-600
                  "
                >
                  {item}
                </div>

              ))}

            </motion.div>

          </GlassCard>

        </div>

      </SectionContainer>

    </section>
  );
}