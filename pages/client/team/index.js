import Image from "next/image"
import { members } from "../../../components/data/dataContents"
import { AddMemberData } from "../../../components/data/dataContents"
import { AiOutlinePlus, AiOutlineClose, AiOutlineMore } from "react-icons/ai"
import { picImg } from "../../../public/img/user/Avatar_team.png"
import Popup from "reactjs-popup"
import React, { useState } from "react"
import Closeicon from "../../../public/img/icon/Close Icon.svg"

const Team = () => {
  const [open, setOpen] = useState(false)
  const [removeopen, setremoveOpen] = useState(false)
  const [removeopen1, setremoveOpen1] = useState(false)
  console.log("🚀 ~ file: index.js:13 ~ Team ~ remo̥veopen:", removeopen)
  const closeModal = () => {
    setOpen(false)
    setremoveOpen(false)
  }

  return (
    <React.Fragment>
      <div className="flex gap-4 p-4 pt-4 mt-20 font-play overflow-y-auto">
        <div className="flex flex-col w-full   p-2">
          <p className="text-gray-400">Team</p>
          <div className="overflow-x-auto py-2 sm:flex sm:items-center sm:justify-between">
            <h2 className="md:text-3xl text-xl font-semibold">
              Team Member(8)
            </h2>
            <button
              className="px-4 py-2 text-[14px] bg-blue-500 text-white flex items-center space-x-2 sm:mt-0 mt-4"
              onClick={() => setOpen((o) => !o)}
            >
              <AiOutlinePlus size={24} />
              <span>Add Member</span>
            </button>
          </div>
          <div className="overflow-x-auto bg-transparent md:border-[1px] border-[#EBEBEB] md:bg-white p-2">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 hidden lg:block">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="text-lg font-bold  text-back font-bold px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4 text-left"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-bold text-gray-900 px-6 py-4 text-left flex justify-center items-center"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member, index) => {
                      return (
                        <>
                          <tr>
                            <td className="flex items-center space-x-2 text-base px-6 py-4 whitespace-nowrap">
                              <Image
                                className="md:w-[32px] !w-[28px]"
                                src="/img/user/Avatar_team1.svg"
                                alt="pic"
                                width={32}
                                height={32}
                              />
                              <span className="font-bold text-[14px]">
                                {member.name}
                              </span>
                            </td>
                            <td className="text-[14px] text-gray-500 font-medium fonr-normal px-6 py-4 whitespace-nowrap">
                              {member.country}
                            </td>
                            <td className="md:text-[14px] text-[12px] text-gray-500 font-medium fonr-normal px-6 py-4 whitespace-nowrap">
                              {member.email}
                            </td>
                            <td className="text-[14px] relative text-gray-500 font-medium fonr-normal px-6 py-4 whitespace-nowrap flex justify-center items-center">
                              {/* {member.act} */}
                              <AiOutlineMore
                                onClick={() => setremoveOpen(index)}
                                size={24}
                              />
                              {removeopen === index && (
                                <div
                                  key={index}
                                  className="bg-white z-50 cursor-pointer absolute border top-12 px-4 py-2 rounded-[5px]"
                                >
                                  Remove
                                </div>
                              )}
                            </td>
                          </tr>
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:hidden block">
              {members.map((member, index) => {
                return (
                  <div className="py-2 flex gap-2 bg-[#FFFFFF] border-[#DBDBDB] border-[1px] mt-2 mb-2 p-2 relative">
                    <Image
                      width={45}
                      height={45}
                      alt="pic"
                      src="/img/user/Avatar_team1.svg"
                    />
                    <div className="py-1.5 w-full">
                      <div className="flex items-center relative justify-between">
                        <p className="text-base   text-[#131313] font-play font-[700] leading-[150%]">
                          {member.name}
                        </p>
                        <AiOutlineMore
                          onClick={() => setremoveOpen(index)}
                          size={20}
                          className=""
                        />
                      </div>
                      {removeopen === index && (
                        <div
                          key={index}
                          className="bg-white z-50 cursor-pointer absolute border top-12 right-0 px-4 py-2 rounded-[5px]"
                        >
                          Remove
                        </div>
                      )}

                      <p className="sm:text-sm text-[12px] font-play font-[500] text-[#13131380]">
                        {member.email}
                      </p>
                      <p className="text-sm text-[#0000004D]">
                        {member.country}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="md:w-[600px] w-[90%] flex items-center justify-center mx-auto flex-col rounded-[8px] shadow-md p-4 bg-white z-50">
          <div className="flex items-center justify-between w-full">
            <span className="text-[18px] font-play font-[500] text-black">
              Add Members
            </span>
            <a className="close" onClick={closeModal}>
              <Image src={Closeicon} alt="close" />
            </a>
          </div>
          <div className="flex items-center space-x-6 justify-between w-full py-4">
            <input
              type="email"
              placeholder="Email"
              className="py-2 pl-3 w-full outline-none border"
            />
            <button className="bg-blue-500 rounded-[2px] text-white py-2 w-36 px-6">
              Search
            </button>
          </div>
          {AddMemberData.map((value) => (
            <div className="flex items-center justify-between w-full py-2">
              <div className="flex items-center space-x-2">
                <Image src={value.profile} width={48} height={48} alt="pic" />
                <span className="font-medium text-sm">{value.Username}</span>
              </div>
              <button className="text-blue-500 border rounded-[2px] border-blue-500 px-2 w-20 py-1 text-sm">
                {value.buttonText}
              </button>
            </div>
          ))}
        </div>
      </Popup>
    </React.Fragment>
  )
}
export default Team
