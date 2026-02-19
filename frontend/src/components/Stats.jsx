
// import React from "react";
// import "../index.css";

// const achievements = [
//   { number: "2MM USD+", label: "Savings", icon: "👥" },
//   { number: "100+", label: "Man Years of Excellence", icon: "⏱️" },
//   { number: "150+", label: "Wells Simulations ", icon: "📚" },
//   { number: "500+ MT", label: "Carbon Emissions Saved", icon: "🌿" },
// ];

// export default function StatsCarousel() {
//   return (
//     <section
//       className="py-20 relative overflow-hidden"
//       style={{
//         background: "#E8F5E9", // <<-- YOUR EXACT COLOR
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#164D3D] mb-4">
//             Our Achievements
//           </h2>
//           <p className="text-xl text-gray-600">
//             100+ Man Years of Excellence, 500+ MT carbon emissions saved, and more.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="carousel-container">
//           <div className="carousel-ring">
//             {achievements.map((a, i) => (
//               <div
//                 key={i}
//                 className="carousel-card"
//                 style={{
//                   transform: `rotateY(${i * 90}deg) translateZ(300px)`,

//                   // MORE TRANSPARENT NOW
//                   background: "rgba(22, 77, 61, 0.12)",
//                   border: "1px solid rgba(22, 77, 61, 0.5)",
//                   backdropFilter: "blur(6px)",
//                   WebkitBackdropFilter: "blur(6px)",
//                 }}
//               >
//                 <div className="text-5xl mb-3 text-[#164D3D]">{a.icon}</div>
//                 <div className="text-4xl font-bold text-[#164D3D]">
//                   {a.number}
//                 </div>
//                 <div className="text-[#2b6e59] text-lg mt-2">{a.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";
import "../index.css";

const achievements = [
  { number: "2MM USD+", label: "Savings", icon: "👥" },
  { number: "100+", label: "Man Years of Excellence", icon: "⏱️" },
  { number: "150+", label: "Wells Simulations ", icon: "📚" },
  { number: "500+ MT", label: "Carbon Emissions Saved", icon: "🌿" },
];

export default function StatsCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  /* ===============================
     MOBILE DETECTION
  =============================== */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🔥 Adjust translate depth based on screen
  const translateZ = isMobile ? 180 : 300;

  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "#E8F5E9",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#164D3D] mb-4">
            Our Achievements
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            100+ Man Years of Excellence, 500+ MT carbon emissions saved, and more.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="carousel-container flex justify-center"
          style={{
            perspective: isMobile ? "800px" : "1200px",
          }}
        >
          <div
            className="carousel-ring relative"
            style={{
              width: isMobile ? "220px" : "400px",
              height: isMobile ? "220px" : "400px",
              transformStyle: "preserve-3d",
              animation: "spin 18s linear infinite",
            }}
          >
            {achievements.map((a, i) => (
              <div
                key={i}
                className="carousel-card absolute flex flex-col items-center justify-center text-center rounded-2xl shadow-xl"
                style={{
                  width: isMobile ? "180px" : "260px",
                  height: isMobile ? "180px" : "260px",
                  transform: `rotateY(${i * 90}deg) translateZ(${translateZ}px)`,

                  background: "rgba(22, 77, 61, 0.12)",
                  border: "1px solid rgba(22, 77, 61, 0.5)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 text-[#164D3D]">
                  {a.icon}
                </div>

                <div className="text-xl sm:text-2xl md:text-4xl font-bold text-[#164D3D]">
                  {a.number}
                </div>

                <div className="text-[#2b6e59] text-sm sm:text-base md:text-lg mt-2 px-2">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 🔄 Spin Animation */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
}
