
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect } from "react";
import SideBar from "./SideBar";
import NavBar from './NavBar'
import SideClient from './SideClient'
const Layout = ({ children }) => {

  const [pageUrl, setPageUrl] = useState('')
  const router = useRouter();
  

  useEffect(() => {
      setPageUrl(window.location.pathname)
  })

  //const menuItem = pageUrl.substr(1, 4) == 'admi' ? menuItemsAdmin : menuItemClients
  return (
    <div className="h-screen flex flex-row justify-start">
      { pageUrl.substr(1,4) == 'admi' ?  <SideBar /> : <SideClient/> }
    
      <div className="flex-1 h-screen md:ml-64">
          <NavBar />
          {children}
      </div>
    </div>
  );
};

export default Layout;
