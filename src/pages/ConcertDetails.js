import React, { useState } from "react";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { TbCalendarPlus } from "react-icons/tb";
import { ConcertTableDetails, BackButton, MenuButton, ReserveConcertDialog } from "../components";

const ConcertDetails = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="relative w-full h-screen px-5 md:px-10">
			<section className="flex flex-col items-start justify-start h-full py-2 md:flex-row md:items-center gap-y-2 md:justify-center md:py-0">
				<MenuButton></MenuButton>
				<div className="flex flex-col items-start justify-start w-full gap-5 sm:flex-col lg:flex-row lg:gap-14">
					<div className="concert-image-container w-full lg:w-[70%]">
						<img src="https://picsum.photos/500/300" width="100%" alt="concert-image" />
					</div>
					<div className="concert-details w-full md:w-[70%] md:mx-auto lg:w-[30%]">
						<h3 className="font-bold text-center lg:text-right">CONCERT 1</h3>
						<p className="mt-1 text-xs font-semibold text-center lg:text-right">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</p>

						<section className="mt-7">
							<ConcertTableDetails></ConcertTableDetails>
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
			<ReserveConcertDialog visible={visible} setVisible={setVisible}></ReserveConcertDialog>
		</div>
	);
};

export default ConcertDetails;
