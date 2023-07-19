import React from "react";
import { Sidebar } from "primereact/sidebar";
import { SidebarTemplate } from "../features/app/Sidebar";

const MobileSidebar = ({ visible, setVisible }) => {
	return (
		<Sidebar visible={visible} onHide={setVisible} showCloseIcon={false}>
			{SidebarTemplate()}
		</Sidebar>
	);
};

export default MobileSidebar;
