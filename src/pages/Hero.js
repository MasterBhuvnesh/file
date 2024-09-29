import React from "react";
import hero from "../images/hero.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pl-20 pr-20  pt-3 bg-white">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-poppins py-1">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#DB4437]">o</span>
          <span className="text-[#FCB912]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#0F9D58]">l</span>
          <span className="text-[#EA4335]">e </span>
          Developer Groups
        </h1>
      </div>

      <h2 className="text-2xl text-gray-600 mt-2 font-bold">RBU Chapter</h2>

      {/* Image Section */}
      <div>
        <img
          alt=""
          src={hero}
          className="h-auto w-auto"
        />
      </div>

      <p className="text-gray-600 text-center mt-3 text-xl ml-4 mr-4">
        Google Developer Groups are community groups for college and university
        students interested in Google developer technologies.
      </p>
      {/* Base */}

      <a
        className="mt-4 inline-block rounded bg-[#4285F4]  px-8 py-3 text-sm font-bold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
      >
        Join Us
      </a>
    </div>
  );
}
