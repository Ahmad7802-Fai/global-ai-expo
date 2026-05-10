import {
  Building2,
  BriefcaseBusiness,
  Landmark,
  Wallet,
  Microscope,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import {
  SectionBadge,
  SectionTitle,
  GridBackground,
  GlowOrb,
  SectionContainer,
  GlassCard,
} from "@/components/ui";

const items = [
  {
    title: "AI Startup",
    icon: Building2,
    desc: "Accelerating next-generation AI innovation through global startup collaboration and exposure.",
  },

  {
    title: "Enterprise",
    icon: BriefcaseBusiness,
    desc: "Connecting enterprises with scalable AI solutions, infrastructure, and strategic partnerships.",
  },

  {
    title: "Government",
    icon: Landmark,
    desc: "Empowering smart nation initiatives and public-sector AI transformation ecosystems.",
  },

  {
    title: "Investors",
    icon: Wallet,
    desc: "Creating opportunities for venture capital, business matching, and funding access.",
  },

  {
    title: "Research",
    icon: Microscope,
    desc: "Bridging advanced AI research, deep technology, and industry implementation.",
  },

  {
    title: "Academy",
    icon: GraduationCap,
    desc: "Developing future AI talent, education ecosystems, and collaborative learning networks.",
  },
];

export default function Ecosystem() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32

        bg-[linear-gradient(180deg,#DCEEDF_0%,#C5E7CF_50%,#A8DDB8_100%)]
      "
    >

      {/* glow */}
      <GlowOrb
        className="
          left-[-120px]
          top-[100px]

          h-[360px]
          w-[360px]

          bg-emerald-400/20
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[320px]
          w-[320px]

          bg-green-500/20
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
            gap-12

            lg:grid-cols-2
            lg:items-end
          "
        >

          <div>

            <SectionBadge dark>
              AI Ecosystem Network
            </SectionBadge>

            <div className="mt-6">

              <SectionTitle
                dark
                title="Connected Global"
                highlight="AI Ecosystem"
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

              Integrating startups, enterprises,
              investors, research institutions,
              governments, and academia into one
              collaborative AI innovation ecosystem.

            </p>

          </div>

        </div>

        {/* cards */}
        <div
          className="
            mt-20

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  animate-[fadeUp_.6s_ease]
                "
              >

                <GlassCard
                  className="
                    group

                    relative

                    h-full

                    overflow-hidden

                    border-black/5

                    bg-white/65

                    p-10

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-emerald-500/20
                    hover:bg-white
                    hover:shadow-[0_20px_60px_rgba(16,185,129,.14)]
                  "
                >

                  {/* glow */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0

                      h-28
                      w-28

                      rounded-full

                      bg-emerald-400/20

                      blur-3xl
                    "
                  />

                  {/* icon */}
                  <div
                    className="
                      relative

                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-emerald-500/10

                      bg-emerald-50

                      text-emerald-600
                    "
                  >

                    <Icon size={28} />

                  </div>

                  {/* title */}
                  <h3
                    className="
                      relative

                      mt-10

                      text-[30px]

                      font-black

                      tracking-[-0.04em]

                      text-[#07111F]
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
                      from-emerald-500/50
                      to-transparent
                    "
                  />

                  {/* desc */}
                  <p
                    className="
                      relative

                      mt-6

                      leading-8

                      text-slate-600
                    "
                  >

                    {item.desc}

                  </p>

                  {/* action */}
                  <div
                    className="
                      relative

                      mt-10

                      flex
                      items-center
                      gap-3

                      text-sm
                      font-semibold

                      text-emerald-700
                    "
                  >

                    Explore Ecosystem

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    />

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