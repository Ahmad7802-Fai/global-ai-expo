"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  Stars,
} from "@react-three/drei";

import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

interface EarthCanvasProps {
  className?: string;

  showStars?: boolean;

  autoRotate?: boolean;

  opacity?: number;
}

function Earth({
  autoRotate = true,
}: {
  autoRotate?: boolean;
}) {

  const earthRef =
    useRef<THREE.Group>(null);

  const points = useMemo(() => {

    const arr = [];

    for (let i = 0; i < 260; i++) {

      const phi =
        Math.acos(
          -1 + (2 * i) / 260
        );

      const theta =
        Math.sqrt(
          260 * Math.PI
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

    if (
      !earthRef.current ||
      !autoRotate
    ) return;

    earthRef.current.rotation.y +=
      delta * 0.08;

  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.7}
    >

      <group ref={earthRef}>

        {/* main sphere */}
        <mesh>

          <sphereGeometry
            args={[2, 64, 64]}
          />

          <meshStandardMaterial
            color="#06110D"

            emissive="#10B981"

            emissiveIntensity={0.12}

            metalness={0.8}

            roughness={0.22}

            wireframe
          />

        </mesh>

        {/* nodes */}
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
              args={[0.03, 10, 10]}
            />

            <meshBasicMaterial
              color="#6EE7B7"
            />

          </mesh>

        ))}

        {/* outer ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>

          <torusGeometry
            args={[2.4, 0.01, 16, 180]}
          />

          <meshBasicMaterial
            color="#34D399"

            transparent

            opacity={0.35}
          />

        </mesh>

      </group>

    </Float>
  );
}

export default function EarthCanvas({
  className = "",
  showStars = true,
  autoRotate = true,
  opacity = 0.55,
}: EarthCanvasProps) {

  return (
    <div
      className={`
        absolute

        right-[-180px]
        bottom-[-120px]

        h-[720px]
        w-[720px]

        pointer-events-none

        ${className}
      `}
      style={{
        opacity,
      }}
    >

      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
      >

        {/* stars */}
        {showStars && (

          <Stars
            radius={80}

            depth={40}

            count={2000}

            factor={2}

            saturation={0}

            fade

            speed={0.4}
          />

        )}

        {/* lights */}
        <ambientLight intensity={1.4} />

        <directionalLight
          position={[4, 4, 4]}
          intensity={2}
          color="#6EE7B7"
        />

        <pointLight
          position={[-5, -3, 2]}
          intensity={3}
          color="#22D3EE"
        />

        {/* earth */}
        <Earth autoRotate={autoRotate} />

        {/* fog */}
        <fog
          attach="fog"
          args={[
            "#020617",
            8,
            16,
          ]}
        />

      </Canvas>

      {/* glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(16,185,129,.12),transparent_65%)]

          blur-[120px]
        "
      />

    </div>
  );
}