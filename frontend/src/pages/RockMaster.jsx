import { ArrowRight, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import eventsData from "../data/eventsData";
import { asset } from "../utils/asset";

export default function RockMaster() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How are MEM properties derived from basic log inputs?",
      answer:
        "RockMaster derives Mechanical Earth Model (MEM) properties using standard petrophysical logs combined with validated empirical and analytical correlations.",
    },
    {
      question: "What correlations are used for CDP curve generation?",
      answer:
        "RockMaster uses industry-accepted CDP correlations calibrated with in-situ stress conditions, rock strength parameters, and available field data.",
    },
    {
      question: "Can RockMaster be calibrated with laboratory core data?",
      answer:
        "Yes. Laboratory core data can be integrated to calibrate rock strength, elastic properties, and failure envelopes for improved accuracy.",
    },
    {
      question: "How do we rank wells by sanding tendency?",
      answer:
        "Wells are ranked using sanding onset prediction, drawdown limits, and proximity to failure, classifying them as high, medium, or low risk.",
    },
    {
      question: "What sand control methods does RockMaster support modelling for?",
      answer:
        "RockMaster supports modelling for screens, gravel packs, drawdown management, and selective completion strategies.",
    },
  ];

  return (
    <div className="pt-0">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-[#AFE1AF] to-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
              {/* Logo Wrapper with White Background and Padding */}
            <div className="bg-white p-4  inline-block mb-6 shadow-sm">
              <img
                src={asset("/images/RockMaster.jpg")}
                alt="RockMaster Logo"
                className="h-10 md:h-12 lg:h-14 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1B4D3E] leading-tight">
              RockMaster
            </h1>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B4D3E] leading-tight">
              Critical Drawdown Pressure Profiling and Sanding Tendency Analysis
            </h1>

            <p className="text-[#1B4D3E]/80 mt-5 text-lg leading-relaxed">
              RockMaster provides advanced mechanical earth models (MEM), CDP-based sanding tendency analysis,
              and field-life sand modelling — enabling informed sand management strategies and reliable long-term planning.
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
                href="/brochure/Rockmaster Brochure.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border-2 border-[#1B4D3E] text-[#1B4D3E] rounded-xl 
                           font-semibold hover:bg-[#1B4D3E] hover:text-white transition inline-flex items-center gap-2"
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div className="flex justify-center py-12">
            <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white">
              <div className="relative pb-[56.25%]">
                <video
                  src={asset("/video/RockMaster_Final.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover bg-black"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BRING TOGETHER HEADLINE */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2730] leading-tight">
            Bring together MEM, CDP (Critical Drawdown Pressure Profiling), sanding tendency, and field-life sand modelling in a single tool with RockMaster.
          </h2>
        </div>
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="py-20 bg-[#f7fffb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Mechanical Earth Modelling",
              items: [
                "Preparing MEMs to generate rock mechanical properties.",
                "Estimate stresses (max horizontal, min horizontal, overburden).",
                "Generate dynamic & static MEM models calibrated to field/lab data.",
              ],
            },
            {
              title: "Sanding Tendency",
              items: [
                "Generate CDP curves for open & cased-hole wells.",
                "Rank wells (high / medium / low sand tendency).",
                "Identify catastrophic failure conditions and calibrate with field data.",
              ],
            },
            {
              title: "Field-Life Sand Modelling",
              items: [
                "Reservoir pressure based sand production modelling.",
                "Wellbore stability diagrams & CDP triangles.",
                "Assess effects of drawdown, water cut and gas production on sanding.",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-[#1B4D3E]/20 p-8 bg-white"
            >
              <h3 className="text-3xl font-bold text-[#1B4D3E] mb-6">
                {card.title}
              </h3>
              <ul className="space-y-4 text-[#1B4D3E]/90">
                {card.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}

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
        <h2 className="text-3xl md:text-4xl font-bold text-white">Bring operational excellence to your workshops — Try AutoPro</h2>
        <button onClick={() => navigate("/contact")}
         className="mt-8 px-8 py-3 bg-[#20c997] text-white font-semibold rounded-xl shadow-lg hover:bg-[#17a984] transition">
          Connect With Our Team
        </button>
      </section>
    </div>
  );
}

/* FAQ ITEM — CLICKABLE ACCORDION */
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