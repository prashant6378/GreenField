
// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { statsData } from "../data"; // uses your existing statsData format (icon, value, label, unit)
// import * as THREE from "three";

// gsap.registerPlugin(ScrollTrigger);

// function StatCardMesh({ index, label, value }) {
//   // Each card will be a plane with a texture-like appearance (simple MeshStandard + text via HTML overlay)
//   const ref = useRef();
//   // slight floating
//   useFrame((state, dt) => {
//     if (ref.current) {
//       ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6 + index) * 0.03;
//       ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.25;
//     }
//   });

//   return (
//     <group ref={ref}>
//       <mesh position={[0, 0, 0]}>
//         <planeGeometry args={[6, 3.6]} />
//         <meshStandardMaterial color={"#e8f5e9"} roughness={0.8} metalness={0.1} />
//       </mesh>
//     </group>
//   );
// }

// function Stats3D({ setHtmlPositionsRef }) {
//   const groupRef = useRef();

//   useFrame(() => {
//     // read nothing here; group rotation is driven externally (via gsap)
//   });

//   // position 4 cards in a circle (front-facing)
//   const radius = 10;
//   return (
//     <group ref={groupRef} position={[0, 0, 0]}>
//       {statsData.map((s, i) => {
//         const angle = (i / statsData.length) * Math.PI * 2;
//         const x = Math.sin(angle) * radius * 0.7;
//         const z = Math.cos(angle) * radius * 0.65;
//         // small rotation to face camera
//         const ry = -angle + Math.PI;
//         return (
//           <group key={i} position={[x, 0, z]} rotation={[0, ry, 0]}>
//             <StatCardMesh index={i} label={s.label} value={s.value} />
//           </group>
//         );
//       })}
//     </group>
//   );
// }

// export default function Stats() {
//   const containerRef = useRef(null);
//   const sceneState = useRef({ rot: 0, lastScroll: 0 }).current;

//   useEffect(() => {
//     // GSAP ScrollTrigger that maps scroll to rotation, and responds to scroll direction
//     let ctx = gsap.context(() => {
//       // large rotation amount over the section
//       gsap.to(sceneState, {
//         rot: Math.PI * 0.9,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom", // start when section enters viewport
//           end: "bottom top",
//           scrub: 0.4,
//           onUpdate: (self) => {
//             // direction: 1 means scrolling down, -1 up
//             const dir = self.direction;
//             // add a small directional bump to rotation for a snappier feel
//             if (dir === 1) {
//               // scrolling down -> clockwise bump
//               gsap.to(sceneState, { rot: sceneState.rot + 0.02, overwrite: true, duration: 0.25 });
//             } else if (dir === -1) {
//               // scrolling up -> counterclockwise bump
//               gsap.to(sceneState, { rot: sceneState.rot - 0.02, overwrite: true, duration: 0.25 });
//             }
//           },
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [sceneState]);

//   // numeric counters — GSAP to animate DOM numbers
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       statsData.forEach((s, i) => {
//         const el = containerRef.current.querySelector(`.stat-value-${i}`);
//         if (!el) return;
//         const obj = { n: 0 };
//         gsap.to(obj, {
//           n: s.value,
//           duration: 2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 90%",
//             toggleActions: "play none none none",
//           },
//           onUpdate: () => {
//             el.textContent = Math.floor(obj.n);
//           },
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // render: left = 3D canvas, right = accessible DOM fallback with same stats (keeps SEO & accessibility)
//   return (
//     <section className="py-16 bg-white" ref={containerRef}>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-center">
//         {/* 3D canvas */}
//         <div className="w-full h-[360px] rounded-2xl overflow-hidden shadow-lg">
//           <Canvas camera={{ position: [0, 2, 28], fov: 35 }}>
//             <ambientLight intensity={0.9} />
//             <directionalLight position={[10, 10, 10]} intensity={0.6} />
//             {/* we use a simple wrapper that reads sceneState.rot (gsap will mutate it indirectly) */}
//             <RotatingWrapper sceneStateRef={sceneState} />
//           </Canvas>
//         </div>

//         {/* DOM fallback with numeric values and icons (keeps original look + animated numbers) */}
//         <div className="grid grid-cols-2 gap-6">
//           {statsData.map((s, i) => (
//             <div key={i} className="text-center p-6 bg-[#e8f5e9] rounded-xl shadow">
//               <s.icon className="w-12 h-12 mx-auto text-[#1B4D3E] mb-4" />
//               <h3 className="text-4xl font-bold text-[#1B4D3E]">
//                 <span className={`stat-value-${i}`}>{s.value}</span>
//                 {s.unit || ""}
//               </h3>
//               <p className="text-gray-700">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* helper wrapper that applies rotation from the shared sceneState */
// function RotatingWrapper({ sceneStateRef }) {
//   const groupRef = useRef();
//   useFrame(() => {
//     if (groupRef.current) {
//       // rotation is read from gsap-controlled object sceneStateRef.rot
//       // we tween toward that value for smoothness
//       groupRef.current.rotation.y += (sceneStateRef.rot - groupRef.current.rotation.y) * 0.08;
//     }
//   });

//   // position the 3D cards in a ring
//   const radius = 9;
//   return (
//     <group ref={groupRef} position={[0, -0.6, 0]}>
//       {statsData.map((s, i) => {
//         const angle = (i / statsData.length) * Math.PI * 2;
//         const x = Math.sin(angle) * radius * 0.7;
//         const z = Math.cos(angle) * radius * 0.6;
//         const ry = -angle + Math.PI;
//         return (
//           <group key={i} position={[x, 0, z]} rotation={[0, ry, 0]}>
//             <mesh position={[0, 0, 0]}>
//               <planeGeometry args={[6, 3.6]} />
//               <meshStandardMaterial color={"#e8f5e9"} roughness={0.8} />
//             </mesh>

//             {/* Add a small floating highlight */}
//             <mesh position={[0, 0.7, 0.01]}>
//               <planeGeometry args={[3, 0.7]} />
//               <meshBasicMaterial color={"#66bb6a"} transparent opacity={0.12} />
//             </mesh>
//           </group>
//         );
//       })}
//     </group>
//   );
// }
import React from "react";
import "../index.css";

const achievements = [
  { number: "2MM USD+", label: "Savings", icon: "👥" },
  { number: "100+", label: "Man Years of Excellence", icon: "⏱️" },
  { number: "150+", label: "Wells Simulations ", icon: "📚" },
  { number: "500+ MT", label: "Carbon Emissions Saved", icon: "🌿" },
];

export default function StatsCarousel() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "#E8F5E9", // <<-- YOUR EXACT COLOR
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#164D3D] mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600">
            100+ Man Years of Excellence, 500+ MT carbon emissions saved, and more.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="carousel-container">
          <div className="carousel-ring">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="carousel-card"
                style={{
                  transform: `rotateY(${i * 90}deg) translateZ(300px)`,

                  // MORE TRANSPARENT NOW
                  background: "rgba(22, 77, 61, 0.12)",
                  border: "1px solid rgba(22, 77, 61, 0.5)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <div className="text-5xl mb-3 text-[#164D3D]">{a.icon}</div>
                <div className="text-4xl font-bold text-[#164D3D]">
                  {a.number}
                </div>
                <div className="text-[#2b6e59] text-lg mt-2">{a.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
