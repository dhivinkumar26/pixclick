import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./blog"; // import the blogs array

export default function ReadMoreBlog() {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = blogs.find(b => b.id === blogId);

  // Pick 3 other related blogs (exclude current blog)
  const relatedBlogs = blogs.filter(b => b.id !== blogId).slice(0, 3);

  const categories = [
    "Politics", "National", "International", "Regulation", "Business", "Finance",
    "Health Care", "Technology", "Jobs", "Media", "Administration", "Defense",
    "Energy", "Latino", "Kids", "Sports", "Game"
  ];

  if (!blog) return <p className="text-center py-8">Blog not found!</p>;

  return (
    <div className=" mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20  py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Sidebar */}
      <div className="hidden md:block space-y-6">
        <div className="bg-white shadow rounded p-4 text-center">
          <img src="https://i.pravatar.cc/100" alt="" className="w-16 h-16 rounded-full mx-auto mb-2" />
          <p className="text-sm font-semibold">Olivia Rhye</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold mb-3">Category</h3>
          <ul className="space-y-1 text-sm">
            {categories.map(cat => (
              <li key={cat} className="hover:text-green-600 cursor-pointer">{cat}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Blog Content */}
      <div className="md:col-span-2">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{blog.title}</h2>
        <div className="bg-white shadow rounded overflow-hidden mb-4">
          <img src={blog.image} alt="" className="w-full h-60 object-cover" />
          <div className="p-4">
            <span className="inline-block bg-pink-100 text-pink-600 text-xs px-2 py-0.5 rounded mb-2">Finance Advicer</span>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-xs text-gray-500 mb-2">By {blog.author} • {blog.date}</p>

            {/* Icons Row */}
            <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
              <span>👁️ 2.5m</span>
              <span>💬 15k</span>
              <span>❤️ 39k</span>
              <button className="ml-auto border px-2 py-0.5 rounded hover:bg-gray-100 text-xs">Save to pocket</button>
              <button className="border px-2 py-0.5 rounded hover:bg-gray-100 text-xs">Share</button>
            </div>

            {/* Dummy content */}
            <p className="text-sm text-gray-700 mb-2">
              This is a sample detailed content about the blog. You can replace this with actual content...
            </p>
            <p className="text-sm text-gray-700 mb-2">
              More paragraphs to simulate a detailed article. Add your real content from database here.
            </p>
            <p className="text-sm text-gray-700">
              Final paragraph to give it a complete look. You can customize as needed.
            </p>
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Related News</h4>
          <span className="text-xs text-green-600 cursor-pointer">See all</span>
        </div>
        {relatedBlogs.map(r => (
          <div key={r.id} className="bg-white shadow rounded overflow-hidden">
            <img src={r.image} alt="" className="w-full h-20 object-cover" />
            <div className="p-2">
              <span className="inline-block bg-pink-100 text-pink-600 text-[10px] px-1.5 py-0.5 rounded mb-1">Finance Advicer</span>
              <p className="text-xs font-medium">{r.title}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">👁️ 2.5m</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
