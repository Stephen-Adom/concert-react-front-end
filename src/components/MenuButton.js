import React from "react";
import { VscThreeBars } from "react-icons/vsc";

const MenuButton = () => {
	return (
		<button
			data-drawer-target="default-sidebar"
			data-drawer-toggle="default-sidebar"
			aria-controls="default-sidebar"
			type="button"
			className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
		>
			<span className="sr-only">Open sidebar</span>
			<VscThreeBars className="text-3xl text-primaryDark"></VscThreeBars>
		</button>
	);
};

export default MenuButton;
