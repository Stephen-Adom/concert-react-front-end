import React from "react";
import { ConcertSliderList } from "../features";
import { MenuButton } from "../components";

const Home = () => {
	return (
		<div className="w-full h-screen">
			<section className="flex flex-col items-center justify-start h-full py-10 text-center md:justify-center md:py-0">
				<h1 className="flex items-center text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl gap-x-3">
					<MenuButton></MenuButton>
					LATEST CONCERTS
				</h1>
				<p className="mt-2 text-sm font-semibold text-primaryGrey">Please select a concert</p>

				<ConcertSliderList></ConcertSliderList>
			</section>
		</div>
	);
};

export default Home;
