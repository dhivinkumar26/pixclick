import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import FilterSidebar from './FilterSidebar/FilterSidebar';
import { Menu } from 'lucide-react';

const CategoryLayout = () => {
    // const { category } = useParams();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative flex flex-col md:flex-row">
            {/* Toggle Button for Mobile */}
            <button
                className="md:hidden p-2 m-2  rounded flex items-center gap-1 z-50 bg-white"
                onClick={() => setSidebarOpen(true)}
            >
                <Menu size={18} />
                Filters
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full max-w-64 bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 md:static md:translate-x-0 md:block ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close button for mobile */}
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <h2 className="font-bold text-lg">Filters</h2>
                    <button onClick={() => setSidebarOpen(false)} className="text-black text-2xl ">
                        ✕
                    </button>
                </div>

                <FilterSidebar />
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0  bg-opacity-40 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 p-4 z-0">
                <CategoryPage />
            </div>
        </div>
    );
};

export default CategoryLayout;