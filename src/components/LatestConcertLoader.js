import React from "react";

const LatestConcertLoader = () => {
	return (
		<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<div class="flex flex-col items-center justify-center gap-y-5">
				<div className="bg-gray-300 rounded-full animate-pulse concert-image w-52 h-52 md:w-36 md:h-36"></div>

				<div class="h-2.5 bg-gray-200 rounded-full animate-pulse w-32"></div>
				<div class="h-1 bg-gray-200 rounded-full animate-pulse w-52"></div>
				<div class="h-20 bg-gray-200 rounded-sm animate-pulse w-48"></div>

				<div className="flex items-center justify-center gap-x-3">
					<div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse"></div>
					<div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse"></div>
				</div>

				<span class="sr-only">Loading...</span>
			</div>

			<div class="flex flex-col items-center justify-center gap-y-5">
				<div className="bg-gray-300 rounded-full animate-pulse concert-image w-52 h-52 md:w-36 md:h-36"></div>

				<div class="h-2.5 bg-gray-200 rounded-full animate-pulse w-32"></div>
				<div class="h-1 bg-gray-200 rounded-full animate-pulse w-52"></div>
				<div class="h-20 bg-gray-200 rounded-sm animate-pulse w-48"></div>

				<div className="flex items-center justify-center gap-x-3">
					<div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse"></div>
					<div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse"></div>
				</div>

				<span class="sr-only">Loading...</span>
			</div>

			<div class="flex flex-col items-center justify-center gap-y-5">
				<div className="bg-gray-300 rounded-full animate-pulse concert-image w-52 h-52 md:w-36 md:h-36"></div>

				<div class="h-2.5 bg-gray-200 rounded-full animate-pulse w-32"></div>
				<div class="h-1 bg-gray-200 rounded-full animate-pulse w-52"></div>
				<div class="h-20 bg-gray-200 rounded-sm animate-pulse w-48"></div>

				<div className="flex items-center justify-center gap-x-3">
					<div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse"></div>
					<div className="w-8 h-8 bg-gray-300 border rounded-full animate-pulse"></div>
				</div>

				<span class="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default LatestConcertLoader;
