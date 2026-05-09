"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Points,
  PointMaterial,
} from "@react-three/drei";

import {
  useRef,
  useMemo,
} from "react";

import * as THREE from "three";

function Particles() {

  const ref =
    useRef<THREE.Points>(null);

  const sphere = useMemo(() => {

    const positions =
      new Float32Array(2200 * 3);

    for (let i = 0; i < 2200; i++) {

      positions[i * 3] =
        (Math.random() - 0.5) * 22;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 12;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 12;

    }

    return positions;

  }, []);

  useFrame((_, delta) => {

    if (!ref.current) return;

    ref.current.rotation.y +=
      delta * 0.01;

  });

  return (
    <Points
      ref={ref}
      positions={sphere}
      stride={3}
      frustumCulled
    >

      <PointMaterial
        transparent

        color="#6EE7B7"

        size={0.015}

        sizeAttenuation

        depthWrite={false}

        opacity={0.7}

        blending={
          THREE.AdditiveBlending
        }
      />

    </Points>
  );
}

export default function FloatingParticles() {
  return (
    <div
      className="
        absolute
        inset-0

        z-[1]

        opacity-70
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >

        <Particles />

      </Canvas>

    </div>
  );
}