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
			class="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div class="h-full pl-3 py-4 overflow-y-auto bg-white border-r border-neutral-200 flex flex-col">
				<h1>Concert</h1>
				<ul class="space-y-2 font-medium mt-20">
					<li>
						<a href="#" class="flex items-center px-4 py-3 text-primaryDark font-extrabold">
							MODELS
						</a>
					</li>

					<li>
						<a href="#" class="flex items-center px-4 py-3 text-primaryDark font-extrabold active">
							LIFESTYLE
						</a>
					</li>

					<li>
						<a href="#" class="flex items-center px-4 py-3 text-primaryDark font-extrabold">
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
