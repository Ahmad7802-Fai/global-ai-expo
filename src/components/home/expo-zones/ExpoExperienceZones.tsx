import {
  Mic2,
  Rocket,
  Bot,
  Building2,
  BriefcaseBusiness,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

import {
  SectionBadge,
  SectionTitle,
  GridBackground,
  GlowOrb,
  SectionContainer,
  GlassCard,
} from "@/components/ui";

const zones = [
  {
    title: "AI Conference",
    desc: "Visionary talks, keynotes, and panels from global AI leaders shaping the future economy.",
    icon: Mic2,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    className:
      "lg:col-span-7 lg:row-span-2 min-h-[620px]",
  },

  {
    title: "Startup Pavilion",
    desc: "Meet breakthrough startups building the next generation of AI innovation.",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    className:
      "lg:col-span-5 min-h-[300px]",
  },

  {
    title: "Robotics Arena",
    desc: "Immersive robotics, automation, and intelligent machine demonstrations.",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
    className:
      "lg:col-span-5 min-h-[300px]",
  },

  {
    title: "Government Forum",
    desc: "Smart nation transformation, AI policy, and public-sector innovation ecosystems.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1600&auto=format&fit=crop",
    className:
      "lg:col-span-4 min-h-[320px]",
  },

  {
    title: "Business Matching",
    desc: "Private networking sessions connecting startups, investors, and enterprises.",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    className:
      "lg:col-span-4 min-h-[320px]",
  },

  {
    title: "Innovation Awards",
    desc: "Celebrating the world’s most impactful AI innovations and future technologies.",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    className:
      "lg:col-span-4 min-h-[320px]",
  },
];

export default function ExpoExperienceZones() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32

        bg-[linear-gradient(180deg,#F8FBF9_0%,#EDF7F1_45%,#E2F2E8_100%)]
      "
    >

      {/* glow */}
      <GlowOrb
        className="
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]

          bg-emerald-400/12
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
      <GridBackground
        dark
        className="
          opacity-[0.03]

          [background-image:linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)]
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
              Expo Experience Zones
            </SectionBadge>

            <div className="mt-6">

              <SectionTitle
                dark
                title="Experience The Future"
                highlight="of AI Innovation"
              />

            </div>

          </div>

          <div>

            <p
              className="
                max-w-xl

                text-lg
                leading-9

                text-slate-700
              "
            >

              Explore immersive AI experiences,
              startup showcases, robotics arenas,
              networking zones, and next-generation
              innovation ecosystems.

            </p>

          </div>

        </div>

        {/* layout */}
        <div
          className="
            mt-20

            grid
            gap-6

            lg:grid-cols-12
            lg:auto-rows-[300px]
          "
        >

          {zones.map((zone) => {

            const Icon = zone.icon;

            return (

              <div
                key={zone.title}
                className={`
                  animate-[fadeUp_.6s_ease]

                  ${zone.className}
                `}
              >

                <GlassCard
                  className="
                    group

                    relative

                    h-full

                    overflow-hidden

                    rounded-[36px]

                    border-white/40

                    bg-white/50

                    p-0

                    backdrop-blur-xl

                    shadow-[0_10px_40px_rgba(15,23,42,.06)]

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-emerald-500/20
                    hover:shadow-[0_20px_60px_rgba(34,197,94,.12)]
                  "
                >

                  {/* image */}
                  <img
                    src={zone.image}
                    alt={zone.title}
                    loading="lazy"
                    className="
                      absolute
                      inset-0

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
                      from-[#07110C]/95
                      via-[#07110C]/45
                      to-transparent
                    "
                  />

                  {/* glow */}
                  <div
                    className="
                      absolute
                      inset-0

                      bg-[radial-gradient(circle_at_top_right,rgba(47,209,123,.16),transparent_35%)]
                    "
                  />

                  {/* content */}
                  <div
                    className="
                      relative
                      z-10

                      flex
                      h-full
                      flex-col
                      justify-between

                      p-8
                    "
                  >

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

                        bg-white/[0.08]

                        text-white

                        backdrop-blur-xl
                      "
                    >

                      <Icon size={28} />

                    </div>

                    {/* bottom */}
                    <div>

                      <h3
                        className="
                          text-3xl
                          md:text-4xl

                          font-black

                          leading-tight

                          tracking-[-0.04em]

                          text-white
                        "
                      >
                        {zone.title}
                      </h3>

                      {/* divider */}
                      <div
                        className="
                          mt-6

                          h-px
                          w-full

                          bg-gradient-to-r
                          from-emerald-400/40
                          to-transparent
                        "
                      />

                      <p
                        className="
                          mt-6

                          max-w-xl

                          leading-8

                          text-slate-200
                        "
                      >
                        {zone.desc}
                      </p>

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

                        Explore Experience

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

                </GlassCard>

              </div>

            );
          })}

        </div>

      </SectionContainer>

    </section>
  );
}