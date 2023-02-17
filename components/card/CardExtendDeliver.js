import React, { useState } from "react"
import Popup from "reactjs-popup"
import { BsChevronDown } from "react-icons/bs"
import { AiOutlineClose, AiOutlineSmile, AiOutlinePlus } from "react-icons/ai"
import Image from "next/image"
import { Days } from "../data/dataContents"
import CloseIcon from "../../public/img/icon/Close Icon.svg"
const CardExtendDeliver = () => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const [visibility, setVisibility] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const [textarea, setteatarea] = useState("")

  return (
    <React.Fragment>
      <div className="bg-white font-play border">
        <div className="p-4 flex justify-between">
          <div className="text-center">
            <h3 className="text-2xl text-black py-1 font-semibold">02</h3>
            <h3 className="text-gray-400 text-xl py-1">Days</h3>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-black py-1 font-semibold">26</h3>
            <h3 className="text-gray-400 text-xl py-1">Hours</h3>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-black py-1 font-semibold">30</h3>
            <h3 className="text-gray-400 text-xl py-1">Minutes</h3>
          </div>
          <div className="text-center">
            <h3 className="text-2xl text-black py-1 font-semibold">42</h3>
            <h3 className="text-gray-400 text-xl py-1">Seconds</h3>
          </div>
        </div>
        <div className="p-4">
          <button
            className="text-blue-500 border border-blue-500 py-3 px-3 w-full"
            onClick={() => setOpen(!open)}
          >
            Extends Delivery Date
          </button>
        </div>
      </div>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="w-[678px] rounded-[10px]  bg-white shadow-md flex flex-col items-center p-6 font-play">
          <div className="w-full flex justify-between pb-4">
            <p className="text-black text-xl font-semibold">
              Request: Extend Delivery Date
            </p>
            <Image
              className="cursor-pointer"
              src={CloseIcon}
              onClick={closeModal}
              alt="Close"
            />
          </div>
          <div className="w-full">
            <p className="text-black text-xl">
              How many days do you want to add to original date?
            </p>
          </div>
          <div className="flex w-full mt-4 mb-4">
            <div className="inline-block relative w-[96px]">
              <div
                className="select border relative  cursor-pointer block bg-white   px-[16px]  text-black   w-[100%] h-[40px]"
                onClick={(e) => {
                  setVisibility(!visibility)
                }}
              >
                <div className="selected-option h-full flex items-center relative justify-between">
                  <span
                    className="flex !text-[13px] gap-4 items-center"
                    title={selectedOption === "" ? "1days" : selectedOption}
                  >
                    {selectedOption === ""
                      ? "1days"
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
                      {Days.map(({ option }, index) => (
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
          </div>
          <div className="w-full border-t-[1px] border-[#DBDBDB]">
            <p className="text-black text-xl pt-2 pb-2">
              Help the buyer understand
            </p>
          </div>
          <div className="w-full">
            <div className="w-full relative">
              <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                <span className="text-gray-400 font-light">{textarea}/400</span>
                <AiOutlineSmile size={24} />
              </div>
              <textarea
                maxLength={400}
                onChange={(e) => setteatarea(e.target.value.length)}
                className="w-full px-3 p-2 mt-2 text-gray-700 border rounded-lg focus:outline-none"
                placeholder="Explain why you need more time"
                rows="6"
              />
            </div>

            <div className="flex space-x-2 justify-end mt-2">
              <button className="bg-white text-blue-500 border border-blue-500 p-2.5 px-6">
                Cancel
              </button>
              <button className="bg-blue-500 text-white p-2.5 px-6">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </React.Fragment>
  )
}
export default CardExtendDeliver
