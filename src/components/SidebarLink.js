import React from "react";

const SidebarLink = ({ key, label, path }) => {
	return (
		<a
			href="#"
			className="flex items-center px-4 py-3 font-extrabold transition duration-75 text-primaryDark hover:bg-primaryGreen hover:text-white"
		>
			{label}
		</a>
	);
};

export default SidebarLink;
