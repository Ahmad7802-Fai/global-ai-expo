"use client";

import { motion } from "framer-motion";

import {
  Clock3,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  SectionBadge,
  SectionTitle,
  GlassCard,
  GridBackground,
  GlowOrb,
  SectionContainer,
} from "@/components/ui";

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
      <GlowOrb
        className="
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[320px]
          w-[320px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground />

      <SectionContainer>

        {/* top */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

          <div>

            <SectionBadge>
              Featured Agenda
            </SectionBadge>

            <div className="mt-6">

              <SectionTitle
                title="Explore The Main"
                highlight="Conference Sessions"
              />

            </div>

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
            >

              <GlassCard dark className="p-8">

                <div
                  className="
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

                    <SectionBadge
                      className="
                        px-4
                        py-2

                        text-[10px]

                        tracking-[0.24em]
                      "
                    >
                      {item.category}
                    </SectionBadge>

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

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </SectionContainer>

    </section>
  );
}