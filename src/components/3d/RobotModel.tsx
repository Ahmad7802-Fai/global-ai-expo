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
} from "react";

import * as THREE from "three";

interface RobotModelProps {
  className?: string;

  opacity?: number;

  scale?: number;
}

function Robot() {

  const groupRef =
    useRef<THREE.Group>(null);

  useFrame((state, delta) => {

    if (!groupRef.current) return;

    groupRef.current.rotation.y +=
      delta * 0.18;

    groupRef.current.position.y =
      Math.sin(
        state.clock.elapsedTime * 1.5
      ) * 0.08;

  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.25}
      floatIntensity={0.6}
    >

      <group ref={groupRef}>

        {/* HEAD */}
        <mesh position={[0, 1.5, 0]}>

          <sphereGeometry
            args={[0.45, 64, 64]}
          />

          <meshStandardMaterial
            color="#D1FAE5"

            emissive="#10B981"

            emissiveIntensity={0.35}

            metalness={1}

            roughness={0.18}
          />

        </mesh>

        {/* visor */}
        <mesh position={[0, 1.48, 0.36]}>

          <boxGeometry
            args={[0.48, 0.12, 0.04]}
          />

          <meshBasicMaterial
            color="#22D3EE"
          />

        </mesh>

        {/* BODY */}
        <mesh position={[0, 0.45, 0]}>

          <capsuleGeometry
            args={[0.45, 1.4, 12, 24]}
          />

          <meshStandardMaterial
            color="#ECFDF5"

            emissive="#34D399"

            emissiveIntensity={0.18}

            metalness={0.95}

            roughness={0.22}
          />

        </mesh>

        {/* CORE */}
        <mesh position={[0, 0.4, 0.42]}>

          <circleGeometry
            args={[0.12, 32]}
          />

          <meshBasicMaterial
            color="#6EE7B7"
          />

        </mesh>

        {/* LEFT ARM */}
        <mesh position={[-0.78, 0.55, 0]}>

          <capsuleGeometry
            args={[0.11, 0.9, 8, 16]}
          />

          <meshStandardMaterial
            color="#E2FCEF"

            metalness={1}

            roughness={0.18}
          />

        </mesh>

        {/* RIGHT ARM */}
        <mesh position={[0.78, 0.55, 0]}>

          <capsuleGeometry
            args={[0.11, 0.9, 8, 16]}
          />

          <meshStandardMaterial
            color="#E2FCEF"

            metalness={1}

            roughness={0.18}
          />

        </mesh>

        {/* LEFT LEG */}
        <mesh position={[-0.28, -1.1, 0]}>

          <capsuleGeometry
            args={[0.13, 1.1, 8, 16]}
          />

          <meshStandardMaterial
            color="#D1FAE5"

            metalness={1}

            roughness={0.2}
          />

        </mesh>

        {/* RIGHT LEG */}
        <mesh position={[0.28, -1.1, 0]}>

          <capsuleGeometry
            args={[0.13, 1.1, 8, 16]}
          />

          <meshStandardMaterial
            color="#D1FAE5"

            metalness={1}

            roughness={0.2}
          />

        </mesh>

        {/* hologram ring */}
        <mesh
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.85, 0]}
        >

          <torusGeometry
            args={[1.3, 0.015, 16, 180]}
          />

          <meshBasicMaterial
            color="#34D399"

            transparent

            opacity={0.3}
          />

        </mesh>

      </group>

    </Float>
  );
}

export default function RobotModel({
  className = "",
  opacity = 0.9,
  scale = 1,
}: RobotModelProps) {

  return (
    <div
      className={`
        absolute

        right-[4%]
        bottom-[-40px]

        z-[5]

        h-[760px]
        w-[560px]

        pointer-events-none

        ${className}
      `}
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >

        {/* lights */}
        <ambientLight intensity={1.6} />

        <directionalLight
          position={[4, 4, 4]}
          intensity={2.4}
          color="#6EE7B7"
        />

        <pointLight
          position={[-4, 0, 2]}
          intensity={2}
          color="#22D3EE"
        />

        <spotLight
          position={[0, 6, 4]}
          intensity={2.5}
          angle={0.4}
          penumbra={1}
          color="#FFFFFF"
        />

        {/* robot */}
        <Robot />

        {/* fog */}
        <fog
          attach="fog"
          args={[
            "#020617",
            6,
            12,
          ]}
        />

      </Canvas>

      {/* cinematic glow */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(16,185,129,.14),transparent_68%)]

          blur-[120px]
        "
      />

    </div>
  );
}