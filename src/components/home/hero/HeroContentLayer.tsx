"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

export default function HeroContentLayer() {
  return (
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

      <div className="w-full max-w-7xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          {/* BADGE */}
          <div
            className="
              mb-8

              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-emerald-400/20

              bg-black/20

              px-6
              py-3

              text-[12px]
              font-semibold

              uppercase

              tracking-[0.28em]

              text-emerald-300

              backdrop-blur-xl
            "
          >

            <Sparkles size={14} />

            Global AI Ecosystem Platform

          </div>

          {/* TITLE */}
          <h1
            className="
              max-w-6xl

              text-[58px]
              leading-[0.92]

              md:text-[88px]

              xl:text-[138px]

              font-black

              tracking-[-0.07em]

              text-white
            "
          >

            THE FUTURE
            <br />

            OF AI
            <span
              className="
                ml-3

                bg-gradient-to-r
                from-emerald-300
                via-green-400
                to-emerald-500

                bg-clip-text

                text-transparent
              "
            >
              EXPO
            </span>

          </h1>

          {/* DESC */}
          <p
            className="
              mt-10

              max-w-3xl

              text-lg
              md:text-[22px]

              leading-9

              text-slate-200
            "
          >

            Connecting startups, enterprises,
            governments, investors, and innovators
            into one integrated AI ecosystem
            platform for the next generation economy.

          </p>

          {/* ACTIONS */}
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
              "
            >

              Explore Expo

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              />

            </button>

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
              "
            >

              <Play size={18} />

              Watch Intro

            </button>

          </div>

        </motion.div>

      </div>

    </div>
  );
}