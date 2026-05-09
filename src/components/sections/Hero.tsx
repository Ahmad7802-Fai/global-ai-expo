"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import SceneBackground from "@/components/3d/SceneBackground";
import AIOrb from "@/components/3d/AIOrb";
import HologramRing from "@/components/3d/HologramRing";
import RobotModel from "@/components/3d/RobotModel";

export default function Hero() {

  /*
  =========================================
  FIX NEXT.JS APP ROUTER BACK NAVIGATION
  =========================================
  */

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

    /*
    force browser repaint
    */
    window.dispatchEvent(
      new Event("resize")
    );

  }, []);

  if (!mounted) return null;

  return (
    <section
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-[#040B08]
      "
    >

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"

        className="
          absolute
          inset-0

          z-0

          h-full
          w-full

          object-cover

          scale-[1.06]
        "
      >

        <source
          src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />

      </video>

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0

          z-[1]

          bg-[linear-gradient(180deg,rgba(4,10,7,.60)_0%,rgba(4,10,7,.45)_40%,rgba(4,10,7,.92)_100%)]
        "
      />

      {/* GREEN GLOW */}
      <div
        className="
          absolute
          inset-0

          z-[2]

          bg-[radial-gradient(circle_at_top_left,rgba(47,209,123,.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(14,165,164,.10),transparent_26%)]
        "
      />

      {/* FLOATING LIGHT */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          z-[2]

          h-[420px]
          w-[420px]

          rounded-full

          bg-emerald-400/12

          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          top-[120px]

          z-[2]

          h-[380px]
          w-[380px]

          rounded-full

          bg-teal-400/10

          blur-[120px]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0

          z-[2]

          opacity-[0.08]

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

          bg-[size:52px_52px]
        "
      />

      {/* =========================================
          3D LAYERS
      ========================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[3]

          overflow-hidden
        "
      >

        {/* cinematic background */}
        <SceneBackground />

        {/* robot */}
        <div
          className="
            absolute

            right-[-120px]
            bottom-[-60px]

            opacity-[0.22]

            scale-[1.05]
          "
        >

          <RobotModel />

        </div>

        {/* orb */}
        <div
          className="
            absolute

            right-[8%]
            top-1/2

            -translate-y-1/2

            opacity-90
          "
        >

          <AIOrb />

        </div>

        {/* hologram */}
        <div
          className="
            absolute

            right-[8%]
            top-1/2

            -translate-y-1/2

            scale-[1.45]

            opacity-40
          "
        >

          <HologramRing />

        </div>

      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          container-ai

          relative
          z-20

          flex
          min-h-screen
          items-center

          pt-40
          pb-24
        "
      >

        <div className="w-full">

          <motion.div

            initial={false}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
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
            <div className="max-w-7xl">

              <h1
                className="
                  text-[64px]

                  leading-[0.90]

                  md:text-[92px]

                  xl:text-[138px]

                  font-black

                  tracking-[-0.07em]

                  text-white

                  drop-shadow-[0_10px_40px_rgba(0,0,0,.45)]
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

            </div>

            {/* DESCRIPTION */}
            <div className="mt-10 max-w-3xl">

              <p
                className="
                  text-lg

                  md:text-[22px]

                  leading-9

                  text-slate-200

                  drop-shadow-[0_4px_20px_rgba(0,0,0,.35)]
                "
              >

                Connecting startups, enterprises,
                governments, investors, and innovators
                into one integrated AI ecosystem
                platform for the next generation economy.

              </p>

            </div>

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

                <Play size={18} />

                Watch Intro

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}