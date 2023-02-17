import ImgLogo from "../public/img/Logo.svg"
import DropdownUser from "./DropdownUser"
import Notifications from "./Notifications"
import Image from "next/image"
import logores from "../public/img/logores.svg"
import Link from "next/link"
const NavBar = () => {
  return (
    <>
      <header className="bg-white z-10 shadow-sm fixed top-0 left-0 right-0 h-20 flex space-x-4 justify-end items-center">
        <div className="flex md:hidden  items-center justify-center centered absolute top-0 left-[50%]">
          <Link href={"/admin"}>
            <Image src={logores} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-end items-center space-x-4 px-4">
          <span className="font-play font-medium text-base hidden md:block">
            Price
          </span>

          <Notifications color="white" />
          <div className="w-[1x] h-[20px]  border-[1px] border-[#EBEBEB]" />
          <DropdownUser />
        </div>
      </header>
    </>
  )
}
export default NavBar
