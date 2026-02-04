import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, FileText } from "lucide-react";

import eventsData from "../data/eventsData";
import EventModal from "./EventModal";

const Events = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ---------------- EXTRACT YEAR FROM DATE ----------------
  const getYear = (date) => {
    const match = date.match(/\d{4}/);
    return match ? match[0] : "Unknown";
  };

  // ---------------- YEARS LOGIC (DESCENDING) ----------------
  const years = useMemo(() => {
    // 1. Extract years strictly from the data
    const existingYears = eventsData.map((e) => getYear(e.date));
    const uniqueYears = [...new Set(existingYears)];
    
    // 2. Sort Descending (Latest Year First -> b - a)
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  // ---------------- STATE ----------------
  // Initialize activeYear to the first year in the sorted list (Latest)
  const [activeYear, setActiveYear] = useState(() => {
    return years.length > 0 ? years[0] : "";
  });
  
  const [selectedEvent, setSelectedEvent] = useState(null);

  // ---------------- OPEN MODAL FROM URL ----------------
  useEffect(() => {
    if (id) {
      const event = eventsData.find((e) => e.id === Number(id));
      if (event) {
        setSelectedEvent(event);
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [id]);

  const openEvent = (event) => {
    navigate(`/events/${event.id}`);
  };

  const closeEvent = () => {
    setSelectedEvent(null);
    navigate("/events");
    document.body.style.overflow = "unset";
  };

  // ---------------- GROUP EVENTS BY YEAR ----------------
  const groupedEvents = useMemo(() => {
    const groups = {};
    eventsData.forEach((event) => {
      const year = getYear(event.date);
      if (!groups[year]) groups[year] = [];
      groups[year].push(event);
    });
    return groups;
  }, []);

  return (
    <div className="relative w-full bg-slate-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#AFE1AF] text-[#1B4D3E] py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            News & <span className="text-white">Events</span>
          </motion.h1>
          <p className="text-lg text-[#1B4D3E] max-w-2xl mx-auto font-medium">
            Tracking our journey in sustainability, innovation, and industry leadership.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
        
        {/* --- LEFT SIDEBAR (FILTERS) --- */}
        <aside className="w-full md:w-48 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-lg font-bold text-[#1B4D3E] mb-6 uppercase tracking-wider md:text-center">
              Year
            </h3>
            
            {/* Vertical Stack of Buttons */}
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`
                    px-6 py-2 rounded-full font-semibold text-sm transition-all whitespace-nowrap
                    md:w-full text-center
                    ${
                    activeYear === year
                      ? "bg-[#1B4D3E] text-white shadow-md"
                      : "bg-white text-[#1B4D3E] border border-gray-200 hover:border-[#1B4D3E]"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* --- RIGHT CONTENT (EVENTS GRID) --- */}
        <main className="flex-1">
          <div className="space-y-12">
            
            {groupedEvents[activeYear] && groupedEvents[activeYear].length > 0 ? (
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-extrabold text-[#1B4D3E] mb-8 border-b pb-4 border-gray-200">
                  {activeYear} Highlights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {groupedEvents[activeYear].map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 flex flex-col overflow-hidden group h-full"
                    >
                      <div className="p-7 flex flex-col flex-1">
                        
                        <div className="flex items-center gap-2 text-[#1B4D3E] text-xs font-bold uppercase mb-4">
                          <Calendar size={14} />
                          {event.date}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1B4D3E] transition-colors">
                          {event.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                          {event.preview}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                          <button
                            onClick={() => openEvent(event)}
                            className="group/btn flex items-center text-[#1B4D3E] font-bold text-sm hover:text-[#2e7d32]"
                          >
                            READ UPDATE
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                            />
                          </button>

                          {event.pdf && (
                            <span className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                              <FileText size={16} />
                              Brief
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="h-1 bg-[#1B4D3E]" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                 <p className="text-gray-500">No events found.</p>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={closeEvent} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;