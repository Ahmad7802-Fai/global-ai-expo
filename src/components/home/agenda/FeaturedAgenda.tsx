"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const agenda = [
  {
    time: "09:00 AM",
    title: "Opening Keynote: The Future of Global AI",
    speaker: "Sophia Bennett • OpenAI",
    location: "Main Stage",
    category: "Keynote",
  },
  {
    time: "10:30 AM",
    title: "AI Infrastructure & Next-Gen Compute",
    speaker: "Daniel Kim • DeepMind",
    location: "Tech Arena",
    category: "Conference",
  },
  {
    time: "01:00 PM",
    title: "Startup Pitch & Investor Matching",
    speaker: "Global VC Network",
    location: "Investor Lounge",
    category: "Networking",
  },
  {
    time: "03:00 PM",
    title: "Robotics & Physical AI Showcase",
    speaker: "Tesla Robotics Team",
    location: "Robotics Arena",
    category: "Experience",
  },
];

export default function FeaturedAgenda() {
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

          blur-[120px]
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

          blur-[120px]
        "
      />

      {/* grid */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

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
              Featured Agenda
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

              Explore The Main
              <span className="text-emerald-400">
                {" "}Conference Sessions
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

              Experience curated keynote sessions,
              AI innovation showcases, networking
              forums, and immersive technology talks
              from world-class leaders.

            </p>

          </div>

        </div>

        {/* agenda */}
        <div className="mt-20 space-y-6">

          {agenda.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
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
                border-white/10

                bg-white/[0.04]

                p-8

                backdrop-blur-2xl

                transition-all
                duration-500

                hover:border-emerald-400/20
                hover:bg-white/[0.06]
              "
            >

              {/* glow */}
              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top_right,rgba(47,209,123,.10),transparent_35%)]
                "
              />

              <div
                className="
                  relative
                  z-10

                  grid
                  gap-10

                  lg:grid-cols-[220px_1fr_220px]
                  lg:items-center
                "
              >

                {/* time */}
                <div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2

                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.05]

                      px-5
                      py-3

                      text-sm
                      font-semibold

                      text-emerald-300
                    "
                  >

                    <Clock3 size={16} />

                    {item.time}

                  </div>

                </div>

                {/* content */}
                <div>

                  <div
                    className="
                      inline-flex

                      rounded-full

                      border
                      border-emerald-400/20

                      bg-emerald-400/10

                      px-4
                      py-2

                      text-[10px]
                      font-semibold

                      uppercase

                      tracking-[0.24em]

                      text-emerald-300
                    "
                  >
                    {item.category}
                  </div>

                  <h3
                    className="
                      mt-5

                      text-3xl
                      md:text-4xl

                      font-black

                      leading-tight

                      tracking-[-0.04em]

                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      text-lg

                      text-slate-400
                    "
                  >
                    {item.speaker}
                  </p>

                </div>

                {/* location */}
                <div
                  className="
                    flex
                    flex-col

                    items-start
                    lg:items-end
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      text-sm
                      font-medium

                      text-slate-300
                    "
                  >

                    <MapPin size={15} />

                    {item.location}

                  </div>

                  <button
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

                    View Session

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}