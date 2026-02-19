import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Calendar,
  Linkedin,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EventModal = ({ event, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (!event.images) return;
    setCurrentImage((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!event.images) return;
    setCurrentImage((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

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
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
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

          {/* Content */}
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

          {/* ===== IMAGE GALLERY AT BOTTOM ===== */}
          {event.images && event.images.length > 0 && (
            <div className="mt-12">

              {/* Image Frame */}
              <div className="relative bg-gray-100 rounded-xl p-4 flex justify-center items-center">

                <img
                  src={event.images[currentImage]}
                  alt={`event-${event.id}`}
                  className="max-h-[70vh] w-auto object-contain rounded-lg transition-all duration-300"
                />

                {/* Arrows */}
                {event.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Dots Indicator */}
              {event.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {event.images.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition ${
                        currentImage === index
                          ? "bg-[#1B4D3E]"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-100 p-6 flex flex-wrap items-center gap-4">

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-[#1B4D3E] font-medium"
          >
            ← Back to Events
          </button>

          {event.pdf && (
            <button
              onClick={() => window.open(event.pdf, "_blank")}
              className="ml-auto flex items-center gap-2 text-gray-700 hover:text-[#1B4D3E] font-medium"
            >
              <Download size={18} />
              Download Brief
            </button>
          )}

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