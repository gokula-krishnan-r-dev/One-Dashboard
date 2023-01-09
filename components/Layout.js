import React from "react";
import Asside from "./Asside";
import NavBar from './NavBar'
const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Asside />
      <div className="bg-primary flex-1 h-screen">
          <NavBar />
          {children}
      </div>
    </div>
  );
};

export default Layout;
