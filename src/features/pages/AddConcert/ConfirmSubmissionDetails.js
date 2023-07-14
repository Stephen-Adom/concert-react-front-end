import React from "react";
import { GiDrumKit } from "react-icons/gi";
import { CgUserList } from "react-icons/cg";
import { TbCalendarCheck } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight, PiCaretCircleLeftLight } from "react-icons/pi";

const ConfirmSubmissionDetails = ({ setStep }) => {
	const handleSubmit = () => {
		setStep(3);
	};

	const stepBack = () => {
		setStep(2);
	};

	return (
		<div className="">
			<div class="w-full flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
				<img
					class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src="https://picsum.photos/500/500"
					alt=""
				/>
				<div class="flex flex-col items-start justify-between p-4 leading-normal">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>
					<p class="mb-3 text-left font-normal text-sm text-gray-700 dark:text-gray-400">
						Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
						chronological order.
					</p>
					<p class="flex items-center gap-x-5 text-sm mb-4">
						<span className="text-neutral-500 flex items-center gap-x-1">
							<CgUserList className="text-xl text-primaryGreen"></CgUserList>
							Featured Artist: <span className="italic font-semibold">Taylor Swift</span>{" "}
						</span>
						<span className="text-neutral-500 flex items-center gap-x-1">
							<GiDrumKit className="text-xl text-primaryGreen"></GiDrumKit>
							Featured Band: <span className="italic font-semibold">Taylor Swift</span>{" "}
						</span>
					</p>

					<p class="flex items-center gap-x-5 text-sm">
						<span className="text-neutral-500 flex items-center gap-x-1">
							<MdChair className="text-xl text-primaryGreen"></MdChair>
							Total Seats: <span className="italic font-semibold">100</span>
						</span>
					</p>
				</div>
			</div>

			<div className="mt-5">
				<span className="block font-semibold text-lg text-left">Available Time and Location</span>

				<ul className="mt-3">
					<li className="flex items-center gap-1 text-sm mb-2">
						<TbCalendarCheck className="text-primaryGreen text-xl"></TbCalendarCheck>
						Main Town City Hall <span className="font-semibold">- Los Angeles -</span> Friday, July
						13, 2022
					</li>
				</ul>
			</div>

			<div
				class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 mt-5"
				role="alert"
			>
				<svg
					class="flex-shrink-0 inline w-4 h-4 mr-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
				</svg>
				<span class="sr-only">Info</span>
				<div>
					<span class="font-medium">Info alert!</span> Confirm Event Details and Location before
					submission.
				</div>
			</div>

			<div className="form-group flex items-center justify-center gap-x-4 mt-10">
				<Button
					className="bg-primaryGrey py-[0.3rem] hover:!bg-neutral-400 px-4"
					pill
					onClick={() => stepBack()}
				>
					<PiCaretCircleLeftLight className="mr-3 h-6 w-6" />
					<p className="text-[0.79rem]">Back</p>
				</Button>

				<Button
					className="bg-primaryGreen py-[0.3rem] hover:!bg-lime-600 px-4"
					pill
					onClick={() => handleSubmit()}
				>
					<p className="text-[0.79rem]">Submit</p>
					<PiCaretCircleRightLight className="ml-3 h-6 w-6" />
				</Button>
			</div>
		</div>
	);
};

export default ConfirmSubmissionDetails;
