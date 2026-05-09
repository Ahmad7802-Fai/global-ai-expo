"use client";

import { motion } from "framer-motion";

import {
  Globe2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import SceneBackground
  from "@/components/3d/SceneBackground";

import Globe
  from "@/components/3d/Globe";

import HologramRing
  from "@/components/3d/HologramRing";

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

      {/* background */}
      <SceneBackground />

      {/* gradient */}
      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(180deg,rgba(4,11,8,.72)_0%,rgba(4,11,8,.82)_45%,#040B08_100%)]
        "
      />

      {/* glow */}
      <div
        className="
          absolute
          left-[-140px]
          top-[120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-emerald-400/10

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[80px]

          h-[360px]
          w-[360px]

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

          bg-[size:52px_52px]
        "
      />

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
      <div
        className="
          container-ai

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
            <div
              className="
                inline-flex
                items-center
                gap-3

                rounded-full

                border
                border-emerald-400/20

                bg-emerald-400/10

                px-6
                py-3

                text-[11px]
                font-semibold

                uppercase

                tracking-[0.30em]

                text-emerald-300

                backdrop-blur-xl
              "
            >

              <Sparkles size={14} />

              About Global AI Expo

            </div>

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

                  shadow-[0_0_40px_rgba(47,209,123,.24)]

                  transition-all
                  duration-300

                  hover:scale-[1.03]
                "
              >

                Explore Ecosystem

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />

              </button>

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

      </div>

    </section>
  );
}