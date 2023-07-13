import React from "react";
import { ConcertSliderList } from "../features";

const Home = () => {
	return (
		<div className="w-full h-screen">
			<section className="flex flex-col items-center justify-center h-full text-center">
				<h1 className="text-2xl font-extrabold tracking-widest">LATEST CONCERTS</h1>
				<p className="mt-2 text-sm font-semibold text-primaryGrey">Please select a concert</p>

				<ConcertSliderList></ConcertSliderList>
			</section>
		</div>
	);
};

export default Home;
