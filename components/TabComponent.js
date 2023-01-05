import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const PersonalInfo = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col md:w-1/2 w-full font-play bg-white shadow-sm p-4">

                <div className="py-2 flex items-center justify-between">
                    <p className="text-black text-xl font-medium">My Details</p>
                    <div className="flex space-x-2 font-normal">
                        <button className="py-2 text-blue-500 p-2 border px-2 text-sm">Cancel</button>
                        <button className="py-2 text-white bg-blue-500 p-2 border px-4 text-sm">Save</button>
                    </div>
                </div>
                <div className="py-4 w-full md:flex md:items-center md:justify-between text-base font-normal gap-4">
                    <div className="md:w-1/2 w-full">
                        <p className="text-black py-2.5">First Name</p>
                        <input type="text" className="border p-3 w-full" value='John' />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <p className="text-black py-2.5">Last Name</p>
                        <input type="text" className="border p-3 w-full" value='Steady' />
                    </div>
                </div>
                <div className="py-2 text-base font-normal">
                    <p className="text-black py-2.5">Email</p>
                    <input type="email" className="border p-3 w-full" value='johnsteady@gmail.com' />
                </div>
                <div className="py-2">
                    <p className="py-2 text-base font-normal">Profile Picture</p>
                    <div className="flex items-center space-x-4">
                        <Image src='/img/user/Avatar_3.png' width={79} height={70} alt="pic" />
                         <div className="border flex sm:text-sm text-[12px]">
                            <input type="text" className="w-full p-3" placeholder="No file selected" />
                            <button className="bg-blue-500 text-white w-32">Choose File</button>
                         </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const Account = () => {
    return (
        <div className="text-black overflow-y-auto h-36 w-96">
            <p className='py-2 text-black'>This Setting Account</p>
        </div>
    )
}

const EmailSetting = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Component Email</p>
        </div>
    )
}

const SecuritySetting = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Component Security</p>
        </div>
    )
}

const SettingNotification = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Notifications</p>
        </div>
    )
}

const SettingStripe = () => {
    return (
        <div className="text-white py-6">
            <p className='py-2 text-black'>Strip</p>
        </div>
    )
}

const TabComponent = () => {
    //console.log(owner)
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };

    const handleTab3 = () => {
        setActiveTab("tab3")
    }
    const handleTab4 = () => {
        setActiveTab("tab4")
    }

    const handleTab5 = () => {
        setActiveTab("tab5")
    }

    const handleTab6 = () => {
        setActiveTab("tab6")
    }


    return (
        <React.Fragment>

            <div className="flex flex-wrap items-center md:w-2/3 gap-4 text-gray-500 font-play md:text-lg text-base font-medium">
                <p onClick={handleTab1}
                    className={activeTab === "tab1" ? "active text-black border-b-2 border-gray-400 py-2" : ""}
                >
                    Personal Information
                </p>
                <p
                    onClick={handleTab2}
                    className={activeTab === "tab2" ? "active text-black border-b-2 border-gray-400  py-2" : ""}
                >
                    Accounts
                </p>

                <p
                    onClick={handleTab3}
                    className={activeTab === "tab3" ? "active text-black border-b-2 border-gray-400  py-2" : ""}
                >
                    Emails
                </p>
                <p
                    onClick={handleTab4}
                    className={activeTab === "tab4" ? "active text-black border-b-2 border-gray-400 py-2" : ""}
                >
                    Security
                </p>

                <p
                    onClick={handleTab5}
                    className={activeTab === "tab5" ? "active text-black border-b-2 border-gray-400 py-2" : ""}
                >
                    Notifications
                </p>

                <p
                    onClick={handleTab6}
                    className={activeTab === "tab6" ? "active text-black border-b-2 border-gray-400 py-2" : ""}
                >
                    Stripe
                </p>
            </div>
            <div className='lg:w-2/3 w-full mt-2'>
                {activeTab === "tab1" ? <PersonalInfo /> : activeTab === "tab2" ? <Account /> : activeTab === "tab4" ? <SecuritySetting /> : activeTab === "tab5" ? <SettingNotification /> : activeTab === "tab6" ? <SettingStripe /> : <EmailSetting />}
            </div>

        </React.Fragment>
    );
}

export default TabComponent