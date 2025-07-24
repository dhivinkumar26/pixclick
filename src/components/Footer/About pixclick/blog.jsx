import React, { useState } from "react";
import { Link } from "react-router-dom";

export const blogs = [
  {
    id: 1,
    title: "Barely half of banks’ own employees would recommend their international payment services to customers",
    author: "Olivia Rhye",
    date: "25 Jan 2022",
    image: "https://images.unsplash.com/photo-1612837017391-5b7a75142a5e"
  },
  { id: 2, title: "Blog 2 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1581091226825-4c4c80b0d340" },
  { id: 3, title: "Blog 3 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1556742400-b5da3b9384d2" },
  { id: 4, title: "Blog 4 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68" },
  { id: 5, title: "Blog 5 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1502767089025-6572583495b4" },
  { id: 6, title: "Blog 6 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
  { id: 7, title: "Blog 7 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64" },
  { id: 8, title: "Blog 8 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4" },
  { id: 9, title: "Blog 9 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1564869732902-e6c6c6b6c6b6" },
  { id: 10, title: "Blog 10 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1511200008-887f6717d7e4" },
  { id: 11, title: "Blog 11 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" },
  { id: 12, title: "Blog 12 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1544717305-2782549b5136" },
  { id: 13, title: "Blog 13 title here", author: "Olivia Rhye", date: "25 Jan 2022", image: "https://images.unsplash.com/photo-1532635223-978cd4c46e7b" }
];

export default function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(4); // show first 4, then load more by 4

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 underline">Latest News</h2>

      {/* Big top blog */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Link to={`/read/${blogs[0].id}`} className="rounded-lg overflow-hidden bg-white shadow">
          <img src={blogs[0].image} alt="" className="w-full h-64 object-cover" />
        </Link>
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase text-green-500 mb-2 underline">Finance Advicer</p>
          <h3 className="text-lg md:text-xl font-semibold mb-2 hover:underline">{blogs[0].title}</h3>
          <p className="text-sm text-gray-500">{blogs[0].author} • {blogs[0].date}</p>
        </div>
      </div>

      {/* Small blogs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {blogs.slice(1, visibleCount + 1).map(blog => (
          <Link to={`/read/${blog.id}`} key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={blog.image} alt="" className="w-full h-28 object-cover" />
            <div className="p-2 bg-green-100">
              <p className="text-[10px] uppercase text-green-500 mb-1 underline">Finance Advicer</p>
              <p className="text-xs font-medium truncate hover:underline">{blog.title}</p>
              <p className="text-[10px] text-gray-500 mt-1">{blog.author} • {blog.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* View More button */}
      {visibleCount + 1 < blogs.length && (
        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="bg-green-800 text-white px-4 py-2 rounded-xl hover:bg-gray-900 text-sm"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
