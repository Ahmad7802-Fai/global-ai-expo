"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  useRef,
  useMemo,
} from "react";

import * as THREE from "three";

function WaveGrid() {

  const meshRef =
    useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {

    const geo =
      new THREE.PlaneGeometry(
        30,
        30,
        80,
        80
      );

    return geo;

  }, []);

  useFrame((state) => {

    if (!meshRef.current) return;

    const time =
      state.clock.elapsedTime;

    const positions =
      meshRef.current.geometry
        .attributes.position;

    for (
      let i = 0;
      i < positions.count;
      i++
    ) {

      const x =
        positions.getX(i);

      const y =
        positions.getY(i);

      const waveX =
        Math.sin(x * 0.7 + time)
        * 0.15;

      const waveY =
        Math.cos(y * 0.7 + time)
        * 0.15;

      positions.setZ(
        i,
        waveX + waveY
      );

    }

    positions.needsUpdate = true;

  });

  return (
    <mesh
      ref={meshRef}

      geometry={geometry}

      rotation={[
        -Math.PI / 2.4,
        0,
        0,
      ]}

      position={[0, -3, 0]}
    >

      <meshBasicMaterial
        color="#10B981"

        wireframe

        transparent

        opacity={0.18}
      />

    </mesh>
  );
}

export default function GridWave() {
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
          position: [0, 2, 6],
          fov: 55,
        }}
      >

        <fog
          attach="fog"
          args={[
            "#020617",
            8,
            18,
          ]}
        />

        <WaveGrid />

      </Canvas>

    </div>
  );
}