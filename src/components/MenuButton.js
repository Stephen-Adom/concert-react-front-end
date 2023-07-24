import React, { useState } from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import MobileSidebar from './MobileSidebar';

const MenuButton = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        type="button"
        className="inline-flex items-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <VscThreeBars className="text-3xl text-primaryDark" />
      </button>
      <MobileSidebar visible={visible} setVisible={setVisible} />
    </>
  );
};

export default MenuButton;
