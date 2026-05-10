"use client";

import HeroVideoLayer from "./HeroVideoLayer";
import HeroCanvasLayer from "./HeroCanvasLayer";
import HeroContentLayer from "./HeroContentLayer";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >

      {/* video */}
      <HeroVideoLayer />

      {/* 3D */}
      <HeroCanvasLayer />

      {/* content */}
      <HeroContentLayer />

    </section>
  );
}