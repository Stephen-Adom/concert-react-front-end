import React from "react";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight } from "react-icons/pi";

const NewConcertDetails = ({ setStep }) => {
	const handleSubmit = () => {
		setStep(2);
	};
	return (
		<form>
			<div className="form-group">
				<label for="concert_name" class="block mb-2 text-sm font-medium text-gray-900 text-left">
					Name of Concert
				</label>
				<input
					type="text"
					id="concert_name"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primaryGreen focus:border-primaryGreen block w-full p-3"
					placeholder="Rocking Band"
					required
				/>
			</div>

			<div className="form-group">
				<label for="description" class="block mb-2 text-sm font-medium text-gray-900 text-left">
					Concert Details
				</label>
				<textarea
					id="description"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-primaryGreen focus:border-primaryGreen"
					placeholder="Write your thoughts here..."
				></textarea>
			</div>

			<div className="form-group grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
				<section>
					<label for="artist_name" class="block mb-2 text-sm font-medium text-gray-900 text-left">
						Name of Artist
					</label>
					<input
						type="text"
						id="artist_name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primaryGreen focus:border-primaryGreen block w-full p-3"
						placeholder="Taylor Swift"
						required
					/>
				</section>

				<section>
					<label for="band_name" class="block mb-2 text-sm font-medium text-gray-900 text-left">
						Band Name
					</label>
					<input
						type="text"
						id="band_name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primaryGreen focus:border-primaryGreen block w-full p-3"
						placeholder="Swift Band"
						required
					/>
				</section>
			</div>

			<div className="form-group grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
				<section>
					<label for="seats_no" class="block mb-2 text-sm font-medium text-gray-900 text-left">
						Seat Number
					</label>
					<input
						type="number"
						id="seats_no"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-primaryGreen focus:border-primaryGreen block w-full p-3"
						placeholder="000"
						required
					/>
				</section>

				<section>
					<label class="block mb-2 text-sm font-medium text-gray-900 text-left" for="file_input">
						Concert Image
					</label>
					<input
						class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
						id="file_input"
						type="file"
					/>
				</section>
			</div>

			<div className="form-group flex items-center justify-center">
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

export default NewConcertDetails;
