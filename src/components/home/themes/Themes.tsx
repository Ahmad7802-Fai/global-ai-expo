import {
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Building2,
  Stethoscope,
  Bot,
  Factory,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

import {
  GridBackground,
  GlowOrb,
  GlassCard,
  SectionBadge,
  SectionContainer,
  SectionTitle,
} from "@/components/ui";

const themes = [
  {
    title: "Generative AI",
    icon: BrainCircuit,
    desc: "Exploring frontier generative models, multimodal AI, and next-generation creativity systems.",
  },

  {
    title: "AI Infrastructure",
    icon: Cpu,
    desc: "Cloud compute, GPU ecosystems, inference scaling, and enterprise AI deployment.",
  },

  {
    title: "AI Security",
    icon: ShieldCheck,
    desc: "Building safe, secure, and trustworthy AI systems for the future economy.",
  },

  {
    title: "Smart Government",
    icon: Building2,
    desc: "Public-sector transformation powered by AI automation and intelligent infrastructure.",
  },

  {
    title: "AI Healthcare",
    icon: Stethoscope,
    desc: "Healthcare innovation, diagnostics, biotech AI, and intelligent medical ecosystems.",
  },

  {
    title: "Robotics",
    icon: Bot,
    desc: "Autonomous robotics, industrial automation, and physical AI applications.",
  },

  {
    title: "Future Industry",
    icon: Factory,
    desc: "Smart manufacturing, industrial AI, predictive systems, and future operations.",
  },

  {
    title: "Global AI Society",
    icon: Globe2,
    desc: "Ethics, governance, sustainability, and the future impact of AI globally.",
  },
];

export default function Themes() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32

        bg-[linear-gradient(180deg,#DDEEDF_0%,#CDE7D5_40%,#B8DFC4_100%)]
      "
    >

      {/* top fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0

          h-40

          bg-gradient-to-b
          from-[#08120D]
          to-transparent
        "
      />

      {/* glow */}
      <GlowOrb
        className="
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]

          bg-emerald-400/15
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[320px]
          w-[320px]

          bg-teal-400/12
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
              Innovation Tracks
            </SectionBadge>

            <div className="mt-6">

              <SectionTitle
                dark
                title="Explore The Future"
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

              Discover immersive innovation tracks
              covering generative AI, robotics,
              healthcare, infrastructure, governance,
              and the future of intelligent systems.

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
            xl:grid-cols-4
          "
        >

          {themes.map((theme) => {

            const Icon = theme.icon;

            return (

              <div
                key={theme.title}
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

                    border-white/40

                    bg-white/60

                    p-8

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-emerald-500/20
                    hover:bg-white/85
                    hover:shadow-[0_20px_60px_rgba(34,197,94,.12)]
                  "
                >

                  {/* glow */}
                  <div
                    className="
                      absolute
                      right-0
                      top-0

                      h-24
                      w-24

                      rounded-full

                      bg-emerald-400/15

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

                      text-[28px]

                      font-black

                      leading-tight

                      tracking-[-0.04em]

                      text-[#07110C]
                    "
                  >
                    {theme.title}
                  </h3>

                  {/* divider */}
                  <div
                    className="
                      mt-6

                      h-px
                      w-full

                      bg-gradient-to-r
                      from-emerald-500/40
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
                    {theme.desc}
                  </p>

                  {/* bottom */}
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

                    Explore Theme

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

                </GlassCard>

              </div>

            );
          })}

        </div>

      </SectionContainer>

    </section>
  );
}