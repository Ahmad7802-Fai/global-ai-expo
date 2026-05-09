"use client";

import { motion } from "framer-motion";

import {
  Globe2,
  Landmark,
  Cpu,
  Rocket,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [

  {
    title: "Global AI Ecosystem",

    icon: Globe2,

    description:
      "Connecting international AI innovators, governments, enterprises, and startups into one collaborative ecosystem.",
  },

  {
    title: "Government Collaboration",

    icon: Landmark,

    description:
      "Strategic partnerships with policymakers and smart nation initiatives shaping future AI regulation.",
  },

  {
    title: "Enterprise Innovation",

    icon: Cpu,

    description:
      "Enterprise AI transformation showcases from infrastructure, cloud, automation, and data intelligence leaders.",
  },

  {
    title: "Startup Acceleration",

    icon: Rocket,

    description:
      "Empowering early-stage startups through exposure, networking, investment opportunities, and partnerships.",
  },

  {
    title: "Connected Intelligence",

    icon: Network,

    description:
      "Cross-industry collaboration creating integrated intelligence ecosystems for the future economy.",
  },

  {
    title: "Ethical AI Future",

    icon: ShieldCheck,

    description:
      "Supporting responsible AI innovation focused on sustainability, ethics, and long-term global impact.",
  },

];

export default function WhyGlobalAIExpo() {

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
          left-[-140px]
          top-[120px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-emerald-400/10

          blur-[150px]
        "
      />

      <div
        className="
          absolute
          right-[-140px]
          bottom-[20px]

          h-[360px]
          w-[360px]

          rounded-full

          bg-teal-400/10

          blur-[150px]
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
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

          <div>

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

              Why Global AI Expo

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

              More Than
              <span className="text-emerald-400">
                {" "}An AI Event
              </span>

            </h2>

          </div>

          <div>

            <p
              className="
                max-w-xl

                text-lg

                leading-9

                text-slate-400
              "
            >

              Global AI Expo is designed as a
              next-generation AI ecosystem platform
              where innovation, business, policy,
              infrastructure, and future technologies
              converge together.

            </p>

          </div>

        </div>

        {/* features */}
        <div
          className="
            mt-20

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {features.map((item, index) => {

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
                  delay: index * 0.06,
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
                  border-white/10

                  bg-white/[0.04]

                  p-8

                  backdrop-blur-2xl

                  transition-all
                  duration-500

                  hover:-translate-y-2
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

                    <Icon size={28} />

                  </div>

                  {/* title */}
                  <h3
                    className="
                      mt-10

                      text-3xl

                      font-black

                      leading-tight

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

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}