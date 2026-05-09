"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who should attend Global AI Expo?",
    answer:
      "Global AI Expo is designed for startups, enterprises, investors, developers, governments, researchers, and technology innovators worldwide.",
  },
  {
    question: "How can startups participate?",
    answer:
      "Startups can apply through the Startup Pavilion program to showcase products, pitch investors, and join curated networking sessions.",
  },
  {
    question: "Are investor meetings included?",
    answer:
      "Yes. Qualified attendees and sponsors can access private business matching sessions and investor networking experiences.",
  },
  {
    question: "Can international companies join the expo?",
    answer:
      "Absolutely. Global AI Expo welcomes exhibitors, speakers, startups, investors, and partners from around the world.",
  },
  {
    question: "How do I become a sponsor or partner?",
    answer:
      "You can apply through the sponsor registration page to access branding opportunities, speaking slots, networking lounges, and premium visibility.",
  },
];

export default function FAQSection() {

  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      className="
        relative

        overflow-hidden

        py-32

        bg-[linear-gradient(180deg,#F8FBF9_0%,#EDF7F1_100%)]
      "
    >

      {/* glow */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

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

          h-[260px]
          w-[260px]

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
            "
          >
            Frequently Asked Questions
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

            Everything You Need
            <span className="text-emerald-600">
              {" "}To Know
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

            Find answers about tickets, startup
            participation, investor access,
            networking opportunities, and
            global expo experiences.

          </p>

        </div>

        {/* accordion */}
        <div className="mx-auto mt-20 max-w-5xl space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  overflow-hidden

                  rounded-[30px]

                  border
                  border-white/60

                  bg-white/75

                  backdrop-blur-2xl

                  shadow-[0_10px_30px_rgba(15,23,42,.04)]

                  transition-all
                  duration-300

                  hover:border-emerald-200
                "
              >

                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between

                    gap-6

                    px-8
                    py-7

                    text-left
                  "
                >

                  <span
                    className="
                      text-xl
                      md:text-2xl

                      font-black

                      tracking-[-0.03em]

                      text-[#07110C]
                    "
                  >
                    {faq.question}
                  </span>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-2xl

                      bg-emerald-500

                      text-white

                      shrink-0
                    "
                  >

                    <Plus
                      size={18}
                      className={`
                        transition-transform
                        duration-300

                        ${isOpen ? "rotate-45" : ""}
                      `}
                    />

                  </div>

                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="overflow-hidden"
                >

                  <div
                    className="
                      px-8
                      pb-8

                      max-w-4xl

                      text-lg

                      leading-9

                      text-slate-700
                    "
                  >
                    {faq.answer}
                  </div>

                </motion.div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}