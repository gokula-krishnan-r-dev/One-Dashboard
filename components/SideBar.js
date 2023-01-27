import React, { useState } from 'react';
import { useRouter } from "next/router";
import { GrNotification } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri"
import { SiDatabricks } from "react-icons/si"
import { TbUsers } from "react-icons/tb";
import { SlSettings } from "react-icons/sl"
import { MdEdit } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import LogoIcon from '../public/img/Logo.svg'
import Image from 'next/image';

import Link from 'next/link';


const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
 
    const [menuClient, setMenuClient] = useState([
        {
            title: 'My Project',
            visible: false,
            haveSub: false,
            icon: <SiDatabricks className="text-black" />,
            linkurl: '/client',
        },
        {
            title: 'Team',
            visible: false,
            haveSub: false,
            icon: <TbUsers className="text-black" />,
            linkurl: '/client/team',
        },
    ])
    const [menu, setMenu] = useState([
        {
            title: 'Overviews',
            visible: false,
            haveSub: false,
            icon: <SiDatabricks className="text-black" />,
            linkurl: '/admin',
        },
        {
            title: 'Customers',
            visible: false,
            haveSub: false,
            icon: <TbUsers className="text-black" />,
            linkurl: '/admin/customers',
        },
        {
            title: 'Orders',
            visible: false,
            haveSub: true,
            child: [
                { title: 'All type' },
                { title: 'Active' },
                { title: 'Comolete' },
                { title: 'Cancel' }
            ],
            icon: <CiShop className="text-black" />,
            linkurl: '/admin/orders',
        },
        {
            title: 'Messages',
            visible: false,
            haveSub: false,
            icon: <BiMessageSquareDetail className="text-black" />,
            linkurl: '/admin/messages',
        },
        {
            title: 'Settings',
            visible: false,
            haveSub: true,
            child: [
                { title: 'Personal Inormations' },
                { title: 'Account' },
                { title: 'Emails' },
                { title: 'Security' },
                { title: 'Notifications' },
                { title: 'Stripe' }
            ],
            icon: <SlSettings className="text-black" />,
            linkurl: '/admin/settings',
        },
    ]);

   
 
    const onMenuClick = (index) => {
        menu[index].visible = !menu[index].visible;
        setMenu([...menu]);
    };

    const toggleSidebar = () => {
        setOpen(!open);
    };
    return (
        <div className="h-screen flex items-end justify-end ">
            {/*
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
        onClick={toggleSidebar}
      >
        <span class="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
      </button>
        */}

            <div
                className={` ${open ? 'w-64 px-2' : 'w-0 '
                    } lg:w-64 bg-white fixed left-0 z-20 h-screen duration-500 border-r`}
            >
                <div className="justify-center mt-3">
                    <h1
                        className={`text-white  font-medium text-2xl text-center duration-200 ${!open && 'invisible'
                            }`}
                    >

                        <Image width={158} height={60} alt="loog" src={LogoIcon} className="ml-4" />
                    </h1>
                </div>
                <ul className="pt-6">
                    {menu.map((menu, index) => (
                        <div>
                            <ul>
                                <a>

                                    <Link href={menu.linkurl}>
                                        <li className="ml-4">
                                            <div className="flex space-x-3 mt-6 items-center text-gray-400" onClick={() => onMenuClick(index)}>
                                                {menu.icon}
                                                <span>
                                                    {menu.title}
                                                </span>
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
            </div>
        </div>
    );
};

export default SideBar;