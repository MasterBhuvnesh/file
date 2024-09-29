import React from "react";
import mission from "../images/mission.png";
import Perspective from "../images/Perspective.png";
import motivation from "../images/motivation.png";
export default function Know() {
  return (
    <div className="ml-7 mr-7 mt-32 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-gray-600 mt-2 font-bold   items-center mb-20">
          Get To Know Us !
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={mission}
              alt="Mission"
              className="w-auto h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left  border-r-8 border-blue-500  rounded-lg pr-3">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission involves community engagement, leadership development,
              building strong tech foundation, while enabling all tech
              enthusiasts to contribute to the global society.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        {/* Our Perspective Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Perspective
          </h2>
          <div className="w-24 h-1 bg-green-500 mb-8"></div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left border-l-8 border-green-500  rounded-lg pl-3">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We’re a community-driven initiative aiming to bridge the gap
                between research and practice, develop evolutionary thinking and
                network throughout the process. We believe in connecting fellow
                developers, spreading stimulative ideas, and working for a
                solution-driven team.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img
                src={Perspective}
                alt="Perspective"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>

        {/* What Keeps Us Going Section */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Keeps Us Going?
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mb-8"></div>

          <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={motivation}
                alt="Motivation"
                className="w-auto h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left  border-r-8 border-yellow-500  rounded-lg pr-3">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our club helps students to connect, learn, empower and grow.
                Teamwork, innovative thinking, communication, and leading with
                solutions are what helps us achieve new heights. The entire team
                works in coordination, to inspire and motivate the upcoming
                coding community to evolve their skills and broaden their
                horizons of knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
