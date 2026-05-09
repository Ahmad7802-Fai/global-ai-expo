"use client";

import { motion } from "framer-motion";

import {
  Ticket,
  Users,
  Mic2,
  Rocket,
  Trophy,
  Sparkles,
} from "lucide-react";

const timeline = [

  {
    title: "Registration & Networking",

    icon: Ticket,

    day: "Day 01",

    description:
      "Global attendees, founders, investors, enterprises, and governments begin networking and ecosystem onboarding.",
  },

  {
    title: "Global AI Summit",

    icon: Mic2,

    day: "Day 02",

    description:
      "Visionary keynotes, AI strategy sessions, future economy discussions, and enterprise transformation talks.",
  },

  {
    title: "Startup Showcase",

    icon: Rocket,

    day: "Day 03",

    description:
      "Emerging AI startups present breakthrough innovations, investor pitches, and next-generation technologies.",
  },

  {
    title: "Business Matching",

    icon: Users,

    day: "Day 04",

    description:
      "Private meetings and strategic partnerships connecting enterprises, startups, and global investors.",
  },

  {
    title: "Innovation Awards",

    icon: Trophy,

    day: "Finale",

    description:
      "Celebrating the world's most impactful AI innovations, visionary founders, and transformative technologies.",
  },

];

export default function Timeline() {

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
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]

          rounded-full

          bg-emerald-400/10

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[0px]

          h-[320px]
          w-[320px]

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

          opacity-[0.03]

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

          bg-[size:52px_52px]
        "
      />

      <div className="container-ai relative z-10">

        {/* top */}
        <div className="max-w-4xl">

          <div
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-emerald-400/20

              bg-emerald-400/10

              px-5
              py-2

              text-[11px]
              font-semibold

              uppercase

              tracking-[0.30em]

              text-emerald-300
            "
          >

            <Sparkles size={13} />

            Event Timeline

          </div>

          <h2
            className="
              mt-7

              text-5xl
              md:text-6xl
              xl:text-7xl

              font-black

              leading-[0.95]

              tracking-[-0.06em]

              text-white
            "
          >

            The Journey Of
            <span className="text-emerald-400">
              {" "}Global AI Expo
            </span>

          </h2>

          <p
            className="
              mt-8

              max-w-3xl

              text-lg

              leading-9

              text-slate-400
            "
          >

            Experience a multi-day AI ecosystem
            journey connecting innovation, strategy,
            startups, investment, and future
            technologies globally.

          </p>

        </div>

        {/* timeline */}
        <div className="relative mt-24">

          {/* center line */}
          <div
            className="
              absolute
              left-[31px]
              top-0

              hidden
              md:block

              h-full
              w-px

              bg-gradient-to-b
              from-emerald-400/50
              via-white/10
              to-transparent
            "
          />

          <div className="space-y-10">

            {timeline.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}

                  initial={{
                    opacity: 0,
                    x: -40,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}

                  viewport={{
                    once: true,
                  }}

                  className="
                    relative

                    flex
                    gap-8
                  "
                >

                  {/* icon */}
                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-16
                      w-16
                      shrink-0

                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-white/10

                      bg-emerald-400/10

                      text-emerald-300

                      backdrop-blur-xl
                    "
                  >

                    <Icon size={28} />

                  </div>

                  {/* card */}
                  <div
                    className="
                      group

                      relative

                      flex-1

                      overflow-hidden

                      rounded-[32px]

                      border
                      border-white/10

                      bg-white/[0.04]

                      p-8

                      backdrop-blur-2xl

                      transition-all
                      duration-500

                      hover:border-emerald-400/20
                      hover:bg-white/[0.05]
                    "
                  >

                    {/* glow */}
                    <div
                      className="
                        absolute
                        inset-0

                        opacity-0

                        bg-[radial-gradient(circle_at_top_right,rgba(47,209,123,.12),transparent_35%)]

                        transition-opacity
                        duration-500

                        group-hover:opacity-100
                      "
                    />

                    <div className="relative z-10">

                      {/* day */}
                      <div
                        className="
                          text-[11px]

                          font-semibold

                          uppercase

                          tracking-[0.30em]

                          text-emerald-300
                        "
                      >
                        {item.day}
                      </div>

                      {/* title */}
                      <h3
                        className="
                          mt-5

                          text-3xl

                          font-black

                          tracking-[-0.04em]

                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      {/* desc */}
                      <p
                        className="
                          mt-6

                          max-w-3xl

                          leading-8

                          text-slate-400
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  </div>

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}