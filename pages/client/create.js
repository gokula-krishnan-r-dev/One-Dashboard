import React from "react"
import { BsChevronRight } from "react-icons/bs";
import ProjectInput from '../../components/ProjectInput'
const NewProject = () => {
    return (
        <React.Fragment>
            <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
                <div className="flex flex-col w-full">
                    <div className="overflow-x-auto font-play">
                        <div className="flex space-x-2">      
                            <p className="text-gray-400 flex items-center space-x-2 py-1"><span className="md:text-base text-sm">Order</span> <BsChevronRight /> <span className="md:text-base text-sm">New Project</span></p>
                        </div>
                        <div className="py-2 inline-block min-w-full flex justify-between items-center">
                            <h3 className="md:text-3xl text-xl">Order Detail</h3>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-full py-4">
                    <ProjectInput />
                </div>
            </div>
        </React.Fragment>
    )
}
export default NewProject