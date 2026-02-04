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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">
              Insights & Blog
            </h2>
            <p className="text-lg text-gray-700">
              Deep dives, case studies, and practical guides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className="border rounded-2xl bg-gray-50 shadow hover:bg-white hover:shadow-xl p-7 transition flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-44 w-full object-cover rounded-xl mb-4"
                />

                <div className="flex justify-between text-xs uppercase tracking-wide mb-3">
                  <span className="px-3 py-1 bg-[#e8f5e9] text-[#1B4D3E] rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1B4D3E] mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-700 text-sm flex-1 mb-4">
                  {post.description}
                </p>

                <button
                  onClick={() => setActivePost(post)}
                  className="text-[#1B4D3E] flex items-center gap-2 font-semibold text-sm"
                >
                  Continue Reading <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BlogModal post={activePost} onClose={() => setActivePost(null)} />
    </>
  );
}
