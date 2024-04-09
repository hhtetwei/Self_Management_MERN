/* eslint-disable react/jsx-key */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FlightIcon from '@mui/icons-material/Flight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const sideLinks = [
  ['Home', '/dashboard/home', <HomeIcon />],
  ['Notes', '/notes/notes', <EditNoteIcon />],
  ['To Do', '/to-do/ToDo', <CheckCircleIcon />],
  ['To Travel', '/to-travel/toTravel', <FlightIcon />],
  ['To Buy', '/to-buy/ToBuy', <ShoppingCartIcon />],
];
const getIconForUrl = (url) => {
  const matchingLink = sideLinks.find((link) => link[1] === url);
  return matchingLink ? matchingLink[2] : null;
};

export default function SideBar() {
  const router = useRouter();
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        className="bg-baseColor"
      >
        <Toolbar>
          <div className="w-full flex justify-center text-2xl ">
            Welcome from Malivu Self-Management Website
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'bisque',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {sideLinks.map(([title, url], idx) => {
            const isActive = router.pathname === url;
            return (
              <div key={idx}>
                <Link href={url}>
                  <div className={`mt-24 text-xl flex justify-center gap-3`}>
                    {getIconForUrl(url)}
                    {title.toUpperCase()}
                  </div>
                </Link>
              </div>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
