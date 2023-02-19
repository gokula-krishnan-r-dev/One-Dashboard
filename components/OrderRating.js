import React, { useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { useSpring, animated } from "react-spring"
import CardRating from "./card/CardRating"
const OrderRating = () => {
  const [clicked, setClicked] = useState(true)
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
              <p className="text-black text-base font-semibold">Order Rating</p>
            </div>
            <span className="text-black">
              {clicked === false ? <BsChevronDown /> : <BsChevronUp />}
            </span>
          </div>
        </div>
        <animated.div style={fade}>
          {clicked ? <CardRating /> : null}
        </animated.div>
      </div>
    </React.Fragment>
  )
}
export default OrderRating
