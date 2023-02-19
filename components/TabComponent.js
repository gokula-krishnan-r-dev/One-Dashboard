import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BsChevronDown } from "react-icons/bs"
const PersonalInfo = () => {
  return (
    <React.Fragment>
      <div className="flex  rounded-[8px] flex-col lg:w-[37%] w-full font-play bg-white shadow-sm px-6 p-4">
        <div className="py-2 flex items-center justify-between">
          <p className="text-black text-[16px] pl-2 font-medium">My Details</p>
          <div className="flex space-x-2 font-normal">
            <button className="py-2 text-blue-500 p-2 border px-4 text-sm">
              Cancel
            </button>
            <button className="py-2 text-white bg-blue-500 p-2 border px-4 text-sm">
              Save
            </button>
          </div>
        </div>
        <div className="py-0 w-full flex items-center justify-between text-base font-normal gap-4">
          <div className="w-1/2">
            <p className="text-black text-[14px] py-2.5">First Name</p>
            <input
              type="text"
              placeholder="FirstName"
              className="border outline-none text-[14px] px-3 py-2 w-full"
              defaultValue={"john"}
            />
          </div>
          <div className="w-1/2">
            <p className="text-black text-[14px] py-2.5">Last Name</p>
            <input
              placeholder="LastName"
              type="text"
              className="border outline-none  text-[14px] px-3 py-2 w-full"
              defaultValue={"Sam"}
            />
          </div>
        </div>
        <div className="py-2 text-base font-normal">
          <p className="text-black text-[14px] py-2.5">Email</p>
          <input
            placeholder="Email"
            type="email"
            className="border outline-none text-[14px]  px-3 py-2 w-full"
            defaultValue={"johnsteady@gmail.com"}
          />
        </div>
        <div className="py-2">
          <p className="py-2 text-[14px] font-normal">Profile Picture</p>
          <div className="flex items-center space-x-4">
            <Image
              src="/img/user/Avatar_3.png"
              width={60}
              height={60}
              alt="pic"
            />
            <div className="border flex sm:text-sm text-[12px]">
              <input
                type="text"
                className="w-full  text-[14px]  px-3 py-2"
                placeholder="No file selected"
              />
              <button className="bg-blue-500 text-[14px] text-white w-32">
                Choose File
              </button>
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
      <p className="py-2 text-black">This Setting Account</p>
    </div>
  )
}

const EmailSetting = () => {
  return (
    <div className="text-white py-6">
      <p className="py-2 text-black">Component Email</p>
    </div>
  )
}

const SecuritySetting = () => {
  return (
    <div className="text-white py-6">
      <p className="py-2 text-black">Component Security</p>
    </div>
  )
}

const SettingNotification = () => {
  return (
    <div className="text-white py-6">
      <p className="py-2 text-black">Notifications</p>
    </div>
  )
}

const SettingStripe = () => {
  return (
    <div className="text-white py-6">
      <p className="py-2 text-black">Strip</p>
    </div>
  )
}
const options = [
  { option: "Personal Information", value: "Personal Information" },
  { option: "Accounts", value: "Accounts" },
  { option: "Emails", value: "Emails" },
  { option: "Security", value: "Security" },
  { option: "Notifications", value: "Notifications" },
  { option: "Stripe", value: "Stripe" },
]

const TabComponent = () => {
  //console.log(owner)
  const [activeTab, setActiveTab] = useState("tab1")
  const [visibility, setVisibility] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const handleTab1 = () => {
    setActiveTab("tab1")
  }
  const handleTab2 = () => {
    setActiveTab("tab2")
  }

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
      <div className="hidden lg:flex pb-2 flex-wrap items-center md:w-2/3 gap-6 text-gray-500 font-play md:text-lg  font-medium">
        <p
          onClick={handleTab1}
          className={
            activeTab === "tab1"
              ? "active text-black border-b-2 text-[14px] border-gray-400 py-2"
              : "text-[14px]"
          }
        >
          Personal Information
        </p>
        <p
          onClick={handleTab2}
          className={
            activeTab === "tab2"
              ? "active text-black text-[14px] border-b-2 border-gray-400  py-2"
              : " text-[14px]"
          }
        >
          Accounts
        </p>

        <p
          onClick={handleTab3}
          className={
            activeTab === "tab3"
              ? "active text-black text-[14px] border-b-2 border-gray-400  py-2"
              : " text-[14px]"
          }
        >
          Emails
        </p>
        <p
          onClick={handleTab4}
          className={
            activeTab === "tab4"
              ? "active text-black text-[14px] border-b-2 border-gray-400 py-2"
              : " text-[14px]"
          }
        >
          Security
        </p>

        <p
          onClick={handleTab5}
          className={
            activeTab === "tab5"
              ? "active text-black text-[14px] border-b-2 border-gray-400 py-2"
              : " text-[14px]"
          }
        >
          Notifications
        </p>

        <p
          onClick={handleTab6}
          className={
            activeTab === "tab6"
              ? "active text-black text-[14px] border-b-2 border-gray-400 py-2"
              : " text-[14px]"
          }
        >
          Stripe
        </p>
      </div>

      <div className="lg:hidden block w-full relative mt-2 mb-4">
        {/* <select className="block appearance-none w-full bg-white px-4 py-3.5">
          <option>Personal Information</option>
          <option>Accounts</option>
          <option>Emails</option>
          <option>Security</option>
          <option>Notifications</option>
          <option>Stripe</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <BsChevronDown />
        </div> */}
        <div
          className="select relative  cursor-pointer block bg-white  w-full px-[16px]  text-black  h-[45px]"
          onClick={(e) => {
            setVisibility(!visibility)
          }}
        >
          <div className="selected-option  h-full flex items-center relative justify-between ">
            <span
              className="flex !text-[13px] gap-4 items-center"
              title={selectedOption === "" ? "All" : selectedOption}
            >
              {selectedOption === ""
                ? "All"
                : selectedOption.length <= 20
                ? selectedOption
                : `${selectedOption.slice(0, 20)}...`}
            </span>
            <Image
              className={`${
                visibility
                  ? "rotate-[0deg] transition-all"
                  : "rotate-[180deg] transition-all"
              }`}
              width={20}
              height={20}
              src="/img/icon/ArrowUp 2.svg"
              alt="icon"
            />
          </div>
          {visibility && (
            <div className="options absolute  px-3 top-[50px] left-0 w-full max-h-[209px] bg-white overflow-y-scroll border-[1px] border-[#f3dcdc]  ">
              <ul>
                {options.map(({ option }, index) => (
                  <li
                    key={index}
                    className={
                      selectedOption === option
                        ? "active-option py-2 h-[37px] mt-[10px] justify-start items-start flex border-b-[1px] text-[#131313] text-[12px] font-play font-[400] leading-[17px] w-[100%] border-[#EBEBEB]"
                        : "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                    }
                    onClick={() => {
                      setSelectedOption(option)
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="2xl:w-2/3 w-full mt-2">
        {activeTab === "tab1" ? (
          <PersonalInfo />
        ) : activeTab === "tab2" ? (
          <Account />
        ) : activeTab === "tab4" ? (
          <SecuritySetting />
        ) : activeTab === "tab5" ? (
          <SettingNotification />
        ) : activeTab === "tab6" ? (
          <SettingStripe />
        ) : (
          <EmailSetting />
        )}
      </div>
    </React.Fragment>
  )
}

export default TabComponent
