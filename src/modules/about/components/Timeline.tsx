import {
  Ticket,
  Users,
  Mic2,
  Rocket,
  Trophy,
  Sparkles,
} from "lucide-react";

import {
  SectionBadge,
  SectionTitle,
  SectionContainer,
  GlassCard,
  GlowOrb,
  GridBackground,
  GradientText,
} from "@/components/ui";

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
        py-24
        md:py-32

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
        <div className="max-w-4xl">

          <SectionBadge
            dark
            icon={Sparkles}
          >
            Event Timeline
          </SectionBadge>

          <SectionTitle
            className="
              mt-7

              text-white
            "
          >

            The Journey Of

            <br />

            <GradientText>
              Global AI Expo
            </GradientText>

          </SectionTitle>

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
        <div className="relative mt-20 md:mt-24">

          {/* vertical line */}
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
              from-emerald-400/40
              via-white/10
              to-transparent
            "
          />

          <div className="space-y-8 md:space-y-10">

            {timeline.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    group

                    relative

                    flex
                    gap-5
                    md:gap-8
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

                      shadow-[0_10px_30px_rgba(16,185,129,.10)]

                      backdrop-blur-xl

                      transition-all
                      duration-500

                      group-hover:scale-105
                    "
                  >

                    <Icon size={28} />

                  </div>

                  {/* card */}
                  <GlassCard
                    dark
                    className="
                      flex-1

                      rounded-[32px]

                      p-6
                      md:p-8
                    "
                  >

                    {/* top line */}
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

                    {/* day */}
                    <div
                      className="
                        inline-flex
                        items-center

                        rounded-full

                        border
                        border-emerald-400/15

                        bg-emerald-400/10

                        px-4
                        py-2

                        text-[10px]
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
                        mt-6

                        text-2xl
                        md:text-[32px]

                        font-black

                        tracking-[-0.05em]

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
                        from-emerald-400/20
                        via-white/5
                        to-transparent
                      "
                    />

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

                  </GlassCard>

                </div>

              );
            })}

          </div>

        </div>

      </SectionContainer>

    </section>
  );
}