import {
  SectionBadge,
  SectionTitle,
  GridBackground,
  GlowOrb,
  SectionContainer,
  GlassCard,
} from "@/components/ui";

const partners = [
  "OPENAI",
  "NVIDIA",
  "MICROSOFT",
  "GOOGLE CLOUD",
  "META AI",
  "AWS",
  "IBM",
  "ANTHROPIC",
  "HUGGING FACE",
  "INTEL",
];

export default function PartnersSponsors() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28

        bg-[linear-gradient(180deg,#EDF7F1_0%,#F8FBF9_100%)]
      "
    >

      {/* glow */}
      <GlowOrb
        className="
          left-[-120px]
          top-[100px]

          h-[320px]
          w-[320px]

          bg-emerald-400/10
        "
      />

      <GlowOrb
        className="
          right-[-120px]
          bottom-[0px]

          h-[280px]
          w-[280px]

          bg-teal-400/10
        "
      />

      {/* grid */}
      <GridBackground
        dark
        className="
          opacity-[0.03]
        "
      />

      <SectionContainer>

        {/* top */}
        <div className="text-center">

          <SectionBadge
            className="
              border-emerald-500/20

              bg-white/70

              text-emerald-700
            "
          >
            Partners & Sponsors
          </SectionBadge>

          <div className="mt-6">

            <SectionTitle
              dark
              center
              title="Powered By Global"
              highlight="Technology Leaders"
            />

          </div>

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

            Collaborating with world-leading AI,
            cloud, enterprise, and innovation
            companies building the future of
            intelligent technology.

          </p>

        </div>

        {/* marquee */}
        <div
          className="
            mt-20
            space-y-6

            overflow-hidden
          "
        >

          {/* row 1 */}
          <GlassCard
            hover={false}
            className="
              overflow-hidden

              border-white/60

              bg-white/60

              py-8

              shadow-[0_10px_40px_rgba(15,23,42,.05)]
            "
          >

            <div className="marquee-track">

              {[...partners, ...partners, ...partners].map(
                (item, index) => (

                <div
                  key={`${item}-${index}`}
                  className="marquee-item"
                >
                  {item}
                </div>

              ))}

            </div>

          </GlassCard>

          {/* row 2 */}
          <GlassCard
            hover={false}
            className="
              overflow-hidden

              border-white/60

              bg-white/50

              py-8

              shadow-[0_10px_40px_rgba(15,23,42,.05)]
            "
          >

            <div className="marquee-track-reverse">

              {[...partners, ...partners, ...partners].map(
                (item, index) => (

                <div
                  key={`${item}-bottom-${index}`}
                  className="marquee-item"
                >
                  {item}
                </div>

              ))}

            </div>

          </GlassCard>

        </div>

      </SectionContainer>

    </section>
  );
}