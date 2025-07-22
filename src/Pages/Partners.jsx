import React, { useState } from "react";
import Header from "../components/Profit rates/Header";
import Tabs from "../components/Profit rates/Tabs";
import PartnerCard from "../components/Profit rates/PartnerCard";

// Dummy partners data
const partners = [
  { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/HSBC_logo_%282018%29.svg", profit: "Flat Rs 3000 Profit" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Axis_Bank_logo.svg", profit: "Flat Rs 2380 Profit" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Axis_Bank_logo.svg", profit: "Flat Rs 2380 Profit" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Flipkart_logo.svg", profit: "Upto 8% Profit" },
  { logo: "https://1000logos.net/wp-content/uploads/2021/05/Ajio-logo.png", profit: "Upto 10% Profit" },
  { logo: "https://seeklogo.com/images/S/shopsy-logo-BDE98CE8F8-seeklogo.com.png", profit: "Upto 10% Profit" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", profit: "Upto 10.2% Profit" },
  { logo: "https://dotandkey.com/cdn/shop/files/Dot_Key_Logo_Black_800x.png", profit: "Upto 15% Profit" },
  { logo: "https://buykaro.com/images/logo.png", profit: "Upto 18% Profit" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/SBI_Card_logo.svg", profit: "Flat Rs 2240 Profit" },
  { logo: "https://m.cafemedia.com/wp-content/uploads/2021/07/mCaffeine-Logo.png", profit: "Flat 15% Profit" },
  { logo: "https://thedermaco.com/cdn/shop/files/Logo.png", profit: "Upto 21% Profit" },
  { logo: "https://images.ctfassets.net/1my3kmk9a79j/5Qx6ax6gAye7vh90Sj4Hgi/4ff1deea1090df9e5f5c88594c24b30a/mamaearth-logo.png", profit: "Flat 12% Profit" },
  { logo: "https://wowskinscience.com/cdn/shop/files/WOW_logo.png", profit: "Flat 5% Profit" },
];

const Partners = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const [search, setSearch] = useState("");

  // Filter by search text
  const filteredPartners = partners.filter((p) =>
    p.profit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <Header />
      <input
        type="text"
        placeholder="Partners"
        className="w-full  shadow px-4 py-2 rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPartners.map((partner, index) => (
          <PartnerCard key={index} logo={partner.logo} profit={partner.profit} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
