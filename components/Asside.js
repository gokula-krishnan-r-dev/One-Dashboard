import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect } from "react";
import { GrNotification } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineMore } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri"
import { SiDatabricks } from "react-icons/si"
import { TbUsers } from "react-icons/tb";
import { SlSettings } from "react-icons/sl"
import { CiShop } from "react-icons/ci";
import HelpCenter from './HelpCenter'
import CollapsIcon from './icons/CollapsIcon'
import Image from "next/image";
import LogoIcon from '../public/img/Logo.svg'
import NavBar from "./NavBar";
import Subnav from "./Subnav";
import { menuItemClients, menuItemsAdmin } from './data/dataContents';



const Asside = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);
    const [subnav, setSubnav] = useState(false)
    const [pageUrl, setPageUrl] = useState('')
    const router = useRouter();
    

    useEffect(() => {
        setPageUrl(window.location.pathname)
    })

    const menuItem = pageUrl.substr(1, 4) == 'admi' ? menuItemsAdmin : menuItemClients
    const activeMenu = useMemo(
        () => menuItem.find((menu) => menu.link === router.pathname),
        [router.pathname]
    );

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-light sm:flex sm:justify-between sm:flex-col hidden",
        {
            ["w-64"]: !toggleCollapse,
            ["w-8"]: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        "p-4 rounded bg-light-lighter absolute -right-8",
        {
            "rotate-180": toggleCollapse,
        }
    );

    const getNavItemClasses = (menu) => {
        return classNames(
            "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
            {
                ["bg-light-lighter"]: menu.id === menu.id,
            }
        );
    };

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <div
            className={wrapperClasses}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="flex flex-col font-play">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center pl-1 gap-4">
                    
                        <span
                            className={classNames("mt-2 text-lg font-medium text-text", {
                                hidden: toggleCollapse,
                            })}
                        >
                            <Image width={158} height={60} alt="loog" src={LogoIcon} />
                        </span>
                    </div>
                    
                        <button
                            className={collapseIconClasses}
                            onClick={handleSidebarToggle}
                        >          
                         <CollapsIcon />
                        </button>
                
                </div>

                <div className="flex flex-col items-start mt-6">
                {menuItem.map((menu, index) => {
                        const classes = getNavItemClasses(menu);
                        //const submenu = menu.subnav
                        return(
                            <>
                                <div className={classes} key={index}>
                                    {menu.icon}
                                    <Link href={menu.href}>
                                            <div className="flex py-4 px-3">
                                                {!toggleCollapse && (
                                                    <span
                                                        className={classNames(
                                                        "text-md font-medium text-text-light text-gray-400"
                                                        )}
                                                    >
                                                        {menu.title}
                                                    


                                                    </span>
                                                )}
                                            </div>
                                    </Link>    
                                 </div>
                                 {menu.subNav !== undefined ?
                                        <Subnav data = {menu.subNav} />
                                    : 
                                    null }
                            </>
                        )
                    })}
                </div>
            </div>

            <div className={`${getNavItemClasses({})} px-3 py-4`}>
                
            </div>
        </div>
    );
};

export default Asside;
