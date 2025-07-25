import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SpinningCube() {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function ThreeCube() {
  return (
    <div style={{ height: "300px", marginTop: "40px" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
