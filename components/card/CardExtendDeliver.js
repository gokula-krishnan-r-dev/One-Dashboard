import React, { useState } from "react"
import Popup from "reactjs-popup";
import { BsChevronDown } from "react-icons/bs"
import { AiOutlineClose, AiOutlineSmile, AiOutlinePlus } from "react-icons/ai";
const CardExtendDeliver = () => {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false)
    return (
        <React.Fragment >
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
                <button className="text-blue-500 border border-blue-500 py-3 px-3 w-full" onClick={() => setOpen(!open)}>Extends Delivery Date</button>
                </div>
            </div>

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className='w-[678px]  bg-white shadow-md flex flex-col items-center p-6 font-play'>
                    <div className='w-full flex justify-between pb-4'>
                        <p className='text-black text-xl font-semibold'>Request: Extend Delivery Date</p>
                        <AiOutlineClose size={24} onClick={closeModal} />
                    </div>
                    <div className="w-full">
                        <p className="text-black text-xl">How many days do you want to add to original date?</p>
                    </div>
                    <div className="flex w-full mt-4 mb-4">

                <div className="inline-block relative w-16">
                        <select className="block appearance-none w-full text-gray-400 border px-2 py-1 text-[12px]">
                            <option>1 days</option>
                            <option>2 days</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <BsChevronDown size={12} className="text-black font-medium" />
                        </div>
                        </div>
                    </div>
                    <div className="w-full border-t-2 border-gray-200">
                        <p className="text-black text-xl pt-2 pb-2">Help the buyer understand</p>
                    </div>
                    <div className='w-full'>
                      
                        <div className='w-full relative'>
                            <div className='absolute bottom-2 right-2 flex items-center space-x-2'>
                                <span className='text-gray-400 font-light'>0/2.500</span>
                                <AiOutlineSmile size={24} />

                            </div>
                            <textarea className="w-full px-3 p-2 mt-2 text-gray-700 border rounded-lg focus:outline-none" placeholder='Explain why you need more time' rows="6" />
                        </div>
                       
                        <div className='flex space-x-2 justify-end mt-2'>

                            <button className='bg-white text-blue-500 border border-blue-500 p-2.5 px-6'>Cancel</button>
                            <button className='bg-blue-500 text-white p-2.5 px-6'>Send Request</button>
                        </div>
                    </div>

                </div>
            </Popup>
        </React.Fragment>
    )

}
export default CardExtendDeliver