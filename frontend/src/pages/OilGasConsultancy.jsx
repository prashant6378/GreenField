// src/pages/OilGasConsultancy.jsx
import React, { useEffect, useRef } from "react";
import { DownloadCloud, Mail, Phone, ChevronRight, Zap, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../utils/asset";

/**
 * OilGasConsultancy.jsx
 * - Put hero image at: public/images/oil-hero.jpg
 * - Put feature image at: public/images/oil-feature-1.jpg (or oilandgas.png)
 * - Put brochure at: public/assets/brochure-oil-gas.pdf
 *
 * Tailwind CSS required.
 */

// Updated Color Constants
const BRAND_COLOR_CLASS = "text-[#1B4D3E]";
const CTA_DARK_GREEN =
  "bg-[#AFE1AF] text-[#1B4D3E] hover:bg-[#153c30] hover:text-white";


export default function OilGasConsultancy() {
  const NAV_TOP_PADDING = "pt-18";
  const heroTitleRef = useRef(null);
  const heroCtaRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // small CSS-only fade ins
    const els = [heroTitleRef.current, heroCtaRef.current, contentRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      setTimeout(() => {
        el.style.transition = `opacity 0.65s ease, transform 0.65s ease`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 90 * (i + 1));
    });
  }, []);

  // hero background
  const heroStyle = {
    backgroundImage: `url('${asset('/images/backgrounds/oilbackground.png')}')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <main className={`${NAV_TOP_PADDING} bg-white text-slate-800 min-h-screen`}>
      {/* HERO */}
      <header className="relative">
        <div className="h-72 md:h-[480px] rounded-b-3xl overflow-hidden relative shadow-lg" style={heroStyle}>
          <div className="absolute inset-0 bg-black/40 z-10" />

          <div className="absolute inset-0 flex items-center z-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="text-white max-w-3xl">
                <h1
                  ref={heroTitleRef}
                  style={{ opacity: 0 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl"
                >
                  Strategic Advisory for the Future of Energy
                </h1>

                <p style={{ opacity: 0 }} className="mt-4 text-base md:text-lg text-white/90 max-w-2xl font-light">
                  Integrated upstream solutions — reservoir optimization, production efficiency, sand management and commercial advisory.
                </p>

                <div ref={heroCtaRef} style={{ opacity: 0 }} className="mt-8  text-black">
                  <a
                    href="/brochures/Integrated-Sand-Management_Brochure_Rev-Sep2021.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={`${CTA_DARK_GREEN} inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-2xl transition transform hover:scale-[1.02]`}
                  >
                    <DownloadCloud className="w-5 h-5 " /> Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: content */}
          <article ref={contentRef} className="lg:col-span-8 space-y-10">
            <h2 className={`text-3xl md:text-4xl font-extrabold ${BRAND_COLOR_CLASS} border-b-2 border-[#84A98C]/50 pb-3`}>
              Energy Consultancy
            </h2>

            {/* Featured image */}
            <figure className="mb-6 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={asset("/images/oilandgas.png")}
                alt="oil infrastructure"
                className="w-full h-64 md:h-96 object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.style.background = "#e8f5e9";
                  e.currentTarget.parentElement.style.minHeight = "220px";
                }}
              />
            </figure>

            {/* Scope card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
              <h3 className="text-2xl font-semibold text-[#1B4D3E]">How We Add Value</h3>
              <p className="text-slate-700 leading-relaxed">
                We deliver a wide portfolio of upstream services — subsurface rock mechanics, sand control,
                surface handling, production engineering and commercial advisory. Our approach combines field expertise
                with digital analytics to de-risk operations and improve recovery.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#e8f5e9] rounded-xl shadow-sm border border-[#84A98C]/30">
                  <h4 className="font-bold text-[#1B4D3E] mb-3">Integrated Sand Management</h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-2 text-sm">
                    <li>Rock mechanics &amp; sand control</li>
                    <li>Surface sand management audits</li>
                    <li>Separation, handling &amp; monitoring</li>
                    <li>Digital &amp; lab studies</li>
                  </ul>
                </div>

                <div className="p-6 bg-[#e8f5e9] rounded-xl shadow-sm border border-[#84A98C]/30">
                  <h4 className="font-bold text-[#1B4D3E] mb-3">Production Engineering</h4>
                  <ul className="list-disc pl-5 text-slate-600 space-y-2 text-sm">
                    <li>Artificial lift selection &amp; optimization</li>
                    <li>ESP completion design &amp; selection</li>
                    <li>Sand management design &amp; selection</li>
                    <li>Fracture design &amp; stimulation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Drilling & Reservoir */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-[#1B4D3E] mb-4">Drilling, Completion &amp; Reservoir</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Drilling &amp; Completion</h5>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                    <li>Well design and material selection</li>
                    <li>Tubing &amp; casing analysis</li>
                    <li>Completion design (HP/HT)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Reservoir Engineering</h5>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                    <li>OOIP calculations &amp; material balance</li>
                    <li>Field development planning (FDP)</li>
                    <li>Field rejuvenation &amp; gas flow assurance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Petroleum Economics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-semibold text-[#1B4D3E] mb-4">Petroleum Economics &amp; Commercial Advisory</h4>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                <li>Due diligence (asset &amp; company level)</li>
                <li>Market entry &amp; field commercialization studies</li>
                <li>Fiscal &amp; taxation benchmarking; portfolio ranking</li>
                <li>Funding options, JV &amp; commercialization strategy</li>
              </ul>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#1B4D3E] text-[#1B4D3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#AFE1AF] text-[#1B4D3E] transition"
              >
                Request Consultation
              </a>

              <a
                href="/brochures/Integrated-Sand-Management_Brochure_Rev-Sep2021.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white shadow-sm border border-gray-200 text-slate-700 hover:bg-[#AFE1AF] text-[#1B4D3E] transition"
              >
                <DownloadCloud className="w-4 h-4" /> Download Full Brochure
              </a>
            </div>
          </article>

          {/* Right: Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* 1) Request a Demo - UPDATED to Light Green Background */}
              {/* bg changed to #AFE1AF, text changed to dark green */}
              <div className="bg-[#AFE1AF] p-6 rounded-2xl shadow-2xl text-[#1B4D3E]">
                <div className="flex items-start gap-4">
                  {/* Icon container: white background for contrast */}
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#1B4D3E]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold mb-1">Request a Demo</h4>
                    <p className="text-sm font-medium opacity-90">Book a scoping demo or POC — we'll tailor a demo to your asset and KPIs.</p>
                  </div>
                </div>

                 <div className="mt-6">
                  <Link
                    to="/schedule-demo"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#1B4D3E] text-white px-4 py-3 rounded-lg font-bold shadow hover:bg-[#153c30] transition hover:scale-[1.02]"
                  >
                    Schedule Demo
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="mt-4 text-sm text-[#0F2F27] flex flex-col gap-2 font-medium">
                  <div>Custom POC available</div>
                  <div>Data-driven demo with sample dashboards</div>
                </div>
              </div>

              {/* 2) Direct Contact Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f5e9] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1B4D3E]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#1B4D3E]">Get in touch</div>
                    <div className="text-sm text-slate-600">We respond within 24 business hours</div>
                  </div>
                </div>

                <div className="text-sm text-slate-700 space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#84A98C]" />
                    <a href="mailto:support@greenfield.energy" className="font-medium text-slate-800 hover:text-[#1B4D3E]">support@greenfield.energy</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#84A98C]" />
                    <a href="tel:+919876543210" className="font-medium text-slate-800 hover:text-[#1B4D3E]">+91 98765 43210</a>
                  </div>
                </div>
              </div>

              {/* 3) Our Expertise / Quick Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h5 className="text-lg font-bold text-[#1B4D3E] mb-4">Our Expertise</h5>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-[#84A98C]" />
                    <a href="#sand-management" className="hover:text-[#1B4D3E] transition">Integrated Sand Management</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-[#84A98C]" />
                    <a href="/services/software" className="hover:text-[#1B4D3E] transition">Software Development</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-[#84A98C]" />
                    <a href="/services/training" className="hover:text-[#1B4D3E] transition">Technical Training</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-[#84A98C]" />
                    <a href="/services/data-analysis" className="hover:text-[#1B4D3E] transition">Data Analysis &amp; Dashboards</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="h-24" />

      <style>{`
        main { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
      `}</style>
    </main>
  );
}