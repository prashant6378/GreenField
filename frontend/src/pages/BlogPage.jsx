import React from "react";
import Blog from "../components/Blog";
import { 
  blogPosts, 
   
} from "../data"; 
 // or wherever posts live

export default function BlogPage() {
  return (
    <div className="pt-24">
      <Blog posts={blogPosts} />
    </div>
  );
}
