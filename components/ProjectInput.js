import React from "react"
import { useRouter } from "next/router"
import { GrDocumentUpload } from "react-icons/gr";
//
const ProjectInput = () => {

    const router = new useRouter()
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
                            <select className="block text-gray-400 appearance-none w-full bg-white border px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
                                <option>Prject Type</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <p className="text-md">Today at 1.18 PM</p>
                    </div>
                </div>
            </div>
            <div className="sadow-sm border mt-4 bg-white py-4">
                <div className="p-4 flex justify-between">
                    <div className="basis-3/4">
                        <textarea className="w-full px-3 text-gray-700 border py-2 mb-2 focus:outline-none" rows="4" placeholder="Notes (Brief description of your project)" />
                        <textarea className="w-full px-3 text-gray-700 border py-2 mt-2 focus:outline-none" rows="4" placeholder="Reference Links" />
                    </div>
                    <div>
                        <label className="flex flex-col justify-center items-center w-full h-full border-2 border-gray-300 border-dashed bg-blue-100">
                              <div className="max-w-[400px] flex flex-col items-center justify-center text-blue-600">
                                <GrDocumentUpload size={36} />
                                <p className="text-center max-w-[220px] py-2 text-sm">
                                    Upload References Photos, Documents, Design Files or Folders
                                    ( Max File Size 2GB )
                                </p>
                              </div>
                              <input type="file" className="opacity-0" />
                        </label>
                    </div>
                </div>
                <div className="px-4 flex justify-end items-center space-x-4">
                    <button className="bg-white w-44 border px-3 py-3">Save</button>
                    <button className="bg-white w-44 border px-3 py-3" onClick={() => router.push('/client')}>Save and Close</button>
                    <button className="bg-white w-44 border px-3 py-3 bg-blue-600 text-white">Get Quote</button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProjectInput