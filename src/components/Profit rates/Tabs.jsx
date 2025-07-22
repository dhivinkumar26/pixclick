import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Popular", "A-Z", "% Profit", "Flat Profit"];
  return (
    <div className="flex w-full justify-around  mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 ${
            activeTab === tab
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
