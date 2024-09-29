import React from "react";

export default function Events() {
  return (
    <div className="flex flex-wrap justify-evenly items-center space-x-8 py-12 px-4">
      {/* Event Circle 1 */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="relative flex items-center justify-center w-32 h-32 rounded-full border-8 bg-white"
          style={{
            borderTopColor: "#4285F4", // Blue on top
            borderRightColor: "#FBBC05", // Yellow on right
            borderBottomColor: "#34A853", // Green on bottom
            borderLeftColor: "#EA4335", // Red on left
          }}
        >
          <span className="text-3xl font-bold">03+</span>
        </div>
        <p className="text-lg text-gray-700 font-semibold">Years</p>
      </div>

      {/* Event Circle 2 */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="relative flex items-center justify-center w-32 h-32 rounded-full border-8 bg-white"
          style={{
            borderTopColor: "#4285F4", // Blue on top
            borderRightColor: "#FBBC05", // Yellow on right
            borderBottomColor: "#34A853", // Green on bottom
            borderLeftColor: "#EA4335", // Red on left
          }}
        >
          <span className="text-3xl font-bold">10+</span>
        </div>
        <p className="text-lg text-gray-700 font-semibold">Events</p>
      </div>

      {/* Event Circle 3 */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="relative flex items-center justify-center w-32 h-32 rounded-full border-8 bg-white"
          style={{
            borderTopColor: "#4285F4", // Blue on top
            borderRightColor: "#FBBC05", // Yellow on right
            borderBottomColor: "#34A853", // Green on bottom
            borderLeftColor: "#EA4335", // Red on left
          }}
        >
          <span className="text-3xl font-bold">1K+</span>
        </div>
        <p className="text-lg text-gray-700 font-semibold">Community Members</p>
      </div>

      {/* Event Circle 4 */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          className="relative flex items-center justify-center w-32 h-32 rounded-full border-8 bg-white"
          style={{
            borderTopColor: "#4285F4", // Blue on top
            borderRightColor: "#FBBC05", // Yellow on right
            borderBottomColor: "#34A853", // Green on bottom
            borderLeftColor: "#EA4335", // Red on left
          }}
        >
          <span className="text-3xl font-bold">200+</span>
        </div>
        <p className="text-lg text-gray-700 font-semibold">Attendees</p>
      </div>
    </div>
  );
}
