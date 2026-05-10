import {
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

import {
  GlowButton,
  SectionBadge,
} from "@/components/ui";

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

        pt-32
        pb-20
      "
    >

      <div
        className="
          w-full
          max-w-7xl

          animate-[fadeUp_1s_ease]
        "
      >

        {/* badge */}
        <SectionBadge
          dark
          icon={Sparkles}
          className="mb-8"
        >
          Global AI Ecosystem Platform
        </SectionBadge>

        {/* title */}
        <h1
          className="
            max-w-6xl

            text-[52px]
            leading-[0.92]

            md:text-[82px]

            xl:text-[132px]

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

        {/* desc */}
        <p
          className="
            mt-8

            max-w-3xl

            text-base
            md:text-[21px]

            leading-8
            md:leading-9

            text-slate-300
          "
        >

          Connecting startups, enterprises,
          governments, investors, and innovators
          into one integrated AI ecosystem
          platform for the next generation economy.

        </p>

        {/* actions */}
        <div
          className="
            mt-12

            flex
            flex-wrap

            items-center
            gap-4
          "
        >

          <GlowButton>

            Explore Expo

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />

          </GlowButton>

          <button
            className="
              flex
              h-14

              items-center
              gap-3

              rounded-2xl

              border
              border-white/10

              bg-white/[0.04]

              px-8

              text-sm
              font-semibold

              text-white

              transition-all
              duration-300

              hover:bg-white/[0.08]
            "
          >

            <Play size={18} />

            Watch Intro

          </button>

        </div>

      </div>

    </div>
  );
}