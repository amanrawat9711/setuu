// components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorTrail from './CursorTrail';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black overflow-x-hidden">
      {/* <CursorTrail /> */}
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;