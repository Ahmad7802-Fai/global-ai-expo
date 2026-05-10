import {
  Eye,
  Target,
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

          h-[340px]
          w-[340px]

          bg-emerald-400/10
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[40px]

          h-[300px]
          w-[300px]

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
            Vision & Mission
          </SectionBadge>

          <SectionTitle
            className="
              mt-7

              text-white
            "
          >

            Powering The Next

            <br />

            <GradientText>
              Global AI Era
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
            gap-6
            lg:gap-8

            lg:grid-cols-2
          "
        >

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <GlassCard
                key={item.title}
                dark
                className="
                  group

                  h-full

                  rounded-[36px]

                  p-8
                  md:p-10
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

                    bg-white/[0.05]

                    text-emerald-300

                    shadow-[0_10px_30px_rgba(16,185,129,.10)]

                    transition-all
                    duration-500

                    group-hover:scale-105
                    group-hover:rotate-3
                  "
                >

                  <Icon size={30} />

                </div>

                {/* title */}
                <h3
                  className="
                    mt-10

                    text-[34px]
                    md:text-[42px]

                    font-black

                    leading-none

                    tracking-[-0.05em]

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

                {/* divider */}
                <div
                  className="
                    mt-10

                    h-px
                    w-full

                    bg-gradient-to-r
                    from-emerald-400/30
                    via-white/10
                    to-transparent
                  "
                />

                {/* points */}
                <div className="mt-10 space-y-5">

                  {item.points.map((point) => (

                    <div
                      key={point}
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >

                      <div
                        className="
                          relative

                          h-2.5
                          w-2.5

                          rounded-full

                          bg-emerald-400
                        "
                      >

                        <div
                          className="
                            absolute
                            inset-0

                            rounded-full

                            bg-emerald-400

                            blur-[6px]

                            opacity-80
                          "
                        />

                      </div>

                      <span
                        className="
                          text-[15px]

                          text-slate-300
                        "
                      >
                        {point}
                      </span>

                    </div>

                  ))}

                </div>

              </GlassCard>

            );
          })}

        </div>

      </SectionContainer>

    </section>
  );
}