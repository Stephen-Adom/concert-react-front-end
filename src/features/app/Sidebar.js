import React from 'react';
import { AiOutlineTwitter, AiOutlineCopyrightCircle, AiOutlineLogout } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoPinterestAlt } from 'react-icons/bi';
import { BsVimeo } from 'react-icons/bs';
import { LiaGoogle } from 'react-icons/lia';
import { format } from 'date-fns';
import { confirmDialog } from 'primereact/confirmdialog';
import localforage from 'localforage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authSelector, clearStore } from '../storeSlice/authSlice';
import { SidebarLink } from '../../components';

export const SidebarTemplate = () => {
  const { currentUser } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let routes = [
    {
      label: 'CONCERTS',
      path: '/home',
    },
    {
      label: 'MAKE RESERVATION',
      path: '/concert/make-reservation',
    },
    {
      label: 'MY RESERVATIONS',
      path: '/concert/my-reservations',
    },
  ];

  const renderRoutes = () => {
    if (currentUser && currentUser.role === 'admin') {
      routes = [
        ...routes,
        {
          label: 'ADD CONCERT',
          path: '/concert/add',
        },
        {
          label: 'DELETE CONCERT',
          path: '/concert/update',
        },
      ];
    }
    return routes.map((route) => (
      <li key={route.path}>
        <SidebarLink label={route.label} path={route.path} />
      </li>
    ));
  };

  const accept = () => {
    dispatch(clearStore());
    localforage.clear().then(() => {
      navigate('/auth/signin');
      toast.success('You have signed out', {
        position: 'top-center',
        duration: 4000,
      });
    });
  };

  const confirmSignout = () => {
    confirmDialog({
      message: 'Are you sure you want to sign out?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-danger',
      accept,
    });
  };

  return (
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
            <div className="text-sm">
              {currentUser.name.length > 12
                ? `${currentUser.name.slice(0, 10)}...`
                : currentUser.name}
            </div>
            <div className="text-xs text-gray-500">
              {currentUser.email.length > 12
                ? `${currentUser.email.slice(0, 10)}...`
                : currentUser.email}
            </div>
          </>
          )}
        </div>

        <button
          onClick={confirmSignout}
          type="button"
          className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-lg font-medium rounded-sm text-sm py-2.5 px-3 text-center !ml-auto"
        >
          <AiOutlineLogout />
        </button>
      </div>

      <ul className="space-y-2 font-medium mt-28">{renderRoutes()}</ul>

      <div className="mt-auto footer">
        <div className="flex items-center justify-center gap-1">
          <a href="twitter">
            <AiOutlineTwitter />
          </a>
          <a href="facebook">
            <BiLogoFacebook />
          </a>
          <a href="google">
            <LiaGoogle />
          </a>
          <a href="vimeo">
            <BsVimeo />
          </a>
          <a href="pinterest">
            <BiLogoPinterestAlt />
          </a>
        </div>
        <p className="flex items-center justify-center mt-2 text-xs text-center">
          <AiOutlineCopyrightCircle />
          ConcertHub Website
          {' '}
          {format(new Date(), 'yyyy')}
        </p>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <>
    <aside
      role="navigation"
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      {SidebarTemplate()}
    </aside>
  </>
);

export default Sidebar;
