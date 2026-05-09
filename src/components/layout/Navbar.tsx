"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";

const menus = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Conference",
    href: "#",
  },
  {
    name: "Exhibitors",
    href: "#",
  },
  {
    name: "Startup Pavilion",
    href: "#",
  },
  {
    name: "Investors",
    href: "#",
  },
  {
    name: "Agenda",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="px-4 lg:px-8 pt-5">

        <div
          className="
            relative

            mx-auto

            flex
            h-[82px]
            w-full
            max-w-[1480px]

            items-center
            justify-between

            overflow-hidden

            rounded-[30px]

            border
            border-white/10

            bg-[rgba(7,17,12,.72)]

            px-6
            lg:px-8

            backdrop-blur-2xl

            shadow-[0_20px_80px_rgba(0,0,0,.35)]
          "
        >

          {/* background glow */}
          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top_left,rgba(47,209,123,.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,164,.10),transparent_24%)]
            "
          />

          {/* subtle bottom line */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0

              h-px

              bg-gradient-to-r
              from-transparent
              via-emerald-400/30
              to-transparent
            "
          />

          {/* LEFT */}
          <div className="relative z-10 flex items-center gap-14">

            {/* logo */}
            <Link
              href="/"
              className="
                flex
                shrink-0
                flex-col

                leading-none
              "
            >

              <span
                className="
                  text-[11px]

                  font-semibold

                  uppercase

                  tracking-[0.42em]

                  text-emerald-400
                "
              >
                Global
              </span>

              <span
                className="
                  mt-1

                  text-[28px]

                  font-black

                  tracking-[0.16em]

                  text-white
                "
              >
                AI EXPO
              </span>

            </Link>

            {/* desktop menu */}
            <nav className="hidden xl:flex items-center gap-2">

              {menus.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group

                    relative

                    flex
                    h-11
                    items-center

                    rounded-xl

                    px-5

                    text-[14px]
                    font-medium

                    text-slate-300

                    transition-all
                    duration-300

                    hover:text-white
                  "
                >

                  {/* hover bg */}
                  <div
                    className="
                      absolute
                      inset-0

                      rounded-xl

                      bg-white/[0.04]

                      opacity-0

                      transition-opacity
                      duration-300

                      group-hover:opacity-100
                    "
                  />

                  {/* hover line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2

                      h-[2px]
                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-emerald-400

                      transition-all
                      duration-300

                      group-hover:w-8
                    "
                  />

                  <span className="relative z-10">
                    {item.name}
                  </span>

                </Link>

              ))}

            </nav>

          </div>

          {/* RIGHT */}
          <div className="relative z-10 flex items-center gap-3">

            {/* CTA */}
            <button
              className="
                group

                hidden
                lg:flex

                h-12

                items-center
                gap-2

                rounded-2xl

                bg-gradient-to-r
                from-emerald-400
                to-green-500

                px-7

                text-sm
                font-bold

                text-[#04110A]

                shadow-[0_0_30px_rgba(47,209,123,.22)]

                transition-all
                duration-300

                hover:scale-[1.03]
                hover:shadow-[0_0_45px_rgba(47,209,123,.35)]
              "
            >

              Get Tickets

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />

            </button>

            {/* mobile menu */}
            <button
              className="
                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                border
                border-white/10

                bg-white/[0.04]

                text-white

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white/[0.08]

                xl:hidden
              "
            >
              <Menu size={18} />
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}