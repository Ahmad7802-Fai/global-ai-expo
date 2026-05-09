"use client";

import { motion } from "framer-motion";

import {
  Building2,
  Globe2,
  Landmark,
  Sparkles,
} from "lucide-react";

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

          opacity-[0.04]

          bg-[linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
      />

      <div className="container-ai relative z-10">

        {/* top */}
        <div className="max-w-5xl text-center mx-auto">

          <div
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              border
              border-emerald-500/20

              bg-white/70

              px-5
              py-2

              text-[11px]
              font-semibold

              uppercase

              tracking-[0.30em]

              text-emerald-700

              backdrop-blur-xl
            "
          >

            <Sparkles size={13} />

            Organizers & Partners

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

              text-[#07110C]
            "
          >

            Powered By
            <span className="text-emerald-600">
              {" "}Global Collaboration
            </span>

          </h2>

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

                className="
                  group

                  relative

                  overflow-hidden

                  rounded-[32px]

                  border
                  border-black/5

                  bg-white/80

                  p-8

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,.05)]

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-emerald-500/20
                  hover:shadow-[0_20px_70px_rgba(16,185,129,.10)]
                "
              >

                {/* glow */}
                <div
                  className="
                    absolute
                    inset-0

                    opacity-0

                    bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,.10),transparent_35%)]

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
                      border-emerald-500/10

                      bg-emerald-500/10

                      text-emerald-700
                    "
                  >

                    <Icon size={28} />

                  </div>

                  {/* title */}
                  <h3
                    className="
                      mt-10

                      text-3xl

                      font-black

                      tracking-[-0.04em]

                      text-[#07110C]
                    "
                  >
                    {item.title}
                  </h3>

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

              </motion.div>

            );
          })}

        </div>

        {/* logo cloud */}
        <div
          className="
            mt-24

            rounded-[40px]

            border
            border-black/5

            bg-white/70

            p-10

            backdrop-blur-2xl
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
                "
              >
                {logo}
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}