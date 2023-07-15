import React, { useState } from "react";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ErrorMessage } from "../../../components";

const NewConcertDetails = ({ setStep }) => {
	const [image, setImage] = useState(null);
	const form = useForm({
		defaultValues: {
			concert_name: "",
			description: "",
			band_name: "",
			artist_name: "",
			seats_no: "",
			image: "",
		},
	});
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = form;
	const onSubmit = (formData) => {
		const newData = {
			...formData,
			image,
		};
		console.log(newData, "submit");
		// setStep(2);
	};

	const errorBorder = (field) => {
		if (errors && errors[field]) {
			return `!border-red-500 !focus:ring-red-500 !focus:border-red-500 !placeholder-red-700`;
		} else {
			return `border-gray-300 focus:ring-primaryGreen focus:border-primaryGreen`;
		}
	};

	// console.log(errors);
	console.log(image);
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="form-group">
					<label
						htmlFor="concert_name"
						className="block mb-2 text-sm font-medium text-left text-gray-900"
					>
						Name of Concert
					</label>
					<input
						type="text"
						id="concert_name"
						className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
							"concert_name"
						)}`}
						placeholder="Rocking Band"
						required
						{...register("concert_name", {
							required: "Enter Concert Name",
						})}
					/>

					<ErrorMessage error={errors} field="concert_name"></ErrorMessage>
				</div>

				<div className="form-group">
					<label
						htmlFor="description"
						className="block mb-2 text-sm font-medium text-left text-gray-900"
					>
						Concert Details
					</label>
					<textarea
						id="description"
						rows="4"
						className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border ${errorBorder(
							"description"
						)}`}
						placeholder="Write your thoughts here..."
						{...register("description", {
							required: "Enter Concert Description",
						})}
					></textarea>

					<ErrorMessage error={errors} field="description"></ErrorMessage>
				</div>

				<div className="grid grid-cols-1 gap-5 form-group sm:grid-cols-1 md:grid-cols-2">
					<section>
						<label
							htmlFor="artist_name"
							className="block mb-2 text-sm font-medium text-left text-gray-900"
						>
							Name of Artist
						</label>
						<input
							type="text"
							id="artist_name"
							className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
								"artist_name"
							)}`}
							placeholder="Taylor Swift"
							required
							{...register("artist_name", {
								required: "Enter Artist Name",
							})}
						/>
						<ErrorMessage error={errors} field="artist_name"></ErrorMessage>
					</section>

					<section>
						<label
							htmlFor="band_name"
							className="block mb-2 text-sm font-medium text-left text-gray-900"
						>
							Band Name
						</label>
						<input
							type="text"
							id="band_name"
							className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
								"band_name"
							)}`}
							placeholder="Swift Band"
							required
							{...register("band_name", {
								required: "Enter band name",
							})}
						/>
						<ErrorMessage error={errors} field="band_name"></ErrorMessage>
					</section>
				</div>

				<div className="grid grid-cols-1 gap-5 form-group sm:grid-cols-1 md:grid-cols-2">
					<section>
						<label
							htmlFor="seats_no"
							className="block mb-2 text-sm font-medium text-left text-gray-900"
						>
							Seat Number
						</label>
						<input
							type="number"
							id="seats_no"
							className={`block w-full p-3 text-sm text-gray-900 border rounded-sm bg-gray-50 ${errorBorder(
								"seats_no"
							)}`}
							placeholder="000"
							required
							{...register("seats_no", {
								required: "Enter seat number",
								min: {
									value: 5,
									message: "Enter at least 5 seats",
								},
							})}
						/>
						<ErrorMessage error={errors} field="seats_no"></ErrorMessage>
					</section>

					<section>
						<label
							className="block mb-2 text-sm font-medium text-left text-gray-900"
							htmlFor="image"
						>
							Concert Image
						</label>
						<input
							className={`block w-full text-sm text-gray-900 border rounded-sm cursor-pointer bg-gray-50 ${errorBorder(
								"image"
							)}`}
							id="image"
							type="file"
							{...register("image", {
								required: "Upload concert image",
								onChange: (event) => {
									console.log(event);
									setImage(event.target.files[0]);
								},
							})}
						/>
						<ErrorMessage error={errors} field="image"></ErrorMessage>
					</section>
				</div>

				<div className="flex items-center justify-center form-group">
					<Button
						type="submit"
						className="bg-primaryGreen py-[0.3rem] hover:!bg-lime-600 px-4"
						pill
					>
						<p className="text-[0.79rem]">Continue</p>
						<PiCaretCircleRightLight className="w-6 h-6 ml-3" />
					</Button>
				</div>
			</form>
			<DevTool control={control} />
		</>
	);
};

export default NewConcertDetails;
