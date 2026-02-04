import React, { useEffect, useRef } from "react";
import { DownloadCloud, Cpu, Code, ChevronRight, Mail, Phone,Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../utils/asset";

/**
 * SoftwareDevelopment page (fixed paths)
 * - Consolidated CTAs (only one Brochure link, unified Contact/Demo)
 * - Improved UI layout and flow
 * - Tailwind CSS required.
 */

export default function SoftwareDevelopment() {
    const NAV_TOP_PADDING = "pt-23";
    const heroTitleRef = useRef(null);
    const heroSubRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // small CSS fade-in (no GSAP)
        const els = [heroTitleRef.current, heroSubRef.current, contentRef.current];
        els.forEach((el, i) => {
            if (!el) return;
            el.style.opacity = "0";
            el.style.transform = "translateY(8px)";
            setTimeout(() => {
                el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 120 + i * 90);
        });
    }, []);

    // === FIXED: use public path (do NOT include '/public' in path) ===
    const heroBackgroundUrl = asset("/images/backgrounds/software.png");   // public/images/...
    const featureImageUrl = asset("/images/software.png");     // public/images/...

    const heroStyle = {
        backgroundImage: `url('${heroBackgroundUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: "#1B4D3E", // fallback if image missing
    };

    // Updated Brand Colors
    const PRIMARY_COLOR = '#1B4D3E'; // Dark Green
    const LIGHT_GREEN_BG = '#AFE1AF'; // Light Green (For Sidebar)
    const ACCENT_COLOR = '#AFE1AF'; 

    return (
        <main className={`${NAV_TOP_PADDING} bg-gray-50 text-slate-800`}>
            {/* HERO */}
            <header className="relative">
                <div className="h-64 md:h-96 rounded-b-3xl overflow-hidden relative shadow-xl" style={heroStyle}>
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute inset-0 flex items-center z-20">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <div className="text-white max-w-3xl">
                                <h1 ref={heroTitleRef} className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                                    Software Engineering
                                </h1>

                                <p ref={heroSubRef} className="mt-4 text-sm md:text-lg text-white/90 max-w-xl">
                                    Custom engineering software for upstream oil & gas — from SandMaster to integrated workflows and data platforms.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a
                                        href="/brochures-software.pdf"
                                        className={`inline-flex items-center gap-2 bg-[#AFE1AF] text-[#1B4D3E] hover:bg-[#153c30] hover:text-white px-5 py-3 rounded-xl font-semibold shadow-xl transition duration-300 border border-[#AFE1AF]/30`}

                                    >
                                        <DownloadCloud className="w-5 h-5" /> Product Brochure
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* subtle shine */}
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.02) 55%, rgba(0,0,0,0) 100%)",
                        }}
                    />
                </div>
            </header>

            {/* MAIN CONTENT AREA */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Content (8/12 - Main body of text, sections, and features) */}
                    <article className="lg:col-span-8 space-y-10" ref={contentRef}>
                        <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: PRIMARY_COLOR }}>Our Approach to Software Engineering</h2>

                        {/* Feature image and introduction */}
                        <figure className="mb-8 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                            <img
                                src={featureImageUrl}
                                alt="software dashboard"
                                className="w-full h-64 md:h-96 object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.parentElement.style.backgroundColor = PRIMARY_COLOR;
                                    e.currentTarget.parentElement.innerHTML = '<div class="flex items-center justify-center h-64 md:h-96 text-white text-xl font-bold">Dashboard Image Unavailable</div>';
                                }}
                            />
                        </figure>
                        
                        <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-[#1B4D3E] pl-4 bg-white p-4 rounded-xl shadow-sm">
                            We bridge the gap between complex petroleum engineering science and modern, intuitive software design. Our applications are built for performance, security, and seamless integration into existing enterprise environments.
                        </p>

                        {/* What we build */}
                        <section className="pt-4">
                            <h3 className="text-2xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>What We Build</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    "Upstream O&G Engineering Applications",
                                    "Real-time Data Platforms & Dashboards",
                                    "Artificial Lift Design & Optimization Tools",
                                    "Integrated Workflow Automation",
                                    "PVT Analysis & Reservoir Utilities",
                                    "Custom Database & NoSQL Integrations",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg">
                                        <Code className="w-6 h-6 text-[#1B4D3E] flex-shrink-0 mt-1" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Featured Capabilities */}
                        <section className="pt-4">
                            <h3 className="text-2xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>Our Core Capabilities</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#1B4D3E]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Cpu className="w-6 h-6 text-[#1B4D3E]" />
                                        <h5 className="font-bold text-lg text-[#1B4D3E]">Integrated Workflows</h5>
                                    </div>
                                    <p className="text-sm text-slate-600">Automation and data handoffs that reduce manual engineering load and improve reliability.</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#1B4D3E]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Code className="w-6 h-6 text-[#1B4D3E]" />
                                        <h5 className="font-bold text-lg text-[#1B4D3E]">Cloud-Native Design</h5>
                                    </div>
                                    <p className="text-sm text-slate-600">Secure, scalable applications built on modern cloud infrastructure (CI/CD, Kubernetes).</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#1B4D3E]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <svg className="w-6 h-6 text-[#1B4D3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <h5 className="font-bold text-lg text-[#1B4D3E]">Data Visualization</h5>
                                    </div>
                                    <p className="text-sm text-slate-600">Intuitive, estimated vs actual reporting and advanced visualization dashboards.</p>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* Right: Contact & Quick Links (4/12) */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-8">

                            {/* Unified CTA Card: Request Demo & Contact */}
                            {/* UPDATED: Light Green Background, Dark Text */}
                            
                              <div className="bg-[#AFE1AF] p-6 shadow-2xl text-[#1B4D3E] border-2 border-[#1B4D3E]">
  <div className="flex items-start gap-4">
    {/* Icon container: white background for contrast */}
    <div className="w-12 h-12 bg-white flex items-center justify-center">
      <Zap className="w-6 h-6 text-[#1B4D3E]" />
    </div>

    <div>
      <h4 className="text-xl font-extrabold mb-1">Request a Demo</h4>
      <p className="text-sm font-medium opacity-90">
        Book a scoping demo or POC — we'll tailor a demo to your asset and KPIs.
      </p>
    </div>
  </div>

  <div className="mt-6">
    <Link
      to="/schedule-demo"
      className="w-full inline-flex items-center justify-center gap-3 
                 bg-[#1B4D3E] text-white px-4 py-3 
                 rounded-lg font-bold shadow 
                 hover:bg-[#153c30] transition hover:scale-[1.02]"
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


                            

                            {/* Quick Contact Info */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h5 className="text-lg font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Direct Contact</h5>
                                
                                <div className="flex flex-col gap-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-[#1B4D3E] flex-shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="text-slate-500">Sales Inquiries</span>
                                            <a href="mailto:sales@greenfield.energy" className="font-semibold text-slate-800 hover:text-[#1B4D3E]">sales@greenfield.energy</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-[#1B4D3E] flex-shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="text-slate-500">General Line</span>
                                            <a href="tel:+919876543210" className="font-semibold text-slate-800 hover:text-[#1B4D3E]">+91 98765 43210</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Related Services Card */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h5 className="text-lg font-bold mb-4" style={{ color: PRIMARY_COLOR }}>Related Services</h5>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-center gap-3">
                                        <ChevronRight className="w-4 h-4 text-[#1B4D3E] flex-shrink-0" />
                                        <a href="/services/oil-gas" className="hover:text-[#1B4D3E] transition duration-200 font-medium">Oil &amp; Gas Consultancy</a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <ChevronRight className="w-4 h-4 text-[#1B4D3E] flex-shrink-0" />
                                        <a href="/services/training" className="hover:text-[#1B4D3E] transition duration-200 font-medium">Technical Training</a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <ChevronRight className="w-4 h-4 text-[#1B4D3E] flex-shrink-0" />
                                        <a href="/services/data-analysis" className="hover:text-[#1B4D3E] transition duration-200 font-medium">Data Analysis &amp; Modeling</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>

            <div className="h-24" />

            <style>{`
                /* small responsive tweaks */
                @media (max-width: 640px) {
                    .text-3xl { font-size: 1.6rem; }
                }
                .rounded-2xl { border-radius: 1rem; }
                .rounded-3xl { border-radius: 1.5rem; }
                main { font-family: 'Inter', sans-serif; }
            `}</style>
        </main>
    );
}