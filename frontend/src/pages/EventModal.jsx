import React from "react";
import { motion } from "framer-motion";
import { X, Calendar, Linkedin, Download } from "lucide-react";

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="bg-[#AFE1AF] p-6 md:p-8 text-[#1B4D3E] relative">
          <div className="flex items-center gap-2 text-[#1B4D3E]/80 text-sm mb-3">
            <Calendar size={16} />
            {event.date}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {event.title}
          </h2>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 overflow-y-auto">
          <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
            {event.fullContent}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {event.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 p-6 flex flex-wrap items-center gap-4">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-[#1B4D3E] font-medium"
          >
            ← Back to Events
          </button>

          {/* PDF Download */}
          {event.pdf && (
            <button
              onClick={() => window.open(event.pdf, "_blank")}
              className="ml-auto flex items-center gap-2 text-gray-700 hover:text-[#1B4D3E] font-medium"
            >
              <Download size={18} />
              Download Brief
            </button>
          )}

          {/* LinkedIn */}
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#0077b5] text-white px-6 py-2.5 rounded-lg hover:bg-[#005e93] transition font-semibold"
          >
            <Linkedin size={18} />
            View Post
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default EventModal;
