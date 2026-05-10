"use client";

import dynamic from "next/dynamic";

const SceneBackground = dynamic(
  () => import("@/components/3d/SceneBackground"),
  {
    ssr: false,
  }
);

const AIOrb = dynamic(
  () => import("@/components/3d/AIOrb"),
  {
    ssr: false,
  }
);

const HologramRing = dynamic(
  () => import("@/components/3d/HologramRing"),
  {
    ssr: false,
  }
);

const RobotModel = dynamic(
  () => import("@/components/3d/RobotModel"),
  {
    ssr: false,
  }
);

export default function HeroCanvasLayer() {
  return (
    <>
      {/* background */}
      <div className="hidden md:block">
        <SceneBackground />
      </div>

      {/* robot */}
      <div
        className="
          absolute
          right-[6%]
          top-1/2

          z-[2]

          hidden
          2xl:block

          -translate-y-1/2
        "
      >
        <RobotModel />
      </div>

      {/* orb */}
      <div
        className="
          absolute
          right-[12%]
          top-1/2

          z-[3]

          hidden
          xl:block

          -translate-y-1/2
        "
      >
        <AIOrb />
      </div>

      {/* ring */}
      <div
        className="
          absolute
          right-[10%]
          top-1/2

          z-[1]

          hidden
          xl:block

          -translate-y-1/2
        "
      >
        <HologramRing />
      </div>
    </>
  );
}