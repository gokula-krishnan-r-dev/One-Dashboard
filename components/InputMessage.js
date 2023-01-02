import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import DetailInvoice from './card/DetailInvoice';
import { ImAttachment } from "react-icons/im";
import { RiEmotionHappyLine } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
//SlEnergy
const InputMessage = () => {
    const [clicked, setClicked] = useState(true);

    return (
        <>
            <div className='bg-white border shadow-sm p-3 font-play'>
                <div className="bg-white flex flex-col w-full" onClick={() => setClicked(!clicked)}>
                    <div className="flex justify-between p-2">
                        <div className='flex space-x-2 items-center'>
                            <div className='w-[2px] h-full bg-blue-500'></div>
                            <p className="text-black font-medium text-sm">Send Message</p>
                        </div>
                        <span className="text-black">{clicked === false ? <BsChevronDown /> : <BsChevronUp />}</span>
                    </div>
                </div>
                {clicked ? (
                    <React.Fragment>

                        <form className='mt-4'>
                            <div className="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div className="px-4 py-2 bg-white rounded-t-lg">
                                    <textarea id="comment" rows="6" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 pl-2 p-2" placeholder="Type your message here..." required />
                                </div>
                                <div className="flex items-center justify-end px-3 py-2 bg-white">
                                    <div className="flex items-center pl-0 space-x-1 sm:pl-2">
                                        <span className="text-gray-400">0 / 2500</span>
                                        <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <RiEmotionHappyLine size={20}/>
                                            <span className="sr-only">Attach file</span>
                                        </button>

                                        <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <ImAttachment  size={20}/>
                                            <span className="sr-only">Attach file</span>
                                        </button>
                                        <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                            <SlEnergy size={20} />
                                            <span className="sr-only">Upload image</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <button className='border border-blue-500 bg-white text-blue-500 py-2.5 px-6'>Send</button>
                            </div>
                        </form>

                    </React.Fragment>
                ) : null}
            </div>

        </>
    )

}
export default InputMessage
