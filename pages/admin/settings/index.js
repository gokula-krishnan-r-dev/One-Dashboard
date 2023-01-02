import React from "react"
import Link from "next/link"
import Image from "next/image"
const Settings = () => {
    return (
        <React.Fragment>
            <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
                <div className="flex flex-col w-full">
                    <div className="overflow-x-auto font-play">
                        <p className="text-gray-400">Settings</p>
                        <div className="py-2 inline-block min-w-full flex justify-between items-center">
                            <a className="text-4xl py-4"><Link href='/customers'>Settings</Link></a>
                        </div>
                    </div>
                    <div className="py-4 w-1/3 border p-4 bg-white">
                        <div className="py-2 flex items-center justify-between">
                            <p className="text-black text-md">My Details</p>
                            <div className="flex space-x-2">
                                <button className="py-2 text-blue-500 p-2 border px-2 text-sm">Cancel</button>
                                <button className="py-2 text-white bg-blue-500 p-2 border px-4 text-sm">Save</button>
                            </div>
                        </div>
                        <div className="py-4 w-full flex items-center justify-between ">
                            <div className="w-1/2">
                                <p className="text-black py-2.5">First Name</p>
                                <input type="text" className="border p-2" value='John' />
                            </div>
                            <div className="w-1/2">
                                <p className="text-black py-2.5">Last Name</p>
                                <input type="text" className="border p-2" value='Steady' />
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-black py-2.5">Email</p>
                            <input type="email" className="border p-2 w-full" value='johnsteady@gmail.com' />
                        </div>
                        <div className="py-2">
                            <p className="py-2">Profile Picture</p>
                            <div className="flex items-center space-x-4">
                                <Image src='/img/user/Avatar_3.png' width={79} height={70} alt="pic" />
                                <div className="w-1/2">
                                    <div class="flex justify-center">
                                        <div className="mb-3 w-full border p-2">
                                            <input type="file"
                                                id="avatar" name="avatar"
                                                accept="image/png, image/jpeg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default Settings