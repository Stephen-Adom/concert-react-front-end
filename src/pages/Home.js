import React from "react";
import { ConcertSliderList } from "../features";
import { VscThreeBars } from "react-icons/vsc";

const Home = () => {
	return (
		<div className="w-full h-screen">
			<section className="flex flex-col items-center justify-start h-full py-10 text-center md:justify-center md:py-0">
				<h1 className="flex items-center text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl gap-x-3">
					<button
						data-drawer-target="default-sidebar"
						data-drawer-toggle="default-sidebar"
						aria-controls="default-sidebar"
						type="button"
						className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
					>
						<span className="sr-only">Open sidebar</span>
						<VscThreeBars className="text-3xl text-primaryDark"></VscThreeBars>
					</button>
					LATEST CONCERTS
				</h1>
				<p className="mt-2 text-sm font-semibold text-primaryGrey">Please select a concert</p>

				<ConcertSliderList></ConcertSliderList>
			</section>
		</div>
	);
};

export default Home;
