import React from 'react';

const ConcertDetailLoader = () => (
  <div className="flex flex-col items-start justify-start w-full gap-5 sm:flex-col lg:flex-row lg:gap-14">
    <div className="concert-image-container w-full lg:w-[70%] h-[500px] bg-gray-300 animate-pulse" />
    <div className="concert-details w-full md:w-[70%] md:mx-auto lg:w-[30%]">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 ml-auto" />
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%] mb-4 ml-auto" />

      <div
        role="status"
        className="max-w-full p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse md:p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>

      <div className="h-[45px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 ml-auto mt-10" />
    </div>
  </div>
);

export default ConcertDetailLoader;
