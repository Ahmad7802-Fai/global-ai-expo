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

          bg-emerald-400/10
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

            <div
              key={item.title}
              className="animate-[fadeUp_.6s_ease]"
              style={{
                animationDelay: `${index * 0.08}s`,
                animationFillMode: "both",
              }}
            >

              <GlassCard
                dark
                className="
                  group

                  relative

                  overflow-hidden

                  p-8

                  transition-all
                  duration-500

                  hover:-translate-y-1
                "
              >

                {/* top glow */}
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0

                    h-px

                    bg-gradient-to-r
                    from-transparent
                    via-emerald-400/40
                    to-transparent
                  "
                />

                {/* hover glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0

                    h-32
                    w-32

                    rounded-full

                    bg-emerald-400/10

                    blur-3xl

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
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

                        backdrop-blur-xl
                      "
                    >

                      <Clock3 size={16} />

                      {item.time}

                    </div>

                  </div>

                  {/* content */}
                  <div>

                    <SectionBadge
                      dark
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

                    {/* divider */}
                    <div
                      className="
                        mt-6

                        h-px
                        w-full

                        bg-gradient-to-r
                        from-emerald-400/30
                        via-white/5
                        to-transparent
                      "
                    />

                    <p
                      className="
                        mt-6

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

            </div>

          ))}

        </div>

      </SectionContainer>

    </section>
  );
}