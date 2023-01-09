import Link from "next/link"
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import classNames from "classnames";
const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Manage Posts", link: "/posts" },
    { id: 3, label: "Manage Users", link: "/users" },
    { id: 4, label: "Manage Tutorials", link: "/tutorials" },
]


const SideBar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);
    const router = useRouter();
    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
    );
    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col bg-pink-500",
        {
            ["w-64"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        "p-4 rounded bg-light-lighter absolute right-0",
        {
            "rotate-180": toggleCollapse,
        }
    );

    const getNavItemClasses = (menu) => {
        return classNames(
            "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
            {
                ["bg-light-lighter"]: activeMenu.id === menu.id,
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
        <React.Fragment>
            <div
                className={wrapperClasses}
                onMouseEnter={onMouseOver}
                onMouseLeave={onMouseOver}
                style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
            >
                <div className="flex flex-col">
                    <div className="flex items-center justify-between relative">
                        <div className="flex items-center pl-1 gap-4">
                            <button className="bg-teal-500">Test</button>
                            <span
                                className={classNames("mt-2 text-lg font-medium text-text", {
                                    hidden: toggleCollapse,
                                })}
                            >
                                Logo
                            </span>
                        </div>
                        {isCollapsible && (
                            <button
                                className={collapseIconClasses}
                                onClick={handleSidebarToggle}
                            >
                                collapse
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col items-start mt-24">
                        {menuItems.map(({ ...menu }) => {
                            const classes = getNavItemClasses(menu);
                            return (
                                <>
                                    <div className={classes}>
                                        <a className="flex py-4 px-3 items-center w-full h-full">
                                            <div style={{ width: "2.5rem" }}>
                                                {!toggleCollapse && (
                                                    <span className={classNames(
                                                        "text-md font-medium text0light"
                                                    )}>
                                                        {menu.label}
                                                    </span>
                                                )}
                                            </div>
                                        </a>

                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                <div className={`${getNavItemClasses({})} px-3 py-4`}>
                    <div style={{ width: "2.5rem" }}>

                    </div>
                    {!toggleCollapse && (
                        <span className={classNames("text-md font-medium text-text-light")}>
                            Logout
                        </span>
                    )}
                </div>

            </div>
        </React.Fragment>
    )
}
export default SideBar