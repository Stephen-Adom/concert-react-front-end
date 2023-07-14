import React from "react";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight, PiCaretCircleLeftLight } from "react-icons/pi";

const ConcertLocationDetails = ({ setStep }) => {
	const handleSubmit = () => {
		setStep(3);
	};

	const stepBack = () => {
		setStep(1);
	};

	return (
		<form>
			<div className="flex items-center justify-center gap-x-3 mb-7 md:mb-0">
				<span className="block text-sm">Enter Location Details</span>
				<hr class="w-[80%] my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 hidden md:block" />
			</div>

			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">
								Hall Name
							</th>
							<th scope="col" class="px-6 py-3">
								City
							</th>
							<th scope="col" class="px-6 py-3">
								Event Date & Time
							</th>
							<th scope="col" class="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white min-w-[200px]"
							>
								<input
									type="text"
									id="hall_name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primaryGreen focus:border-primaryGreen block w-full p-3"
									placeholder="Main Town Hall"
									required
								/>
							</th>
							<td class="px-6 py-4 min-w-[200px]">
								<select
									id="city"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryGreen focus:border-primaryGreen block w-full p-2.5"
								>
									<option selected>Choose a country</option>
									<option value="US">United States</option>
									<option value="CA">Canada</option>
									<option value="FR">France</option>
									<option value="DE">Germany</option>
								</select>
							</td>
							<td class="px-6 py-4">
								<div class="relative max-w-sm">
									<div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
										<svg
											class="w-4 h-4 text-gray-500 dark:text-gray-400"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
										</svg>
									</div>
									<input
										datepicker
										type="datetime-local"
										class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Select date"
									/>
								</div>
							</td>
							<td class="px-6 py-4">
								<a href="#" class="font-medium text-red-600 hover:underline">
									Remove
								</a>
							</td>
						</tr>
					</tbody>
				</table>
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
					<p className="text-[0.79rem]">Continue</p>
					<PiCaretCircleRightLight className="ml-3 h-6 w-6" />
				</Button>
			</div>
		</form>
	);
};

export default ConcertLocationDetails;
