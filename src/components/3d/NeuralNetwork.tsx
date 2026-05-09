"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Line,
} from "@react-three/drei";

import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

function Network() {

  const groupRef =
    useRef<THREE.Group>(null);

  const nodes = useMemo(() => {

    const arr = [];

    for (let i = 0; i < 28; i++) {

      arr.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ]);

    }

    return arr;

  }, []);

  const connections = useMemo(() => {

    const lines = [];

    for (let i = 0; i < nodes.length; i++) {

      for (
        let j = i + 1;
        j < nodes.length;
        j++
      ) {

        const a = nodes[i];
        const b = nodes[j];

        const dx = a[0] - b[0];
        const dy = a[1] - b[1];
        const dz = a[2] - b[2];

        const dist = Math.sqrt(
          dx * dx +
          dy * dy +
          dz * dz
        );

        if (dist < 3) {

          lines.push([a, b]);

        }

      }

    }

    return lines;

  }, [nodes]);

  useFrame((state, delta) => {

    if (!groupRef.current) return;

    groupRef.current.rotation.y +=
      delta * 0.03;

  });

  return (
    <group ref={groupRef}>

      {/* nodes */}
      {nodes.map((pos, index) => (

        <mesh
          key={index}
          position={[
            pos[0],
            pos[1],
            pos[2],
          ]}
        >

          <sphereGeometry
            args={[0.05, 16, 16]}
          />

          <meshBasicMaterial
            color="#6EE7B7"
          />

        </mesh>

      ))}

      {/* lines */}
      {connections.map(
        (line, index) => (

        <Line
          key={index}

          points={[
            new THREE.Vector3(
              line[0][0],
              line[0][1],
              line[0][2]
            ),

            new THREE.Vector3(
              line[1][0],
              line[1][1],
              line[1][2]
            ),
          ]}

          color="#34D399"

          transparent

          opacity={0.18}

          lineWidth={0.6}
        />

      ))}

    </group>
  );
}

export default function NeuralNetwork() {
  return (
    <div
      className="
        absolute
        inset-0

        z-[2]

        opacity-60
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 55,
        }}
      >

        <ambientLight intensity={1} />

        <Network />

      </Canvas>

    </div>
  );
}