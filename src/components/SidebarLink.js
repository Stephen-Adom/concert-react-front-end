import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ label, path }) => {
	const linkClass = (linkActive = "") => {
		return `flex items-center px-4 py-3 font-extrabold transition duration-75 text-primaryDark hover:bg-primaryGreen hover:text-white ${linkActive}`;
	};

	return (
		<NavLink
			to={path}
			className={({ isActive, isPending }) =>
				isPending ? linkClass("pending") : isActive ? linkClass("active") : linkClass()
			}
		>
			{label}
		</NavLink>
	);
};

export default SidebarLink;
