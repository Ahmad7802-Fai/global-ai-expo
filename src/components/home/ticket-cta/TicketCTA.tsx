import {
  ArrowUpRight,
  Ticket,
  Building2,
  Rocket,
} from "lucide-react";

import {
  SectionBadge,
  SectionTitle,
  GridBackground,
  GlowOrb,
  SectionContainer,
  GlassCard,
  GradientText,
} from "@/components/ui";

export default function TicketCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-36

        bg-[#07110C]
      "
    >

      {/* glow */}
      <GlowOrb
        className="
          left-[-140px]
          top-[120px]

          h-[420px]
          w-[420px]

          bg-emerald-400/12
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[360px]
          w-[360px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground />

      <SectionContainer>

        <div
          className="
            animate-[fadeUp_.7s_ease]
          "
        >

          <GlassCard
            dark
            className="
              relative

              overflow-hidden

              rounded-[44px]

              bg-[linear-gradient(135deg,rgba(47,209,123,.14),rgba(14,165,164,.10),rgba(255,255,255,.04))]

              p-12
              md:p-16

              shadow-[0_30px_120px_rgba(0,0,0,.35)]
            "
          >

            {/* inner glow */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top_right,rgba(47,209,123,.20),transparent_30%)]
              "
            />

            {/* top line */}
            <div
              className="
                absolute
                inset-x-0
                top-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-emerald-400/50
                to-transparent
              "
            />

            <div className="relative z-10">

              {/* badge */}
              <SectionBadge dark>
                Global AI Expo 2026
              </SectionBadge>

              {/* title */}
              <div className="mt-8">

                <SectionTitle
                  className="
                    max-w-5xl

                    text-white
                  "
                >

                  Join The Most

                  <br />

                  <GradientText>
                    Immersive AI Event
                  </GradientText>

                </SectionTitle>

              </div>

              {/* desc */}
              <p
                className="
                  mt-8

                  max-w-3xl

                  text-lg
                  leading-9

                  text-slate-300
                "
              >

                Experience global networking,
                visionary AI conferences,
                startup showcases, robotics,
                investor matchmaking, and next-generation
                technology innovation.

              </p>

              {/* countdown */}
              <div className="mt-12 flex flex-wrap gap-5">

                {[
                  ["163", "Days"],
                  ["18", "Hours"],
                  ["45", "Minutes"],
                ].map(([value, label]) => (

                  <div
                    key={label}

                    className="
                      rounded-[24px]

                      border
                      border-white/10

                      bg-white/[0.06]

                      px-8
                      py-5

                      backdrop-blur-xl
                    "
                  >

                    <div
                      className="
                        text-5xl

                        font-black

                        tracking-[-0.05em]

                        text-white
                      "
                    >
                      {value}
                    </div>

                    <div
                      className="
                        mt-2

                        text-[11px]

                        uppercase

                        tracking-[0.28em]

                        text-slate-400
                      "
                    >
                      {label}
                    </div>

                  </div>

                ))}

              </div>

              {/* actions */}
              <div className="mt-14 flex flex-wrap gap-5">

                {/* tickets */}
                <button
                  className="
                    group

                    flex
                    h-14
                    items-center
                    gap-3

                    rounded-2xl

                    bg-gradient-to-r
                    from-emerald-400
                    to-green-500

                    px-8

                    text-sm
                    font-bold

                    text-[#04110A]

                    shadow-[0_0_50px_rgba(47,209,123,.25)]

                    transition-all
                    duration-300

                    hover:scale-[1.03]
                  "
                >

                  <Ticket size={18} />

                  Get Tickets

                  <ArrowUpRight
                    size={18}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </button>

                {/* sponsor */}
                <button
                  className="
                    flex
                    h-14
                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.06]

                    px-8

                    text-sm
                    font-semibold

                    text-white

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:bg-white/[0.10]
                  "
                >

                  <Building2 size={18} />

                  Become Sponsor

                </button>

                {/* startup */}
                <button
                  className="
                    flex
                    h-14
                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.06]

                    px-8

                    text-sm
                    font-semibold

                    text-white

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:bg-white/[0.10]
                  "
                >

                  <Rocket size={18} />

                  Apply Startup

                </button>

              </div>

            </div>

          </GlassCard>

        </div>

      </SectionContainer>

    </section>
  );
}