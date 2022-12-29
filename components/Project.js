const Project = () => {
    return (
        <>
            <div className="shadow-sm border py-4">
                <div className="p-4">
                    <div className="y-2">
                        <input
                            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                            id="address"
                            type="text"
                            placeholder="Project Name"
                        />
                    </div>
                    <div className="py-2">
                        <div className="inline-block relative w-full">
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Really long option that will likely overlap the chevron</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <p>Today at 1.18 PM</p>
                    </div>
                </div>
            </div>
            <div className="sadow-sm border py-4">
                <div className="p-4 flex gap-4">
                    <div className="basis-2/3">
                        <textarea className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" />
                        <textarea className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4" />
                    </div>
                    <div className="basis-1/3">
                        <div className="flex justify-center">
                            <div className="max-w-sm rounded-lg shadow-xl bg-gray-50">
                                <div>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                            <div className="flex flex-col items-center justify-center pt-7">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                    Attach a file</p>
                                            </div>
                                            <input type="file" className="opacity-0" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 flex justify-end items-center space-x-4">
                    <button className="bg-white border px-3 py-3">Get Quote</button>
                    <button className="bg-white border px-3 py-3">Get Quote</button>
                    <button className="bg-blue-400 px-3 py-3">Get Quote</button>
                </div>
            </div>
        </>
    )
}
export default Project