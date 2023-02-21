import {
  ordersdata,
  optionsData,
  optionsData2,
} from "../../components/data/dataContents"
import CardProject from "../../components/card/CardProject"
import { BsSearch, BsChevronDown } from "react-icons/bs"
import CardOrder from "../../components/card/CardOrder"
import { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
const AdminDashboard = () => {
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
      <div className="p-4 pt-4 mt-20">
        <div className="flex flex-col w-full h-full">
          <div ref={wrapperRef} className="font-play">
            <p className="text-gray-400 md:text-base text-sm">Overview</p>
            <div className="py-2 inline-block min-w-full lg:flex md:justify-between md:items-center">
              <h3 className="md:text-3xl text-xl font-semibold">Orders</h3>
              <div className="flex items-center flex-wrap gap-1">
                <div className="w-28 md:w-[25%] border relative mt-2">
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
                    className="pl-10 py-2.5 outline-none w-full"
                  />
                </div>
                <div className="w-[33%] md:w-[23%] border relative mt-2">
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
                <div className="w-[30%] md:w-[25%] border relative mt-2">
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
                </div>
                <div className="w-full md:w-24 mt-2">
                  <button
                    onClick={() => router.push("/admin/create")}
                    className="bg-blue-500 text-[15px] text-white py-2.5 w-full"
                  >
                    New Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="w-full ">
              <h4 className="md:text-3xl text-xl font-semibold text-blue-500 py-4">
                Active Order
              </h4>
              <div className="flex w-full flex-wrap gap-y-4 gap-2 mt-0 items-start lg:justify-start justify-start">
                {ordersdata.map(
                  (product, index) =>
                    product.status_order == "active" && (
                      <div key={index}>
                        <CardOrder product={product} />
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="w-full">
              <h4 className="md:text-3xl text-xl font-semibold text-blue-500 py-4">
                Awaiting
              </h4>
              <div className="flex flex-wrap gap-2 gap-y-4 mt-0 items-start lg:justify-start justify-start">
                {ordersdata.map(
                  (product, index) =>
                    product.status_order == "awaiting" && (
                      <div key={index}>
                        <CardOrder product={product} />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default AdminDashboard
