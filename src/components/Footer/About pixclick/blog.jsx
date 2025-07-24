import React, { useState } from "react";

export default function BlogSection() {
  const blogs = [
    { id: 1, title: "Blog 1 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1612837017391-5b7a75142a5e" },
    { id: 2, title: "Blog 2 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1581091226825-4c4c80b0d340" },
    { id: 3, title: "Blog 3 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1556742400-b5da3b9384d2" },
    { id: 4, title: "Blog 4 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68" },
    { id: 5, title: "Blog 5 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1502767089025-6572583495b4" },
    { id: 6, title: "Blog 6 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
    { id: 7, title: "Blog 7 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64" },
    { id: 8, title: "Blog 8 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4" },
    { id: 9, title: "Blog 9 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1564869732902-e6c6c6b6c6b6" },
    { id: 10, title: "Blog 10 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1511200008-887f6717d7e4" },
    { id: 11, title: "Blog 11 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1532634860-0fe4d58a6615" },
    { id: 12, title: "Blog 12 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { id: 13, title: "Blog 13 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1558981001-5b63ca2d5d59" }
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>

      {/* Top featured blog (first blog) */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg overflow-hidden bg-white shadow">
          <img src={blogs[0].image} alt="" className="w-full h-64 object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase text-gray-500 mb-2">Finance Advicer</p>
          <h3 className="text-lg md:text-xl font-semibold mb-2">{blogs[0].title}</h3>
          <p className="text-sm text-gray-500">{blogs[0].author} • {blogs[0].date}</p>
        </div>
      </div>

      {/* Small cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {blogs.slice(1, visibleCount).map((blog) => (
          <div key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={blog.image} alt="" className="w-full h-28 object-cover" />
            <div className="p-2">
              <p className="text-[10px] uppercase text-gray-500 mb-1">Finance Advicer</p>
              <p className="text-xs font-medium truncate">{blog.title}</p>
              <p className="text-[10px] text-gray-500 mt-1">{blog.author} • {blog.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More button */}
      {visibleCount < blogs.length && (
        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 text-sm"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
