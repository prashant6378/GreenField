import React from "react";
import { asset } from "../utils/asset";


export default function Partners({ logos = [] }) {
  const manualLogos = [
    asset("/images/images.png"),
    asset("/images/Permian Oil & Gas.png"),
    asset("/images/Picture01.png"), 
    asset("/images/TPS.jpg")
  ];

  const allLogos = [...manualLogos, ...logos];

  // Duplicate list 4 times to ensure seamless looping on all screen sizes
  const logosLoop = [...allLogos, ...allLogos, ...allLogos, ...allLogos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] text-center mb-10">
          Our Partners
        </h3>

        <div className="overflow-hidden relative w-full">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {logosLoop.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-10"
                style={{ width: "260px" }}
              >
                <img
                  src={img}
                  alt={`partner-${i}`}
                  className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
                  // Added rendering hint for smoother image scaling
                  style={{ imageRendering: "high-quality" }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error("Image failed to load:", img); 
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .animate-marquee {
            /* CHANGED: Increased time to 45s for slower speed */
            animation: marquee 45s linear infinite;
            
            /* SMOOTHNESS FIX: Helps browser optimize rendering */
            will-change: transform;
            backface-visibility: hidden;
            transform: translateZ(0); 
          }

          @keyframes marquee {
            0% { 
              /* SMOOTHNESS FIX: Use translate3d to force GPU acceleration */
              transform: translate3d(0, 0, 0); 
            }
            100% { 
              /* Move -50% (2 full sets) to reset seamlessly */
              transform: translate3d(-50%, 0, 0); 
            }
          }
        `}</style>
      </div>
    </section>
  );
}