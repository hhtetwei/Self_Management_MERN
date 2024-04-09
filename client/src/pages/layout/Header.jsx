import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-primary-color sticky text-white w-full z-50 drop-shadow-md">
      <div className="flex p-4 justify-between">
        <div className="flex">
          <IconButton color="inherit" onClick={toggleSidebar} edge="start">
            <MenuIcon />
          </IconButton>

          <div className="flex justify-around items-center font-normal">
            <h6 className="ml-4 text-base font-bold">MyanCare</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
