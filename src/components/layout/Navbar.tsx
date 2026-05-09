"use client";

import Link from "next/link";

import {
  useRef,
  useState,
} from "react";

import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import { menus } from "@/lib/menu/menu";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileExpanded, setMobileExpanded] =
    useState<string | null>(null);

  const [activeMegaMenu, setActiveMegaMenu] =
    useState<string | null>(null);

  const closeTimeoutRef =
    useRef<NodeJS.Timeout | null>(null);

  /* -------------------------------- */
  /* MEGA MENU CONTROL */
  /* -------------------------------- */

  const openMegaMenu = (
    name: string
  ) => {

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    setActiveMegaMenu(name);

  };

  const closeMegaMenu = () => {

    closeTimeoutRef.current =
      setTimeout(() => {

        setActiveMegaMenu(null);

      }, 180);

  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0

        z-50
      "
    >

      <div className="px-4 pt-5 lg:px-8">

        {/* NAVBAR */}
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

            overflow-visible

            rounded-[30px]

            border
            border-white/10

            bg-[rgba(7,17,12,.72)]

            px-5
            lg:px-8

            backdrop-blur-2xl

            shadow-[0_20px_80px_rgba(0,0,0,.35)]
          "
        >

          {/* glow */}
          <div
            className="
              absolute
              inset-0

              rounded-[30px]

              bg-[radial-gradient(circle_at_top_left,rgba(47,209,123,.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,164,.10),transparent_24%)]
            "
          />

          {/* line */}
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
          <div
            className="
              relative
              z-10

              flex
              items-center
              gap-10
            "
          >

            {/* LOGO */}
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
                  text-[10px]
                  md:text-[11px]

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

                  text-[24px]
                  md:text-[28px]

                  font-black

                  tracking-[0.16em]

                  text-white
                "
              >
                AI EXPO
              </span>

            </Link>

            {/* DESKTOP MENU */}
            <nav
              className="
                hidden
                lg:flex

                items-center
                gap-1
              "
            >

              {menus.map((item) => {

                const hasMegaMenu =
                  !!item.megaMenu;

                const isActive =
                  activeMegaMenu === item.name;

                return (

                  <div
                    key={item.name}

                    className="
                      relative

                      flex
                      items-center
                    "

                    onMouseEnter={() => {

                      if (hasMegaMenu) {
                        openMegaMenu(item.name);
                      }

                    }}

                    onMouseLeave={() => {

                      if (hasMegaMenu) {
                        closeMegaMenu();
                      }

                    }}
                  >

                    {/* MENU LINK */}
                    <Link
                      href={item.href}

                      className="
                        group

                        relative

                        flex
                        h-11

                        items-center
                        gap-2

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

                      {/* bg */}
                      <div
                        className={`
                          absolute
                          inset-0

                          rounded-xl

                          bg-white/[0.04]

                          transition-opacity
                          duration-300

                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }
                        `}
                      />

                      {/* line */}
                      <div
                        className={`
                          absolute
                          bottom-0
                          left-1/2

                          h-[2px]

                          -translate-x-1/2

                          rounded-full

                          bg-emerald-400

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "w-8"
                              : "w-0 group-hover:w-8"
                          }
                        `}
                      />

                      <span className="relative z-10">
                        {item.name}
                      </span>

                      {hasMegaMenu && (

                        <ChevronDown
                          size={15}
                          className={`
                            relative
                            z-10

                            transition-transform
                            duration-300

                            ${
                              isActive
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />

                      )}

                    </Link>

                    {/* hover bridge */}
                    {hasMegaMenu && isActive && (

                      <div
                        className="
                          absolute
                          left-0
                          top-[44px]

                          h-[36px]
                          w-[760px]
                        "
                      />

                    )}

                    {/* MEGA MENU */}
                    {hasMegaMenu &&
                      isActive && (

                      <div
                        className="
                          absolute
                          left-0
                          top-[72px]

                          w-[760px]

                          overflow-hidden

                          rounded-[32px]

                          border
                          border-white/10

                          bg-[rgba(7,17,12,.96)]

                          p-8

                          backdrop-blur-3xl

                          shadow-[0_25px_100px_rgba(0,0,0,.45)]
                        "

                        onMouseEnter={() => {

                          if (
                            closeTimeoutRef.current
                          ) {

                            clearTimeout(
                              closeTimeoutRef.current
                            );

                          }

                        }}

                        onMouseLeave={closeMegaMenu}
                      >

                        {/* glow */}
                        <div
                          className="
                            absolute
                            inset-0

                            bg-[radial-gradient(circle_at_top_left,rgba(47,209,123,.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,164,.08),transparent_30%)]
                          "
                        />

                        <div className="relative z-10">

                          {/* top */}
                          <div className="max-w-xl">

                            <div
                              className="
                                text-[12px]

                                font-semibold

                                uppercase

                                tracking-[0.28em]

                                text-emerald-300
                              "
                            >
                              {item.megaMenu.title}
                            </div>

                            <p
                              className="
                                mt-4

                                leading-8

                                text-slate-400
                              "
                            >
                              {item.megaMenu.description}
                            </p>

                          </div>

                          {/* sections */}
                          <div
                            className="
                              mt-10

                              grid
                              grid-cols-2

                              gap-10
                            "
                          >

                            {item.megaMenu.sections.map(
                              (section) => (

                              <div
                                key={section.heading}
                              >

                                <div
                                  className="
                                    text-sm

                                    font-bold

                                    uppercase

                                    tracking-[0.18em]

                                    text-white
                                  "
                                >
                                  {section.heading}
                                </div>

                                <div className="mt-5 space-y-3">

                                  {section.items.map(
                                    (link) => (

                                    <Link
                                      key={link.name}

                                      href={link.href}

                                      className="
                                        group

                                        flex
                                        items-center
                                        justify-between

                                        rounded-2xl

                                        border
                                        border-white/5

                                        bg-white/[0.03]

                                        px-5
                                        py-4

                                        text-sm

                                        text-slate-300

                                        transition-all
                                        duration-300

                                        hover:border-emerald-400/20
                                        hover:bg-emerald-400/[0.06]
                                        hover:text-white
                                      "
                                    >

                                      <span>
                                        {link.name}
                                      </span>

                                      <ArrowUpRight
                                        size={15}
                                        className="
                                          transition-transform
                                          duration-300

                                          group-hover:translate-x-1
                                          group-hover:-translate-y-1
                                        "
                                      />

                                    </Link>

                                  ))}

                                </div>

                              </div>

                            ))}

                          </div>

                        </div>

                      </div>

                    )}

                  </div>

                );
              })}

            </nav>

          </div>

          {/* RIGHT */}
          <div
            className="
              relative
              z-10

              flex
              items-center
              gap-3
            "
          >

            {/* CTA */}
            <button
              className="
                group

                hidden
                sm:flex

                h-12

                items-center
                gap-2

                rounded-2xl

                bg-gradient-to-r
                from-emerald-400
                to-green-500

                px-5
                lg:px-7

                text-sm
                font-bold

                text-[#04110A]

                shadow-[0_0_30px_rgba(47,209,123,.22)]

                transition-all
                duration-300

                hover:scale-[1.03]
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

            {/* mobile button */}
            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }

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

                lg:hidden
              "
            >

              {mobileOpen
                ? <X size={20} />
                : <Menu size={20} />
              }

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (

          <div
            className="
              mt-4

              overflow-hidden

              rounded-[28px]

              border
              border-white/10

              bg-[rgba(7,17,12,.94)]

              p-4

              backdrop-blur-2xl

              shadow-[0_20px_60px_rgba(0,0,0,.35)]

              lg:hidden
            "
          >

            <div className="space-y-2">

              {menus.map((item) => {

                const hasMegaMenu =
                  !!item.megaMenu;

                const expanded =
                  mobileExpanded === item.name;

                return (

                  <div key={item.name}>

                    {/* SIMPLE LINK */}
                    {!hasMegaMenu && (

                      <Link
                        href={item.href}

                        onClick={() =>
                          setMobileOpen(false)
                        }

                        className="
                          flex
                          items-center
                          justify-between

                          rounded-2xl

                          border
                          border-white/5

                          bg-white/[0.03]

                          px-5
                          py-4

                          text-sm
                          font-medium

                          text-slate-200

                          transition-all
                          duration-300

                          hover:border-emerald-400/20
                          hover:bg-emerald-400/[0.06]
                          hover:text-white
                        "
                      >

                        <span>{item.name}</span>

                        <ArrowUpRight
                          size={14}
                        />

                      </Link>

                    )}

                    {/* EXPANDABLE */}
                    {hasMegaMenu && (

                      <button
                        type="button"

                        onClick={() => {

                          setMobileExpanded(
                            expanded
                              ? null
                              : item.name
                          );

                        }}

                        className="
                          flex
                          w-full

                          items-center
                          justify-between

                          rounded-2xl

                          border
                          border-white/5

                          bg-white/[0.03]

                          px-5
                          py-4

                          text-sm
                          font-medium

                          text-slate-200

                          transition-all
                          duration-300

                          hover:border-emerald-400/20
                          hover:bg-emerald-400/[0.06]
                          hover:text-white
                        "
                      >

                        <span>{item.name}</span>

                        <ChevronDown
                          size={16}
                          className={`
                            transition-transform
                            duration-300

                            ${
                              expanded
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />

                      </button>

                    )}

                    {/* CHILDREN */}
                    {expanded &&
                      item.megaMenu && (

                      <div className="mt-3 space-y-3 px-2">

                        {item.megaMenu.sections.map(
                          (section) => (

                          <div
                            key={section.heading}

                            className="
                              rounded-2xl

                              border
                              border-white/5

                              bg-white/[0.02]

                              p-4
                            "
                          >

                            <div
                              className="
                                text-[11px]

                                font-semibold

                                uppercase

                                tracking-[0.24em]

                                text-emerald-300
                              "
                            >
                              {section.heading}
                            </div>

                            <div className="mt-4 space-y-2">

                              {section.items.map(
                                (link) => (

                                <Link
                                  key={link.name}

                                  href={link.href}

                                  onClick={() =>
                                    setMobileOpen(false)
                                  }

                                  className="
                                    flex
                                    items-center
                                    justify-between

                                    rounded-xl

                                    px-4
                                    py-3

                                    text-sm

                                    text-slate-300

                                    transition-all
                                    duration-300

                                    hover:bg-white/[0.04]
                                    hover:text-white
                                  "
                                >

                                  <span>
                                    {link.name}
                                  </span>

                                  <ArrowUpRight
                                    size={14}
                                  />

                                </Link>

                              ))}

                            </div>

                          </div>

                        ))}

                      </div>

                    )}

                  </div>

                );
              })}

            </div>

          </div>

        )}

      </div>

    </header>
  );
}