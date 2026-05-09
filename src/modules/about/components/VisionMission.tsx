"use client";

import { motion } from "framer-motion";

import {
  Eye,
  Target,
  Sparkles,
} from "lucide-react";

const items = [

  {
    title: "Our Vision",

    icon: Eye,

    description:
      "To become the world's leading AI ecosystem platform connecting innovation, collaboration, and future global intelligence transformation.",

    points: [
      "Global AI collaboration",
      "Future innovation economy",
      "Human-centered AI ecosystem",
      "Cross-border technology impact",
    ],
  },

  {
    title: "Our Mission",

    icon: Target,

    description:
      "Empowering startups, enterprises, governments, and researchers through immersive AI experiences, partnerships, and strategic global networking.",

    points: [
      "Accelerate AI innovation",
      "Connect global ecosystems",
      "Enable strategic partnerships",
      "Support ethical AI growth",
    ],
  },

];

export default function VisionMission() {

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

          h-[340px]
          w-[340px]

          rounded-full

          bg-emerald-400/10

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[40px]

          h-[300px]
          w-[300px]

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

          bg-[size:48px_48px]
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

            Vision & Mission

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

            Powering The Next
            <span className="text-emerald-400">
              {" "}Global AI Era
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

            We are building a collaborative AI
            ecosystem platform where innovation,
            intelligence, and global partnerships
            converge into the future economy.

          </p>

        </div>

        {/* cards */}
        <div
          className="
            mt-20

            grid
            gap-8

            lg:grid-cols-2
          "
        >

          {items.map((item, index) => {

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
                  duration: 0.6,
                  delay: index * 0.12,
                }}

                viewport={{
                  once: true,
                }}

                className="
                  group

                  relative

                  overflow-hidden

                  rounded-[36px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  p-10

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

                      bg-emerald-400/10

                      text-emerald-300
                    "
                  >

                    <Icon size={30} />

                  </div>

                  {/* title */}
                  <h3
                    className="
                      mt-10

                      text-4xl

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

                      leading-8

                      text-slate-400
                    "
                  >
                    {item.description}
                  </p>

                  {/* points */}
                  <div className="mt-10 space-y-4">

                    {item.points.map((point) => (

                      <div
                        key={point}

                        className="
                          flex
                          items-center
                          gap-4

                          text-slate-300
                        "
                      >

                        <div
                          className="
                            h-2
                            w-2

                            rounded-full

                            bg-emerald-400
                          "
                        />

                        <span>
                          {point}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}