import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, setAuthToken, authSelector } from "../../features/storeSlice/authSlice";
import toast, { Toaster } from "react-hot-toast";
import localforage from "localforage";

const AppLayout = () => {
	const dispatch = useDispatch();

	const { error } = useSelector(authSelector);
	// const toast = useRef(null);
	const show = (errors) => {
		errors.forEach((error) => {
			toast.error(error, {
				position: "top-center",
				duration: 4000,
			});
		});
	};

	useEffect(() => {
		if (error) {
			show(error.error);
		}
	}, [error]);

	useEffect(() => {
		localforage.getItem("user_info", (err, value) => {
			if (err) {
				return null;
			}
			dispatch(setCurrentUser(JSON.parse(value)));
		});

		localforage.getItem("token", (err, value) => {
			if (err) {
				return null;
			}
			dispatch(setAuthToken(value));
		});
	}, []);

	return (
		<>
			<Toaster />
			<Outlet />
		</>
	);
};

export default AppLayout;
