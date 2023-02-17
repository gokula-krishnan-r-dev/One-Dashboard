import { useRouter } from "next/router"
import React, { useState, useMemo, useEffect } from "react"
import SideBar from "./SideBar"
import NavBar from "./NavBar"
import SideClient from "./SideClient"
const Layout = ({ children }) => {
  const [pageUrl, setPageUrl] = useState("")
  const router = useRouter()

  useEffect(() => {
    setPageUrl(window.location.pathname)
  })

  return (
    <div className="h-screen flex  flex-row justify-start">
      {pageUrl.substr(1, 4) == "admi" ? <SideBar /> : <SideClient />}
      <div className="flex-1 h-screen lg:ml-[190px] 2xl:ml-[256px] md:ml-[254px] bg-[#FAFAFA]">
        <NavBar />
        {children}
      </div>
    </div>
  )
}

export default Layout
