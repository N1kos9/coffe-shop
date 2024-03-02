import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingBean() {
  const mesh = useRef();

  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="brown" />
    </mesh>
  );
}

export default function CoffeeBean() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <RotatingBean />
    </Canvas>
  );
}
