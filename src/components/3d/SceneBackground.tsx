"use client";

import FloatingParticles
  from "@/components/3d/FloatingParticles";

import GridWave
  from "@/components/3d/GridWave";
import NeuralNetwork
  from "@/components/3d/NeuralNetwork";

interface SceneBackgroundProps {
  className?: string;
}

export default function SceneBackground({
  className = "",
}: SceneBackgroundProps) {

  return (
    <div
      className={`
        absolute
        inset-0

        overflow-hidden

        pointer-events-none

        ${className}
      `}
    >

      {/* particles */}
      <FloatingParticles />

      {/* holographic grid */}
      <GridWave />
      <NeuralNetwork />

      {/* cinematic glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(16,185,129,.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(6,182,212,.08),transparent_40%)]

          z-[2]
        "
      />

      {/* vignette */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(2,6,23,.55)_100%)]

          z-[3]
        "
      />

    </div>
  );
}