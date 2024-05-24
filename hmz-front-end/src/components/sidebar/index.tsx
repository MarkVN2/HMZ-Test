import React, { useState } from 'react';
import SidebarItem from '../sidebar_item';

const Sidebar = () => {
  return (
    <div 
      className={` w-96 bg-[#f5f5f5] h-screen fixed`} 
    >
      <div>
        <ul>
            <SidebarItem title='SUPPLY CHAIN' icon='align_justify'/>
            <SidebarItem title='USUARIOS' icon='right_arrow' active={true}/>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;