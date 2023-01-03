import React, { useState } from 'react'
import Popup from "reactjs-popup";
import Image from "next/image";
import { AiOutlineClose, AiOutlineCamera } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import ImgAvatar from '../public/img/user/Avatar.png'
import PicImg from '../public/img/user/Avatar_3.png'
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
const DropdownUser = () => {

    const [open, setOpen] = useState(false)
    const [clicked, setClicked] = useState(false)
    const closeModal = () => setOpen(false)
    const clickTes = () => {
        console.log("rest")
    }
    const openModal = () => {
        setOpen(true)
        setClicked(false)
    }
    return (
        <React.Fragment>
                <div className='text-black font-medium font-play py-2 flex items-center space-x-2' onClick={() => setClicked(!clicked)}>
                    <div className='relative'>
                        <div className="w-4 h-4 bg-red-600 flex items-center justify-center absolute rounded-full text-white text-[10px] -right-1 -top-1 z-20">
                          1
                        </div>
                         <Image src={ImgAvatar} width={32} height={32} className="rounded-full" alt="avatar" />
                    </div>
                    <span> Angelina Lee</span>
                    <BsChevronDown size={18} />
                    
                </div>
                {clicked ? (
                    <ul className='bg-white p-2 mt-32 absolute right-4 w-60 text-sm font-semibold text-gray-400'>
                        <li className='border-b border-gray-300 py-2.5 flex items-center space-x-2' onClick={openModal}><FaRegUserCircle size={22} /><a> My Profile</a></li>
                        <li className='border-b border-gray-300 py-2.5 flex items-center space-x-2'><FiLogOut size={22} /> <span>Log out</span></li>
                    </ul>
                ) : null}
            

            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="max-w-2xl mx-auto bg-white shadow-md font-play">
                    <div className="py-2 flex flex-col sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center mt-2">
                            <h3 className="text-2xl">Edit Profile</h3>
                            <AiOutlineClose  size={16} onClick={closeModal}/>
                        </div>
                        <div className="py-2 flex items-center justify-center">
                            <div className='relative'>
                              <div className='absolute bg-white shadow-md rounded-full p-1 -bottom-2 -right-2'>
                                <AiOutlineCamera size={32} className="bg-blue-500 text-white rounded-full p-1" />
                              </div>
                               <Image src={PicImg} width={86} height={86} alt="pic" />
                            </div>
                            
                        </div>
                        <div className="py-2 space-x-4 flex justify-between">
                            <div className="basis-1/2">
                                <label
                                    className="block text-gray-400 text-sm mb-2"
                                >
                                    First Name
                                </label>
                                <div className="relative">
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                        id="firstname"
                                        type="text"
                                        placeholder="Enter your first name"
                                    />

                                </div>
                            </div>
                            <div className="basis-1/2">
                                <label
                                    className="block text-gray-400 text-sm mb-2"
                                >
                                    Last Name
                                </label>
                                <div className="relative">
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                        id="lastname"
                                        type="text"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <label
                                className="block text-gray-400 text-sm mb-2"
                                htmlFor="username"
                            >
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                id="email"
                                type="email"
                                placeholder="Enter Your email"
                            />
                        </div>
                        <div className="py-2">
                            <label
                                className="block text-gray-400 text-sm mb-2"
                                htmlFor="username"
                            >
                                Phone Number
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                id="phone"
                                type="text"
                                placeholder="Enter Your Phone Number"
                            />
                        </div>
                        <div className="py-2">
                            <p>Billing Address</p>
                        </div>
                        <div className="py-2">

                            <div className="inline-block relative w-full">
                                <select className="block appearance-none w-full bg-white text-gray-400 border hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
                                    <option>Select Country</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 space-x-4 flex justify-between">
                            <div className="basis-1/2">
                                <div className="relative">
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                        id="firstnameaddress"
                                        type="text"
                                        placeholder="Enter your first name"
                                    />

                                </div>
                            </div>
                            <div className="basis-1/2">
                                <div className="relative">
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                        id="lastnameaddress"
                                        type="text"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                id="company"
                                type="text"
                                placeholder="Company Name Optional"
                            />
                        </div>
                        <div className="py-2">
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                id="address"
                                type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div className="py-2 space-x-4 flex justify-between">
                            <div className="basis-1/3">
                                <div className="relative">
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                        id="ciry"
                                        type="text"
                                        placeholder="City"
                                    />

                                </div>
                            </div>
                            <div className="basis-1/3 relative">
                                <select className="appearance-none w-full bg-white border text-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option>State</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                            <div className="basis-1/3">
                                <div className="relative">
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                        id="zipcode"
                                        type="text"
                                        placeholder="Zip Code"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-2">
                            <button className="text-white bg-blue-500 py-3 px-2 w-full">Save</button>
                        </div>
                    </div>
                </div>
            </Popup>
        </React.Fragment>
    )

}
export default DropdownUser