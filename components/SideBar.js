import React, { useState } from "react"
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
import Link from "next/link"

const SideBar = () => {
  const [open, setOpen] = useState(true)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [clicked, setClicked] = useState("/Overviews")
  const [menuClient, setMenuClient] = useState([
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
  const [menu, setMenu] = useState([
    {
      title: "Overviews",
      visible: false,
      haveSub: false,
      icon: <SiDatabricks className="text-black" />,
      linkurl: "/admin",
    },
    {
      title: "Customers",
      visible: false,
      haveSub: false,
      icon: <TbUsers className="text-black" />,
      linkurl: "/admin/customers",
    },
    {
      title: "Orders",
      visible: false,
      haveSub: true,
      child: [
        { title: "All type" },
        { title: "Active" },
        { title: "Comolete" },
        { title: "Cancel" },
      ],
      icon: <CiShop className="text-black" />,
      linkurl: "/admin/orders",
    },
    {
      title: "Messages",
      visible: false,
      haveSub: false,
      icon: <BiMessageSquareDetail className="text-black" />,
      linkurl: "/admin/messages",
    },
    {
      title: "Settings",
      visible: false,
      haveSub: true,
      child: [
        { title: "Personal Inormations" },
        { title: "Account" },
        { title: "Emails" },
        { title: "Security" },
        { title: "Notifications" },
        { title: "Stripe" },
      ],
      icon: <SlSettings className="text-black" />,
      linkurl: "/admin/settings",
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
    <div className="h-screen flex items-end justify-end">
      <button
        className="fixed lg:hidden z-20 top-4 left-2 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl"
        onClick={toggleSidebar}
      >
        <AiOutlineMenu size={24} className="text-black" />
      </button>

      <div
        className={` ${
          open ? "w-64  pl-2" : "w-0 "
        } lg:w-64 fixed SmoothAnimation bg-white left-0 z-20 overflow-hidden h-screen  border-r`}
      >
        <div className="justify-center mt-3">
          <div
            className={`text-white flex justify-between  font-medium text-2xl text-center  pr-3  ${
              !open && "invisible"
            }`}
          >
            <Link href={"/admin"}>
              <Image
                width={158}
                height={60}
                alt="loog"
                src={LogoIcon}
                className={`ml-4 ${!open && "invisible"} cursor-pointer`}
              />
            </Link>
            <button
              onClick={toggleSidebar}
              className={`md:hidden block ${!open && "invisible"}`}
            >
              <AiOutlineMenu size={24} className="text-black" />
            </button>
          </div>
        </div>

        <ul className={`pt-6  SmoothAnimation ${!open && "invisible"}`}>
          {menu.map((menu, index) => (
            <div>
              <ul>
                <a>
                  <Link href={menu.linkurl}>
                    <li className="ml-4">
                      <div
                        className={`border-r-4 flex ${
                          !open && "invisible"
                        } space-x-3 mt-6 items-center text-gray-400  w-full ${
                          clicked === menu.linkurl
                            ? "border-[#007AFF] text-[#131313]"
                            : "border-r-0"
                        } `}
                        onClick={() => {
                          onMenuClick(index)
                          setClicked(menu.linkurl)
                        }}
                      >
                        {menu.icon}
                        <span>{menu.title}</span>
                      </div>
                      <div className="mt-4 ml-8 SmoothAnimation">
                        {menu.haveSub && menu.visible && (
                          <ul className="text-[12px] SmoothAnimation  text-gray-400 ">
                            {menu.child.map((item) => (
                              <li className="mt-2 SmoothAnimation">
                                {item.title}
                              </li>
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
      </div>
    </div>
  )
}

export default SideBar
