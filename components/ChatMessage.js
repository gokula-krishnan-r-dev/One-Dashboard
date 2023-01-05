import React from "react"
import { BsSearch, BsCheckAll } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import Image from "next/image";

import { ImAttachment } from "react-icons/im";
import { RiEmotionHappyLine } from "react-icons/ri";
import { calculateOverrideValues } from "next/dist/server/font-utils";
const ChatMessage = () => {;
    return (
        <React.Fragment>   
            <div className="bg-[#FAFAFA] w-full flex relative font-play" style={{minHeight: `calc(100vh - 80px)`}}>
                <div className="sm:w-1/5 w-1/3 bg-white border-r">
                    <div className="flex items-center justify-between">
                        <h4 className="text-3xl p-4">
                            Messages
                        </h4>
                        <AiOutlineMore />
                    </div>
                    <div className="px-4 py-2">
                        <div className="relative text-gray-600 focus-within:text-gray-400 w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                    <BsSearch />
                                </button>
                            </span>
                            <input type="search" name="q" className="w-full py-3 border text-sm text-white pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
                        </div>
                        <div className="w-full flex space-x-2 pt-4 bg-gray-50 p-1 mt-2">
                            <div className="relative">
                                 <Image src='/img/user/Avatar_2.png' alt="pic" width={40} height={40} />
                                 <div className="w-2 h-2 bg-green-500 absolute rounded-full right-0 bottom-1"></div>
                            </div>
                            <div className="sm:block hidden ">
                                <div className="flex items-center justify-between">
                                    <p className="text-base">Angelina Lee</p>
                                    <span className="text-[10px] text-gray-400">10 min ago</span>
                                </div>
                                <p className="text-[12px] truncate text-gray-400">Lorem ipsum dolor sit amet, consectetur .</p>
                            </div>

                        </div>
                        <div className="w-full flex space-x-2 pt-4 p-1">
                            <div className="relative">
                                 <Image src='/img/user/Avatar_4.png' alt="pic" width={40} height={40} />
                                 <div className="w-2 h-2 bg-green-500 absolute rounded-full right-0 bottom-1"></div>
                            </div>
                            <div className="sm:block hidden ">
                                <div className="flex items-center justify-between">
                                    <p className="text-base">John Doe Mark</p>
                                    <span className="text-[10px] text-gray-400">10 min ago</span>
                                </div>
                                <p className="text-[12px] truncate text-gray-400">Lorem ipsum dolor sit amet, consectetur .</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="sm:w-5/6 w-2/3 bg-white relative">
                    <div className="w-full h-16 border-b flex items-center justify-between px-4">
                        <div className="flex space-x-2">
                        <div className="relative">
                                 <Image src='/img/user/Avatar_2.png' alt="pic" width={40} height={40} />
                                 <div className="w-2 h-2 bg-green-500 absolute rounded-full right-0 bottom-1"></div>
                            </div>
                            <div className="block">
                                <p className="text-base font-normal">Angelina Lee</p>
                                <p className="text-[12px] font-normal text-gray-400">Online</p>
                            </div>
                        </div>
                        <div className="p-2">
                            <AiOutlineMore />
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <p className="text-gray-400 text-center text-[12px] py-2">Today</p>
                            <div className="py-2 px-8 flex justify-end">
                                <p className="bg-gray-100 p-2 rounded-b-lg font-light text-sm max-w-md">consectetur adipiscing elit</p>
                            </div>
                            <div className="py-2 px-8 flex justify-end">
                                <p className="bg-gray-100 p-2 rounded-b-lg font-light text-sm max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className="text-[11px] text-gray-400 flex items-center justify-end  px-8">10.12 AM <BsCheckAll className="text-blue-500" /></div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="py-2 px-8 flex justify-start">
                                <p className="bg-blue-500 p-2.5 text-white rounded-b-lg font-light text-sm max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className="text-[11px] text-gray-400 flex items-center justify-start  px-8">10.12 AM </div>
                        </div>
                    </div>
                    <div className="w-full absolute bottom-0">

                        <form>
                            <label for="chat" className="sr-only">Your message</label>
                            <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg relative">
                                <div className="flex px-2 py-2 absolute right-20 bg-gray-50 rounded-lg">
                                    <RiEmotionHappyLine size={18} />
                                    <ImAttachment size={18} />
                                </div>
                                <textarea id="chat" rows="2" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300" placeholder="Your message..." />
                                <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                    <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
export default ChatMessage