"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  useRef,
} from "react";

import * as THREE from "three";

interface HologramRingProps {
  className?: string;

  opacity?: number;

  scale?: number;
}

function Rings() {

  const groupRef =
    useRef<THREE.Group>(null);

  useFrame((state, delta) => {

    if (!groupRef.current) return;

    groupRef.current.rotation.z +=
      delta * 0.08;

    groupRef.current.rotation.x =
      Math.sin(
        state.clock.elapsedTime * 0.2
      ) * 0.08;

  });

  return (
    <group ref={groupRef}>

      {/* outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>

        <torusGeometry
          args={[2.8, 0.018, 16, 240]}
        />

        <meshBasicMaterial
          color="#34D399"

          transparent

          opacity={0.32}
        />

      </mesh>

      {/* middle ring */}
      <mesh
        rotation={[
          Math.PI / 2,
          Math.PI / 4,
          0,
        ]}
      >

        <torusGeometry
          args={[2.15, 0.012, 16, 180]}
        />

        <meshBasicMaterial
          color="#22D3EE"

          transparent

          opacity={0.22}
        />

      </mesh>

      {/* inner ring */}
      <mesh
        rotation={[
          Math.PI / 2,
          -Math.PI / 6,
          0,
        ]}
      >

        <torusGeometry
          args={[1.5, 0.01, 16, 140]}
        />

        <meshBasicMaterial
          color="#6EE7B7"

          transparent

          opacity={0.28}
        />

      </mesh>

      {/* center pulse */}
      <mesh>

        <ringGeometry
          args={[0.7, 0.74, 64]}
        />

        <meshBasicMaterial
          color="#A7F3D0"

          transparent

          opacity={0.18}

          side={THREE.DoubleSide}
        />

      </mesh>

    </group>
  );
}

export default function HologramRing({
  className = "",
  opacity = 0.55,
  scale = 1,
}: HologramRingProps) {

  return (
    <div
      className={`
        absolute

        right-[8%]
        top-1/2

        z-[3]

        h-[520px]
        w-[520px]

        -translate-y-1/2

        pointer-events-none

        ${className}
      `}
      style={{
        opacity,
        transform: `translateY(-50%) scale(${scale})`,
      }}
    >

      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
      >

        {/* lights */}
        <ambientLight intensity={1.2} />

        <pointLight
          position={[3, 3, 3]}
          intensity={2}
          color="#34D399"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={1.5}
          color="#22D3EE"
        />

        {/* rings */}
        <Rings />

      </Canvas>

      {/* glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(16,185,129,.12),transparent_70%)]

          blur-[100px]
        "
      />

    </div>
  );
}