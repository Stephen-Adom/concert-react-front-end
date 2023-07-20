import React from "react";
import { GiDrumKit } from "react-icons/gi";
import { CgUserList } from "react-icons/cg";
import { TbCalendarCheck } from "react-icons/tb";
import { MdChair } from "react-icons/md";
import { Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { PiCaretCircleRightLight, PiCaretCircleLeftLight } from "react-icons/pi";
import { format } from "date-fns";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { confirmDialog } from "primereact/confirmdialog";
import { authSelector, toggleLoading, setErrors } from "../../storeSlice/authSlice";
import { concertSelector, resetConcertForm } from "../../storeSlice/concertSlice";
import { createConcert } from "../../../services/services";

const ConfirmSubmissionDetails = ({ setStep }) => {
	const { newConcertInfo, concertLocations } = useSelector(concertSelector);
	const { loading } = useSelector(authSelector);
	const dispatch = useDispatch();
	const handleSubmit = () => {
		confirmSubmission();
	};

	const confirmSubmission = () => {
		confirmDialog({
			message: "Are you sure you want to new concert event?",
			header: "Confirmation",
			icon: "pi pi-exclamation-triangle",
			acceptClassName: "p-button-primary",
			accept,
		});
	};

	const accept = () => {
		const postBody = {
			concert: {
				name: newConcertInfo.concert_name,
				band: newConcertInfo.band,
				image: newConcertInfo.image,
				description: newConcertInfo.description,
				artist: newConcertInfo.artist,
			},
			concert_hall: concertLocations.map((location) => {
				return {
					city_name: location.city,
					hall_name: location.hall_name,
					total_seats: location.seats_no,
					date: location.event_date,
				};
			}),
		};

		dispatch(toggleLoading(true));
		createConcert(postBody)
			.then((_) => {
				dispatch(toggleLoading(false));
				dispatch(resetConcertForm());
				setStep(1);
				toast.success("New Concert Event Created", {
					position: "top-center",
					duration: 4000,
				});
			})
			.catch((error) => {
				dispatch(toggleLoading(false));
				dispatch(setErrors(error.response.data));
			});
	};

	const stepBack = () => {
		setStep(2);
	};

	const formatDate = (event_date) => {
		return format(new Date(event_date), "cccc, MMMM dd, yyyy");
	};

	return (
		<div className="">
			<div className="w-full flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100">
				<img
					className="object-cover w-full rounded-t-lg h-72 md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg"
					src={newConcertInfo?.image}
					alt=""
				/>
				<div className="flex flex-col items-start justify-between p-4 leading-normal">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{newConcertInfo?.concert_name}
					</h5>
					<p className="mb-3 text-left font-normal text-sm text-gray-700 dark:text-gray-400">
						{newConcertInfo?.description}
					</p>
					<p className="flex items-center gap-x-5 text-sm mb-4 flex-wrap">
						<span className="text-neutral-500 flex items-center gap-x-1 mb-4 md:mb-0">
							<CgUserList className="text-xl text-primaryGreen"></CgUserList>
							Featured Artist:{" "}
							<span className="italic font-semibold">{newConcertInfo?.artist}</span>
						</span>
						<span className="text-neutral-500 flex items-center gap-x-1">
							<GiDrumKit className="text-xl text-primaryGreen"></GiDrumKit>
							Featured Band: <span className="italic font-semibold">
								{newConcertInfo?.band}
							</span>{" "}
						</span>
					</p>
				</div>
			</div>

			<div className="mt-5">
				<span className="block font-semibold text-lg text-left">Available Time and Location</span>

				<ul className="mt-3">
					{concertLocations.length &&
						concertLocations.map((location, index) => (
							<li className="flex items-center gap-1 text-sm flex-wrap mb-2" key={index}>
								<TbCalendarCheck className="text-primaryGreen text-xl"></TbCalendarCheck>
								{location.hall_name} <span className="font-semibold">- {location.city} -</span>{" "}
								{formatDate(location.event_date)} -{" "}
								<span className="font-semibold flex items-center gap-x-1">
									<MdChair className="text-xl text-primaryGreen"></MdChair>
									Total Seats:
									<span className="ml-1">{location.seats_no}</span>
								</span>
							</li>
						))}
				</ul>
			</div>

			<div
				className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 mt-5"
				role="alert"
			>
				<svg
					className="flex-shrink-0 inline w-4 h-4 mr-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
				</svg>
				<span className="sr-only">Info</span>
				<div>
					<span className="font-medium">Info alert!</span> Confirm Event Details and Location before
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
					disabled={loading}
					className="bg-primaryGreen py-[0.3rem] hover:!bg-lime-600 px-4"
					pill
					onClick={() => handleSubmit()}
				>
					{loading ? (
						<>
							<svg
								aria-hidden="true"
								role="status"
								className="inline w-4 h-4 mr-3 text-white animate-spin"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="#E5E7EB"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentColor"
								/>
							</svg>
							Loading...
						</>
					) : (
						<>
							<p className="text-[0.79rem]">Submit</p>
							<PiCaretCircleRightLight className="ml-3 h-6 w-6" />
						</>
					)}
				</Button>
			</div>
		</div>
	);
};

ConfirmSubmissionDetails.propType = {
	setStep: PropTypes.func.isRequired,
};

export default ConfirmSubmissionDetails;
