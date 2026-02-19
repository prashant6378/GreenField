import { ArrowRight, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import eventsData from "../data/eventsData";
import { asset } from "../utils/asset";




export default function SandMaster() {
  const navigate = useNavigate();
  const faqs = [
  {
    question: "What is SandMaster and who is it designed for?",
    answer:
      "SandMaster is an advanced sand management platform designed for oil & gas operators, production engineers, and asset teams to manage sand-related risks across the entire production system.",
  },
  {
    question: "How does SandMaster calculate erosion risk?",
    answer:
      "SandMaster uses industry-validated correlations, multiphase flow models, PSD data, and velocity-based algorithms to predict erosion in chokes, bends, valves, and pipelines.",
  },
  {
    question: "Can SandMaster predict long-term deposition?",
    answer:
      "Yes. SandMaster simulates sand transport and deposition over time to identify long-term buildup risks in tubing, annulus, vessels, and surface facilities.",
  },
  {
    question: "Does the software support real-time monitoring?",
    answer:
      "Yes. SandMaster integrates live production data and sensor inputs to provide real-time sand monitoring, alerts, and operational insights.",
  },
  {
    question: "What inputs are required for PSD modelling?",
    answer:
      "PSD modelling requires particle size distribution data, flow rates, fluid properties, production conditions, and facility geometry.",
  },
];


  return (
    <div className="pt-0">

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="w-full bg-gradient-to-r from-[#AFE1AF] to-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-6">

              <img
    src={asset("/images/SandMaster.jpg")}
    alt="SandMaster Logo"
    className="h-14 md:h-16 lg:h-20 object-contain"
  />
  </div>
            <h3 className="text-4xl md:text-6xl font-bold text-[#1B4D3E] leading-tight">SandMaster</h3>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Advanced Sand Management System for  
              <br />Optimized Well Performance
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              SandMaster delivers complete sand monitoring, solids modeling, erosion prediction, 
              deposition analysis, choke optimization and long-term risk management across the 
              entire production system — from downhole to topside facilities.
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
                href="/brochure/SandMaster-Brochure.pdf"
                target="_blank"
                className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </div>

          {/* RIGHT: VIDEO */}
     <div className="flex justify-center">
  <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white">
    <div className="relative pb-[56.25%]">
      <iframe
        src="https://player.vimeo.com/video/637143154?autoplay=1&muted=1&loop=1&controls=0&playsinline=1"
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

      {/* ========================================================= */}
      {/* BRING TOGETHER */}
      {/* ========================================================= */}
      <section className="py-24 text-center bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] max-w-4xl mx-auto">
          Bring together sand monitoring, solids modeling and risk prediction  
          <br />in one powerful platform with <span className="text-[#0f8f6d]">SandMaster</span>.
        </h2>
      </section>

      {/* ========================================================= */}
      {/* FEATURE CARDS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Sand Monitoring</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Real-Time Insights</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Live sand production tracking with automated diagnostics.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Accurate Thresholds</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Detect when facilities cross safe operating limits.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Historical Insights</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Identify trends & compare field behavior over time.</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Facility Modelling</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Complete Flow Analysis</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Model erosion, corrosion, deposition & PSD across the facility.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Predictive Modelling</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Understand solids movement across pipelines.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Geospatial Intelligence</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Visualize risky zones & sand concentration paths.</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="border border-[#1B4D3E]/20 rounded-3xl p-8 bg-white">
            <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">Operational Economics</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Cost Optimization</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Reduce failures & optimize maintenance cycles.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Real-Time Alerts</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Detect high-risk flow conditions instantly.</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#1B4D3E]">Instant Reporting</h4>
                <p className="text-[#1B4D3E]/70 text-sm">Automated reporting for sand trends & erosion risks.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

{/* ========================================================= */}
{/* WHAT IS SANDMASTER */}
{/* ========================================================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT (UNCHANGED) */}
    <div>
      <h2 className="text-4xl font-bold text-[#1B4D3E] mb-6">
        What is SandMaster?
      </h2>

      <ul className="space-y-4 text-[#1B4D3E]/80 leading-relaxed">
        <li>• First software in Oil & Gas dedicated entirely to sand management.</li>
        <li>• Built with patented workflows for sand systems & risk evaluation.</li>
        <li>• Uses advanced algorithms & correlations for erosion & deposition prediction.</li>
        <li>• Identifies weak links, risk envelopes & sand production limits.</li>
      </ul>
    </div>

    {/* RIGHT IMAGE (ALIGNMENT FIXED) */}
    <div className="flex justify-center">
      <img
        src="https://www.greenfield.energy/wp-content/uploads/2021/10/Capture-of-Facility.jpg"
        alt="SandMaster Workflow"
        className="w-full max-w-2xl rounded-2xl shadow-lg object-contain"
      />
    </div>

  </div>
</section>

{/* ========================================================= */}
{/* HIGHLIGHTS */}
{/* ========================================================= */}
<section className="py-20 bg-[#f7fffb]">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-4xl font-bold text-[#1B4D3E] mb-12">
      Highlights of the Main Features
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <ul className="space-y-6 text-[#1B4D3E]/80 leading-relaxed">
        <li>
          <span className="font-semibold text-[#1B4D3E]">
            Entire Facility Modelling:
          </span>{" "}
          From wellbore to topside facilities.
        </li>

        <li>
          <span className="font-semibold text-[#1B4D3E]">
            Sand Mapping:
          </span>{" "}
          Track sand concentration, velocity, and risk rates throughout the flow path.
        </li>

        <li>
          <span className="font-semibold text-[#1B4D3E]">
            Multiphase Flow:
          </span>{" "}
          Sand considered as the fourth phase in the oil & gas system.
        </li>

        <li>
          <span className="font-semibold text-[#1B4D3E]">
            Particle Size Distribution Profiling:
          </span>{" "}
          Covers all PSD-defined particle sizes across the entire model.
        </li>
      </ul>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://www.greenfield.energy/wp-content/uploads/2021/10/Particle-Size-Distribution-chart.png"
          alt="Particle Size Distribution"
          className="w-full max-w-xl rounded-2xl shadow-lg object-contain"
        />
      </div>

    </div>
  </div>
</section>


      {/* ========================================================= */}
      {/* SOLIDS RISK */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Simulation of Solids Related Risks</h2>

            <ul className="space-y-6 text-[#1B4D3E]/80">
              <li><b>Deposition Risk:</b> Simulates deposition in annulus, casing, tubing & vessels.</li>
              <li><b>Corrosion–Erosion:</b> Evaluates combined erosion–corrosion mechanisms.</li>
              <li><b>Sand Handling Risk:</b> Helps design flushing / removal schedules.</li>
              <li><b>Erosion Risk:</b> Predicts erosion in bends, chokes & pumps.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2021/10/Liquid-Rate-vs-Critical-Velocity-chart.png"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ========================================================= */}
      {/* ADVANCED ALGORITHMS */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">A Unique Blend of Algorithms & Calculations</h2>

            <ul className="space-y-6 text-[#1B4D3E]/80">
              <li><b>Scatter Point Calibration:</b> Matches erosion & deposition models with field data.</li>
              <li><b>Critical Transport Velocity:</b> Determines minimum flow to avoid settling.</li>
              <li><b>Operating Envelope:</b> Predicts safe vs risk flow regions.</li>
              <li><b>Model Calibration:</b> Aligns predictions with long-term well data.</li>
              <li><b>Time-Based Analysis:</b> Dynamic modeling of metal loss and deposition risk over time with changing well parameters.</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2021/10/chart-Hydrocyclone.png"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>
{/* ========================================================= */}
{/* FULL-FIELD SAND MANAGEMENT STRATEGY */}
{/* ========================================================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
      Full-Field Sand Management Strategy
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT (UNCHANGED) */}
      <ul className="list-disc pl-6 space-y-4 text-[#1B4D3E]/80">
        <li>Define short-term & long-term sand management strategy.</li>
        <li>Select optimal sand control techniques based on economics.</li>
        <li>Support perforation design & selective completions.</li>
        <li>Long-term field life prediction using erosion & deposition models.</li>
        <li>Optimize choke strategies & sustainable drawdown limits.</li>
      </ul>

      {/* RIGHT IMAGE (ALIGNMENT FIXED) */}
      <div className="flex justify-center">
        <img
          src="https://www.greenfield.energy/wp-content/uploads/2021/10/Dashboard-for-Last-page.jpg"
          alt="Full Field Sand Management"
          className="w-full max-w-2xl rounded-2xl shadow-lg object-contain"
        />
      </div>

    </div>
  </div>
</section>


      {/* ========================================================= */}
      {/* LONG TERM SUPPORT */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">Long-Term Support</h2>

            <ul className="list-disc pl-6 text-[#1B4D3E]/80 space-y-4">
              <li>SandMaster delivered as a licensed platform with regular updates.</li>
              <li>Field model updates using new operational data.</li>
              <li>Dedicated experts support erosion & sand control strategy.</li>
              <li>Seamless connectivity with complementary tools (AutoPro, RockMaster).</li>
            </ul>
          </div>

          <img
            src="https://www.greenfield.energy/wp-content/uploads/2021/10/Liquid-Rate-vs-Critical-Velocity-chart.png"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>
      
      {/* ========================================================= */}
      {/* FAQ SECTION (UPDATED GREEN THEME) */}
      {/* ========================================================= */}
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



      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#0c2f26] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Partner with a team that brings deep sand management expertise.
        </h2>

        <button onClick={() => navigate("/contact")}
         className="mt-8 px-8 py-3 bg-[#20c997] text-white rounded-xl shadow-lg hover:bg-[#17a984] transition">
           
          Connect With Our Team
        </button>
      </section>

    </div>
  );
}
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