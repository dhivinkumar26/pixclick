import { useParams } from "react-router-dom";
import { mockProducts } from "../assets/mockProducts";

const CategoryPage = () => {
    const { category } = useParams();
    const products = mockProducts[category] || [];

    return (
        <div className="p-4 flex-1">
            <h1 className="text-2xl font-bold mb-4 capitalize">{category.replace("-", " ")}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="relative border rounded-sm shadow-md p-4 flex flex-col items-center bg-white"
                    >
                        {/* On Sale Ribbon */}
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl rounded-tr z-10">
                            On Sale
                        </div>

                        {/* Product Image */}
                        <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-100 rounded overflow-hidden">
                            {p.image ? (
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    loading="lazy"
                                    className="object-cover h-full cursor-pointer"
                                />
                            ) : (
                                <span className="text-xs text-gray-500">Image Coming Soon</span>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="text-center mb-4">
                            <p className="text-gray-500 text-sm mb-1">
                                Brand: <span className="font-medium">{p.brand}</span>
                            </p>
                            <p className="font-semibold">{p.name}</p>

                            <div className="mt-2">
                                <span className="text-lg font-bold text-black">₹{p.price}</span>{" "}
                                <span className="line-through text-gray-400 text-sm">₹{p.originalPrice}</span>
                                <span className="text-green-600 text-sm ml-1">({p.discount}% off)</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2 w-full justify-center">
                            <button className="px-4 py-1 border cursor-pointer border-gray-300 text-sm rounded hover:bg-gray-100">
                                COPY LINK
                            </button>
                            <button className="px-4 py-1 bg-green-500 cursor-pointer text-white text-sm rounded hover:bg-green-600">
                                SHARE NOW
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;