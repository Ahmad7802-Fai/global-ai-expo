"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
} from "@react-three/drei";

import {
  useRef,
  useMemo,
} from "react";

import * as THREE from "three";

function GlobeMesh() {

  const globeRef =
    useRef<THREE.Mesh>(null);

  const points = useMemo(() => {

    const arr = [];

    for (let i = 0; i < 180; i++) {

      const phi =
        Math.acos(
          -1 + (2 * i) / 180
        );

      const theta =
        Math.sqrt(
          180 * Math.PI
        ) * phi;

      const radius = 2;

      const x =
        radius *
        Math.cos(theta) *
        Math.sin(phi);

      const y =
        radius *
        Math.sin(theta) *
        Math.sin(phi);

      const z =
        radius *
        Math.cos(phi);

      arr.push([x, y, z]);

    }

    return arr;

  }, []);

  useFrame((_, delta) => {

    if (!globeRef.current) return;

    globeRef.current.rotation.y +=
      delta * 0.08;

  });

  return (
    <Float
      speed={1.8}
      rotationIntensity={0.4}
      floatIntensity={0.8}
    >

      <group ref={globeRef}>

        {/* main globe */}
        <mesh>

          <sphereGeometry
            args={[2, 64, 64]}
          />

          <meshStandardMaterial
            color="#07110C"

            emissive="#10B981"

            emissiveIntensity={0.15}

            metalness={0.6}

            roughness={0.3}

            wireframe
          />

        </mesh>

        {/* glowing nodes */}
        {points.map((point, index) => (

          <mesh
            key={index}

            position={[
              point[0],
              point[1],
              point[2],
            ]}
          >

            <sphereGeometry
              args={[0.035, 12, 12]}
            />

            <meshBasicMaterial
              color="#6EE7B7"
            />

          </mesh>

        ))}

      </group>

    </Float>
  );
}

export default function Globe() {
  return (
    <div
      className="
        absolute
        right-[-180px]
        bottom-[-140px]

        z-[2]

        h-[680px]
        w-[680px]

        opacity-40
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
      >

        {/* lights */}
        <ambientLight intensity={1.5} />

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

        <GlobeMesh />

      </Canvas>

      {/* glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(16,185,129,.14),transparent_65%)]

          blur-[100px]
        "
      />

    </div>
  );
}