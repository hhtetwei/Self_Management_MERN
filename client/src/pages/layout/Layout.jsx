import Header from './Header';
import Footer from './Footer';
import SideBar from '@/components/SideBar';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  let toggleSidebar = () => (isOpen ? onClose() : onOpen());

  return (
    <>
      <Header />
      <main className="w-full h-full">{children}</main>
      <SideBar />
      <Footer />
    </>
  );
};

export default Layout;
