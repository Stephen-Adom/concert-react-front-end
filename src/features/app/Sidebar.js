import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoPinterestAlt } from 'react-icons/bi';
import { BsVimeo } from 'react-icons/bs';
import { LiaGoogle } from 'react-icons/lia';
import { SidebarLink } from '../../components';

const Sidebar = () => {
	const routes = [
		{
			label: "CONCERTS",
			path: "home",
		},
		{
			label: "MAKE RESERVATION",
			path: "make-reservation",
		},
		{
			label: "MY RESERVATIONS",
			path: "my-reservations",
		},
		{
			label: "ADD CONCERT",
			path: "concert/add",
		},
		{
			label: "DELETE CONCERT",
			path: "concert/update",
		},
	];

  const renderRoutes = () => routes.map((route, index) => (
    <li key={index}>
      <SidebarLink label={route.label} path={route.path} />
    </li>
  ));
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
            Concert Website 2023
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
