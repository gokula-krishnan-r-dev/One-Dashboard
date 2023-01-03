import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSmile, AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { BiLike } from "react-icons/bi"
import { CiShop } from "react-icons/ci";
import DetailInvoice from './card/DetailInvoice';
import { GrAttachment } from "react-icons/gr";
import Popup from "reactjs-popup";
import ReactStars from "react-rating-stars-component";

const WorkDelivery = () => {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
    const [clicked, setClicked] = useState(false);
    return (
        <React.Fragment>
            <div className='bg-white border shadow-sm p-3 flex flex-col items-center font-play'>
                <div className='flex space-x-4'>
                    <button className='bg-blue-500 text-white py-3 w-56 px-4' onClick={() => setOpen(o => !o)}>Deliver Now</button>
                    <button className='text-blue-500 border border-blue-500 bg-white py-3 w-56 px-4'>Create an Offer</button>
                </div>
            </div>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className='w-[678px]  bg-white shadow-md flex flex-col items-center p-6 font-play'>
                    <div className='w-full flex justify-between pb-4'>
                        <p className='text-black text-xl font-semibold'>Deliver your work</p>
                        <AiOutlineClose size={24} onClick={closeModal} />
                    </div>
                    <div className='w-full'>
                        <button className='flex space-x-2 items-center' onClick={() => setClicked(!clicked)}>
                            <span className='text-sm text-black font-semibold'>Use a quick response</span>
                            {clicked === false ? <BsChevronDown /> : <BsChevronUp />}
                        </button>
                        {clicked ? (
                            <div className='w-full py-1 flex space-x-2 items-center'>
                                <button className='text-gray-400 border bg-white p-1 text-[12px] flex items-center space-x-1'><BiLike /><span>thanks for your order</span></button>
                                <button className='text-gray-400 border bg-white p-1 text-[12px] flex items-center space-x-1'><CiShop /><span>Here is your delivery.</span></button>
                                <button className='text-blue-500 border bg-white p-1 text-[12px] flex items-center space-x-1'><AiOutlinePlus className='text-blue-600' /><span>Add New.</span></button>
                            </div>
                        ) : null}

                        <div className='w-full relative'>
                            <div className='absolute bottom-2 right-2 flex items-center space-x-2'>
                                <span className='text-gray-400 font-light'>0/2.500</span>
                                <AiOutlineSmile size={24} />

                            </div>
                            <textarea className="w-full px-3 p-2 mt-2 text-gray-700 border rounded-lg focus:outline-none" placeholder='Describe your delivery in details' rows="5" />
                        </div>
                        <div className='py-2 flex space-x-2'>
                            <a className='bg-gray-200 py-2 px-2 flex space-x-2 text-black text-[12px]'><GrAttachment /><span>Uploud Work</span></a>
                            <a className='bg-gray-200 py-2 px-2 flex space-x-2 text-black text-[12px]'><GrAttachment /><span>Uploud Source Files</span></a>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-blue-500 text-white p-2.5 px-6'>Deliver Work</button>
                        </div>
                    </div>

                </div>
            </Popup>

        </React.Fragment>
    )

}
export default WorkDelivery
