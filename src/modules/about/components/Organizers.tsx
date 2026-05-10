import {
  Building2,
  Globe2,
  Landmark,
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

const organizers = [
  {
    title: "Global Organizers",

    icon: Globe2,

    description:
      "International innovation organizations and ecosystem builders supporting the future of global AI collaboration.",
  },

  {
    title: "Strategic Partners",

    icon: Building2,

    description:
      "Enterprise technology companies, AI infrastructure providers, and innovation accelerators worldwide.",
  },

  {
    title: "Government Alliances",

    icon: Landmark,

    description:
      "Public-sector collaborations supporting smart nation initiatives, policy innovation, and AI transformation.",
  },
];

const logos = [
  "OPEN AI LABS",
  "NEXUS AI",
  "QUANTUM TECH",
  "FUTURE GRID",
  "AI VENTURES",
  "GLOBAL ROBOTICS",
];

export default function Organizers() {

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

          h-[340px]
          w-[340px]

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
      <GridBackground dark />

      <SectionContainer>

        {/* top */}
        <div
          className="
            mx-auto
            max-w-5xl

            text-center
          "
        >

          <SectionBadge className="mx-auto">

            <Sparkles size={14} />

            Organizers & Partners

          </SectionBadge>

          <SectionTitle
            dark
            center
            className="mt-7"
          >

            Powered By

            <br />

            <GradientText glow={false}>
              Global Collaboration
            </GradientText>

          </SectionTitle>

          <p
            className="
              mx-auto
              mt-8

              max-w-3xl

              text-lg
              leading-9

              text-slate-700
            "
          >

            Global AI Expo is supported by worldwide
            innovation leaders, enterprises,
            governments, ecosystem builders,
            and strategic AI partners.

          </p>

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

          {organizers.map((item) => {

            const Icon = item.icon;

            return (

              <GlassCard
                key={item.title}
                className="
                  group

                  h-full

                  border-black/5

                  bg-white/80

                  p-8

                  shadow-[0_10px_40px_rgba(15,23,42,.05)]

                  hover:border-emerald-500/20
                  hover:bg-white
                  hover:shadow-[0_20px_70px_rgba(16,185,129,.10)]
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
                    via-emerald-500/40
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

        {/* logo cloud */}
        <GlassCard
          hover={false}
          className="
            mt-24

            border-black/5

            bg-white/70

            p-10

            shadow-[0_10px_40px_rgba(15,23,42,.05)]
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
              via-emerald-500/30
              to-transparent
            "
          />

          <div
            className="
              grid
              gap-6

              md:grid-cols-3
              xl:grid-cols-6
            "
          >

            {logos.map((logo) => (

              <div
                key={logo}

                className="
                  group

                  flex
                  h-24

                  items-center
                  justify-center

                  rounded-2xl

                  border
                  border-black/5

                  bg-[#F7FBF8]

                  text-center

                  text-sm
                  font-black

                  tracking-[0.20em]

                  text-slate-700

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-emerald-500/20
                  hover:bg-white
                  hover:text-emerald-700
                  hover:shadow-[0_10px_30px_rgba(16,185,129,.08)]
                "
              >
                {logo}
              </div>

            ))}

          </div>

        </GlassCard>

      </SectionContainer>

    </section>
  );
}