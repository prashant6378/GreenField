// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThreeJSBackground from "./ThreeJSBackground";

export default function Hero() {
  /* ===============================
     TYPEWRITER 1
  =============================== */
  const phrases = [
    "Energy Excellence",
    "Sustainable Solutions",
    "Production Optimization", // <-- longest phrase
  ];

  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const current = phrases[phraseIndex];
    const typingSpeed = deleting ? 30 : 70;
    const pause = 800;

    if (!deleting) {
      if (charIndex === current.length) {
        timeoutId = setTimeout(() => setDeleting(true), pause);
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
  }, [charIndex, deleting, phraseIndex]);

  /* ===============================
     TYPEWRITER 2 (G.O.T.S)
  =============================== */
  const gotsWords = [
    "Growth",
    "Operational Excellence",
    "Technology",
    "Sustainability",
  ];

  const [gotsText, setGotsText] = useState("");
  const [gotsIndex, setGotsIndex] = useState(0);
  const [gotsChar, setGotsChar] = useState(0);
  const [gotsDeleting, setGotsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const current = gotsWords[gotsIndex];
    const speed = gotsDeleting ? 25 : 60;
    const pause = 900;

    if (!gotsDeleting) {
      if (gotsChar === current.length) {
        timer = setTimeout(() => setGotsDeleting(true), pause);
      } else {
        timer = setTimeout(() => {
          setGotsText(current.slice(0, gotsChar + 1));
          setGotsChar((c) => c + 1);
        }, speed);
      }
    } else {
      timer = setTimeout(() => {
        setGotsText(current.slice(0, gotsChar - 1));
        setGotsChar((c) => c - 1);

        if (gotsChar - 1 === 0) {
          setGotsDeleting(false);
          setGotsIndex((i) => (i + 1) % gotsWords.length);
        }
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [gotsChar, gotsDeleting, gotsIndex]);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#AFE1AF] text-white py-24 overflow-hidden">
        <ThreeJSBackground />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <style>{`
          .caret::after {
            content: "|";
            margin-left: 6px;
            animation: blink 1s steps(2,end) infinite;
          }
          @keyframes blink { 50% { opacity: 0; } }
        `}</style>

        <div className="relative max-w-7xl mx-auto px-4 z-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-8 max-w-[560px]">
              {/* STATIC LINE */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0F3D2E]">
                Innovative Solutions for
              </h1>

              {/* TYPEWRITER WITH RESERVED WIDTH */}
              <div className="relative">
                {/* Invisible placeholder (locks width) */}
                <div className="opacity-0 pointer-events-none text-4xl md:text-5xl font-bold">
                  Production Optimization
                </div>

                {/* Actual typing text */}
                <div
                  className="
                    absolute inset-0
                    text-4xl md:text-5xl
                    font-bold text-white caret
                    leading-tight
                    whitespace-nowrap
                  "
                >
                  {typed}
                </div>
              </div>

              <p className="text-xl text-[#0F3D2E]/90 leading-relaxed">
                Providing cutting-edge engineering consultancy and customized
                software solutions for the oil and gas industry since 2015.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/schedule-demo"
                  className="bg-white text-[#0F3D2E] px-8 py-4 rounded-lg font-semibold hover:bg-[#AFE1AF] transition shadow-md"
                >
                  Book a Demo
                </Link>

                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-[#AFE1AF] hover:text-[#0F3D2E] px-8 py-4 rounded-lg font-semibold transition"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* RIGHT VIDEO (ABSOLUTELY STABLE) */}
           
{/* <div className="relative w-full max-w-xl mx-auto">
  <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl bg-black/10 ring-4 ring-[#AFE1AF]/40">
    <iframe
      src="https://player.vimeo.com/video/686737424?autoplay=1&muted=1&loop=1&controls=0"
      className="absolute inset-0 w-full h-full"
      allow="autoplay; fullscreen"
      allowFullScreen
      title="AutoWellz Overview"
    />
  </div>
</div> */}

          </div>
        </div>
      </section>

      {/* ================= G.O.T.S SECTION ================= */}
      <section className="bg-[#AFE1AF]/20 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F3D2E] mb-4">
            Our Core Values
          </h2>

          <p className="text-lg text-[#0F3D2E]/80 mb-8">
            Built on a strong foundation that drives excellence and sustainability
          </p>

          <div className="inline-block bg-white px-10 py-8 rounded-2xl shadow-xl border border-[#AFE1AF]">
            <h3 className="text-3xl font-extrabold text-[#0F3D2E] tracking-widest mb-3">
              G.O.T.S
            </h3>

            <p className="text-2xl font-semibold text-[#0F3D2E] caret">
              {gotsText}
            </p>

            <p className="mt-4 text-[#0F3D2E]/70 text-sm">
              Growth · Operational Excellence · Technology · Sustainability
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
