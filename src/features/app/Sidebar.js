import React from "react";
import { SidebarLink } from "../../components";
import { AiOutlineTwitter, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { BsVimeo } from "react-icons/bs";
import { LiaGoogle } from "react-icons/lia";

const Sidebar = () => {
	return (
		<aside
			id="default-sidebar"
			className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="flex flex-col h-full py-4 pl-3 overflow-y-auto bg-white border-r border-neutral-200">
				<h1>Concert</h1>
				<ul className="space-y-2 font-medium mt-28">
					<li>
						<a href="#" className="flex items-center px-4 py-3 font-extrabold text-primaryDark">
							MODELS
						</a>
					</li>

					<li>
						<a
							href="#"
							className="flex items-center px-4 py-3 font-extrabold text-primaryDark active"
						>
							LIFESTYLE
						</a>
					</li>

					<li>
						<a href="#" className="flex items-center px-4 py-3 font-extrabold text-primaryDark">
							SHOP
						</a>
					</li>

					<li>
						<SidebarLink></SidebarLink>
					</li>
				</ul>

				<div className="mt-auto footer">
					<div className="flex items-center justify-center gap-1">
						<a href="#">
							<AiOutlineTwitter></AiOutlineTwitter>
						</a>
						<a href="#">
							<BiLogoFacebook></BiLogoFacebook>
						</a>
						<a href="#">
							<LiaGoogle></LiaGoogle>
						</a>
						<a href="#">
							<BsVimeo></BsVimeo>
						</a>
						<a href="#">
							<BiLogoPinterestAlt></BiLogoPinterestAlt>
						</a>
					</div>
					<p className="flex items-center justify-center mt-2 text-xs text-center">
						<AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>
						Concert Website 2023
					</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
