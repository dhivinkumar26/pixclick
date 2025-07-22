import React from "react";

export default function VideoTips() {
    return (
      <div className="bg-white shadow p-6 rounded mb-6">
        <h2 className="text-center text-xl font-semibold mb-4">
          How to Make a Link Easily
        </h2>
        <div className="flex justify-center mb-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2UOfztsUgzQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Best Practices & Tips:</h3>
          <ul className="text-sm list-disc ml-5 space-y-2 text-gray-700">
            <li>
              Ensure Link Format is Correct:
              <div className="ml-4 text-green-600">Right: https://www.oneplus.in</div>
              <div className="ml-4 text-red-500">Wrong: oneplus.in (missing https://)</div>
              <div className="ml-4 text-gray-500">Tip: Copy directly from the Address Bar and paste</div>
            </li>
            <li>To convert links in Bulk, we have a special tool. Please contact support@...</li>
            <li>No profit applicable on App orders</li>
          </ul>
        </div>
      </div>
    );
  }