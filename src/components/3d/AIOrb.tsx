"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";

import {
  memo,
  useRef,
} from "react";

import * as THREE from "three";

function OrbMesh() {

  const meshRef =
    useRef<THREE.Mesh>(null);

  useFrame((state) => {

    if (!meshRef.current) return;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.22;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.06;

  });

  return (
    <Float
      speed={1.8}
      rotationIntensity={1}
      floatIntensity={1.8}
    >

      <mesh ref={meshRef}>

        <icosahedronGeometry
          args={[1.45, 12]}
        />

        <MeshDistortMaterial
          color="#34D399"

          emissive="#10B981"

          emissiveIntensity={1.2}

          roughness={0.08}

          metalness={0.35}

          distort={0.32}

          speed={1.8}

          transparent

          opacity={0.88}
        />

      </mesh>

    </Float>
  );
}

const MemoOrbMesh = memo(OrbMesh);

export default function AIOrb() {
  return (
    <div
      className="
        absolute
        right-[-80px]
        top-1/2

        z-[4]

        h-[520px]
        w-[520px]

        -translate-y-1/2

        opacity-90

        pointer-events-none

        hidden
        xl:block
      "
    >

      <Canvas
        dpr={[1, 1.5]}

        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}

        camera={{
          position: [0, 0, 4],
          fov: 42,
        }}
      >

        {/* lighting */}
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[3, 3, 3]}
          intensity={1.5}
          color="#6EE7B7"
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={2}
          color="#22D3EE"
        />

        {/* orb */}
        <MemoOrbMesh />

      </Canvas>

      {/* glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(16,185,129,.18),transparent_65%)]

          blur-[70px]
        "
      />

    </div>
  );
}