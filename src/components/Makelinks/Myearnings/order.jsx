import React, { useState, useEffect } from "react";
import { FaDownload, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function OrderDetailsPage() {
  const statusOptions = ["Pending", "Confirmed", "Paid", "Requested", "Cancelled"];
  const dateOptions = ["This month", "Last 30 Days", "Last month", "Last 3 months"];

  // States for filter selection
  const [showStatus, setShowStatus] = useState(true);
  const [showDates, setShowDates] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedDateOption, setSelectedDateOption] = useState("");
  const [dateRange, setDateRange] = useState({ from: "", till: "" });

  const [appliedFilters, setAppliedFilters] = useState(null);

  // Auto-update date range when date option is selected
  useEffect(() => {
    if (selectedDateOption) {
      const today = new Date();
      let fromDate = "";
      if (selectedDateOption === "This month") {
        fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
      } else if (selectedDateOption === "Last 30 Days") {
        fromDate = new Date(today.setDate(today.getDate() - 30));
      } else if (selectedDateOption === "Last month") {
        fromDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      } else if (selectedDateOption === "Last 3 months") {
        fromDate = new Date(today.getFullYear(), today.getMonth() - 3, 1);
      }
      const from = fromDate.toISOString().split("T")[0];
      const till = new Date().toISOString().split("T")[0];
      setDateRange({ from, till });
    }
  }, [selectedDateOption]);

  const handleStatusChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleDateOptionChange = (option) => {
    setSelectedDateOption(option);
  };

  const handleApply = () => {
    setAppliedFilters({
      status: [...selectedStatus],
      dateOption: selectedDateOption,
      dateRange: { ...dateRange },
    });
  };

  const handleReset = () => {
    setSelectedStatus([]);
    setSelectedDateOption("");
    setDateRange({ from: "", till: "" });
    setAppliedFilters(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans w-full pb-10">
      <div className="w-full bg-gradient-to-b from-green-600 to-green-500 h-16 md:h-20 lg:h-28"></div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 -mt-12 sm:-mt-16 lg:-mt-20">
        {/* Breadcrumb */}
        <div className="flex text-sm sm:text-base text-white mb-5">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link to="/my-earnings" className="hover:underline font-semibold">My Earnings</Link>
          <span className="mx-1">/</span>
          <span className="font-semibold">Order Details</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 p-4">
          {/* Sidebar */}
          <div className="bg-white rounded-lg shadow p-4 w-full md:w-64">
            <h3 className="font-semibold mb-3 text-gray-800">Filter By</h3>
            <hr className="mb-3 border-gray-200" />

            {/* Status */}
            <div className="mb-4">
              <div className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => setShowStatus(!showStatus)}>
                <h4 className="text-gray-700 font-medium">Status</h4>
                {showStatus ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showStatus && (
                <>
                  <p className="text-xs text-gray-500 mb-2">Show only</p>
                  {statusOptions.map((status) => (
                    <label key={status} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedStatus.includes(status)}
                        onChange={() => handleStatusChange(status)}
                        className="form-checkbox text-green-600"
                      />
                      {status}
                    </label>
                  ))}
                </>
              )}
            </div>
            <hr className="mb-3 border-gray-200" />

            {/* Dates */}
            <div className="mb-4">
              <div className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => setShowDates(!showDates)}>
                <h4 className="text-gray-700 font-medium">Dates</h4>
                {showDates ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showDates && (
                <>
                  <p className="text-xs text-gray-500 mb-2">Select transactions of</p>
                  {dateOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedDateOption === option}
                        onChange={() => handleDateOptionChange(option)}
                        className="form-checkbox text-green-600"
                      />
                      {option}
                    </label>
                  ))}
                  <p className="text-xs text-gray-500 mt-3 mb-1">Select date range</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col text-xs text-gray-700">
                      <span>From</span>
                      <input type="date"
                        value={dateRange.from}
                        onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                        className="border rounded px-2 py-1 text-sm" />
                    </div>
                    <div className="flex flex-col text-xs text-gray-700">
                      <span>Till</span>
                      <input type="date"
                        value={dateRange.till}
                        onChange={(e) => setDateRange({ ...dateRange, till: e.target.value })}
                        className="border rounded px-2 py-1 text-sm" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              <button onClick={handleApply}
                className="flex-1 bg-green-600 text-white text-sm py-2 rounded hover:bg-green-700">
                APPLY
              </button>
              <button onClick={handleReset}
                className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded hover:bg-gray-300">
                RESET
              </button>
            </div>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-lg shadow p-4 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800 text-lg">Order Details</h3>
              <button className="flex items-center gap-1 bg-green-600 text-white text-xs px-3 py-2 rounded hover:bg-green-700">
                <FaDownload className="w-3 h-3" /> Download Report
              </button>
            </div>
            <hr className="mb-3 text-gray-300" />

            {/* Show applied filters card */}
            {appliedFilters ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <strong>Status:</strong> {appliedFilters.status.join(", ") || "None"}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <strong>Date Option:</strong> {appliedFilters.dateOption || "None"}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <strong>Date Range:</strong> {appliedFilters.dateRange.from} to {appliedFilters.dateRange.till}
                </div>
              </div>
            ) : (
              // Default card
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 p-2 border rounded">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <img src="https://placehold.co/40x40" alt="Logo" className="rounded" />
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-700">Bonus Type</span>
                    <span className="font-medium text-gray-900">Sign Up</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col text-sm">
                <span className="text-gray-700">Bonus</span> 
                <span className="font-bold text-lg text-gray-800">₹30</span>
                </div>
                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full">Pending</span>
                <Link to="/bonus"><FaChevronRight className="text-gray-500" /></Link>
                </div>
              </div>
            )}

            {/* Banner */}
            <div className="mt-6 ">
                <Link to="/make-links">
              <img src="https://placehold.co/600x80/dcfce7/16a34a?text=Share+More+to+Earn+More"
                alt="Banner" className="w-full rounded shadow" /></Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
