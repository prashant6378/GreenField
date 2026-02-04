import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import eventsData from "../data/eventsData";
import { asset } from "../utils/asset";
import {
  RefreshCcw,
  PlugZap,
  BrainCircuit,
  BarChart3
} from "lucide-react";

export default function AutoWellz() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is AutoWellz and who is it designed for?",
      a: "AutoWellz is an end-to-end digital platform designed to manage planning, execution reporting, analytics, and performance tracking for energy operations. It is built for energy operators, service companies, EPCs, and teams involved in oil & gas, renewables, power generation, and infrastructure projects.",
    },
    {
      q: "What operational problems does AutoWellz solve?",
      a: "AutoWellz addresses challenges such as fragmented workflows, manual reporting, untracked downtime, inconsistent data, cost overruns, and delayed decision-making by bringing all operational processes into a single, connected system.",
    },
    {
      q: "How does AutoWellz improve planning and execution?",
      a: "AutoWellz connects program planning directly with execution reporting through a side-by-side workflow. This ensures approved plans remain visible during execution, reduces missed steps, improves compliance, and enables accurate planned vs actual analysis.",
    },
    {
      q: "Can AutoWellz handle multiple projects and assets simultaneously?",
      a: "Yes. AutoWellz is designed to support multiple projects, assets, and teams at the same time, allowing organizations to track performance, cost, downtime, and resource utilization across operations from a single platform.",
    },
    {
      q: "Does AutoWellz support advanced analytics and dashboards?",
      a: "Yes. AutoWellz provides automated operational analysis, including cost and time tracking, performance KPIs, non-productive time (NPT) analysis, and resource utilization insights. Dashboards offer clear, real-time visibility for management, engineering, and field teams.",
    },
    {
      q: "How does AutoWellz help reduce downtime and operational losses?",
      a: "AutoWellz automatically captures non-productive time, delays, and deviations during execution. Root-cause analysis and lessons learned help teams identify recurring issues and improve planning and execution in future projects.",
    },
    {
      q: "Is AutoWellz secure, and who owns the data?",
      a: "AutoWellz includes role-based access control, secure data storage, and audit-ready logs. All operational data remains under full ownership and control of the client, ensuring security, traceability, and compliance with internal and regulatory requirements.",
    },
    {
      q: "Can AutoWellz integrate with existing systems and data sources?",
      a: "Yes. AutoWellz supports integration with operational data sources, logs, monitoring systems, and reporting tools. Data can be imported, exported, or used for further analysis using platforms such as Excel, Power BI, Tableau, or similar tools.",
    },
    {
      q: "Is AutoWellz customizable to our workflows?",
      a: "AutoWellz is designed to adapt to your operational workflows. Program structures, reporting formats, approval flows, dashboards, and analytics can be configured to match organizational processes and project requirements.",
    },
    {
      q: "What support is available after implementation?",
      a: "AutoWellz is supported by a dedicated technical and domain team. Support includes continuous software updates, integration assistance, expert guidance on workflows and analytics, and ongoing recommendations to improve operational performance.",
    },
  ];

  return (
    <div className="pt-0">

      <section className="w-full bg-gradient-to-r from-[#AFE1AF] to-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div className="min-w-0">
            <div className="relative mb-4 w-fit">
              
            
                 <img
    src={asset("/images/AutoWellz.jpg")}
    alt="AutoWellz Logo"
    className="relative h-16 md:h-20 lg:h-24 pl-1 object-contain"
  />
  </div>
            <h3 className="text-4xl md:text-6xl font-bold text-[#1B4D3E] leading-tight">
              AutoWellz
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Workflow Automation & Advanced Analytics for Energy Operations
            </h1>

            <p className="mt-6 text-lg text-[#1B4D3E]">
              AutoWellz is a fully A–Z integrated digital platform patented for facilitating
              workflow of procedure making and reporting with advance analysis of engineering
              parameters & utilized resources during the operations.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

             <Link
                to="/schedule-demo"
                className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold
                           hover:bg-[#163f33] transition inline-flex items-center gap-2"
              >
                Book a Demo <ArrowRight size={18} />
              </Link>

              <a
                href={asset("/brochure/Autowellz Brochure.pdf")}
                target="_blank"
                className="px-6 py-3 border-2 border-[#1B4D3E] rounded-xl font-semibold hover:bg-[#1B4D3E] hover:text-white"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* VIDEO */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white min-w-0">
            <div className="relative pb-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&controls=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                title="AutoWellz Overview"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
     <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="relative bg-[#f7fffb] border border-[#1B4D3E]/20 rounded-2xl p-10 md:p-12 shadow-sm">

      {/* Accent line */}
      <span className="absolute left-0 top-0 h-full w-1 bg-[#1B4D3E] rounded-l-2xl" />

      <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#1B4D3E] max-w-5xl">
        Plan, execute, report, and analyze complex energy operations on a single integrated
        platform —
        <span className="font-semibold text-[#1B4D3E]">
          {" "}reducing downtime, improving cost control, and enabling faster,
          data-driven decisions across the energy sector.
        </span>
      </p>

    </div>
  </div>
</section>


      {/* ================= WHY AUTOWELLZ ================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Energy Organizations Need AutoWellz?
            </h2>

            <p className="text-[#1B4D3E]/80 mb-4">
              Energy organizations—across oil & gas, renewables, power generation, and
              infrastructure—operate in environments where execution delays, untracked downtime,
              and fragmented data directly impact cost, safety, and performance.
            </p>

            <p className="text-[#1B4D3E]/80 mb-4">
              Today, planning, execution reporting, analysis, and decision-making are often
              handled through disconnected tools and manual processes. This leads to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#1B4D3E]/80">
              <li>Delayed visibility into operational performance</li>
              <li>Inconsistent and non-standard reporting</li>
              <li>Limited insight into planned vs actual execution</li>
              <li>Reactive decisions instead of proactive control</li>
            </ul>

            <p className="mt-4 text-[#1B4D3E]/80">
              AutoWellz addresses these challenges by bringing program planning, execution
              tracking, reporting, analytics, and cost visibility into one unified digital
              workflow.
            </p>
          </div>

          <img
            src={asset("/images/Picture1.png")}
            alt="Energy operations"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

     {/* ================= ONE PLATFORM ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E]">
      One Platform. One Workflow.
    </h2>

    <p className="mt-4 max-w-4xl mx-auto text-[#1B4D3E]/80 text-lg">
      Every activity, parameter, resource, and deviation is captured once and reused
      across the entire lifecycle—eliminating silos, duplication, and manual effort.
    </p>

    {/* ===== Feature Cards ===== */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      
      {/* Program Generation */}
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#1B4D3E] mb-4">
          Program Generation
        </h3>

        <ul className="space-y-3 text-[#1B4D3E]/80">
          <li>
            <span className="font-semibold text-[#1B4D3E]">Unified Workflow</span><br />
            Create, modify, approve, and submit programs seamlessly within a single platform.
          </li>

          <li>
            <span className="font-semibold text-[#1B4D3E]">Attachment Support</span><br />
            Add images, tables, logs, and supporting documents directly to programs.
          </li>

          <li>
            <span className="font-semibold text-[#1B4D3E]">Cost & Time Estimation</span><br />
            Automatically calculate resources, inventory needs, and operational timelines.
          </li>
        </ul>
      </div>

      {/* Reporting */}
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#1B4D3E] mb-4">
          Reporting
        </h3>

        <ul className="space-y-3 text-[#1B4D3E]/80">
          <li>
            <span className="font-semibold text-[#1B4D3E]">Error-Free Compilation</span><br />
            Program references ensure accurate, complete, and consistent reporting.
          </li>

          <li>
            <span className="font-semibold text-[#1B4D3E]">Operational Tracking</span><br />
            Monitor real-time activities, costs, and resource utilization.
          </li>

          <li>
            <span className="font-semibold text-[#1B4D3E]">Digital Resources</span><br />
            Convert all reports into structured, searchable digital formats.
          </li>
        </ul>
      </div>

      {/* Analysis */}
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#1B4D3E] mb-4">
          Analysis
        </h3>

        <ul className="space-y-3 text-[#1B4D3E]/80">
          <li>
            <span className="font-semibold text-[#1B4D3E]">Interactive Dashboards</span><br />
            One-click analytics for cost, performance, and operational insights.
          </li>

          <li>
            <span className="font-semibold text-[#1B4D3E]">Advanced Algorithms</span><br />
            Automated End-of-Well (EoW) reports and actionable intelligence.
          </li>

          <li>
            <span className="font-semibold text-[#1B4D3E]">Multi-Well Comparison</span><br />
            Instantly analyze and benchmark multiple wells across key metrics.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


      {/* ================= CORE CAPABILITIES (FULL TEXT) ================= */}
      {/* ================= CORE CAPABILITIES (FULL TEXT) ================= */}
<section className="py-20 bg-[#f7fffb]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT: TEXT CONTENT */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Program Planning & Workflow Management
      </h3>
      <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-2">
        <li>Create structured, standardized programs for energy operations and projects</li>
        <li>Enable multi-discipline collaboration within a single platform</li>
        <li>Built-in approval workflows and version control</li>
        <li>Attach drawings, documents, tables, images, logs, and calculations</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Side-by-Side Planning & Execution Reporting
      </h3>
      <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-2">
        <li>Approved plans remain visible during execution reporting</li>
        <li>Ensures critical steps are not missed during field or site operations</li>
        <li>Improves compliance, traceability, and reporting accuracy</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Automated Operational Reporting
      </h3>
      <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-2">
        <li>Daily, phase-wise, or time-based report generation</li>
        <li>Automatic tracking of operational parameters and resources</li>
        <li>Downtime and delays clearly highlighted</li>
        <li>Interactive charts and visual summaries</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        Comprehensive Operational Analysis
      </h3>
      <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-2">
        <li>Cost & Time Analysis: Identify overruns and schedule deviations</li>
        <li>Performance Tracking: Monitor asset, contractor, and KPI efficiency</li>
        <li>NPT Insights: Root-cause analysis of non-productive intervals</li>
        <li>Resource Utilization: Manpower, equipment, and material performance</li>
      </ul>
    </div>

    {/* RIGHT: TWO STACKED IMAGES */}
    <div className="flex flex-col gap-6">
      <img
        src={asset("/images/Picture5.png")}
        alt="Operational planning dashboard"
        className="w-full max-w-xl md:max-w-2xl rounded-2xl shadow-lg scale-105"
      />

      <img
        src={asset("/images/Picture6.png")}
        alt="Analytics and reporting"
        className="w-full max-w-xl md:max-w-2xl rounded-2xl shadow-lg scale-105"
      />
    </div>

  </div>
</section>


      {/* ================= SECURITY ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl font-bold mb-4 text-[#1B4D3E]">
        Security, Governance & Data Ownership
      </h2>

      <p className="text-[#1B4D3E]/80 mb-6">
        AutoWellz is designed with strong controls to meet governance, security, and
        compliance expectations of energy organizations.
      </p>

      <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-3">
        <li>Role-based access control to protect sensitive operational data</li>
        <li>Secure data storage with full ownership retained by the client</li>
        <li>Audit-ready logs for traceability and compliance</li>
        <li>Scalable architecture across multiple projects and assets</li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src={asset("/images/Picture10.png")}
        alt="Security and Governance"
        className="w-full max-w-xl md:max-w-2xl rounded-2xl shadow-lg scale-105"
      />
    </div>

  </div>
</section>



{/* ================= LONG-TERM SUPPORT (PROFESSIONAL ICONS) ================= */}
<section className="py-24 bg-gradient-to-b from-[#f7fffb] to-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E]">
        Long-Term Support from GOTS Team
      </h2>
      <p className="mt-4 text-lg text-[#1B4D3E]/80">
        AutoWellz is backed by a long-term partnership model—ensuring your
        digital operations evolve continuously with industry demands,
        technology advancements, and operational complexity.
      </p>
    </div>

    {/* Support Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#AFE1AF] mb-5 group-hover:bg-[#1B4D3E] transition">
          <RefreshCcw className="text-[#1B4D3E] group-hover:text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Continuous Software Updates
        </h3>
        <p className="text-[#1B4D3E]/80">
          Regular enhancements aligned with evolving industry standards,
          operational workflows, and regulatory requirements.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#AFE1AF] mb-5 group-hover:bg-[#1B4D3E] transition">
          <PlugZap className="text-[#1B4D3E] group-hover:text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Integration & Technology Support
        </h3>
        <p className="text-[#1B4D3E]/80">
          Seamless integration support for new technologies, systems,
          operational data sources, and enterprise tools.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#AFE1AF] mb-5 group-hover:bg-[#1B4D3E] transition">
          <BrainCircuit className="text-[#1B4D3E] group-hover:text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Expert Workflow & Analytics Guidance
        </h3>
        <p className="text-[#1B4D3E]/80">
          Continuous guidance from domain and engineering experts to
          optimize workflows, analytics, and reporting logic.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#AFE1AF] mb-5 group-hover:bg-[#1B4D3E] transition">
          <BarChart3 className="text-[#1B4D3E] group-hover:text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3">
          Data-Driven Performance Improvement
        </h3>
        <p className="text-[#1B4D3E]/80">
          Actionable insights and recommendations derived from operational
          data to reduce downtime, control costs, and improve performance.
        </p>
      </div>

    </div>
  </div>
</section>



    

      {/* ================= FAQ ACCORDION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-[#1B4D3E]/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-[#1B4D3E] bg-[#f7fffb]"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="p-5 text-[#1B4D3E]/80 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ========================================================= */}
{/* INSIGHTS & EVENTS SECTION */}
{/* ========================================================= */}
<section className="py-24 bg-[#f7fffb] text-center">
  <h2 className="text-4xl font-bold text-[#1B4D3E] mb-12">
    Discover More: Insights & Events from GOTS
  </h2>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
    {eventsData.slice(0, 3).map((event) => (
      <div
        key={event.id}
        className="bg-white rounded-3xl shadow-xl overflow-hidden text-left hover:shadow-2xl transition"
      >
        {/* Top Accent */}
        <div className="h-2 bg-[#1B4D3E]" />

        <div className="p-6 flex flex-col h-full">
          {/* Date */}
          <p className="text-xs font-semibold text-[#1B4D3E] uppercase mb-2">
            {event.date}
          </p>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#1B4D3E] leading-snug">
            {event.title}
          </h3>

          {/* Preview */}
          <p className="text-[#1B4D3E]/70 mt-3 flex-1">
            {event.preview}
          </p>

          {/* Read More */}
          <button
            onClick={() => navigate(`/events/${event.id}`)}
            className="mt-6 text-sm font-semibold text-[#1B4D3E] hover:underline"
          >
            Read Update →
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* CTA */}
  <button
    onClick={() => navigate("/events")}
    className="mt-12 px-8 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold hover:bg-[#163f33] transition"
  >
    Read Our Events
  </button>
</section>

{/* ================= TAKE NEXT STEP ================= */}
<section className="py-24 bg-[#0c2f26] text-center relative overflow-hidden">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Take the Next Step
    </h2>

    <p className="text-white/80 max-w-4xl mx-auto mt-5 text-lg">
      If your teams are spending more time compiling data than acting on it,
      if downtime is visible only after projects are completed, and if
      decisions rely on delayed or incomplete information —
    </p>

    {/* SLOGAN */}
    <div className="mt-8 flex justify-center">
      <span className="inline-block px-6 py-3 rounded-full border border-white/30 text-white font-semibold tracking-wide text-lg bg-white/5 backdrop-blur-sm">
        AutoWellz is built for exactly these challenges.
      </span>
    </div>

    {/* CTA BUTTONS */}
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      <button className="px-8 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold hover:bg-[#1aa87d] transition">
        Request Demo
      </button>

      <a
        href={asset("/brochure/Autowellz Brochure.pdf")}
        target="_blank"
        className="px-8 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#0c2f26] transition"
      >
        Download Brochure
      </a>
    </div>

  </div>
</section>

    </div>
  );
}