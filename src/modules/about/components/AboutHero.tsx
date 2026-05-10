"use client";

import { motion } from "framer-motion";

import {
  Globe2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import {
  SceneBackground,
  Globe,
  HologramRing,
} from "@/components/3d";

import {
  SectionContainer,
  SectionBadge,
  GlowButton,
  GlowOrb,
  GridBackground,
} from "@/components/ui";

export default function AboutHero() {

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-[#040B08]
      "
    >

      {/* bg scene */}
      <SceneBackground />

      {/* overlay */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(4,11,8,.72)_0%,rgba(4,11,8,.82)_45%,#040B08_100%)]
        "
      />

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
          right-[-120px]
          bottom-[80px]

          h-[360px]
          w-[360px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground />

      {/* 3D */}
      <div
        className="
          absolute
          right-[5%]
          top-1/2

          hidden
          xl:block

          -translate-y-1/2
        "
      >
        <Globe />
      </div>

      <div
        className="
          absolute
          right-[7%]
          top-1/2

          hidden
          xl:block

          -translate-y-1/2
        "
      >
        <HologramRing />
      </div>

      {/* content */}
      <SectionContainer
        className="
          relative
          z-10

          flex
          min-h-screen
          items-center

          pt-40
          pb-24
        "
      >

        <div className="max-w-5xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >

            {/* badge */}
            <SectionBadge
              dark
              icon={Sparkles}
            >
              About Global AI Expo
            </SectionBadge>

            {/* title */}
            <h1
              className="
                mt-8

                text-5xl
                md:text-7xl
                xl:text-[110px]

                font-black

                leading-[0.92]

                tracking-[-0.08em]

                text-white
              "
            >

              BUILDING THE
              <br />

              WORLD'S

              <span
                className="
                  ml-4

                  bg-gradient-to-r
                  from-emerald-300
                  via-green-400
                  to-emerald-500

                  bg-clip-text
                  text-transparent
                "
              >
                AI
              </span>

              <br />

              ECOSYSTEM

            </h1>

            {/* desc */}
            <p
              className="
                mt-10

                max-w-3xl

                text-lg
                md:text-[22px]

                leading-9

                text-slate-300
              "
            >

              Global AI Expo connects startups,
              enterprises, governments, researchers,
              investors, and innovators into one
              integrated ecosystem shaping the future
              of artificial intelligence globally.

            </p>

            {/* actions */}
            <div
              className="
                mt-14

                flex
                flex-wrap
                items-center

                gap-5
              "
            >

              <GlowButton>
                Explore Ecosystem

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </GlowButton>

              <div
                className="
                  flex
                  items-center
                  gap-3

                  text-sm

                  text-slate-400
                "
              >

                <Globe2 size={18} />

                Global Innovation Platform

              </div>

            </div>

          </motion.div>

        </div>

      </SectionContainer>

    </section>
  );
}