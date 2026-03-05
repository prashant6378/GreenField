
// import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import gsap from "gsap";

// const sceneState = { mouseX: 0, mouseY: 0, wobble: 0 };

// function ParticleField({ count = 300, isMobile }) {
//   const ref = useRef();

//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.0006;
//       ref.current.position.x = sceneState.mouseX * 0.02;
//       ref.current.position.y = sceneState.mouseY * 0.02;
//     }
//   });

//   // 🔥 Reduce particles for mobile
//   const finalCount = isMobile ? Math.floor(count * 0.4) : count;

//   const positions = new Float32Array(finalCount * 3);
//   for (let i = 0; i < finalCount; i++) {
//     positions[i * 3 + 0] = (Math.random() - 0.5) * 80;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
//     positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
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
//       <pointsMaterial
//         size={isMobile ? 0.5 : 0.7}
//         sizeAttenuation
//         transparent
//         opacity={0.12}
//         color={"#a5d6a7"}
//       />
//     </points>
//   );
// }

// function ContinuousGlobe({ isMobile }) {
//   const ref = useRef();

//   useFrame((state) => {
//     if (!ref.current) return;

//     ref.current.rotation.y += isMobile ? 0.004 : 0.006;
//     ref.current.rotation.x += isMobile ? 0.001 : 0.0015;

//     const wob = Math.sin(state.clock.elapsedTime * 0.6) * 0.02;
//     ref.current.rotation.z = wob + sceneState.wobble * 0.01;

//     ref.current.position.x = sceneState.mouseX * 0.02;
//     ref.current.position.y = sceneState.mouseY * 0.02;
//   });

//   return (
//     <mesh
//       ref={ref}
//       position={[0, 0, 0]}
//       scale={isMobile ? 0.6 : 1}   // 🔥 smaller globe on mobile
//     >
//       <icosahedronGeometry args={[10, 2]} />
//       <meshStandardMaterial
//         wireframe
//         opacity={0.12}
//         color={"#a5d6a7"}
//       />
//     </mesh>
//   );
// }

// export default function ThreeJSBackground({ scale = 1 }) {
//   const containerRef = useRef();
//   const [isMobile, setIsMobile] = useState(false);

//   /* ===============================
//      MOBILE DETECTION
//   =============================== */
//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreen();
//     window.addEventListener("resize", checkScreen);

//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   /* ===============================
//      POINTER PARALLAX
//   =============================== */
//   useLayoutEffect(() => {
//     function onMove(e) {
//       const w = window.innerWidth;
//       const h = window.innerHeight;
//       const nx = (e.clientX - w / 2) / w;
//       const ny = (e.clientY - h / 2) / h;

//       gsap.to(sceneState, {
//         mouseX: nx,
//         mouseY: -ny,
//         duration: 0.6,
//         ease: "power2.out",
//       });
//     }

//     window.addEventListener("pointermove", onMove);
//     return () => window.removeEventListener("pointermove", onMove);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 z-0 pointer-events-none"
//     >
//       <Canvas
//         camera={{
//           position: isMobile ? [0, 0, 32] : [0, 0, 26], // 🔥 push camera back on mobile
//           fov: isMobile ? 22 : 50,
//         }}
//         dpr={isMobile ? 1 : window.devicePixelRatio} // 🔥 performance boost
//       >
//         <ambientLight intensity={0.9} />
//         <directionalLight position={[6, 10, 6]} intensity={0.6} />

//         <ParticleField count={300} isMobile={isMobile} />
//         <ContinuousGlobe isMobile={isMobile} />
//       </Canvas>
//     </div>
//   );
// }

import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

const sceneState = { mouseX: 0, mouseY: 0, wobble: 0 };

function ParticleField({ count = 300, isMobile }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0006;
      ref.current.position.x = sceneState.mouseX * 0.02;
      ref.current.position.y = sceneState.mouseY * 0.02;
    }
  });

  const finalCount = isMobile ? Math.floor(count * 0.4) : count;

  const positions = new Float32Array(finalCount * 3);

  for (let i = 0; i < finalCount; i++) {
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

      <pointsMaterial
        size={isMobile ? 0.5 : 0.7}
        sizeAttenuation
        transparent
        opacity={0.12}
        color="#a5d6a7"
      />
    </points>
  );
}

function ContinuousGlobe({ isMobile }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += isMobile ? 0.004 : 0.006;
    ref.current.rotation.x += isMobile ? 0.001 : 0.0015;

    const wob = Math.sin(state.clock.elapsedTime * 0.6) * 0.02;

    ref.current.rotation.z = wob + sceneState.wobble * 0.01;

    ref.current.position.x = sceneState.mouseX * 0.02;
    ref.current.position.y = sceneState.mouseY * 0.02;
  });

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      scale={isMobile ? 0.6 : 1}
    >
      <icosahedronGeometry args={[10, 2]} />

      <meshStandardMaterial
        wireframe
        opacity={0.12}
        color="#a5d6a7"
      />
    </mesh>
  );
}

export default function ThreeJSBackground() {
  const containerRef = useRef();

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  /* ===============================
     MOBILE DETECTION
  =============================== */

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  /* ===============================
     POINTER PARALLAX
  =============================== */

  useLayoutEffect(() => {
    function onMove(e) {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const nx = (e.clientX - w / 2) / w;
      const ny = (e.clientY - h / 2) / h;

      gsap.to(sceneState, {
        mouseX: nx,
        mouseY: -ny,
        duration: 0.6,
        ease: "power2.out",
      });
    }

    window.addEventListener("pointermove", onMove);

    return () =>
      window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
    >
      <Canvas
        key={isMobile ? "mobile-canvas" : "desktop-canvas"}   // ⭐ FIXES RANDOM RESIZE BUG
        dpr={isMobile ? 1 : [1, 2]}                           // ⭐ Better performance
        camera={{
          position: isMobile ? [0, 0, 32] : [0, 0, 26],
          fov: isMobile ? 22 : 50,
        }}
      >
        <ambientLight intensity={0.9} />

        <directionalLight
          position={[6, 10, 6]}
          intensity={0.6}
        />

        <ParticleField
          count={300}
          isMobile={isMobile}
        />

        <ContinuousGlobe
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}
