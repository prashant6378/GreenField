// src/components/Products.jsx (MINIMAL CHANGE)

import { ArrowRight } from "lucide-react"; // Only ArrowRight is needed now
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef } from "react";
import { asset } from "../utils/asset";


gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const productRef = useRef(null);

  const products = [
    {
      // Replaced Lucide component with image path
      icon: asset("/images/icons/SandMaster.jpg"), 
      slug:"sandmaster",
      name: "SandMaster",
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
      slug:"rockmaster",
      name: "RockMaster",
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
      slug:"autowellz",
      name: "AutoWellz",
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
      slug:"autopro",
      name: "AutoPro",
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
      slug:"green",
      name: "GREEN",
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

  const words = ["Sand Management", "Rock Mechanical Stability", "Well Operation Workflow","Engineering Process Digitization"];
const [typed, setTyped] = useState("");
const [index, setIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);

useEffect(() => {
  if (subIndex === words[index].length + 1) {
    setTimeout(() => {
      setSubIndex(0);
      setIndex((index + 1) % words.length);
    }, 1200);
    return;
  }

  const timeout = setTimeout(() => {
    setTyped(words[index].substring(0, subIndex));
    setSubIndex(subIndex + 1);
  }, 120);

  return () => clearTimeout(timeout);
}, [subIndex, index]);

  return (
   <section className="pt-20" ref={productRef}>
  {/* ============= HERO SECTION (FULL WIDTH like Services) ============= */}
  <section className="bg-[#AFE1AF] text-[#1B4D3E] py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Our Products
      </h1>

      <p className="text-xl max-w-3xl mx-auto leading-relaxed font-medium text-[#0F2F27]">
        Innovative digital solutions built for the future of energy.
      </p>

      {/* CARET STYLE */}
      <style>{`
        .caret::after {
          content: "|";
          display: inline-block;
          margin-left: 6px;
          animation: blink 1s steps(2, end) infinite;
          color: #1B4D3E;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

      {/* TYPING ANIMATION */}
      <div className="mt-6 text-2xl md:text-3xl font-semibold">
        Specializing in{" "}
        <span className="ml-2 inline-block caret text-3xl md:text-4xl font-bold">
          {typed}
        </span>
      </div>
    </div>
  </section>

  {/* ============= PRODUCTS LIST SECTION ============= */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {products.map((product, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-10 items-center product-card ${
            index % 2 === 1 ? "md:grid-flow-dense" : ""
          }`}
        >
          {/* TEXT SECTION */}
          <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
            {/* ICON */}
            <div className="w-20 h-20 mb-6 shadow-lg rounded-2xl overflow-hidden">
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
  className="bg-[#AFE1AF] text-[#1B4D3E] px-6 py-2 rounded-lg font-semibold hover:bg-[#153c30] transition inline-flex items-center gap-2"
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
                  src={product.image}
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
</section>

  );
}