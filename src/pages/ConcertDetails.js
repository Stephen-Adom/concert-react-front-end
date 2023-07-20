import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { TbCalendarPlus } from "react-icons/tb";
import { useParams } from "react-router-dom";
import {
	ConcertTableDetails,
	BackButton,
	MenuButton,
	ReserveConcertDialog,
	LocationDetails,
	ConcertDetailLoader,
} from "../components";
import { setErrors } from "../features/storeSlice/authSlice";
import { fetchConcert } from "../services/services";

const ConcertDetails = () => {
	const { id } = useParams();
	const [concert, setConcert] = useState(null);
	const [visible, setVisible] = useState(false);

	const fetchConcertDetails = () => {
		fetchConcert(id)
			.then((response) => {
				setConcert(response);
			})
			.catch((error) => {
				setErrors(error);
			});
	};

	useEffect(() => {
		if (id) {
			fetchConcertDetails();
		}
	}, [id]);

	return (
		<div className="relative w-full h-screen px-5 md:px-10 flex items-center justify-center">
			{concert ? (
				<>
					<section className="flex flex-col items-start justify-start h-full py-2 md:flex-row md:items-center gap-y-2 md:justify-center md:py-0 w-full">
						<MenuButton></MenuButton>
						<div className="flex flex-col items-start justify-start w-full gap-5 sm:flex-col lg:flex-row lg:gap-14">
							<div className="concert-image-container w-full lg:w-[70%]">
								<img src={concert.image} width="100%" alt={concert.name} />
							</div>
							<div className="concert-details w-full md:w-[70%] md:mx-auto lg:w-[30%]">
								<h3 className="font-bold text-center lg:text-right">{concert.name}</h3>
								<p className="mt-1 text-xs font-semibold text-center lg:text-right">
									{concert.description}
								</p>

								<section className="mt-7">
									<ConcertTableDetails concert={concert}></ConcertTableDetails>
								</section>

								<section className="mt-5">
									<p className="mt-1 text-sm font-semibold text-center lg:text-right">
										Location Details
									</p>

									{concert.concert_halls.length && (
										<div className="grid grid-cols-2 gap-4 mt-3">
											{concert.concert_halls.map((hall) => {
												return (
													<React.Fragment key={hall.id}>
														<LocationDetails hall={hall}></LocationDetails>
													</React.Fragment>
												);
											})}
										</div>
									)}
								</section>

								<section className="flex justify-center mt-5 action lg:justify-end md:mt-10 lg:mt-20">
									<Button
										className="bg-primaryGreen py-[0.4rem] hover:!bg-lime-600"
										pill
										onClick={() => setVisible(true)}
									>
										<TbCalendarPlus className="w-6 h-6 mr-2"></TbCalendarPlus>
										<p className="text-[0.79rem]">Reserve Concert</p>
										<PiCaretCircleRightLight className="w-5 h-5 ml-3" />
									</Button>
								</section>
							</div>
						</div>
					</section>

					<BackButton></BackButton>
					<ReserveConcertDialog
						visible={visible}
						setVisible={setVisible}
						concert={concert}
						fetchConcertDetails={fetchConcertDetails}
					></ReserveConcertDialog>
				</>
			) : (
				<ConcertDetailLoader></ConcertDetailLoader>
			)}
		</div>
	);
};

export default ConcertDetails;
