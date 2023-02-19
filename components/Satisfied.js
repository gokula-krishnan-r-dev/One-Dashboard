import React, { useState } from "react"
import { BsChevronDown, BsChevronUp, BsStar, BsStarHalf } from "react-icons/bs"
import DetailInvoice from "./card/DetailInvoice"
import Popup from "reactjs-popup"
import ReactStars from "react-rating-stars-component"

const Satisfied = () => {
  const [open, setOpen] = useState(false)
  const closeModal = () => setOpen(false)
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <React.Fragment>
      <div className="bg-white border shadow-sm p-3 flex flex-col items-center font-play">
        <h3 className="text-xl text-black text-center py-4">
          Are you satisfied with me delivery ?
        </h3>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-[16px] 2xl:text-[16px] xl:text-[14px] text-white py-3 md:w-52 px-4"
            onClick={() => setOpen((o) => !o)}
          >
            Yes
          </button>
          <button className="text-blue-500 text-[16px] 2xl:text-[16px] xl:text-[14px] border border-blue-500 bg-white py-3 lg:w-52 px-4">
            I still need something
          </button>
        </div>
        <p className="text-blue-500 text-center py-8">
          Order will be automatically marked complete after 3 days
        </p>
      </div>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="md:w-[750px] w-[350px] border bg-white shadow-sm flex flex-col items-center justify-center p-4 font-play">
          <p className="text-2xl text-black text-center py-2">
            Please rate your experience
          </p>
          <div className="py-2">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              value={0}
              size={41}
              isHalf={true}
              emptyIcon={
                <BsStar size={30} className="bg-blue-500 text-blue-500" />
              }
              halfIcon={<BsStarHalf size={30} />}
              fullIcon={<BsStar size={30} />}
              activeColor="#FFC100"
            />
          </div>
          <input
            type="text"
            placeholder="Share your fedbeck here"
            className="border py-3 md:w-2/3 w-full p-2"
          />
          <button className="bg-blue-500 text-white py-3 md:w-2/3 w-full mt-8">
            Share Feedback
          </button>
        </div>
      </Popup>
    </React.Fragment>
  )
}
export default Satisfied
