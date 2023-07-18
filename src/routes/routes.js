// router.js
import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { AppLayout, AuthLayout } from "../features";
import { Home, ConcertDetails, AddConcert, ManageConcert } from "../pages";
import SignIn from "../features/pages/authentication/SignIn";
import SignUp from "../features/pages/authentication/SignUp";
import Welcome from "../pages/Welcome";
import ReservationForm from "../features/pages/Reservation/ReservationForm";
import MyReservations from "../features/pages/Reservation/MyReservations";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Welcome />,
			},
			{
				path: "auth",
				element: <AuthLayout />,
				children: [
					{
						path: "signin",
						element: <SignIn />,
					},
					{
						path: "signup",
						element: <SignUp />,
					},
				],
			},
			{
				path: "",
				element: <App />,
				children: [
					{
						path: "home",
						element: <Home />,
					},
					{
						path: "concerts/:id",
						element: <ConcertDetails />,
					},
					{
						path: "concert/add",
						element: <AddConcert />,
					},
					{
						path: "concert/make-reservation",
						element: <ReservationForm />,
					},
					{
						path: "concert/my-reservations",
						element: <MyReservations />,
					},
					{
						path: "concert/update",
						element: <ManageConcert />,
					},
				],
			},
		],
	},
]);

export default router;
