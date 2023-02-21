import React, { useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import DetailInvoice from "./card/DetailInvoice"
import { ImAttachment } from "react-icons/im"
import { RiEmotionHappyLine } from "react-icons/ri"
import { SlEnergy } from "react-icons/sl"
import Image from "next/image"
import sendfileicon from "../public/img/icon/sendfileicon.svg"
import { useSpring, animated } from "react-spring"
const InputMessage = () => {
  const [clicked, setClicked] = useState(true)
  const [textvalue, setTextvalue] = useState("0")
  const fade = useSpring({
    opacity: clicked ? 1 : 0,
  })

  return (
    <React.Fragment>
      <div className="bg-white border shadow-sm xl:px-3 px-3 py-3 xl:py-1 2xl:py-3 font-play">
        <div
          className="bg-white flex flex-col w-full"
          onClick={() => setClicked(!clicked)}
        >
          <div className="flex justify-between p-2">
            <div className="flex space-x-2 items-center">
              <div className="w-[2px] h-full bg-blue-500"></div>
              <p className="text-black 2xl:text-[16px] xl:text-[13px] text-base font-semibold">
                Send Message
              </p>
            </div>
            <span className="text-black">
              {clicked === false ? <BsChevronDown /> : <BsChevronUp />}
            </span>
          </div>
        </div>
        <animated.div style={fade}>
          {clicked ? (
            <React.Fragment>
              <form className="mt-4 pl-2">
                <div className="w-[98%]  mb-4 border border-gray-200 bg-gray-50 ">
                  <div className="px-0  py-2 bg-white rounded-t-lg">
                    <textarea
                      maxLength={2500}
                      onChange={(e) => setTextvalue(e.target.value.length)}
                      id="comment"
                      rows="6"
                      className="w-full px-0 text-[16px] font-[400] text-gray-900 bg-white border-0  focus:ring-0  outline-none  pl-2 p-2"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>
                  <div className="flex items-center justify-end px-3 py-2 bg-white">
                    <div className="flex items-center pl-0 space-x-1 sm:pl-2">
                      <span className="text-gray-400">{textvalue} / 2500</span>
                      <button
                        type="button"
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        <RiEmotionHappyLine size={20} />
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        <Image src={sendfileicon} alt="icon" />
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                      >
                        <SlEnergy size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <button className="border border-blue-500 bg-white text-blue-500 py-2.5 px-6">
                    Send
                  </button>
                </div>
              </form>
            </React.Fragment>
          ) : null}
        </animated.div>
      </div>
    </React.Fragment>
  )
}
export default InputMessage
