import React from "react";
import { X } from "lucide-react";

export default function BlogModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl overflow-y-auto max-h-[90vh] relative p-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X />
        </button>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover rounded-xl mb-6"
        />

        <div className="text-sm text-gray-500 mb-2">
          {post.date} • {post.comments}
        </div>

        <h2 className="text-3xl font-bold text-[#1B4D3E] mb-6">
          {post.title}
        </h2>

        <div
          className="prose max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
