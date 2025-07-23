import { useParams } from "react-router-dom";

const mockProducts = {
    electronics: [
        {
            id: 1,
            name: "pTron HBE6 Headphone",
            brand: "pTron",
            price: 199,
            originalPrice: 600,
            discount: 67,
            image: "https://m.media-amazon.com/images/I/41+Qa1BYTRL.jpg",
        },
        {
            id: 2,
            name: "Stone 160",
            brand: "Boat",
            price: 999,
            originalPrice: 2490,
            discount: 60,
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/stone-160-black.png?v=1613744129",
        },
        {
            id: 3,
            name: "Spot Bluetooth Speaker",
            brand: "Spot",
            price: 999,
            originalPrice: 1999,
            discount: 50,
            image: "https://img.tatacliq.com/images/i5/437Wx649H/MP000000005402996_437Wx649H_20190902040604.jpeg",
        },
        {
            id: 4,
            name: "Samsung 10000mAh Power Bank",
            brand: "Samsung",
            price: 500,
            originalPrice: 1566,
            discount: 68,
            image: "https://m.media-amazon.com/images/I/211pOb8scML.jpg",
        },
        {
            id: 5,
            name: "boAt Airdopes 131 True Wireless Earbuds",
            brand: " boAt",
            price: 1299,
            originalPrice: 3999,
            discount: 68,
            image: "https://m.media-amazon.com/images/I/41XqcYjYlRL.jpg",
        },
        {
            id: 6,
            name: "  Portronics Indo 10X 10000mAh Power Bank (POR-1009, White)",
            brand: " Portronics",
            price: 689,
            originalPrice: 1999,
            discount: 66,
            image: "https://img.tatacliq.com/images/i4/437Wx649H/MP000000007056338_437Wx649H_20200523230335.jpeg",
        },
        {
            id: 7,
            name: "Infinity (JBL) Clubz 150 Deep Bass Dual Equalizer Portable Wireless Bluetooth Speaker (Black)",
            brand: " Portronics",
            price: 899,
            originalPrice: 2499,
            discount: 64,
            image: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000007335983_437Wx649H_20200726142446.jpeg",
        },
        {
            id: 8,
            name: "JBL Go2 Plus 3W Bluetooth Speaker (Black)",
            brand: "JBL",
            price: 1399,
            originalPrice: 3299,
            discount: 58,
            image: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000006524401_437Wx649H_20200218103204.jpeg",
        },

    ],
    grocery: [
        {
            id: 3,
            name: "Amul Butter 500g",
            brand: "Amul",
            price: 245,
            originalPrice: 265,
            discount: 8,
            image: "https://m.media-amazon.com/images/I/61vr7r8qqsL._UF894,1000_QL80_.jpg",
        },
        {
            id: 4,
            name: "Tata Salt 1kg",
            brand: "Tata",
            price: 28,
            originalPrice: 32,
            discount: 13,
            image: "https://m.media-amazon.com/images/I/614mm2hYHyL.jpg",
        },
        {
            id: 5,
            name: "Aashirvaad Atta 5kg",
            brand: "Aashirvaad",
            price: 239,
            originalPrice: 280,
            discount: 15,
            image: "https://www.bbassets.com/media/uploads/p/xl/126903_12-aashirvaad-atta-whole-wheat.jpg",
        },
        {
            id: 6,
            name: "Fortune Sunflower Oil 1L",
            brand: "Fortune",
            price: 122,
            originalPrice: 140,
            discount: 13,
            image: "https://www.bbassets.com/media/uploads/p/l/40161771_6-fortune-sunflower-oil.jpg",
        },
        {
            id: 7,
            name: "Tata Tea Premium 1kg",
            brand: "Tata Tea",
            price: 510,
            originalPrice: 580,
            discount: 12,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBVESVomVmD0qOEX_Qo-umJbOKie06IzG4g&s",
        },
        {
            id: 8,
            name: "Maggi 2-Minute Noodles 420g (Pack of 6)",
            brand: "Maggi",
            price: 72,
            originalPrice: 84,
            discount: 14,
            image: "https://m.media-amazon.com/images/I/81MGEuyXHqL._UF1000,1000_QL80_.jpg",
        },
        {
            id: 9,
            name: "Surf Excel Easy Wash Detergent 1kg",
            brand: "Surf Excel",
            price: 115,
            originalPrice: 135,
            discount: 15,
            image: "https://m.media-amazon.com/images/I/61m1Pn9lzHL._UF1000,1000_QL80_.jpg",
        },
        {
            id: 10,
            name: "Good Day Cashew Cookies 200g",
            brand: "Britannia",
            price: 38,
            originalPrice: 45,
            discount: 16,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugH4ez-zbsmTKq0Ih_hUI9JCb2Cju-lpRwA&s",
        },
        {
            id: 11,
            name: "Colgate Strong Teeth Toothpaste 200g",
            brand: "Colgate",
            price: 92,
            originalPrice: 110,
            discount: 16,
            image: "https://m.media-amazon.com/images/I/61nWgXDNMOL._UF1000,1000_QL80_.jpg",
        },
        {
            id: 12,
            name: "Horlicks Classic Malt 500g",
            brand: "Horlicks",
            price: 245,
            originalPrice: 270,
            discount: 9,
            image: "https://m.media-amazon.com/images/I/51VlwTldHAL._UF1000,1000_QL80_.jpg",
        },
        {
            id: 13,
            name: "Fresh Tomatoes - 1kg",
            brand: "Farm Fresh",
            price: 28,
            originalPrice: 40,
            discount: 30,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7-KgucgCvKLUEGwJytAQ9e28-a4Gw8LKWA&s",
        },
        {
            id: 14,
            name: "Cavendish Banana - 1 Dozen",
            brand: "Farm Fresh",
            price: 50,
            originalPrice: 65,
            discount: 23,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVX0qdzzVhFBZaaGLfIVG3yz5mE4j8MfIazw&s",
        },
        {
            id: 16,
            name: "Amul Cheese Slices 200g",
            brand: "Amul",
            price: 125,
            originalPrice: 140,
            discount: 11,
            image: "https://rukminim2.flixcart.com/image/704/844/xif0q/cheese/u/w/4/-original-imagrtfdj67rgsuh.jpeg?q=90&crop=false",
        },
        {
            id: 17,
            name: "Amul Taaza Toned Milk 1L",
            brand: "Amul",
            price: 66,
            originalPrice: 70,
            discount: 5,
            image: "https://www.bbassets.com/media/uploads/p/l/306926_4-amul-homogenised-toned-milk.jpg",
        },
        {
            id: 18,
            name: "Nestlé KitKat 4 Finger 37.3g",
            brand: "Nestlé",
            price: 35,
            originalPrice: 40,
            discount: 13,
            image: "https://www.bbassets.com/media/uploads/p/l/40169640_2-nestle-kitkat-4-finger-wafer-bar.jpg",
        },
        {
            id: 19,
            name: "Nestlé Everyday Dairy Whitener 400g",
            brand: "Nestlé",
            price: 230,
            originalPrice: 260,
            discount: 11,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTSMTNbKcdRBQgMN9c_28PaQYYnoEklNllw&s",
        },
    ],
    mensfashion: [
        {
            id: 1,
            name: "U.S. Polo Assn. Solid Slim Fit T-Shirt",
            brand: "U.S. Polo Assn.",
            price: 899,
            originalPrice: 1799,
            discount: 50,
            image: "https://media.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/lifestyle/1000015131671-Blue-Navy-1000015131671_01-2100.jpg",
        },
        {
            id: 2,
            name: "LEVIS Men 511 Slim Fit Jeans",
            brand: "LEVIS",
            price: 2199,
            originalPrice: 4399,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jjFHGLd9OCjpPdipIqxm7zlm5LYQvI5ZPg&s",
        },
        {
            id: 3,
            name: "ARROW Formal Checked Shirt",
            brand: "ARROW",
            price: 1399,
            originalPrice: 2799,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNuWh-IIqSE7fV3pkXyv3C_voeTNqRAnQvA&s",
        },
        {
            id: 4,
            name: "PERFORMAX Cotton Round Neck T-Shirt",
            brand: "PERFORMAX",
            price: 499,
            originalPrice: 999,
            discount: 50,
            image: "https://assets.ajio.com/medias/sys_master/root/20240510/ZsM3/663e1cb316fd2c6e6afb0f36/-473Wx593H-443046194-darkblue-MODEL.jpg",
        },
        {
            id: 5,
            name: "SPYKAR Skinny Fit Jeans",
            brand: "SPYKAR",
            price: 1799,
            originalPrice: 3599,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpF5-NSP0J2bMHYBi6ewA0MYNg8f5pzLl3Q&s",
        },
        {
            id: 6,
            name: "U.S. Polo Assn. Printed Crew Neck T-Shirt",
            brand: "U.S. Polo Assn.",
            price: 849,
            originalPrice: 1699,
            discount: 50,
            image: "https://cdn19.nnnow.com/web-images/large/styles/WK21ETRJWYJ/1685624081521/1.jpg",
        },
        {
            id: 7,
            name: "LEVIS Casual Cotton Shirt",
            brand: "LEVIS",
            price: 1899,
            originalPrice: 3799,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5E2MAZwUx7mBr0OTlOU3QjKsjb68K3dLhGw&s",
        },
        {
            id: 8,
            name: "SPYKAR Slim Fit Casual Shirt",
            brand: "SPYKAR",
            price: 1299,
            originalPrice: 2599,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9fNnFDRdBh-I-ZW9W9VUB10raDOuC-835g&s",
        },
        {
            id: 9,
            name: "PERFORMAX Dry Fit Sports T-Shirt",
            brand: "PERFORMAX",
            price: 599,
            originalPrice: 1199,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7u5UIwOsNamkFI6F0AdQdM6DdgR3Mtxnm9w&s",
        },
        {
            id: 10,
            name: "ARROW Flat Front Formal Trousers",
            brand: "ARROW",
            price: 1599,
            originalPrice: 3199,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMocGtC0gsc3vQfIt55XUGO0tWcKhAwGjmUA&s",
        },
        {
            id: 11,
            name: "LEVIS Men’s Regular Fit Trousers",
            brand: "LEVIS",
            price: 1699,
            originalPrice: 3399,
            discount: 50,
            image: "https://assets.ajio.com/medias/sys_master/root/20241114/JHyZ/6735c36af9b8ef490b248f19/-473Wx593H-469624490-green-MODEL.jpg",
        },
    ],
    womensfashion: [
        {
            id: 1,
            name: "Printed Kurta",
            brand: "Fig",
            price: 799,
            originalPrice: 1599,
            discount: 50,
            image: "https://www.hayclothing.in/cdn/shop/files/DSC05836.webp?v=1712219191&width=1500",
        },
        {
            id: 2,
            name: "Solid Tunic Top",
            brand: "RIO",
            price: 499,
            originalPrice: 999,
            discount: 50,
            image: "https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000014892139-Beige-BEIGE-1000014892139_04-2100.jpg",
        },
        {
            id: 3,
            name: "High-Rise Skinny Jeans",
            brand: "DNMX",
            price: 899,
            originalPrice: 1799,
            discount: 50,
            image: "https://assets.ajio.com/medias/sys_master/root/20240806/I6A6/66b233f16f60443f31f06b31/-473Wx593H-443044362-darkblue-MODEL.jpg",
        },
        {
            id: 4,
            name: "Floral Printed Dress",
            brand: "Fusion",
            price: 1149,
            originalPrice: 2299,
            discount: 50,
            image: "https://m.media-amazon.com/images/I/71ab3OWNoIL._UY1100_.jpg",
        },
        {
            id: 5,
            name: "Checked Shirt Dress",
            brand: "MYSHKA",
            price: 999,
            originalPrice: 1999,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Y6qZl_hmKZqK-_Cq4Z1PEQy6XR9Er9OH5g&s",
        },
        {
            id: 6,
            name: "Embroidered Kurti",
            brand: "Outryt",
            price: 849,
            originalPrice: 1699,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyN3j24SFGYNhXhatram6glk_hngW9td8Btg&s",
        },
        {
            id: 7,
            name: "A-Line Dress",
            brand: "Fusion",
            price: 1049,
            originalPrice: 2099,
            discount: 50,
            image: "https://img.tatacliq.com/images/i22//437Wx649H/MP000000025568835_437Wx649H_202503050442201.jpeg",
        },
        {
            id: 8,
            name: "Cotton Saree",
            brand: "MYSHKA",
            price: 1199,
            originalPrice: 2399,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu5zyfz2te3yXFtBGIbfDt5I0Tik8TUalzXg&s",
        },
        {
            id: 9,
            name: "Fit & Flare Dress",
            brand: "Fig",
            price: 949,
            originalPrice: 1899,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREefcvFHa8x4hV5q-z1ZVp7810UWX_T_dxWA&s",
        },
        {
            id: 10,
            name: "Denim Shirt",
            brand: "DNMX",
            price: 899,
            originalPrice: 1799,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIu3yGSH7psEzkUC1e1BQw52ZG0TDS0P-xWA&s",
        },
        {
            id: 11,
            name: "Ankle-Length Jeggings",
            brand: "Outryt",
            price: 649,
            originalPrice: 1299,
            discount: 50,
            image: "https://assets.ajio.com/medias/sys_master/root/20220531/CfH3/6295a770f997dd03e24e6338/outryt_by_azorte_dark_blue_women_mid-rise_flared_jeans.jpg",
        },
        {
            id: 12,
            name: "Flared Long Kurta",
            brand: "RIO",
            price: 799,
            originalPrice: 1599,
            discount: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8g66D_gHge-CN2rPJIFPlXOoTmqzq0enNQ&s",
        }
    ]


};

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
                        className="relative border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
                    >
                        {/* On Sale Ribbon */}
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl">
                            On Sale
                        </div>

                        {/* Product Image */}
                        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 mb-4 rounded">
                            {p.image ? (
                                <img src={p.image} alt={p.name} loading="lazy" className="object-contain max-h-full" />
                            ) : (
                                <span className="text-xs text-gray-500">Image Coming Soon</span>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="text-center mb-4">
                            <p className="text-gray-500 text-sm">
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
                        <div className="flex gap-2">
                            <button className="px-3 cursor-pointer py-1 border border-gray-300 text-sm rounded hover:bg-gray-100">
                                COPY LINK
                            </button>
                            <button className="px-3 cursor-pointer py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600">
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
