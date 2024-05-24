import React from 'react';
import BellIcon from '../svg_icons/bell_icon';
import CircleIcon from '../svg_icons/circle_icon';

const TopBar = () => {
  return (
    <div className="bg-[#f5f5f5] p-4 max-md:hidden fixed w-screen ">
      <div className="grid grid-flow-col text-center place-content-end h-5">
        <div className='flex justify-end items-center'>
            <BellIcon/>
            <CircleIcon/>
        </div>
      </div>
    </div>
  );
};

export default TopBar;