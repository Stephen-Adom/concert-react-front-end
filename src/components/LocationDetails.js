import React from "react";
import { BiMap } from "react-icons/bi";

const LocationDetails = ({ hall }) => {
	return (
		<div className="max-w-sm pt-2 px-4 py-4 bg-white border border-gray-200 rounded-sm hover:shadow hover:cursor-pointer">
			<h5 className="mb-1 text-base font-bold tracking-tight text-gray-900">{hall.city_name}</h5>

			<hr />

			<div className="flex flex-col">
				<p className="my-1 text-sm text-gray-700 flex items-center gap-1">
					<BiMap></BiMap>
					<span>{hall.hall_name}</span>
				</p>

				<p className="text-sm text-gray-700">
					<span className="block">Total Seats: {hall.total_seats}</span>
					<span className="block">Reserved: {hall.reserved_seats}</span>
				</p>
			</div>
		</div>
	);
};

export default LocationDetails;
