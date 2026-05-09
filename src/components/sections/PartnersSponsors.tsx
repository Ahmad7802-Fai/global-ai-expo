"use client";

import { motion } from "framer-motion";

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
      <div
        className="
          absolute
          left-[-120px]
          top-[100px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-emerald-400/10

          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[0px]

          h-[280px]
          w-[280px]

          rounded-full

          bg-teal-400/10

          blur-[120px]
        "
      />

      {/* grid */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          bg-[linear-gradient(rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
      />

      <div className="container-ai relative z-10">

        {/* top */}
        <div className="text-center">

          <div
            className="
              inline-flex
              items-center

              rounded-full

              border
              border-emerald-500/20

              bg-white/70

              px-5
              py-2

              text-[11px]
              font-semibold

              uppercase

              tracking-[0.28em]

              text-emerald-700

              backdrop-blur-xl
            "
          >
            Partners & Sponsors
          </div>

          <h2
            className="
              mt-6

              text-5xl
              md:text-6xl
              xl:text-7xl

              font-black

              leading-[0.95]

              tracking-[-0.06em]

              text-[#07110C]
            "
          >

            Powered By Global
            <span className="text-emerald-600">
              {" "}Technology Leaders
            </span>

          </h2>

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

        {/* marquee wrapper */}
        <div className="mt-20 space-y-6">

          {/* row 1 */}
          <div
            className="
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/60

              bg-white/60

              py-8

              backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(15,23,42,.05)]
            "
          >

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center gap-16"
            >

              {[...partners, ...partners].map((item, index) => (

                <div
                  key={`${item}-${index}`}
                  className="
                    flex
                    h-20
                    min-w-[260px]

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-slate-200/70

                    bg-white/80

                    px-10

                    text-center

                    text-2xl
                    font-black

                    tracking-[0.16em]

                    text-slate-800

                    transition-all
                    duration-300

                    hover:border-emerald-300
                    hover:text-emerald-600
                  "
                >
                  {item}
                </div>

              ))}

            </motion.div>

          </div>

          {/* row 2 */}
          <div
            className="
              relative

              overflow-hidden

              rounded-[32px]

              border
              border-white/60

              bg-white/50

              py-8

              backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(15,23,42,.05)]
            "
          >

            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center gap-16"
            >

              {[...partners, ...partners].map((item, index) => (

                <div
                  key={`${item}-bottom-${index}`}
                  className="
                    flex
                    h-20
                    min-w-[260px]

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-slate-200/70

                    bg-white/80

                    px-10

                    text-center

                    text-2xl
                    font-black

                    tracking-[0.16em]

                    text-slate-800

                    transition-all
                    duration-300

                    hover:border-emerald-300
                    hover:text-emerald-600
                  "
                >
                  {item}
                </div>

              ))}

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}