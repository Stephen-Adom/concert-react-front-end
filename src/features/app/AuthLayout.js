import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<>
			<Outlet></Outlet>
		</>
	);
};

export default AuthLayout;
