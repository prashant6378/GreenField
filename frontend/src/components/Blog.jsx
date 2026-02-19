// import React from "react";
// import { ArrowRight } from "lucide-react";

// export default function Blog({ posts }) {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">Insights & Blog</h2>
//           <p className="text-lg text-gray-700">Deep dives, case studies, and practical guides.</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {posts.map((post, i) => (
//             <article key={i} className="border rounded-2xl bg-gray-50 shadow hover:bg-white hover:shadow-xl p-7 transition flex flex-col">
//               <img src={post.image} alt={post.title} className="h-44 w-full object-cover rounded-xl mb-4" />
//               <div className="flex justify-between text-xs uppercase tracking-wide mb-3">
//                 <span className="px-3 py-1 bg-[#e8f5e9] text-[#1B4D3E] rounded-full">{post.category}</span>
//                 <span className="text-gray-500">{post.readTime}</span>
//               </div>
//               <h3 className="text-xl font-bold text-[#1B4D3E] mb-3">{post.title}</h3>
//               <p className="text-gray-700 text-sm flex-1 mb-4">{post.description}</p>
//               <button className="text-[#1B4D3E] flex items-center gap-2 font-semibold text-sm">Continue Reading <ArrowRight className="w-4 h-4" /></button>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import BlogModal from "./BlogModal";

export default function Blog({ posts }) {
  const [activePost, setActivePost] = useState(null);

  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B4D3E] mb-3 sm:mb-4">
              Insights & Blog
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
              Deep dives, case studies, and practical guides.
            </p>
          </div>

          {/* Grid Layout: 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:bg-white hover:shadow-xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col group h-full"
              >
                {/* Responsive Image Container */}
                <div className="overflow-hidden rounded-xl mb-4 sm:mb-5 h-48 sm:h-52 w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Meta Tags */}
                <div className="flex justify-between items-center text-[10px] sm:text-xs uppercase tracking-wide mb-3 sm:mb-4">
                  <span className="px-3 py-1.5 bg-[#e8f5e9] text-[#1B4D3E] font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 font-medium">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1B4D3E] mb-2 sm:mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Description - flex-1 pushes the button to the bottom */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 mb-5 sm:mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* CTA Button */}
                <div className="mt-auto pt-2 border-t border-gray-100/50">
                  <button
                    onClick={() => setActivePost(post)}
                    className="text-[#1B4D3E] flex items-center gap-2 font-bold text-xs sm:text-sm hover:text-green-700 transition-colors group/btn"
                  >
                    Continue Reading 
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <BlogModal post={activePost} onClose={() => setActivePost(null)} />
    </>
  );
}