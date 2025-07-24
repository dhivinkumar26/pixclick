import React from "react";
import { Info } from "lucide-react";

export default function HelpSection() {
  return (
    <div className="bg-white shadow-md px-4 py-6 sm:px-6 w-full max-w-[1203px] mx-auto mb-10">
      {/* Video Section */}
      <h2 className="text-center text-[18px] sm:text-[22px] font-bold mb-6">
        How to Make a Link <span className="font-semibold">Easily</span>
      </h2>

      <div className="flex justify-center mb-6">
        <div className="w-full sm:w-[560px] h-[200px] sm:h-[315px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yHGRBTZI6w0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Tips Section */}
      <h3 className="font-semibold mb-4 flex items-start sm:items-center gap-2 text-[16px] sm:text-[17px]">
        <Info className="w-4 h-4 text-blue-500 mt-1 sm:mt-0" />
        Quick Tips to Help You
      </h3>

      <ul className="text-[14px] sm:text-[15px] list-disc ml-5 space-y-3 text-gray-700">
        <li>
          Ensure Link Format is Correct:
          <div className="ml-4 text-green-600 break-all">
            Right: https://www.oneplus.in
          </div>
          <div className="ml-4 text-red-500 break-all">
            Wrong: oneplus.in (missing https://)
          </div>
          <div className="ml-4 text-gray-500">
            Tip: Copy directly from the Address Bar and paste
          </div>
        </li>
        <li>
          To convert links in Bulk, we have a special tool. Please contact
          support@...
        </li>
        <li>No profit applicable on App orders</li>
      </ul>
    </div>
  );
}
