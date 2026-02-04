// src/components/Services.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart, // Keeping this for the 4th logo
  Wrench,
  Shield,
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  // === updated main services ===
  const mainServices = [
    {
      title: "Energy Consultancy",
      slug: "oil-gas",
      // Factory Icon (Online URL)
      iconImage: "https://img.icons8.com/ios-filled/100/000000/factory.png",
      description:
        "Comprehensive engineering consultancy for upstream & downstream operations, reservoir studies and production optimization.",
      features: [
        "Reservoir Engineering",
        "Production Optimization",
        "Well Design & Planning",
        "Field Development Studies",
        "Risk Assessment",
      ],
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Software Development",
      slug: "software",
      // Flask/Chemistry Icon (Online URL)
      iconImage: "https://img.icons8.com/ios-filled/100/000000/test-tube.png",
      description:
        "Custom software solutions and integrations tailored to the energy sector — web apps, automation and cloud systems.",
      features: [
        "Workflow Automation",
        "Data Management Systems",
        "Real-time Monitoring",
        "Cloud-native Solutions",
        "Mobile Applications",
      ],
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Training",
      slug: "training",
      // Planet/Saturn Icon (Online URL)
      iconImage: "https://img.icons8.com/ios-filled/100/000000/planet.png",
      description:
        "Hands-on professional training programs and certifications for industry teams and individuals.",
      features: [
        "Technical Workshops",
        "Software Training",
        "Best Practices",
        "Industry Standards",
        "Certification Programs",
      ],
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      // 4th Logo kept as Lucide Icon (LineChart)
      icon: LineChart,
      title: "Data Analysis",
      slug: "data-analysis",
      description:
        "Advanced analytics, visualization and reporting to convert operational data into actionable insights.",
      features: [
        "Data Cleaning & ETL",
        "Trend Analysis",
        "Predictive Models",
        "Dashboards & Reporting",
        "Anomaly Detection",
      ],
      image:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  // === additional services ===
  const additionalServices = [
    {
      icon: Wrench,
      title: "Technical Support",
      description:
        "Round-the-clock technical assistance for all our products and services",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for all deliverables",
    },
    {
      icon: LineChart,
      title: "Performance Analysis",
      description:
        "Detailed analytics and reporting to optimize your operations",
    },
  ];

  // === Typewriter logic ===
  const phrases = mainServices.map((s) => s.title);
  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const current = phrases[phraseIndex] || "";
    const typingSpeed = deleting ? 30 : 70;
    const completePause = 800;

    if (!deleting) {
      if (charIndex === current.length) {
        timeoutId = setTimeout(() => setDeleting(true), completePause);
      } else {
        timeoutId = setTimeout(() => {
          setTyped(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typingSpeed);
      }
    } else {
      timeoutId = setTimeout(() => {
        setTyped(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <div className="pt-20">
      {/* ============= HERO SECTION ============= */}
      <section className="bg-[#AFE1AF] text-[#1B4D3E] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-[#1B4D3E] max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive solutions designed to optimize your operations and
            drive innovation in the energy sector.
          </p>

          <style>{`
            .caret::after {
              content: "|";
              display: inline-block;
              margin-left: 6px;
              animation: blink 1s steps(2,end) infinite;
              color: #1B4D3E; 
            }
            @keyframes blink { 50% { opacity: 0; } }
          `}</style>

          <div className="mt-6 text-2xl md:text-3xl font-semibold">
            Specializing in{" "}
            <span className="ml-2 inline-block caret text-3xl md:text-4xl font-bold">
              {typed}
            </span>
          </div>
        </div>
      </section>

      {/* ============= MAIN SERVICES ============= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {mainServices.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(`/services/${service.slug}`)}
              className={`grid md:grid-cols-2 gap-12 items-center cursor-pointer ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } hover:bg-gray-50 rounded-2xl p-4 transition`}
            >
              {/* TEXT CONTENT */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                {/* Icon Container */}
                <div className="w-20 h-20 mb-6 rounded-full bg-[#AFE1AF] flex items-center justify-center shadow-md">
                  {/* Logic: If iconImage exists, use img tag, otherwise use Lucide icon */}
                  {service.iconImage ? (
                    <img
                      src={service.iconImage}
                      alt={`${service.title} icon`}
                      className="w-12 h-12 object-contain mix-blend-multiply"
                    />
                  ) : (
                    <service.icon className="w-10 h-10 text-[#1B4D3E]" />
                  )}
                </div>

                <h2 className="text-4xl font-bold text-[#1B4D3E] mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-700 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-[#1B4D3E] w-2 h-2 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1B4D3E] rounded-2xl opacity-20 blur-3xl" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= ADDITIONAL SERVICES ============= */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Supporting your success every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#AFE1AF] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#1B4D3E]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= WHY CHOOSE US ============= */}
      {/* Updated Background to #AFE1AF and Text to Dark Green */}
      <section className="py-20 bg-[#AFE1AF] text-[#1B4D3E]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B4D3E]">
            Why Choose Our Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white text-[#1B4D3E] p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-700">Successful Projects</div>
            </div>

            <div className="bg-white text-[#1B4D3E] p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-700">Satisfied Clients</div>
            </div>

            <div className="bg-white text-[#1B4D3E] p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-700">Quality Guaranteed</div>
            </div>
          </div>

          {/* Updated text color to dark green for readability on light background */}
          <p className="text-xl text-[#0F2F27] leading-relaxed mt-12 max-w-3xl mx-auto font-medium">
            Backed by industry expertise and innovation, we deliver tailored
            solutions that drive measurable performance improvements.
          </p>
        </div>
      </section>

      {/* ============= CTA SECTION ============= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how our services can help transform your operations.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#AFE1AF] text-[#1B4D3E] px-10 py-4 rounded-lg text-lg font-semibold hover: transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;