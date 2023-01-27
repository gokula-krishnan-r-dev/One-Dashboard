import { products } from "../../components/data/dataContents";
import CardProject from "../../components/card/CardProject";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { SiGooglechat } from "react-icons/si";
import React from "react";
//BsSearch
const Client = () => {
  const router = new useRouter()
  return (
    <React.Fragment>
      <div className="p-4 pt-4 bg-[#FAFAFA] overflow-y-auto mt-20">
        <div className='p-4 fixed  bottom-2 right-2 bg-blue-600 rounded-full'>
           <SiGooglechat className="text-white" size={32} />
        </div>
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <p className="text-gray-400">Overview</p>
            <div className="py-2 block min-w-full md:flex md:justify-between md:items-center md:gap-2 flex-wrap">
              <h3 className="md:text-3xl text-xl">My Projects</h3>
              <div className="flex items-center flex-wrap gap-2">
                <div className="w-full md:w-44 sm:block hidden border relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <BsSearch />
                    </button>
                  </span>
                  <input type="text" placeholder="search" className="pl-10 py-2.5 w-full" />
                </div>
                <div className="w-1/2 md:w-44 border relative mt-2">
                  <select className="block appearance-none w-full bg-white px-4 py-2.5">
                    <option>This Week</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <BsChevronDown />
                  </div>
                </div>
                <div className="w-auto md:w-44 border relative mt-2">
                  <select className="block appearance-none w-full px-4 py-2.5 sm:bg-blue-500 sm:text-white text-black">
                    <option className="text-red-500">All</option>
                    <option>Draft</option>
                    <option>Pending Review</option>
                    <option>Pending Quote</option>
                    <option>Pending Payment</option>
                    <option>In Production</option>
                    <option>In Repair</option>
                    <option>Delivered</option>
                    <option>Completed</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <BsChevronDown className="text-white font-medium" />
                  </div>
                </div>
                <div className="w-full hidden sm:block md:w-60 mt-2">
                  <button className="bg-blue-500 text-white py-2.5 w-full" onClick={() => router.push('/client/create')}>New Project Request</button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
              <div className="flex flex-wrap gap-4 mt-8 items-center lg:justify-start justify-center">
                {products.map((product, index) => (
                  <div key={index}>
                    <CardProject product={product} />
                  </div>
                ))}
              </div>
          </div>
          
        </div>
      </div>
    </React.Fragment>

  );
}
export default Client
