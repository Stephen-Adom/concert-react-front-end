import React from "react";

const ConcertDetailLoader = () => {
	return (
		<div className="flex flex-col items-start justify-start w-full gap-5 sm:flex-col lg:flex-row lg:gap-14">
			<div className="concert-image-container w-full lg:w-[70%] h-[500px] bg-gray-300 animate-pulse"></div>
			<div className="concert-details w-full md:w-[70%] md:mx-auto lg:w-[30%]">
				<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 ml-auto"></div>
				<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[70%] mb-4 ml-auto"></div>

				<div
					role="status"
					class="max-w-full p-4 space-y-4 divide-y divide-gray-200 rounded shadow animate-pulse md:p-6"
				>
					<div class="flex items-center justify-between">
						<div>
							<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div class="flex items-center justify-between pt-4">
						<div>
							<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div class="flex items-center justify-between pt-4">
						<div>
							<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div class="flex items-center justify-between pt-4">
						<div>
							<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div class="flex items-center justify-between pt-4">
						<div>
							<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<span class="sr-only">Loading...</span>
				</div>

				<div class="h-[45px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 ml-auto mt-10"></div>
			</div>
		</div>
	);
};

export default ConcertDetailLoader;
