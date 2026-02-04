// src/components/Products.jsx (MINIMAL CHANGE)


import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react"; // Only ArrowRight is needed now
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "../utils/asset";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const productRef = useRef(null);

  const products = [
    {
      // Replaced Lucide component with image path
      icon: asset("/images/icons/SandMaster.jpg"), 
      name: "SandMaster",
      slug:"sandmaster",
      tagline: "Advanced Sand Management",
      description:
        "Comprehensive software solution for sand management in oil and gas operations. Monitor, predict, and optimize sand control strategies with real-time analytics.",
      features: [
        "Real-time sand production monitoring",
        "Predictive analytics",
        "Automated reporting",
        "Risk assessment tools",
      ],
      video:
        "https://player.vimeo.com/video/637143154?autoplay=1&muted=1&loop=1&background=1",
    },
    {
      icon: asset("/images/icons/RockMaster.jpg"),
      name: "RockMaster",
      slug:"rockmaster",
      tagline: "Rock Mechanical Stability",
      description:
        "Advanced rock mechanics analysis tool for evaluating wellbore stability, formation integrity, and geomechanical risks.",
      features: [
        "Wellbore stability analysis",
        "Geomechanical modeling",
        "Risk prediction",
        "Formation evaluation",
      ],
      video: asset("/video/RockMaster_Final.mp4"),
    },
    {
      icon: asset("/images/icons/AutoWellz.jpg"),
      name: "AutoWellz",
      slug:"autowellz",
      tagline: "Well Operation Workflow",
      description:
        "Streamline your well operations with automated workflow management. From planning to execution, manage every aspect efficiently.",
      features: [
        "Workflow automation",
        "Real-time collaboration",
        "Document management",
        "Compliance tracking",
      ],
      video:
        "https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&background=1",
    },
    {
      icon: asset("/images/icons/AutoPro.jpg"),
      name: "AutoPro",
      slug:"autopro",
      tagline: "Engineering Process Digitization",
      description:
        "Transform your engineering processes with digital solutions. Automate routine tasks, enhance accuracy, and improve efficiency.",
      features: [
        "Process automation",
        "Digital workflows",
        "Data integration",
        "Performance optimization",
      ],
      video: asset("/video/autopro.mp4"),
    },
    {
      icon: asset("/images/icons/GREEN.jpg"),
      name: "GREEN",
      slug:"green",
      tagline: "GHG Emissions Calculator",
      description:
        "Calculate, track, and reduce your carbon footprint with our comprehensive emissions calculator.",
      features: [
        "Emissions calculation",
        "Carbon footprint tracking",
        "Sustainability reporting",
        "Reduction strategies",
      ],
      video:
        asset("/video/GREEN.mp4"),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".product-card");
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: productRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, productRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white" ref={productRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-2">
            Our Products
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Innovative digital solutions built for the future of energy.
          </p>
        </div>

        {products.map((product, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center product-card ${
              index % 2 === 1 ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* TEXT SECTION */}
            <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
              {/* IMAGE ICON CONTAINER - Same dimensions (w-20 h-20) */}
              <div className="w-20 h-20 mb-6 shadow-lg rounded-2xl">
                 <img 
                   src={product.icon} 
                   alt={`${product.name} Icon`} 
                   className="w-full h-full object-cover rounded-2xl" 
                 />
              </div>

              <h3 className="text-3xl font-bold text-[#1B4D3E] mb-2">
                {product.name}
              </h3>

              <p className="text-lg font-semibold text-[#1B4D3E] mb-3">
                {product.tagline}
              </p>

              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="bg-[#1B4D3E] w-2 h-2 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={`/products/${product.slug}`}
                className="bg-[#AFE1AF] text-[#1B4D3E] px-6 py-2 rounded-lg font-semibold hover: transition inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* MEDIA SECTION */}
            <div
              className={`${
                index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
              }`}
            >
              <div className="relative w-full h-[300px] md:h-[350px] border-[3px] border-[#1B4D3E] rounded-xl overflow-hidden shadow-xl">
                {product.video ? (
                  product.video.includes("vimeo") ? (
                    <iframe
                      src={product.video}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={product.name}
                    />
                  ) : (
                    <video
                      src={product.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <img
                    src={product.image} // Note: Your data didn't have a 'product.image' property for the main media, but keeping logic just in case
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}