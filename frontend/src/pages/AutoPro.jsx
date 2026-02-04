// src/pages/AutoPro.jsx
import { ArrowRight, ChevronDown } from "lucide-react";
import eventsData from "../data/eventsData";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { asset } from "../utils/asset";


export default function AutoPro() {

  const navigate = useNavigate();

  const faqs = [
    {
      question: "What processes does AutoPro digitize?",
      answer:
        "AutoPro digitizes engineering and manufacturing workflows including planning, procedure creation, execution tracking, inventory handling, QA/QC and post-job reporting.",
    },
    {
      question: "Can AutoPro be used offline in remote workshop locations?",
      answer:
        "Yes. AutoPro supports offline workflows with data synchronization once connectivity is restored, making it suitable for remote workshops and field locations.",
    },
    {
      question: "Does AutoPro support QA/QC checklists for each assembly?",
      answer:
        "Yes. AutoPro provides customizable QA/QC checklists that can be attached to every assembly with complete inspection history tracking.",
    },
    {
      question: "How does AutoPro track planned vs actual cost?",
      answer:
        "AutoPro compares planned budgets with actual consumption of manpower, tools and consumables to provide accurate cost analysis.",
    },
    {
      question: "Can I export AutoPro data to third-party analytics tools?",
      answer:
        "Yes. AutoPro supports structured data export to third-party analytics and reporting platforms.",
    },
  ];

  return (
    <div className="pt-0">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#AFE1AF] to-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
    <img
    src={asset("/images/AutoPro.jpg")}
    alt="AutoPro Logo"
    className="h-16 md:h-20 lg:h-24 mb-3 object-contain"
  />
            <h3 className="text-4xl md:text-6xl font-bold text-[#1B4D3E] leading-tight">AutoPro</h3>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Digitize Engineering Processes —
              <br />Plan, Execute & Analyse Seamlessly
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              AutoPro automates the manufacturing and engineering lifecycle — from workshop assembly
              to on-field operations and final report submission. Integrated data analytics,
              inventory & procedure management, and resource tracking all in one platform.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/schedule-demo"
                className="px-6 py-3 bg-[#1B4D3E] text-white rounded-xl font-semibold
               hover:bg-[#163f33] transition inline-flex items-center gap-2"
              >
                Book a Demo <ArrowRight size={18} />
              </Link>

             <a
  href={asset("brochure/Autopro New Brochure_compressed.pdf")}
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
>

                Download Brochure
              </a>
            </div>
          </div>

          {/* RIGHT: Vimeo video */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="relative pb-[56.25%]">
                <iframe
                  src="https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&controls=0&playsinline=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRING TOGETHER HEADLINE */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2730] leading-tight">
            Digitize procedure making, inventory & analytics — all under one roof with AutoPro.
          </h2>
        </div>
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Standardizing Process Workflow</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Data-driven automation of manufacturing & assembly workflows.</li>
              <li>End-to-end procedure creation, approvals and execution tracking.</li>
              <li>Kanban-style progression for tasks from shop floor to management.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Database Management</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Attach job logs, tool schematics, BHA, assembly drawings and images.</li>
              <li>Centralized, searchable repository for all manufacturing artifacts.</li>
              <li>Export-ready data for deeper analytics or archival.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Tracking & QA/QC</h3>
            <ul className="space-y-4 text-[#1B4D3E]/90">
              <li>Track personnel, equipment, job progress and field operations.</li>
              <li>Integrated QA/QC templates to maintain inspection histories.</li>
              <li>Planned vs Actual comparisons to eliminate manual errors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ... ALL OTHER SECTIONS REMAIN 100% UNCHANGED ... */}
    {/* DETAILED SECTION — Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">What is AutoPro?</h2>
            <ul className="space-y-4 text-[#1B4D3E]/80 leading-relaxed">
              <li>• An application to digitize engineering process in any operation design involving planning, execution & analysis.</li>
              <li>• Automated platform covering the whole manufacturing lifecycle — workshop assembly, field operation to final report submission.</li>
              <li>• Integrated framework for data analytics, procedure making, inventory management and cost analysis.</li>
              <li>• Data-driven workflows to improve operational efficiency and reduce manual work.</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img2.png"
              alt="Workshop assembly"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* DATABASE MANAGEMENT */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img3.png"
              alt="database management"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Database Management</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              Facility for attaching documents, job logs, tool schematics, drawings and other files during tool preparation
              and field operations. All data is kept in a structured repository enabling quick retrieval and downstream analytics.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>Attach logs, schematics and photos to every job / assembly.</li>
              <li>Maintain versioned tool assemblies and inspection records.</li>
              <li>Seamless data export for advanced analysis and reporting.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TRACKING / QA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Ease of Tracking — Equipment / Job / Personnel</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              With centralized application access, it becomes easy to track operations, task progress and personnel activities.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>Monitor operations & task status on a single dashboard.</li>
              <li>Track personnel work-scope and performance.</li>
              <li>Manage manufacturing/assembling of equipment and tool setups.</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img4.png"
              alt="personnel tracking"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* QA / QC */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Quality Assurance / Quality Control</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              AutoPro helps maintain QA/QC in accordance with company requirements — enabling creation and tracking of tool assemblies,
              inspection workflows and quality histories to ensure compliance and reduce defects.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>Define QA checklists and attach inspection evidence.</li>
              <li>Automated flags when a task deviates from QA requirements.</li>
              <li>Planned vs actual tasks comparison to avoid human errors.</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img1.png"
              alt="quality assurance"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* COST ESTIMATE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Cost Estimate & Analysis</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              Track and analyse planned vs actual cost for specific events and for complete equipment projects. AutoPro provides actionable
              cost breakdowns and helps estimate end-to-end project expenditure with resource-level granularity.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>Plan vs actual cost tracking per job & assembly.</li>
              <li>Full project cost estimation for a set of equipment.</li>
              <li>Resource-level costing for manpower, consumables & tools.</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img4.png"
              alt="cost analysis"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* OPERATIONAL EXCELLENCE */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Operational Excellence</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
                <li><b>Agile System:</b> Customizable skeleton for every process.</li>
                <li><b>Automation:</b> Cuts repetitive paperwork & compilation work.</li>
                <li><b>Six Sigma Approach:</b> Measure errors & implement continuous improvements.</li>
                <li><b>Kanban Approach:</b> Unified portal for all disciplines and approvals.</li>
                <li><b>Unique & Patented:</b> First-of-its-kind features in service workflows.</li>
                <li><b>Reducing Carbon Footprint:</b> Paperless workflows to reduce environmental impact.</li>
              </ul>
            </div>
            <div>
              <img
                src="https://www.greenfield.energy/wp-content/uploads/2022/04/img7.jpg"
                alt="cost analysis"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LONG TERM SUPPORT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Long Term Support & Licensing</h2>
            <p className="text-[#1B4D3E]/80 leading-relaxed mb-4">
              AutoPro is delivered as a licensed product with regular updates, model maintenance and support.
              Models and assemblies are saved and can be reworked with new field values for continuous improvements.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[#1B4D3E]/80">
              <li>License delivery with scheduled updates.</li>
              <li>Support from domain experts for process optimization.</li>
              <li>Regular validation and improvement cycles.</li>
            </ul>
          </div>

          <div>
            <img
              src="https://www.greenfield.energy/wp-content/uploads/2022/04/img3.png"
              alt="support and licensing"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* SAMPLES / CONNECTIVITY */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Integration & Connectivity</h2>
          <p className="text-[#1B4D3E]/80 leading-relaxed">
            AutoPro integrates with existing data platforms — enabling downstream analysis, trending and holistic operational insights.
            Connect to analytics tools or export datasets for specialized analytics workflows.
          </p>
        </div>
      </section>

     
      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
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

      {/* FINAL CTA */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Bring operational excellence to your workshops — Try AutoPro
        </h2>
        <button className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>
    </div>
  );
}

/* FAQ ITEM — SAME AS ROCKMASTER */
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#1B4D3E]/30 rounded-xl bg-[#AFE1AF]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <span className="text-[#1B4D3E] font-semibold">
          {faq.question}
        </span>

        <ChevronDown
          className={`text-[#1B4D3E] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-5 text-[#1B4D3E]/80 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}