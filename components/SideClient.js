import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { GrNotification } from "react-icons/gr"
import { BiMessageSquareDetail } from "react-icons/bi"
import { AiOutlineMore, AiOutlineMenu } from "react-icons/ai"
import { RiTeamLine } from "react-icons/ri"
import { SiDatabricks } from "react-icons/si"
import { TbUsers } from "react-icons/tb"
import { SlSettings } from "react-icons/sl"
import { MdEdit } from "react-icons/md"
import { CiShop } from "react-icons/ci"
import LogoIcon from "../public/img/Logo.svg"
import Image from "next/image"
import HelpCenter from "./HelpCenter"
import Link from "next/link"

const SideClient = () => {
  const [open, setOpen] = useState(true)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [clicked, setClicked] = useState("/client")
  useEffect(() => {
    function handleResize() {
      setOpen(window.innerWidth >= 786)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  const [menu, setMenu] = useState([
    {
      title: "My Project",
      visible: false,
      haveSub: false,
      icon: <SiDatabricks className="text-black" />,
      linkurl: "/client",
    },
    {
      title: "Team",
      visible: false,
      haveSub: false,
      icon: <TbUsers className="text-black" />,
      linkurl: "/client/team",
    },
  ])

  const onMenuClick = (index) => {
    menu[index].visible = !menu[index].visible
    setMenu([...menu])
  }

  const toggleSidebar = () => {
    setOpen(!open)
  }
  return (
    <div className="h-screen flex items-end justify-end ">
      <button
        className="fixed lg:hidden z-20 top-4 left-2 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl  duration-300"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu size={24} className="text-black" />
      </button>

      <div
        className={` ${
          open ? "sidebar visible" : "w-0 "
        } lg:w-[190px] 2xl:w-[256px] fixed  SmoothAnimation bg-white left-0 z-20 h-screen duration-500 border-r`}
      >
        <div className="justify-center px-2 mt-3">
          <div
            className={`text-white flex justify-between  font-medium text-2xl text-center duration-200 ${
              !open && "sidebar"
            }`}
          >
            <Image
              width={158}
              height={60}
              alt="loog"
              src={LogoIcon}
              className={`ml-4 lg:w-[140px] 2xl:w-[158px] md:w-[158px] ${
                !open && "sidebar visible"
              } cursor-pointer`}
            />
            <button
              onClick={toggleSidebar}
              className={`md:hidden block ${!open && "sidebar visible"}`}
            >
              <AiOutlineMenu size={24} className="text-black" />
            </button>
          </div>
        </div>
        <ul className={`pt-6 duration-300 pl-2   ${!open && "sidebar "}`}>
          {menu.map((menu, index) => (
            <div
              className={`border-r-4  w-full ${
                clicked === menu.linkurl
                  ? "border-[#007AFF]  text-[#131313]"
                  : "border-r-0"
              } ${!open && "sidebar"}  `}
            >
              <ul>
                <a>
                  <Link href={menu.linkurl}>
                    <li className="ml-4 ">
                      <div
                        className={`flex space-x-3  h-[33px] text-center mt-6 items-center text-gray-400 ${
                          clicked === menu.linkurl
                            ? "text-[#131313] font-[600] text--font"
                            : null
                        }`}
                        onClick={() => {
                          onMenuClick(index)
                          setClicked(menu.linkurl)
                        }}
                      >
                        {menu.icon}
                        <span>{menu.title}</span>
                      </div>
                      <div className="mt-4 ml-8">
                        {menu.haveSub && menu.visible && (
                          <ul className="text-[12px] text-gray-400 duration-400'">
                            {menu.child.map((item) => (
                              <li className="mt-2">{item.title}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  </Link>
                </a>
              </ul>
            </div>
          ))}
        </ul>
        <div className="absolute  bottom-8 left-16">
          <HelpCenter />
        </div>
      </div>
    </div>
  )
}

export default SideClient
