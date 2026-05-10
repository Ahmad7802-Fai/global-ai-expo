import {
  Cpu,
  Bot,
  Database,
  ShieldCheck,
  GraduationCap,
  HeartPulse,
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

const ecosystems = [
  {
    title: "AI Infrastructure",
    icon: Cpu,
    description:
      "Cloud computing, intelligent infrastructure, GPU acceleration, and enterprise-scale AI deployment systems.",
  },

  {
    title: "Robotics & Automation",
    icon: Bot,
    description:
      "Autonomous robotics, industrial AI systems, smart automation, and next-generation machine intelligence.",
  },

  {
    title: "Big Data & Intelligence",
    icon: Database,
    description:
      "Massive-scale data ecosystems powering predictive analytics and real-time intelligent decision making.",
  },

  {
    title: "Cybersecurity AI",
    icon: ShieldCheck,
    description:
      "AI-powered security ecosystems protecting enterprises, governments, and future digital infrastructure.",
  },

  {
    title: "AI Education",
    icon: GraduationCap,
    description:
      "Future-ready education platforms, adaptive intelligence learning systems, and research ecosystems.",
  },

  {
    title: "Healthcare AI",
    icon: HeartPulse,
    description:
      "Medical diagnostics, predictive healthcare, intelligent treatment systems, and health innovation platforms.",
  },
];

export default function AIEcosystem() {

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        md:py-32

        bg-[linear-gradient(180deg,#F7FBF8_0%,#EDF7F1_100%)]
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
          bottom-[20px]

          h-[320px]
          w-[320px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground dark />

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

            <SectionBadge>

              <Sparkles size={14} />

              AI Ecosystem

            </SectionBadge>

            <SectionTitle
              dark
              className="mt-7"
            >

              Building The Future

              <br />

              <GradientText glow={false}>
                AI Infrastructure
              </GradientText>

            </SectionTitle>

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

              Explore the interconnected ecosystem
              powering the future of artificial
              intelligence across industries,
              governments, enterprises, and society.

            </p>

          </div>

        </div>

        {/* ecosystem grid */}
        <div
          className="
            mt-20

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {ecosystems.map((item) => {

            const Icon = item.icon;

            return (

              <GlassCard
                key={item.title}
                className="
                  group

                  h-full

                  border-black/5

                  bg-white/75

                  p-8

                  shadow-[0_10px_40px_rgba(15,23,42,.05)]

                  hover:border-emerald-500/20
                  hover:bg-white/90
                  hover:shadow-[0_20px_60px_rgba(16,185,129,.10)]
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
                    border-emerald-500/10

                    bg-emerald-500/10

                    text-emerald-700

                    shadow-[0_10px_30px_rgba(16,185,129,.08)]

                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                >

                  <Icon size={28} />

                </div>

                {/* title */}
                <h3
                  className="
                    mt-10

                    text-[30px]

                    font-black

                    leading-tight

                    tracking-[-0.05em]

                    text-[#07110C]
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
                    from-emerald-500/30
                    via-black/5
                    to-transparent
                  "
                />

                {/* desc */}
                <p
                  className="
                    mt-6

                    leading-8

                    text-slate-600
                  "
                >
                  {item.description}
                </p>

              </GlassCard>

            );
          })}

        </div>

      </SectionContainer>

    </section>
  );
}