import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef } from "react";

function Earth() {
  const earthRef = useRef();

  // Load local texture (NO CORS issues)
  const texture = useTexture("/images/earth.jpg");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.6, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function RotatingGlobe() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Earth />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
