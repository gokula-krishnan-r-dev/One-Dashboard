import React, { useEffect, useRef, useState } from "react"
import Popup from "reactjs-popup"
import Image from "next/image"
import { AiOutlineClose, AiOutlineCamera } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { FiLogOut } from "react-icons/fi"
import ImgAvatar from "../public/img/user/Avatar.png"
import PicImg from "../public/img/user/Avatar_3.png"
import ArrowUp2 from "../public/img/icon/ArrowUp 2.svg"
import { FaRegUserCircle } from "react-icons/fa"
import Closeicon from "../public/img/icon/Close Icon.svg"
import Link from "next/link"
const DropdownUser = () => {
  const [open, setOpen] = useState(false)
  const [clicked, setClicked] = useState(false)
  const closeModal = () => setOpen(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  const clickTes = () => {
    console.log("rest")
  }
  const openModal = () => {
    setOpen(true)
    setClicked(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Do something with the form data
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisibility(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  const [visibility, setVisibility] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const [flagOption, setflagedOption] = useState("")
  const [search, setSearch] = useState("")
  const options = [
    {
      countryName: "United States",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },

    {
      countryName: "United Kingdom",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    },

    {
      countryName: "Canada",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    },

    {
      countryName: "Australia",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    },

    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      countryName: "France",
      flagImgUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
  ]

  return (
    <React.Fragment>
      <div className="menu cursor-pointer">
        <Popup
          trigger={
            <div className="text-black cursor-pointer font-medium font-play py-2 flex items-center space-x-2">
              <div className="relative">
                <div className="w-4 h-4 bg-red-600 flex items-center justify-center absolute rounded-full text-white text-[10px] -right-1 -top-1 z-20">
                  1
                </div>
                <Image
                  src={ImgAvatar}
                  width={32}
                  height={32}
                  className="rounded-full"
                  alt="avatar"
                />
              </div>
              <span className="md:block hidden"> Angelina Lee</span>
              <BsChevronDown size={18} />
            </div>
          }
          position="center top"
          on="hover"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
        >
          <div className="w-60 fixed cursor-pointer bg-white shadow-md top-6 right-0 mt-12 flex flex-col px-6">
            <li
              className="border-b p-2 border-gray-300 py-2.5 flex items-center space-x-2"
              onClick={openModal}
            >
              <FaRegUserCircle size={22} className="text-gray-400" />
              <a className="md:text-base text-sm text-gray-400"> My Profile</a>
            </li>
            <li className="p-2 py-2.5 flex items-center space-x-2">
              <FiLogOut size={22} className="text-gray-400" />{" "}
              <span className="md:text-base text-sm text-gray-400">
                Log out
              </span>
            </li>
          </div>
        </Popup>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="sm:max-w-2xl rounded-[8px] cursor-pointer max-w-sm mx-auto bg-white border-[1px] border-[#EBEBEB] font-play">
          <form onSubmit={handleSubmit}>
            <div className="py-1 md:py-2 flex   flex-col sm:px-6 lg:px-8 sm:p-0 p-3">
              <div className="flex justify-between items-center mt-0 md:mt-2">
                <h3 className="text-2xl">Edit Profile</h3>
                <Image
                  onClick={closeModal}
                  className="cursor-pointer"
                  src={Closeicon}
                />
              </div>
              <div className="py-0 md:py-2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute bg-white shadow-md rounded-full p-1 -bottom-2 -right-2">
                    <AiOutlineCamera
                      size={32}
                      className="bg-blue-500 text-white rounded-full p-1"
                    />
                  </div>
                  <Image src={PicImg} width={86} height={86} alt="pic" />
                </div>
              </div>
              <div className="py-0 EditProfile md:py-0  space-x-4 flex justify-between">
                <div className="basis-1/2">
                  <label className="block text-sm mb-0 md:mb-1">
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                      id="firstname"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div className="basis-1/2">
                  <label className="block text-sm mb-0 md:mb-1">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                      id="lastname"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="py-0 EditProfile EditProfile md:py-0">
                <label
                  className="block text-sm mb-0 md:mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  required
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="py-1 EditProfile md:py-2">
                <label
                  className="block text-sm md:mb-2 mb-0"
                  htmlFor="username"
                >
                  Phone Number
                </label>
                <input
                  required
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="py-1 EditProfile  md:py-0">
                <p>Country</p>
              </div>
              <div className="py-0 EditProfile md:py-2">
                <div
                  className="select border relative  cursor-pointer block bg-white   px-[16px]  text-black   w-[100%] h-[40px]"
                  onClick={(e) => {
                    setVisibility(!visibility)
                    setSearch("")
                  }}
                >
                  <div className="selected-option h-full flex items-center relative justify-between">
                    <span
                      className="flex !text-[13px] gap-4 items-center"
                      title={
                        selectedOption === ""
                          ? "Select a state"
                          : selectedOption
                      }
                    >
                      {flagOption === "" ? (
                        ""
                      ) : (
                        <Image
                          width={35}
                          height={35}
                          src={flagOption}
                          alt="flag"
                        />
                      )}
                      {selectedOption === ""
                        ? "Select a state"
                        : selectedOption.length <= 20
                        ? selectedOption
                        : `${selectedOption.slice(0, 20)}...`}
                    </span>
                    <Image
                      className={`${
                        visibility
                          ? "rotate-[0deg] transition-all"
                          : "rotate-[180deg] transition-all"
                      }`}
                      width={20}
                      height={20}
                      src="/img/icon/ArrowUp 2.svg"
                      alt="icon"
                    />
                  </div>
                  {visibility && (
                    <div className="options absolute z-50 px-3 top-[50px] left-0 w-full max-h-[209px] bg-white overflow-y-scroll border-[1px] border-[#f3dcdc] ">
                      <ul>
                        {options.map(({ countryName, flagImgUrl }, index) => (
                          <li
                            key={index}
                            className={
                              selectedOption === countryName
                                ? "active-option py-2 h-[37px] mt-[10px] justify-start items-start flex border-b-[1px] text-[#131313] text-[12px] font-play font-[400] leading-[17px] w-[100%] border-[#EBEBEB]"
                                : "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                            }
                            onClick={() => {
                              setSelectedOption(countryName)
                              setflagedOption(flagImgUrl)
                            }}
                          >
                            {countryName}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="py-0 EditProfile md:py-2">
                <p>Billing Address</p>
              </div>

              <div className="py-2 EditProfile md:py-2 space-x-4 flex justify-between">
                <div className="basis-1/2">
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-0 md:mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                      id="firstnameaddress"
                      type="text"
                      required
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-0 md:mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                      id="lastnameaddress"
                      type="text"
                      required
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="py-1 EditProfile md:py-2">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="company"
                  type="text"
                  required
                  placeholder="Company Name Optional"
                />
              </div>
              <div className="py-1 EditProfile md:py-2">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="address"
                  required
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="py-1 EditProfile md:py-2 space-x-4 flex justify-between">
                <div className="basis-1/3">
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                      id="ciry"
                      required
                      type="text"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="basis-1/3 relative">
                  <select className="appearance-none w-full bg-white border text-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>State</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="basis-1/3">
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                      id="zipcode"
                      required
                      type="text"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
              </div>
              <div className="py-1 md:py-2 EditProfile">
                <button className="text-white bg-blue-500 py-2 md:py-3 px-2 w-full">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </Popup>
    </React.Fragment>
  )
}
export default DropdownUser
