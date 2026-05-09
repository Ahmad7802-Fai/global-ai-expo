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
  useRef,
} from "react";

import * as THREE from "three";

function Orb() {

  const meshRef =
    useRef<THREE.Mesh>(null);

  useFrame((state) => {

    if (!meshRef.current) return;

    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.25;

    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.08;

  });

  return (
    <Float
      speed={2}
      rotationIntensity={1.4}
      floatIntensity={2}
    >

      <mesh ref={meshRef}>

        <icosahedronGeometry
          args={[1.6, 32]}
        />

        <MeshDistortMaterial
          color="#34D399"

          emissive="#10B981"

          emissiveIntensity={1.5}

          roughness={0}

          metalness={0.4}

          distort={0.45}

          speed={2.5}

          transparent

          opacity={0.9}
        />

      </mesh>

    </Float>
  );
}

export default function AIOrb() {
  return (
    <div
      className="
        absolute
        right-[-120px]
        top-1/2

        z-[4]

        h-[700px]
        w-[700px]

        -translate-y-1/2

        opacity-90
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 45,
        }}
      >

        {/* lighting */}
        <ambientLight intensity={1.4} />

        <directionalLight
          position={[3, 3, 3]}
          intensity={2}
          color="#6EE7B7"
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={3}
          color="#22D3EE"
        />

        {/* orb */}
        <Orb />

      </Canvas>

      {/* glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(16,185,129,.22),transparent_60%)]

          blur-[80px]
        "
      />

    </div>
  );
}