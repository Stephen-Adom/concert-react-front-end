import React from "react";
import { Sidebar } from "primereact/sidebar";
import { MobileSidebarProp } from "../model/model.types";
import { SidebarTemplate } from "../features/app/Sidebar";

const MobileSidebar = ({ visible, setVisible }) => {
	return (
		<Sidebar visible={visible} onHide={setVisible} showCloseIcon={false}>
			{SidebarTemplate()}
		</Sidebar>
	);
};

MobileSidebar.propTypes = MobileSidebarProp;

export default MobileSidebar;
