import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import {
  SectionBadge,
  SectionTitle,
  GridBackground,
  GlowOrb,
  SectionContainer,
  GlassCard,
} from "@/components/ui";

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
      <GlowOrb
        className="
          left-[-120px]
          top-[120px]

          h-[400px]
          w-[400px]

          bg-emerald-400/10
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[340px]
          w-[340px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground
        className="
          opacity-[0.04]

          [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
        "
      />

      <SectionContainer>

        {/* top */}
        <div
          className="
            grid
            gap-14

            lg:grid-cols-2
            lg:items-end
          "
        >

          <div>

            <SectionBadge dark>

              <Sparkles size={12} />

              Global Speakers

            </SectionBadge>

            <div className="mt-6">

              <SectionTitle
                title="Visionaries Building"
                highlight="The AI Future"
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

              Meet global AI leaders, founders,
              researchers, policymakers, and innovators
              shaping the next era of intelligent
              technology.

            </p>

          </div>

        </div>

        {/* slider */}
        <div
          className="
            relative

            mt-20

            overflow-hidden
          "
        >

          {/* fade left */}
          <div
            className="
              pointer-events-none

              absolute
              left-0
              top-0
              z-20

              hidden
              h-full
              w-40

              bg-gradient-to-r
              from-[#07110C]
              to-transparent

              lg:block
            "
          />

          {/* fade right */}
          <div
            className="
              pointer-events-none

              absolute
              right-0
              top-0
              z-20

              hidden
              h-full
              w-40

              bg-gradient-to-l
              from-[#07110C]
              to-transparent

              lg:block
            "
          />

          {/* wrapper */}
          <div className="marquee-wrapper">

            {/* track */}
            <div className="marquee-track">

              {[...speakers, ...speakers].map(
                (speaker, index) => (

                <GlassCard
                  key={`${speaker.name}-${index}`}
                  dark

                  className="
                    group

                    relative

                    w-[320px]
                    shrink-0

                    overflow-hidden

                    rounded-[36px]

                    p-0
                  "
                >

                  {/* image */}
                  <div
                    className="
                      relative

                      h-[420px]

                      overflow-hidden
                    "
                  >

                    <img
                      src={speaker.image}
                      alt={speaker.name}

                      loading="lazy"

                      className="
                        h-full
                        w-full

                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-[1.04]
                      "
                    />

                    {/* overlay */}
                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-[#07110C]
                        via-[#07110C]/20
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

                    {/* name */}
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

                    {/* role */}
                    <div
                      className="
                        mt-3

                        text-lg

                        text-slate-400
                      "
                    >
                      {speaker.role}
                    </div>

                    {/* divider */}
                    <div
                      className="
                        mt-8

                        h-px
                        w-full

                        bg-gradient-to-r
                        from-emerald-400/30
                        via-white/5
                        to-transparent
                      "
                    />

                    {/* action */}
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

                </GlassCard>

              ))}

            </div>

          </div>

        </div>

      </SectionContainer>

    </section>
  );
}