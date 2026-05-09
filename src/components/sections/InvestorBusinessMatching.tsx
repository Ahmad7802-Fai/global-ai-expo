"use client";

import { motion } from "framer-motion";
import {
  Users,
  BriefcaseBusiness,
  Handshake,
  ArrowUpRight,
  Check,
} from "lucide-react";

const features = [
  "Private investor meetings",
  "Enterprise partnership matching",
  "Curated startup networking",
  "Global VC & founder lounge",
  "AI business expansion opportunities",
];

export default function InvestorBusinessMatching() {
  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[linear-gradient(180deg,#F7FBF8_0%,#E9F5EE_45%,#DDEFE4_100%)]
      "
    >

      {/* glow */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[380px]
          w-[380px]

          rounded-full

          bg-emerald-400/10

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[0px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-teal-400/10

          blur-[140px]
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

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
          >

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
              Investor & Networking
            </div>

            <h2
              className="
                mt-6

                max-w-3xl

                text-5xl
                md:text-6xl
                xl:text-7xl

                font-black

                leading-[0.95]

                tracking-[-0.06em]

                text-[#07110C]
              "
            >

              Connect Investors,
              <span className="text-emerald-600">
                {" "}Startups & Enterprises
              </span>

            </h2>

            <p
              className="
                mt-8

                max-w-2xl

                text-lg

                leading-9

                text-slate-700
              "
            >

              Join curated business matching
              sessions connecting global investors,
              AI founders, enterprises, and technology
              leaders into one exclusive networking
              ecosystem.

            </p>

            {/* features */}
            <div className="mt-10 space-y-5">

              {features.map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-xl

                      bg-emerald-500

                      text-white
                    "
                  >
                    <Check size={18} />
                  </div>

                  <div
                    className="
                      text-lg

                      font-medium

                      text-slate-800
                    "
                  >
                    {item}
                  </div>

                </div>

              ))}

            </div>

            {/* actions */}
            <div className="mt-12 flex flex-wrap gap-5">

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

                  shadow-[0_0_40px_rgba(47,209,123,.20)]

                  transition-all
                  duration-300

                  hover:scale-[1.03]
                "
              >

                Apply For Matching

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

              <button
                className="
                  flex
                  h-14
                  items-center

                  rounded-2xl

                  border
                  border-slate-300

                  bg-white/70

                  px-8

                  text-sm
                  font-semibold

                  text-slate-800

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:bg-white
                "
              >
                Become Investor
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >

            {/* main card */}
            <div
              className="
                relative

                overflow-hidden

                rounded-[40px]

                border
                border-white/60

                bg-[#07110C]

                p-8

                shadow-[0_20px_80px_rgba(0,0,0,.18)]
              "
            >

              {/* glow */}
              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top_right,rgba(47,209,123,.18),transparent_35%)]
                "
              />

              {/* image */}
              <div className="relative overflow-hidden rounded-[28px]">

                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                  alt="Networking"
                  className="
                    h-[420px]
                    w-full

                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-[#07110C]/90
                    via-[#07110C]/10
                    to-transparent
                  "
                />

              </div>

              {/* floating cards */}
              <div
                className="
                  absolute
                  left-8
                  top-8

                  rounded-[24px]

                  border
                  border-white/10

                  bg-white/[0.08]

                  p-5

                  backdrop-blur-2xl
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-emerald-500

                      text-white
                    "
                  >
                    <Users size={24} />
                  </div>

                  <div>

                    <div
                      className="
                        text-3xl

                        font-black

                        text-white
                      "
                    >
                      1,200+
                    </div>

                    <div className="text-sm text-slate-300">
                      Business Meetings
                    </div>

                  </div>

                </div>

              </div>

              <div
                className="
                  absolute
                  bottom-8
                  right-8

                  rounded-[24px]

                  border
                  border-white/10

                  bg-white/[0.08]

                  p-5

                  backdrop-blur-2xl
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center

                      rounded-2xl

                      bg-teal-500

                      text-white
                    "
                  >
                    <Handshake size={24} />
                  </div>

                  <div>

                    <div
                      className="
                        text-3xl

                        font-black

                        text-white
                      "
                    >
                      350+
                    </div>

                    <div className="text-sm text-slate-300">
                      Global Investors
                    </div>

                  </div>

                </div>

              </div>

              {/* bottom info */}
              <div className="relative mt-8">

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center

                      rounded-2xl

                      bg-emerald-500

                      text-white
                    "
                  >
                    <BriefcaseBusiness size={28} />
                  </div>

                  <div>

                    <div
                      className="
                        text-3xl

                        font-black

                        tracking-[-0.04em]

                        text-white
                      "
                    >
                      Investor Lounge
                    </div>

                    <div
                      className="
                        mt-2

                        text-slate-400
                      "
                    >
                      Private networking & curated matchmaking
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}