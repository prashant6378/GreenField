// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const getServicePath = (id) => {
//   switch (id) {
   
//     case 1:
//       return "/services/software";
//     case 2:
//       return "/services/oil-gas";
//     case 3:
//       return "/services/training";
//     case 4:
//       return "/services/data-analysis";
//     default:
//       return "/services";
//   }
// };

// export default function Services({ services }) {
//   return (
//     <section className="py-20 bg-[#e8f5e9]">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-2">Our Core Services</h2>
//           <p className="text-gray-700 max-w-2xl mx-auto">Comprehensive solutions designed to optimize your operations.</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((s, i) => (
//             <div key={i} tabIndex={0} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition focus:outline-none focus:ring-4 focus:ring-[#1B4D3E]/20">
//               <div className="bg-[#AFE1AF] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
//                 <s.icon className="w-8 h-8 text-white" />
//               </div>
//               <h4 className="text-2xl font-bold text-[#1B4D3E] mb-3">{s.title}</h4>
//               <p className="text-gray-700 mb-6">{s.description}</p>
//               {/* <Link to="/services" className="text-[#1B4D3E] font-semibold inline-flex items-center gap-2">Learn More <ArrowRight className="w-4 h-4" /></Link> */}
//               <Link
//   to={getServicePath(s.id)}
//   className="text-[#1B4D3E] font-semibold inline-flex items-center gap-2"
// >
//   Learn More <ArrowRight className="w-4 h-4" />
// </Link>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { asset } from "../utils/asset";

/* =======================
   COLORFUL, DARKER, SMALLER EARTH
======================= */
function BackgroundGlobe() {
  const earthRef = useRef();
  const texture = useTexture(asset("/images/earth.jpg"));

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0016; // slightly faster rotation
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[3.0, 64, 64]} /> {/* smaller size */}
      <meshStandardMaterial
        map={texture}
        roughness={0.55}
        metalness={0.1}
        color="#cbd5e1"          // boosts colors slightly
        emissive="#0b1f2a"       // darker base tone
        emissiveIntensity={0.35} // richer contrast
      />
    </mesh>
  );
}

/* =======================
   ROUTE HANDLER
======================= */
const getServicePath = (id) => {
  switch (id) {
    case 1:
      return "/services/software";
    case 2:
      return "/services/oil-gas";
    case 3:
      return "/services/training";
    case 4:
      return "/services/data-analysis";
    default:
      return "/services";
  }
};

/* =======================
   SERVICES SECTION
======================= */
export default function Services({ services }) {
  return (
    <section className="relative py-24 bg-[#f2f8f3] overflow-hidden">

      {/* 🌍 BACKGROUND GLOBE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.6]">
          <Canvas camera={{ position: [0, 0, 8] }}>
            {/* Balanced, colorful lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <directionalLight position={[-4, -3, 6]} intensity={0.7} />

            <BackgroundGlobe />
          </Canvas>
        </div>
      </div>

      {/* 🔝 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-3">
            Our Core Services
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Comprehensive solutions designed to optimize your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              tabIndex={0}
              className="
                bg-white/85
                backdrop-blur-md
                border border-white
                p-8
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transform hover:-translate-y-2
                transition-all duration-300
                focus:outline-none
                focus:ring-4 focus:ring-[#1B4D3E]/20
              "
            >
              <div className="bg-[#AFE1AF] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <s.icon className="w-8 h-8 text-white" />
              </div>

              <h4 className="text-2xl font-bold text-[#1B4D3E] mb-3">
                {s.title}
              </h4>

              <p className="text-gray-900 mb-6 leading-relaxed">
                {s.description}
              </p>

              <Link
                to={getServicePath(s.id)}
                className="text-[#1B4D3E] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

