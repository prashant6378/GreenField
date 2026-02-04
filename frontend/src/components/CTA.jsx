import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">Ready to Transform Your Operations?</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">Let's discuss how our innovative solutions can help you achieve your goals.</p>
      <Link to="/contact" className="bg-[#1B4D3E] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#153c30] transition inline-flex items-center gap-2">
        Contact Us Today <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
