"use client";

import Link from "next/link";

import {
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import Globe from "@/components/3d/Globe";
import NeuralNetwork from "@/components/3d/NeuralNetwork";

const links = {
  Explore: [
    "About Expo",
    "AI Conference",
    "Startup Pavilion",
    "Investors",
    "Agenda",
  ],

  Experience: [
    "Speakers",
    "Business Matching",
    "Innovation Awards",
    "Expo Zones",
    "Partners",
  ],

  Resources: [
    "News & Media",
    "Press Release",
    "FAQ",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

export default function MegaFooter() {

  return (
    <footer
      className="
        relative

        overflow-hidden

        bg-[#040B08]

        pt-32
        pb-14
      "
    >

      {/* neural network background */}
      <NeuralNetwork />

      {/* globe */}
      <div
        className="
          absolute
          right-[-180px]
          bottom-[-180px]

          z-[1]

          opacity-[0.18]

          pointer-events-none
        "
      >

        <Globe />

      </div>

      {/* glow */}
      <div
        className="
          absolute
          left-[-120px]
          top-[120px]

          h-[360px]
          w-[360px]

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

          opacity-[0.04]

          bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]

          bg-[size:48px_48px]
        "
      />

      {/* vignette */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,11,8,.28)_65%,rgba(4,11,8,.88)_100%)]
        "
      />

      <div className="container-ai relative z-10">

        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-[1.4fr_.8fr_.8fr_.8fr]">

          {/* LEFT */}
          <div>

            {/* logo */}
            <div>

              <div
                className="
                  text-[12px]

                  font-semibold

                  uppercase

                  tracking-[0.45em]

                  text-emerald-400
                "
              >
                Global
              </div>

              <div
                className="
                  mt-2

                  text-4xl
                  md:text-5xl

                  font-black

                  tracking-[0.22em]

                  text-white
                "
              >
                AI EXPO
              </div>

            </div>

            {/* desc */}
            <p
              className="
                mt-8

                max-w-xl

                text-lg

                leading-9

                text-slate-400
              "
            >

              Connecting startups, enterprises,
              investors, governments, and innovators
              into one integrated global AI ecosystem
              experience.

            </p>

            {/* socials */}
            <div className="mt-10 flex items-center gap-4">

              {[
                FaInstagram,
                FaLinkedinIn,
                FaXTwitter,
                FaYoutube,
              ].map((Icon, index) => (

                <button
                  key={index}
                  className="
                    group

                    flex
                    h-14
                    w-14

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.05]

                    text-slate-300

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:border-emerald-400/30
                    hover:bg-emerald-400/10
                    hover:text-emerald-300
                    hover:shadow-[0_0_30px_rgba(16,185,129,.18)]
                  "
                >

                  <Icon
                    size={18}
                    className="
                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                  />

                </button>

              ))}

            </div>

          </div>

          {/* MENUS */}
          {Object.entries(links).map(([title, items]) => (

            <div key={title}>

              <h3
                className="
                  text-lg

                  font-black

                  text-white
                "
              >
                {title}
              </h3>

              <div className="mt-8 space-y-5">

                {items.map((item) => (

                  <Link
                    key={item}
                    href="/"

                    className="
                      group

                      flex
                      items-center
                      gap-3

                      text-slate-400

                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >

                    <span>{item}</span>

                    <ArrowUpRight
                      size={15}
                      className="
                        opacity-0

                        transition-all
                        duration-300

                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:opacity-100
                      "
                    />

                  </Link>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* BIG TEXT */}
        <div
          className="
            relative

            mt-20

            overflow-hidden

            border-y
            border-white/10

            py-10
          "
        >

          {/* glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2

              h-[260px]
              w-[260px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-emerald-400/10

              blur-[50px]
            "
          />

          <div
            className="
              relative

              text-center

              text-[58px]
              md:text-[100px]
              xl:text-[150px]

              font-black

              leading-none

              tracking-[-0.08em]

              text-white/[0.04]
            "
          >
            GLOBAL AI EXPO
          </div>

        </div>

        {/* DIVIDER */}
        <div
          className="
            mt-14

            h-px
            w-full

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* BOTTOM */}
        <div
          className="
            mt-5

            flex
            flex-col
            gap-2

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* LEFT */}
          <div
            className="
              text-sm

              tracking-[0.24em]

              uppercase

              text-emerald-400
            "
          >
            Global AI Ecosystem Platform
          </div>

          {/* RIGHT */}
          <div
            className="
              text-sm

              leading-8

              text-slate-500

              text-left
              lg:text-right
            "
          >

            © 2026 Global AI Expo.
            <br />

            All rights reserved.
            <br />

            Designed & Developed by Ditelaga Creative Digital.

          </div>

        </div>

      </div>

    </footer>
  );
}