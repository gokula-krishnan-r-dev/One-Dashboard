import React, { useState } from "react"
import { useRouter } from "next/router"
import { GrDocumentUpload } from "react-icons/gr"
import Image from "next/image"
//
const ProjectInput = () => {
  const router = new useRouter()
  const [weekvisibility, setWeekVisibility] = useState(false)
  const [weekselectedOption, weeksetSelectedOption] = useState("")
  const options1 = [
    { option: "3D Animation", value: "3D Animation" },
    { option: "3D Hologram Content", value: "3D Hologram Content" },
    { option: "3D Product Modelling", value: "3D Product Modelling" },
    { option: "AR / VR", value: "AR / VR" },
    { option: "Custom", value: "Custom" },
  ]
  return (
    <React.Fragment>
      <div className="shadow-sm border py-4 bg-white font-play">
        <div className="p-4">
          <div className="py-2">
            <input
              className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
              id="address"
              type="text"
              placeholder="Project Name"
            />
          </div>
          <div className="py-2">
            <div className="inline-block relative w-full">
              <div
                className="select block text-gray-400 appearance-none w-full bg-white border px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline relative cursor-pointer   text-black  h-[45px]"
                onClick={(e) => {
                  setWeekVisibility(!weekvisibility)
                }}
              >
                <div className="selected-option h-full flex items-center relative justify-between  ">
                  <span
                    className="flex !text-[13px] gap-4 items-center"
                    title={
                      weekselectedOption === ""
                        ? "This Week"
                        : weekselectedOption
                    }
                  >
                    {weekselectedOption === ""
                      ? "This Week"
                      : weekselectedOption.length <= 20
                      ? weekselectedOption
                      : `${weekselectedOption.slice(0, 20)}...`}
                  </span>
                  <Image
                    className={`${
                      weekvisibility
                        ? "rotate-[0deg] transition-all"
                        : "rotate-[180deg] transition-all"
                    }`}
                    width={20}
                    height={20}
                    src="/img/icon/ArrowUp 2.svg"
                    alt="icon"
                  />
                </div>
                {weekvisibility && (
                  <div className="options absolute  px-3 top-[50px] left-0 w-full max-h-[209px] bg-white overflow-y-scroll border-[1px] border-[#f3dcdc]  ">
                    <ul>
                      {options1.map(({ option }, index) => (
                        <li
                          key={index}
                          className={
                            weekselectedOption === option
                              ? "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                              : "border-b-[1px] h-[37px] mt-[10px] py-2 justify-start items-start flex text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] border-[#EBEBEB]"
                          }
                          onClick={() => {
                            weeksetSelectedOption(option)
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
          </div>
          <div className="py-2">
            <p className="text-md">Today at 1.18 PM</p>
          </div>
        </div>
      </div>
      <div className="sadow-sm border mt-4 bg-white py-4">
        <div className="p-4 block md:flex md:justify-between gap-2">
          <div className="md:basis-3/4 w-full">
            <textarea
              className="w-full px-3 text-gray-700 border py-2 mb-2 focus:outline-none"
              rows="4"
              placeholder="Notes (Brief description of your project)"
            />
            <textarea
              className="w-full px-3 text-gray-700 border py-2 mt-2 focus:outline-none"
              rows="4"
              placeholder="Reference Links"
            />
          </div>

          <div className="md:mt-0 mt-3">
            <label className="flex flex-col justify-center items-center w-full h-full border-2 border-gray-300 border-dashed bg-blue-100">
              <div className="max-w-[400px] flex flex-col items-center justify-center text-blue-600">
                <GrDocumentUpload size={36} />
                <p className="text-center max-w-[220px] py-2 text-sm">
                  Upload References Photos, Documents, Design Files or Folders (
                  Max File Size 2GB )
                </p>
              </div>
              <input type="file" className="opacity-0" />
            </label>
          </div>
        </div>
        <div className="px-4 flex flex-wrap md:justify-end justify-between items-center gap-4">
          <button className="bg-white md:w-44 w-36 border px-3 py-3">
            Save
          </button>
          <button
            className="bg-white md:w-44 w-36 border px-3 py-3"
            onClick={() => router.push("/client")}
          >
            Save and Close
          </button>
          <button className="bg-white md:w-44 w-full border px-3 py-3 bg-blue-500 text-white">
            Get Quote
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
export default ProjectInput
