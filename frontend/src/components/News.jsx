import React from "react";
import { useNavigate } from "react-router-dom";
import { Newspaper, Calendar, Globe2, Link2 } from "lucide-react";
import eventsData from "../data/eventsData";

export default function News() {
  const navigate = useNavigate();

  // show latest 3 events
  const latestEvents = eventsData.slice(0, 3);

  return (
    <section className="py-20 bg-[#e8f5e9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 text-[#1B4D3E]">
            <Newspaper className="w-8 h-8" /> News & Events
          </h2>
          <p className="text-gray-700 mt-2 max-w-2xl">
            Stay up to date with our latest activities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestEvents.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-xl flex flex-col"
            >
              <div className="flex justify-between text-xs text-gray-500 mb-3 uppercase">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4" />
                  India
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#1B4D3E] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm flex-1 mb-4">
                {item.preview}
              </p>

              <button
                onClick={() => navigate(`/events/${item.id}`)}
                className="text-[#1B4D3E] flex items-center gap-1 font-semibold text-sm"
              >
                Read More <Link2 className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
