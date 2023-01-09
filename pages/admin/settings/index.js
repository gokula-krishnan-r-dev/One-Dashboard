import React from "react"
import Link from "next/link"
import Image from "next/image"
import TabComponent from "../../../components/TabComponent"
const Settings = () => {
    return (
        <React.Fragment>
            <div className="p-4 pt-4 bg-[#FAFAFA] h-[calc(100vh-80px)]">
            <div className="overflow-x-auto font-play">
                        <p className="text-gray-400">Settings</p>
                        <div className="py-2 inline-block min-w-full flex justify-between items-center">
                            <a className="text-4xl py-4"><Link href='/customers'>Settings</Link></a>
                        </div>
                    </div>
                    <TabComponent />
            </div>

        </React.Fragment>
    )
}
export default Settings