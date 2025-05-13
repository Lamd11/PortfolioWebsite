import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SquareParticle({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[0.05, 0.05]} />
      <meshBasicMaterial
        color="white"
        transparent
        opacity={1.0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function SaturnSystem() {
  const planetRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.rotation.y = t * 0.2;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y = t * 0.5;
    }
  });

  // Planet squares
  const planetSquares = Array.from({ length: 500 }, () => {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    return <SquareParticle key={`${x}${y}${z}`} position={[x, y, z]} />;
  });

  // Ring orbit squares
  const orbitingSquares = Array.from({ length: 200 }, (_, i) => {
    const angle = (i / 200) * Math.PI * 2;
    const radius = 1.7 + (i % 2) * 0.1;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    const y = 0;

    return <SquareParticle key={i} position={[x, y, z]} />;
  });

  return (
    <group rotation={[0.4, -0.3, 0.1]}> {/* Initial slant here */}
      <group ref={planetRef}>{planetSquares}</group>
      <group ref={orbitRef}>{orbitingSquares}</group>
    </group>
  );
}

export default function SaturnScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <SaturnSystem />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
