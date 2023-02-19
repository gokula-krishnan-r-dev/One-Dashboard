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
  const [statevisibility, setStateVisibility] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const [stateselectedOption, setStateSelectedOption] = useState("")
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
  const options1 = [
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
              <BsChevronDown size={18} className="md:block hidden" />
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
        <div className="sm:max-w-[550px]  rounded-[8px] cursor-pointer max-w-[90%] mx-auto bg-white border-[1px] border-[#EBEBEB] font-play">
          <form onSubmit={handleSubmit}>
            <div className="py-1 md:py-1 flex EditProfile--gap   flex-col sm:px-6 lg:px-8 sm:p-0 p-3">
              <div className="flex justify-between items-center mt-0 md:mt-2">
                <h3 className="text-[18px] font-[600] text-[#131313]">
                  Edit Profile
                </h3>
                <Image
                  onClick={closeModal}
                  className="cursor-pointer "
                  src={Closeicon}
                />
              </div>
              <div className="py-0 md:py-2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute bg-white shadow-md rounded-full p-1 -bottom-2 -right-2">
                    <AiOutlineCamera
                      size={25}
                      className="bg-blue-500 EditProfile--subimg   text-white rounded-full p-1"
                    />
                  </div>
                  <Image
                    src={PicImg}
                    className="EditProfile--img"
                    width={76}
                    height={76}
                    alt="pic"
                  />
                </div>
              </div>
              <div className="py-1 EditProfile  md:py-1  space-x-5 flex justify-between">
                <div className="basis-1/2">
                  <label className="block text-sm font-[500] font-play mb-0 md:mb-0">
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full h-8 px-3 text-gray-700 mb-0 leading-tight focus:outline-none text-[14px] focus:shadow-outline placeholder-gray-300"
                      id="firstname"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div className="basis-1/2">
                  <label className="block font-[500] font-play text-sm mb-0 md:mb-0">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      className="appearance-none   border rounded w-full h-8 px-3 text-gray-700 mb-0 leading-tight focus:outline-none text-[14px] focus:shadow-outline placeholder-gray-300"
                      id="lastname"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="py-1 EditProfile EditProfile md:py-0">
                <label
                  className="block text-sm font-[500] font-play mb-0 md:mb-1"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  required
                  className="appearance-none border rounded text-[14px] w-full h-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="py-1 EditProfile md:py-2 EditProfile--gap">
                <label
                  className="block text-sm font-[500] font-play md:mb-1 mb-0"
                  htmlFor="username"
                >
                  Phone Number
                </label>
                <input
                  required
                  className="appearance-none border rounded text-[14px] w-full h-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="py-1 text-sm EditProfile font-[500] font-play  md:py-0">
                <p>Country</p>
              </div>
              <div className="py-1 EditProfile md:py-2">
                <div
                  className="select border relative  cursor-pointer block bg-white   px-[16px]  text-black   w-[100%] text-[14px] h-8"
                  onClick={(e) => {
                    setVisibility(!visibility)
                    setSearch("")
                  }}
                >
                  <div className="selected-option h-full flex items-center relative justify-between">
                    <span
                      className="flex appearance-none  rounded w-full    mb-0 leading-tight !text-gray-700 focus:outline-none focus:shadow-outline  gap-4 items-center"
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
                    <div className="options absolute z-50 px-3 top-[40px] left-0 w-full max-h-[209px] bg-white overflow-y-scroll border-[1px] border-[#f3dcdc] ">
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
              <div className="py-1 font-[500]  font-play text-sm EditProfile md:py-1">
                <p>Billing Address</p>
              </div>

              <div className="py-2 EditProfile md:py-0 space-x-4 flex justify-between">
                <div className="basis-1/2">
                  <div className="relative">
                    <input
                      className="appearance-none border text-[14px] rounded w-full h-8 px-3 text-gray-700  mb-0 md:mb-0 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
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
                      className="appearance-none text-[14px] border rounded w-full h-8 px-3 text-gray-700 mb-0 md:mb-0 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
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
                  className="appearance-none text-[14px] border rounded w-full h-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="company"
                  type="text"
                  required
                  placeholder="Company Name Optional"
                />
              </div>
              <div className="py-1 EditProfile md:py-1">
                <input
                  className="appearance-none text-[14px] border rounded w-full h-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                  id="address"
                  required
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="py-1 EditProfile md:py-1 space-x-4 flex justify-between">
                <div className="basis-1/3">
                  <div className="relative">
                    <input
                      className="appearance-none border rounded w-full h-8 px-3 text-gray-700 mb-3 leading-tight focus:outline-none text-[14px] focus:shadow-outline placeholder-gray-300"
                      id="ciry"
                      required
                      type="text"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="basis-1/3 relative">
                  <div
                    className="select border relative  cursor-pointer block bg-white   px-[16px]  text-black   w-[100%] h-8"
                    onClick={(e) => {
                      setStateVisibility(!statevisibility)
                    }}
                  >
                    <div className="selected-option h-full flex items-center relative justify-between">
                      <span
                        className="flex !text-[13px] gap-1 items-center"
                        title={
                          stateselectedOption === ""
                            ? "state"
                            : stateselectedOption
                        }
                      >
                        {stateselectedOption === ""
                          ? "state"
                          : stateselectedOption.length <= 20
                          ? stateselectedOption
                          : `${stateselectedOption.slice(0, 20)}...`}
                      </span>
                      <Image
                        className={`${
                          statevisibility
                            ? "rotate-[0deg] transition-all"
                            : "rotate-[180deg] transition-all"
                        }`}
                        width={20}
                        height={20}
                        src="/img/icon/ArrowUp 2.svg"
                        alt="icon"
                      />
                    </div>
                    {statevisibility && (
                      <div className="options absolute z-50 px-3 top-[35px] left-0 w-full max-h-[100px] bg-white overflow-y-scroll border-[1px] border-[#f3dcdc] ">
                        <ul>
                          {options1.map(
                            ({ countryName, flagImgUrl }, index) => (
                              <li
                                key={index}
                                className={
                                  stateselectedOption === countryName
                                    ? "active-option py-2 h-[37px] mt-[10px] justify-start items-start flex border-b-[1px] text-[#131313] text-[12px] font-play font-[400] leading-[17px] w-[100%] border-[#EBEBEB]"
                                    : "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                                }
                                onClick={() => {
                                  setStateSelectedOption(countryName)
                                }}
                              >
                                {countryName}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="basis-1/3">
                  <div className="relative">
                    <input
                      className="appearance-none text-[14px] border rounded w-full h-8 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                      id="zipcode"
                      required
                      type="text"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
              </div>
              <div className="py-1 md:py-2 mb-2 EditProfile">
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
