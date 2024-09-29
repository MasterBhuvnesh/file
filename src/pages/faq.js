import React from "react";

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl p-6 mt-32">
      {/* FAQ Heading */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        FAQs
      </h2>

      {/* Individual FAQ Items */}
      <div className="space-y-6">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900 border border-gray-300">
            <h2 className="font-semibold">What is GDG?</h2>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              color="#DB4437"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="w-full mt-4 text-center lg:text-left border-l-8 border-red-500 rounded-lg pl-3">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Google Developer Groups (GDG) are community groups for college and
              university students interested in Google developer technologies.
              Students from all undergraduate or graduate programs with an
              interest in growing as a developer are welcome. By joining a GDG,
              students grow their knowledge in a peer-to-peer learning
              environment and build solutions for local businesses and their
              community.
            </p>
          </div>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900 border border-gray-300">
            <h2 className="font-semibold">How can you become a part of GDG?</h2>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              color="#0F9D56"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="w-full mt-4 text-center lg:text-left border-l-8 border-green-500 rounded-lg pl-3">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We conduct an annual team recruitment process. The details of
              recruitment are posted online a few weeks prior. It’s a two-step
              process involving form filling and personal interview. Students
              acing both rounds are selected to be part of the core team.
            </p>
          </div>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900 border border-gray-300">
            <h2 className="font-semibold">What does a GDG Lead do?</h2>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              color="#4285F4"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="w-full mt-4 text-center lg:text-left border-l-8 border-blue-500 rounded-lg pl-3">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A GDG Lead fills a lot of shoes. He works with the university to
              build the club, recruit the core team, host workshops, build
              projects, and collaborate with local partners.
            </p>
          </div>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900 border border-gray-300">
            <h2 className="font-semibold">How is DSC related to Google?</h2>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              color="#F4B400"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="w-full mt-4 text-center lg:text-left border-l-8 border-yellow-500 rounded-lg pl-3">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A GDG Lead fills a lot of shoes. He works with the university to
              build the club, recruit the core team, host workshops, build
              projects, and collaborate with local partners.
            </p>
          </div>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-gray-900 border border-gray-300">
            <h2 className="font-semibold">How to reach us?</h2>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              color="#DB4437"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="w-full mt-4 text-center lg:text-left border-l-8 border-red-500 rounded-lg pl-3">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Mail us at "dsc.rknec@gmail.com"
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
