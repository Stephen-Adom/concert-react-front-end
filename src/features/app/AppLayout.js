import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, setAuthToken } from "../../features/storeSlice/authSlice";
import { Toast } from "primereact/toast";
import localforage from "localforage";

const AppLayout = () => {
	const dispatch = useDispatch();

	const error = useSelector((state) => state.auth.error);
	const toast = useRef(null);
	const show = (errors) => {
		errors.forEach((error) => {
			toast?.current?.show({ severity: "error", summary: "Error", detail: error, life: 4000 });
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
			<Toast ref={toast} />
			<Outlet />
		</>
	);
};

export default AppLayout;
