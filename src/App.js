import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Sidebar } from "./features";
import { setAllReservations } from "./features/storeSlice/reservationSlice";
import { fetchAllUserReservations } from "./services/services";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		fetchAllUserReservations()
			.then((response) => {
				dispatch(setAllReservations(response["reservations"]));
			})
			.catch((error) => {
				dispatch(setErrors(error.response.data));
			});
	}, []);

	return (
		<div className="App">
			<Sidebar />
			<main className="ml-0 md:ml-56">
				<Outlet />
			</main>
		</div>
	);
}

export default App;
