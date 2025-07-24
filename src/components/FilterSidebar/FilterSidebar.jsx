// src/components/FilterSidebar.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const filtersByCategory = {
    electronics: {
        subcategories: ["Headphones", "Power Banks", "Speakers"],
        sellers: ["Tatacliq", "Boat"],
        brands: ["Boat", "JBL", "Portronics", "boAt"],
    },
    grocery: {
        subcategories: ["Fruits", "Vegetables", "Snacks"],
        sellers: ["BigBasket", "Reliance Fresh"],
        brands: ["Tropicana", "Amul", "Nestle"],
    },
    mensfashion: {
        subcategories: ["Shirts", "T-Shirts", "Jeans"],
        sellers: ["Amazon", "Flipkart"],
        brands: ["Levis", "PERFORMAX", "ARROW", "SPYKAR"],
    },
    womensfashion: {
        subcategories: ["Shirts", "T-Shirts", "Jeans", "Kurta & Kurtis", "Dresses"],
        sellers: ["Amazon", "Flipkart", "AJIO"],
        brands: ["Fig", "RIO", "DNMX", "Fusion", "MYSHKA", "Outryt"],
    }
    // Add more categories as needed
};

const FilterSidebar = () => {
    const { category } = useParams();
    const filters = filtersByCategory[category] || {};

    const [minPrice, setMinPrice] = useState(99);
    const [maxPrice, setMaxPrice] = useState(12999);
    const [selectedSellers, setSelectedSellers] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const toggleCheckbox = (item, list, setList) => {
        setList((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        );
    };

    return (
        <div className="w-64 p-4 border-r bg-white min-h-screen hidden md:block">
            <h2 className="text-lg font-bold mb-4 text-gray-800">FILTER BY</h2>

            {/* Subcategories */}
            {filters.subcategories && (
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2 capitalize">{category}</h3>
                    <ul className="space-y-1">
                        {filters.subcategories.map((sub, i) => (
                            <li key={i} className="text-sm text-gray-600 cursor-pointer hover:underline">
                                {sub}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Price Filter */}
            <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Price</h3>
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        className="border p-1 w-20 text-sm"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <span>-</span>
                    <input
                        type="number"
                        className="border p-1 w-20 text-sm"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <button className="bg-green-600 text-white px-2 py-1 text-sm rounded hover:bg-green-700">
                        GO
                    </button>
                </div>
            </div>

            {/* Seller Filter */}
            {filters.sellers && (
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Seller</h3>
                    <input
                        type="text"
                        className="border mb-2 p-1 w-full text-sm"
                        placeholder="Search Seller"
                    />
                    {filters.sellers.map((seller, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                            <input
                                type="checkbox"
                                checked={selectedSellers.includes(seller)}
                                onChange={() =>
                                    toggleCheckbox(seller, selectedSellers, setSelectedSellers)
                                }
                            />
                            <label>{seller}</label>
                        </div>
                    ))}
                </div>
            )}

            {/* Brand Filter */}
            {filters.brands && (
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Brand</h3>
                    <input
                        type="text"
                        className="border mb-2 p-1 w-full text-sm"
                        placeholder="Search Brand"
                    />
                    <div className="overflow-y-auto max-h-40 pr-1">
                        {filters.brands.map((brand, i) => (
                            <div key={i} className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() =>
                                        toggleCheckbox(brand, selectedBrands, setSelectedBrands)
                                    }
                                />
                                <label>{brand}</label>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterSidebar;
