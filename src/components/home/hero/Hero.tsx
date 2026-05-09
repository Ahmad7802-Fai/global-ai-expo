"use client";

import { useEffect, useState } from "react";

import HeroVideoLayer from "./HeroVideoLayer";
import HeroCanvasLayer from "./HeroCanvasLayer";
import HeroContentLayer from "./HeroContentLayer";

export default function Hero() {

  const [pageKey, setPageKey] =
    useState(0);

  useEffect(() => {

    const handlePageShow = () => {
      setPageKey(prev => prev + 1);
    };

    window.addEventListener(
      "pageshow",
      handlePageShow
    );

    return () => {

      window.removeEventListener(
        "pageshow",
        handlePageShow
      );

    };

  }, []);

  return (
    <section
      key={pageKey}
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >

      {/* video */}
      <HeroVideoLayer />

      {/* 3d */}
      <HeroCanvasLayer />

      {/* content */}
      <HeroContentLayer />

    </section>
  );
}