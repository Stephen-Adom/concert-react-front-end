import React from "react";
import { Button } from "flowbite-react";
import { PiCaretCircleRightLight } from "react-icons/pi";
import { TbCalendarPlus } from "react-icons/tb";
import { ConcertTableDetails } from "../components";
import { BsCaretLeft } from "react-icons/bs";

const ConcertDetails = () => {
	return (
		<div className="w-full h-screen px-10 relative">
			<section className="flex items-center justify-start h-full py-10 md:justify-center md:py-0">
				<div className="flex flex-col sm:flex-col md:flex-row items-start justify-start w-full gap-14">
					<div className="concert-image-container w-[70%]">
						<img src="https://picsum.photos/500/300" width="100%" alt="concert-image" />
					</div>
					<div className="concert-details w-[30%]">
						<h3 className="font-bold text-right">CONCERT 1</h3>
						<p className="text-xs font-semibold text-right mt-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</p>

						<section className="mt-7">
							<ConcertTableDetails></ConcertTableDetails>
						</section>

						<section className="action flex justify-end mt-20">
							<Button className="bg-primaryGreen py-[0.4rem] hover:!bg-lime-600" pill>
								<TbCalendarPlus className="mr-2 h-6 w-6"></TbCalendarPlus>
								<p className="text-[0.79rem]">Reserve Concert</p>
								<PiCaretCircleRightLight className="ml-3 h-5 w-5" />
							</Button>
						</section>
					</div>
				</div>
			</section>

			<button
				type="button"
				className="absolute -translate-y-[50%]  w-[60px] py-[16px] px-4 items-center hidden md:flex z-10 top-[90%] left-0 rounded-tr-full rounded-br-full  justify-end bg-primaryGreen"
			>
				<BsCaretLeft className="text-white stroke-1"></BsCaretLeft>
			</button>
		</div>
	);
};

export default ConcertDetails;
