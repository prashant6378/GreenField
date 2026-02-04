
// import React, { useRef, useLayoutEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // shared state mutated by GSAP; read by R3F in useFrame
// const sceneState = { rotY: 0, mouseX: 0, mouseY: 0, scale: 1 };

// function ParticleField({ count = 300 }) {
//   const ref = useRef();
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y = sceneState.rotY * 0.15; // subtle follow
//       ref.current.position.x = sceneState.mouseX * 0.02;
//       ref.current.position.y = sceneState.mouseY * 0.02;
//     }
//   });

//   const positions = new Float32Array(count * 3);
//   for (let i = 0; i < count; i++) {
//     positions[i * 3 + 0] = (Math.random() - 0.5) * 60;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
//   }

//   return (
//     <points ref={ref}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={positions.length / 3}
//           array={positions}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial size={0.6} sizeAttenuation transparent opacity={0.14} color={"#a5d6a7"} />
//     </points>
//   );
// }

// function WireSphere() {
//   const ref = useRef();
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y = sceneState.rotY * 0.5;
//       ref.current.rotation.x = sceneState.rotY * 0.08;
//       ref.current.scale.setScalar(sceneState.scale);
//     }
//   });

//   return (
//     <mesh ref={ref}>
//       <icosahedronGeometry args={[8, 3]} />
//       <meshBasicMaterial wireframe opacity={0.12} color={"#66bb6a"} />
//     </mesh>
//   );
// }

// export default function ThreeJSBackground() {
//   const containerRef = useRef();

//   useLayoutEffect(() => {
//     // scroll controls: small rotation & scale change across hero height
//     const ctx = gsap.context(() => {
//       gsap.to(sceneState, {
//         rotY: Math.PI * 0.75, // rotate scene as user scrolls through hero
//         scale: 0.95,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 0.8,
//         },
//       });

//       // subtle parallax following pointer
//       function onMove(e) {
//         const w = window.innerWidth;
//         const h = window.innerHeight;
//         const nx = (e.clientX - w / 2) / w;
//         const ny = (e.clientY - h / 2) / h;
//         gsap.to(sceneState, { mouseX: nx, mouseY: -ny, duration: 0.6, ease: "power2.out" });
//       }
//       window.addEventListener("pointermove", onMove);
//       return () => {
//         window.removeEventListener("pointermove", onMove);
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
//       <Canvas camera={{ position: [0, 0, 22], fov: 35 }}>
//         <ambientLight intensity={0.9} />
//         <directionalLight intensity={0.6} position={[5, 10, 5]} />
//         <ParticleField />
//         <WireSphere />
//       </Canvas>
//     </div>
//   );
// }


// src/components/ThreeJSBackground.jsx
import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

const sceneState = { mouseX: 0, mouseY: 0, wobble: 0 };

function ParticleField({ count = 300 }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      // slight drift for life
      ref.current.rotation.y += 0.0006;
      ref.current.position.x = sceneState.mouseX * 0.02;
      ref.current.position.y = sceneState.mouseY * 0.02;
    }
  });

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.7} sizeAttenuation transparent opacity={0.12} color={"#a5d6a7"} />
    </points>
  );
}

function ContinuousGlobe() {
  const ref = useRef();

  useFrame((state, dt) => {
    if (!ref.current) return;
    // continuous rotation (independent of scroll)
    ref.current.rotation.y += 0.006; // base rotation speed
    ref.current.rotation.x += 0.0015;

    // subtle wobble controlled by sceneState.wobble (can be animated if needed)
    const wob = Math.sin(state.clock.elapsedTime * 0.6) * 0.02;
    ref.current.rotation.z = wob + sceneState.wobble * 0.01;
    // small parallax follow
    ref.current.position.x = sceneState.mouseX * 0.02;
    ref.current.position.y = sceneState.mouseY * 0.02;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <icosahedronGeometry args={[10, 2]} />
      <meshStandardMaterial wireframe opacity={0.12} color={"#66bb6a"} />
    </mesh>
  );
}

export default function ThreeJSBackground() {
  const containerRef = useRef();

  useLayoutEffect(() => {
    // pointer parallax
    function onMove(e) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nx = (e.clientX - w / 2) / w;
      const ny = (e.clientY - h / 2) / h;
      gsap.to(sceneState, { mouseX: nx, mouseY: -ny, duration: 0.6, ease: "power2.out" });
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 26], fov: 35 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[6, 10, 6]} intensity={0.6} />
        <ParticleField />
        <ContinuousGlobe />
      </Canvas>
    </div>
  );
}
