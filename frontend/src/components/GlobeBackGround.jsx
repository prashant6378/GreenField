import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

function Earth() {
  const earthRef = useRef();
  const texture = useTexture("/textures/earth.jpg");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.9;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[3.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function GlobeBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      <Canvas camera={{ position: [0, 0, 9] }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Earth />
      </Canvas>
    </div>
  );
}
