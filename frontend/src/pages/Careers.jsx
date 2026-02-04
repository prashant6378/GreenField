import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Leaf } from "lucide-react";

/* ================= THEME CONSTANTS ================= */
const THEME = {
  textDark: "text-[#1B4D3E]",
  bgDark: "bg-[#1B4D3E]",
  bgSage: "bg-[#AFE1AF]",
  textSage: "text-[#84A98C]",
  bgLight: "bg-[#f5faf7]", // Light sage tint
  bgWhite: "bg-white",
  buttonPrimary: "bg-white text-[#1B4D3E] hover:bg-[#f0fdf4] shadow-lg hover:scale-105 transition",
  buttonSecondary: "border-2 border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white transition",
};

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ================= COMPONENT ================= */

const Careers = () => {
  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* ================= HERO ================= */}
      {/* Updated Background to Sage Green, Text to Dark Green */}
      <section className={`relative ${THEME.bgSage} ${THEME.textDark} py-24`}>
        {/* Subtle overlay for texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]" />

        <motion.div
          className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h1 className="text-5xl font-extrabold leading-tight">
              Build the Future of <br /> Energy & Engineering
            </h1>

            <p className="mt-6 text-lg font-medium opacity-90 max-w-xl">
              Work on real oil & gas challenges using engineering excellence,
              data intelligence, and sustainable innovation.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#future-opportunities"
                className={`${THEME.buttonPrimary} px-7 py-3 rounded-xl font-bold`}
              >
                Future Opportunities
              </a>
              <a
                href="#life-at-gots"
                className={`${THEME.buttonSecondary} px-7 py-3 rounded-xl font-bold`}
              >
                Life at GOTS
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hidden md:block backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-10 shadow-2xl"
          >
            <p className="text-2xl font-bold">
              Engineers. Analysts. Thinkers.
            </p>
            <p className="mt-4 font-medium opacity-90">
              We value clarity, logic, and long-term impact.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className={`text-4xl font-bold ${THEME.textDark}`}
          >
            Why Work With Us
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Impactful Work",
                text: "Solve real oil & gas field problems.",
              },
              {
                icon: Users,
                title: "Engineering Culture",
                text: "Flat hierarchy & strong ownership.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                text: "Efficiency-driven solutions.",
              },
              {
                icon: TrendingUp,
                title: "Career Growth",
                text: "Mentorship & learning.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border-t-4 border-[#1B4D3E]"
              >
                <item.icon className={`w-12 h-12 ${THEME.textSage} mx-auto`} />
                <h3 className={`mt-5 font-bold text-lg ${THEME.textDark}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= LIFE AT GOTS ================= */}
      <section id="life-at-gots" className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h2 className={`text-4xl font-bold ${THEME.textDark}`}>
              Life at GOTS
            </h2>
            <ul className="mt-6 space-y-3 text-gray-700 font-medium">
              <li>• Collaborative engineering culture</li>
              <li>• Ownership from day one</li>
              <li>• Direct client & field exposure</li>
              <li>• Balanced work-life approach</li>
              <li>• Continuous learning mindset</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={`${THEME.bgLight} rounded-3xl p-10 shadow-inner border border-[#84A98C]/20`}
          >
            <p className={`text-2xl font-bold ${THEME.textDark}`}>
              “We don’t hire roles. We hire problem-solvers.”
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FUTURE OPPORTUNITIES ================= */}
      <section id="future-opportunities" className="py-24 bg-gray-50">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className={`text-4xl font-bold ${THEME.textDark}`}
          >
            Future Opportunities at GOTS
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We currently don’t have any active openings. However, we’re always
            open to connecting with passionate engineers, analysts, and
            innovators who want to create long-term impact.
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-14 grid md:grid-cols-3 gap-8"
          >
            {[
              "Engineering & Technology Roles",
              "Data & Analytics Positions",
              "Petroleum & Consulting Expertise",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#84A98C]"
              >
                <p className={`font-bold ${THEME.textDark}`}>{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <h3 className={`text-2xl font-bold ${THEME.textDark}`}>
              Stay Connected
            </h3>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Share your resume with us, and we’ll reach out when a role aligns
              with your expertise.
            </p>

            <a
              href="mailto:Support@greenfield.energy"
              className={`inline-block mt-6 ${THEME.bgSage} ${THEME.textDark} px-10 py-3 rounded-xl font-bold hover:opacity-90 transition shadow-md`}
            >
              Send Your Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      {/* Updated to Sage Green Background */}
      <section className={`${THEME.bgSage} py-20 text-center ${THEME.textDark}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold">
            Ready to Build Something Meaningful?
          </h2>
          <p className="mt-4 font-medium opacity-90">
            Let’s connect and explore future possibilities.
          </p>
          <a
            href="mailto:careers@greenfieldots.com"
            className={`inline-block mt-6 bg-white ${THEME.textDark} px-10 py-3 rounded-xl font-bold shadow-xl hover:scale-105 transition`}
          >
            Support@greenfield.energy
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;