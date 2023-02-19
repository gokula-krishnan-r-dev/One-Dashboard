import {
  optionsData,
  optionsData2,
  products,
} from "../../components/data/dataContents"
import CardProject from "../../components/card/CardProject"
import { BsSearch, BsChevronDown } from "react-icons/bs"
import { useRouter } from "next/router"
import { SiGooglechat } from "react-icons/si"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
//BsSearch

const Client = () => {
  const router = new useRouter()
  const [visibility, setVisibility] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const [weekvisibility, setWeekVisibility] = useState(false)
  const [weekselectedOption, weeksetSelectedOption] = useState("")
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisibility(false)
          setWeekVisibility(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  return (
    <React.Fragment>
      <div className="p-4 pt-4 overflow-y-auto mt-20">
        {/* <div className="p-4 fixed  bottom-2 right-2 bg-blue-600 rounded-full">
          <SiGooglechat className="text-white" size={32} />
        </div> */}
        <div className="flex flex-col w-full">
          <div className=" font-play">
            <p className="text-gray-400">Overview</p>
            <div className="py-2 block w-full md:flex md:justify-between md:items-center md:gap-2 flex-wrap">
              <div className="lg:block lg:w-44 flex items-center justify-between w-full">
                <h3 className="md:text-3xl text-xl font-semibold">
                  My Projects
                </h3>
                <div className="block lg:hidden md:w-1/3 w-1/2 mt-2">
                  <button
                    className="bg-blue-500 text-[14px] md:text-[15px]  text-white py-2.5 w-full"
                    onClick={() => router.push("/client/create")}
                  >
                    New Project Request
                  </button>
                </div>
              </div>

              <div
                ref={wrapperRef}
                className="w-full lg:w-[60%]  flex justify-between items-center gap-2 flex-wrap md:flex-nowrap"
              >
                <div className="w-[100%] bg-[white] md:w-[38%] border relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <BsSearch />
                    </button>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 py-2.5 w-full outline-none"
                  />
                </div>
                <div className="w-[48%] md:w-[21%] border relative mt-2">
                  <div
                    className="select relative cursor-pointer block bg-white  w-full px-[16px]  text-black  h-[45px]"
                    onClick={(e) => {
                      setWeekVisibility(!weekvisibility)
                      setVisibility(false)
                    }}
                  >
                    <div className="selected-option h-full flex items-center relative justify-between  ">
                      <span
                        className="flex !text-[13px] gap-4 items-center"
                        title={
                          weekselectedOption === ""
                            ? "This Week"
                            : weekselectedOption
                        }
                      >
                        {weekselectedOption === ""
                          ? "This Week"
                          : weekselectedOption.length <= 20
                          ? weekselectedOption
                          : `${weekselectedOption.slice(0, 20)}...`}
                      </span>
                      <Image
                        className={`${
                          weekvisibility
                            ? "rotate-[0deg] transition-all"
                            : "rotate-[180deg] transition-all"
                        }`}
                        width={20}
                        height={20}
                        src="/img/icon/ArrowUp 2.svg"
                        alt="icon"
                      />
                    </div>
                    {weekvisibility && (
                      <div className="options absolute  px-3 top-[50px] left-0 w-full max-h-[209px] bg-white overflow-y-scroll border-[1px] border-[#f3dcdc]  ">
                        <ul>
                          {optionsData2.map(({ option }, index) => (
                            <li
                              key={index}
                              className={
                                selectedOption === option
                                  ? "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                                  : "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                              }
                              onClick={() => {
                                weeksetSelectedOption(option)
                              }}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-[48%] md:w-[25%]   border relative mt-2">
                  <div
                    className="select relative  cursor-pointer block bg-white  w-full px-[16px]  text-black  h-[45px]"
                    onClick={(e) => {
                      setVisibility(!visibility)
                      setWeekVisibility(false)
                    }}
                  >
                    <div className="selected-option  h-full flex items-center relative justify-between ">
                      <span
                        className="flex !text-[13px] gap-4 items-center"
                        title={selectedOption === "" ? "All" : selectedOption}
                      >
                        {selectedOption === ""
                          ? "All"
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
                      <div className="options absolute  px-3 top-[50px] left-0 w-full max-h-[209px] bg-white overflow-y-scroll border-[1px] border-[#f3dcdc]  ">
                        <ul>
                          {optionsData.map(({ option }, index) => (
                            <li
                              key={index}
                              className={
                                selectedOption === option
                                  ? "active-option py-2 h-[37px] mt-[10px] justify-start items-start flex border-b-[1px] text-[#131313] text-[12px] font-play font-[400] leading-[17px] w-[100%] border-[#EBEBEB]"
                                  : "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                              }
                              onClick={() => {
                                setSelectedOption(option)
                              }}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <BsChevronDown className="text-white font-medium" />
                  </div>
                </div>
                <div className="w-full hidden lg:block md:w-52 mt-2">
                  <button
                    className="bg-blue-500 text-[14px] text-white py-2.5 w-full"
                    onClick={() => router.push("/client/create")}
                  >
                    New Project Request
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="flex w-full flex-wrap gap-2 mt-6 items-center lg:justify-start justify-center">
              {products.map((product, index) => (
                <div key={index}>
                  <CardProject product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Client
