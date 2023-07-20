import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarLinkProp } from '../model/model.types';

const SidebarLink = ({ label, path }) => {
  const linkClass = (linkActive = '') => `flex items-center px-4 py-3 font-extrabold transition duration-75 text-primaryDark hover:bg-primaryGreen hover:text-white ${linkActive}`;

  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) => (isPending ? linkClass('pending') : isActive ? linkClass('active') : linkClass())}
    >
      {label}
    </NavLink>
  );
};

SidebarLink.propTypes = SidebarLinkProp;

export default SidebarLink;
