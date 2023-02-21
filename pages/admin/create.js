import React from "react"
import { BsChevronRight } from "react-icons/bs"
import ProjectInput from "../../components/ProjectInput"
const NewProject = () => {
  return (
    <React.Fragment>
      <div className="p-4 pt-4 h-[calc(100vh-80px)] mt-20 overflow-y-auto">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <div className="flex space-x-2">
              <p className="text-gray-400 flex items-center space-x-2 py-1">
                <span className="lg:text-[14px] 2xl:text-[16px] text-[16px] text-[500] text--font ">
                  My Projects
                </span>{" "}
                <BsChevronRight size={13} />{" "}
                <span className="lg:text-[14px] 2xl:text-[16px] text-[16px] text-[500] text--font">
                  New Project
                </span>
              </p>
            </div>
            <div className="py-2 inline-block min-w-full flex justify-between items-center">
              <h3 className="lg:text-[24px] font-[600] 2xl:text-[27px] text-[27px]">
                Order Detail
              </h3>
              <h4 className="text-[13px] pr-2 md:pr-9">Status: Draft</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full pt-1">
          <ProjectInput userin={true} />
        </div>
      </div>
    </React.Fragment>
  )
}
export default NewProject
