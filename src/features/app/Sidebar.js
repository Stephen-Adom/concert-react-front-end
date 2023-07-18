import React from "react";
import { AiOutlineTwitter, AiOutlineCopyrightCircle, AiOutlineLogout } from "react-icons/ai";
import { BiLogoFacebook, BiLogoPinterestAlt } from "react-icons/bi";
import { BsVimeo } from "react-icons/bs";
import { LiaGoogle } from "react-icons/lia";
import { format } from "date-fns";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { SidebarLink } from "../../components";
import localforage from "localforage";
import { authSelector, clearStore } from "../../features/storeSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Sidebar = () => {
	const { currentUser } = useSelector(authSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const routes = [
		{
			label: "CONCERTS",
			path: "/home",
		},
		{
			label: "MAKE RESERVATION",
			path: "/concert/make-reservation",
		},
		{
			label: "MY RESERVATIONS",
			path: "/my-reservations",
		},
		{
			label: "ADD CONCERT",
			path: "/concert/add",
		},
		{
			label: "DELETE CONCERT",
			path: "/concert/update",
		},
	];

	const renderRoutes = () =>
		routes.map((route, index) => (
			<li key={index}>
				<SidebarLink label={route.label} path={route.path} />
			</li>
		));

	const accept = () => {
		dispatch(clearStore());
		localforage.clear().then((_) => {
			navigate("/auth/signin");
			toast.success("You have signed out", {
				position: "top-center",
				duration: 4000,
			});
		});
	};

	const confirmSignout = () => {
		confirmDialog({
			message: "Are you sure you want to sign out?",
			header: "Confirmation",
			icon: "pi pi-exclamation-triangle",
			acceptClassName: "p-button-danger",
			accept,
		});
	};
	return (
		<>
			<aside
				id="default-sidebar"
				className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div className="flex flex-col h-full py-4 pl-3 overflow-y-auto bg-white border-r border-neutral-200">
					<div className="flex items-center space-x-2 auth-info">
						<div className="flex items-center justify-center border-2 rounded-full w-9 h-9 profile-container border-primaryGreen">
							<span className="svg-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									height="20px"
									viewBox="0 0 24 24"
									version="1.1"
								>
									<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
										<polygon points="0 0 24 0 24 24 0 24" />
										<path
											d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
											fill="#000000"
											fillRule="nonzero"
											opacity="0.3"
										/>
										<path
											d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
											fill="#000000"
											fillRule="nonzero"
										/>
									</g>
								</svg>
							</span>
						</div>
						<div className="font-medium dark:text-white">
							{currentUser && (
								<>
									<div className="text-sm">{currentUser.name}</div>
									<div className="text-xs text-gray-500">leos@gmail.com</div>
								</>
							)}
						</div>

						<button
							onClick={confirmSignout}
							type="button"
							className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg font-medium rounded-sm text-sm py-2.5 px-3 text-center !ml-auto"
						>
							<AiOutlineLogout></AiOutlineLogout>
						</button>
					</div>

					<ul className="space-y-2 font-medium mt-28">{renderRoutes()}</ul>

					<div className="mt-auto footer">
						<div className="flex items-center justify-center gap-1">
							<a href="#">
								<AiOutlineTwitter />
							</a>
							<a href="#">
								<BiLogoFacebook />
							</a>
							<a href="#">
								<LiaGoogle />
							</a>
							<a href="#">
								<BsVimeo />
							</a>
							<a href="#">
								<BiLogoPinterestAlt />
							</a>
						</div>
						<p className="flex items-center justify-center mt-2 text-xs text-center">
							<AiOutlineCopyrightCircle />
							ConcertHub Website {format(new Date(), "yyyy")}
						</p>
					</div>
				</div>
			</aside>
			<ConfirmDialog />
		</>
	);
};

export default Sidebar;
