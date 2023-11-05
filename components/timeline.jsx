import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineItems = [
  {
    text: "1 Nov 2023 to 15 Nov 2023: Registration Period",
  },
  {
    text: "15 Nov 2023 to 17 Nov 2023: Shortlisting of teams",
  },
  {
    text: "18 Nov 2023: Shortlisted Teams Announcement",
  },
  {
    text: "18 Nov 2023 to 23 Nov 2023: Waiting period",
  },
  {
    text: "24 Nov 00:00 AM: Problem Statement Announcement",
  },
  {
    text: "25 Nov 09:00 AM: Opening Ceremony",
  },
];

const Timeline = () => {
  return (
    <div className="container">
      <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 mt-2 text-blue-50 mb-4">
        <div class="flex flex-row-reverse md:contents">
          <div class="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 class="font-semibold text-lg mb-1">
              1 Nov 2023 to 15 Nov 2023: Registration Period
            </h3>
            <p class="leading-tight text-justify">
              Participants are required to register through Devfolio or UnStop
              and submit their resumes.
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-indigo-800 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-indigo-800 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
          </div>
          <div class="bg-indigo-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 class="font-semibold text-lg mb-1">
              15 Nov 2023 to 17 Nov 2023: Shortlisting of teams
            </h3>
            <p class="leading-tight text-justify">
              20 teams will be shortlisted, who will participate in the offline
              hackathon.
            </p>
          </div>
        </div>

        <div class="flex flex-row-reverse md:contents">
          <div class="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 class="font-semibold text-lg mb-1">
              18 Nov 2023: Shortlisted Teams Announcement
            </h3>
            <p class="leading-tight text-justify">
              Shortlisted teams will have 28 hours to complete their solutions.
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-indigo-800 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
          </div>
        </div>
        <div class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-indigo-800 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
          </div>
          <div class="bg-indigo-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 class="font-semibold text-lg mb-1">
              18 Nov 2023 to 23 Nov 2023: Waiting period
            </h3>
            <p class="leading-tight text-justify">
              Teams are given time to prepare for their travel and startergies.
            </p>
          </div>
        </div>
        <div class="flex flex-row-reverse md:contents">
          <div class="bg-indigo-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 class="font-semibold text-lg mb-1">
              24 Nov 00:00 AM: Problem Statement Announcement
            </h3>
            <p class="leading-tight text-justify">
              All the teams will be given the problem statement at 00:00 AM. and required to submit their solutions by 28 hours.
            </p>
          </div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-indigo-800 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
