import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import localforage from "localforage";

const AuthWrapper = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(null);

	useEffect(() => {
		localforage.getItem("token").then((value) => {
			setAuthenticated(!!value);
		});
	}, []);

	if (authenticated === null) {
		return <Loading />;
	}

	if (!authenticated) {
		return <Navigate to={"/auth/signin"} replace></Navigate>;
	}

	return children;
};

export const Loading = () => {
	return <h2>🌀 Loading...</h2>;
};

export default AuthWrapper;
