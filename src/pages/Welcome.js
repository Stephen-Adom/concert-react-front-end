import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div
    className="bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80)' }}
  >
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-60"
    >
      <div className="text-white text-6xl font-bold mb-8">
        Concert
      </div>
      <div className="flex space-x-4">
        <Link to="/signin">
          <button type="button" className="focus:outline-none text-white bg-primaryGreen hover:bg-primaryGreenDark font-medium rounded-lg text-sm px-5 py-2.5 h-[2.5rem] mr-2 mb-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button type="button" className="text-white hover:text-white border border-primaryGreen hover:bg-primaryGreen font-medium rounded-lg text-sm px-5 py-2.5 h-[2.5rem] mr-2 mb-4 ">Sign Up</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Welcome;
