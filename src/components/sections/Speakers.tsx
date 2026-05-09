"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const speakers = [
  {
    name: "Sophia Bennett",
    role: "Chief AI Officer",
    company: "OpenAI",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Daniel Kim",
    role: "AI Research Lead",
    company: "Google DeepMind",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Emma Williams",
    role: "Founder & CEO",
    company: "Neural Labs",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Head of Robotics",
    company: "Tesla AI",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Sarah Johnson",
    role: "AI Policy Director",
    company: "Future Gov",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Speakers() {
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

          h-[400px]
          w-[400px]

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

          h-[340px]
          w-[340px]

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

          bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]

          bg-[size:48px_48px]
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
                gap-2

                rounded-full

                border
                border-emerald-400/20

                bg-emerald-400/10

                px-5
                py-2

                text-[11px]
                font-semibold

                uppercase
                tracking-[0.28em]

                text-emerald-300
              "
            >

              <Sparkles size={12} />

              Global Speakers

            </div>

            <h2
              className="
                mt-6

                max-w-5xl

                text-5xl
                md:text-6xl
                xl:text-7xl

                font-black

                leading-[0.95]

                tracking-[-0.06em]

                text-white
              "
            >

              Visionaries Building
              <span className="text-emerald-400">
                {" "}The AI Future
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

              Meet global AI leaders, founders,
              researchers, policymakers, and innovators
              shaping the next era of intelligent
              technology.

            </p>

          </div>

        </div>

        {/* speakers */}
        <div className="mt-20 overflow-hidden">

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >

            {[...speakers, ...speakers].map((speaker, index) => (

              <div
                key={`${speaker.name}-${index}`}
                className="
                  group

                  relative

                  w-[340px]

                  overflow-hidden

                  rounded-[36px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-emerald-400/20
                "
              >

                {/* image */}
                <div className="relative h-[420px] overflow-hidden">

                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="
                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                    "
                  />

                  {/* overlay */}
                  <div
                    className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-[#07110C]
                      via-[#07110C]/30
                      to-transparent
                    "
                  />

                  {/* company */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6

                      rounded-full

                      border
                      border-white/10

                      bg-black/30

                      px-4
                      py-2

                      text-[11px]
                      font-semibold

                      uppercase
                      tracking-[0.24em]

                      text-white

                      backdrop-blur-xl
                    "
                  >
                    {speaker.company}
                  </div>

                </div>

                {/* content */}
                <div className="relative p-8">

                  <div
                    className="
                      text-3xl

                      font-black

                      tracking-[-0.04em]

                      text-white
                    "
                  >
                    {speaker.name}
                  </div>

                  <div
                    className="
                      mt-3

                      text-lg

                      text-slate-400
                    "
                  >
                    {speaker.role}
                  </div>

                  {/* button */}
                  <div
                    className="
                      mt-8

                      flex
                      items-center
                      gap-3

                      text-sm
                      font-semibold

                      text-emerald-300
                    "
                  >

                    View Speaker

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </div>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}