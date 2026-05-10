"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Ticket,
} from "lucide-react";

import {
  SectionContainer,
  SectionBadge,
  SectionTitle,
  GlassCard,
  GlowOrb,
  GridBackground,
  GradientText,
} from "@/components/ui";

export default function AboutCTA() {

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
          left-[-120px]
          top-[120px]

          h-[420px]
          w-[420px]

          bg-emerald-400/12
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[-40px]

          h-[360px]
          w-[360px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground />

      <SectionContainer>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >

          <GlassCard
            dark
            className="
              relative

              overflow-hidden

              rounded-[48px]

              px-8
              py-20

              text-center

              md:px-16
            "
          >

            {/* radial glow */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,rgba(47,209,123,.14),transparent_40%)]
              "
            />

            {/* floating glow */}
            <div
              className="
                absolute
                left-1/2
                top-[-120px]

                h-[280px]
                w-[280px]

                -translate-x-1/2

                rounded-full

                bg-emerald-400/10

                blur-[120px]
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
                via-emerald-400/40
                to-transparent
              "
            />

            <div className="relative z-10">

              {/* badge */}
              <SectionBadge
                dark
                icon={Sparkles}
                className="mx-auto"
              >
                Join The AI Revolution
              </SectionBadge>

              {/* title */}
              <SectionTitle
                center
                className="
                  mx-auto
                  mt-8

                  max-w-5xl

                  text-white
                "
              >

                Be Part Of The

                <br />

                <GradientText>
                  Future AI Ecosystem
                </GradientText>

              </SectionTitle>

              {/* desc */}
              <p
                className="
                  mx-auto
                  mt-10

                  max-w-3xl

                  text-lg
                  leading-9

                  text-slate-400
                "
              >

                Connect with global innovators,
                startups, investors, enterprises,
                and governments shaping the next
                generation AI economy.

              </p>

              {/* actions */}
              <div
                className="
                  mt-14

                  flex
                  flex-wrap
                  items-center
                  justify-center

                  gap-5
                "
              >

                {/* primary */}
                <button
                  className="
                    group

                    flex
                    h-14

                    items-center
                    gap-3

                    rounded-2xl

                    bg-gradient-to-r
                    from-emerald-400
                    to-green-500

                    px-8

                    text-sm
                    font-bold

                    text-[#04110A]

                    shadow-[0_0_40px_rgba(47,209,123,.25)]

                    transition-all
                    duration-300

                    hover:scale-[1.03]
                    hover:shadow-[0_0_60px_rgba(47,209,123,.40)]
                  "
                >

                  Get Tickets

                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />

                </button>

                {/* secondary */}
                <button
                  className="
                    flex
                    h-14

                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.05]

                    px-8

                    text-sm
                    font-semibold

                    text-white

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:bg-white/[0.08]
                  "
                >

                  <Ticket size={18} />

                  Become Partner

                </button>

              </div>

            </div>

          </GlassCard>

        </motion.div>

      </SectionContainer>

    </section>
  );
}