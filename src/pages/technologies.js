import React from "react";
import android from "../images/android.png";
import flutter from "../images/flutter.png";
import cloud from "../images/cloud.png";

function Technologies() {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      {/* Section Title */}
      <div className="flex items-center justify-center space-x-4 py-4">
        <div className="w-24 h-1 bg-red-500"></div>
        <h2 className="text-4xl font-bold text-gray-800">Technologies</h2>
        <div className="w-24 h-1 bg-red-500"></div>
      </div>

      {/* Tech Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
        {/* Android Box */}
        <a className="flex flex-col align-middle rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-t-8 border-[#EA4335] transform hover:scale-105">
          <img
            alt="Android"
            src={android}
            className="h-40 w-auto rounded-md object-cover"
          />
          <div className="mt-4 text-center">
            <dd className="text-lg font-semibold text-gray-700">Android</dd>
          </div>
        </a>

        {/* Flutter Box */}
        <a className="flex flex-col align-middle rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-t-8 border-[#4285F4] transform hover:scale-105">
          <img
            alt="Flutter"
            src={flutter}
            className="h-40 w-auto rounded-md object-cover"
          />
          <div className="mt-4 text-center">
            <dd className="text-lg font-semibold text-gray-700">Flutter</dd>
          </div>
        </a>

        {/* Cloud Box */}
        <a className="flex flex-col align-middle rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border-t-8 border-[#0f9D58] transform hover:scale-105">
          <img
            alt="Cloud"
            src={cloud}
            className="h-40 w-auto rounded-md object-cover"
          />
          <div className="mt-4 text-center">
            <dd className="text-lg font-semibold text-gray-700">Cloud</dd>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Technologies;
