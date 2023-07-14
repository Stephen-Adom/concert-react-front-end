import React from "react";
import { Link } from "react-router-dom";
import { SidebarLink } from "../../components";
import { AiOutlineTwitter, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { BsVimeo } from "react-icons/bs";
import { LiaGoogle } from "react-icons/lia";

const Sidebar = () => {
	const routes = [
		{
			label: "CONCERTS",
			path: "/home",
		},
		{
			label: "MAKE RESERVATION",
			path: "make-reservation",
		},
		{
			label: "MY RESERVATIONS",
			path: "my-reservations",
		},
	];

	const renderRoutes = () => {
		return routes.map((route, index) => {
			return (
				<li key={index}>
					<SidebarLink label={route.label} path={route.path} />
				</li>
			);
		});
	};
	return (
		<aside
			id="default-sidebar"
			className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="flex flex-col h-full py-4 pl-3 overflow-y-auto bg-white border-r border-neutral-200">
				<h1>Concert</h1>
				<ul className="space-y-2 font-medium mt-28">{renderRoutes()}</ul>

				<div className="mt-auto footer">
				<div className="flex items-center justify-center gap-1">
					<Link to="/signin">
						<button type="button" class="focus:outline-none text-white bg-primaryGreen hover:bg-primaryGreenDark focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 h-[2.5rem] mr-2 mb-4">Sign In</button>
					</Link>
					<Link to="/signup">
						<button type="button" class="text-primaryGreen hover:text-white border border-primaryGreen hover:bg-primaryGreen font-medium rounded-lg text-sm px-5 py-2.5 h-[2.5rem] mr-2 mb-4 ">Sign Up</button>
					</Link>
				</div>
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
