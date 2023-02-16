import React, { useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import DetailInvoice from "./card/DetailInvoice"
import { useSpring, animated } from "react-spring"
const Invoice = () => {
  const [clicked, setClicked] = useState(false)
  const fade = useSpring({
    opacity: clicked ? 1 : 0,
  })
  return (
    <React.Fragment>
      <div className="bg-white border shadow-sm p-3 font-play">
        <div
          className="bg-white flex flex-col w-full"
          onClick={() => setClicked(!clicked)}
        >
          <div className="flex justify-between p-2">
            <div className="flex space-x-2 items-center">
              <div className="w-[2px] h-full bg-blue-500"></div>
              <p className="text-black md:text-base text-sm font-semibold">
                Invoice
              </p>
            </div>
            <span className="text-black">
              {clicked === false ? <BsChevronDown /> : <BsChevronUp />}
            </span>
          </div>
        </div>
        <animated.div style={fade}>{clicked && <DetailInvoice />}</animated.div>
      </div>
    </React.Fragment>
  )
}
export default Invoice
