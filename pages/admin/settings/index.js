import React from "react"
import Link from "next/link"
import Image from "next/image"
import TabComponent from "../../../components/TabComponent"
const Settings = () => {
  return (
    <React.Fragment>
      <div className="p-4 pt-4 mt-20">
        <div className="overflow-x-auto font-play">
          <p className="text-gray-400 text-[13px]">Settings</p>
          <div className="py-0 inline-block min-w-full flex justify-between items-center">
            <a className="text-[25px] font-[600] py-0">
              <Link href="/customers">Settings</Link>
            </a>
          </div>
        </div>
        <TabComponent />
      </div>
    </React.Fragment>
  )
}
export default Settings
