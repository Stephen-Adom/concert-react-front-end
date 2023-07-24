import React from 'react';

const LatestConcertLoader = () => (
  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div className="flex flex-col items-center justify-center gap-y-5">
      <div className="bg-gray-300 rounded-full animate-pulse concert-image w-52 h-52 md:w-36 md:h-36" />

      <div className="h-2.5 bg-gray-200 rounded-full animate-pulse w-32" />
      <div className="h-1 bg-gray-200 rounded-full animate-pulse w-52" />
      <div className="h-20 bg-gray-200 rounded-sm animate-pulse w-48" />

      <div className="flex items-center justify-center gap-x-3">
        <div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse" />
        <div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>

    <div className="flex flex-col items-center justify-center gap-y-5">
      <div className="bg-gray-300 rounded-full animate-pulse concert-image w-52 h-52 md:w-36 md:h-36" />

      <div className="h-2.5 bg-gray-200 rounded-full animate-pulse w-32" />
      <div className="h-1 bg-gray-200 rounded-full animate-pulse w-52" />
      <div className="h-20 bg-gray-200 rounded-sm animate-pulse w-48" />

      <div className="flex items-center justify-center gap-x-3">
        <div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse" />
        <div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>

    <div className="flex flex-col items-center justify-center gap-y-5">
      <div className="bg-gray-300 rounded-full animate-pulse concert-image w-52 h-52 md:w-36 md:h-36" />

      <div className="h-2.5 bg-gray-200 rounded-full animate-pulse w-32" />
      <div className="h-1 bg-gray-200 rounded-full animate-pulse w-52" />
      <div className="h-20 bg-gray-200 rounded-sm animate-pulse w-48" />

      <div className="flex items-center justify-center gap-x-3">
        <div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse" />
        <div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default LatestConcertLoader;
