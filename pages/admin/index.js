

import { products, ordersdata } from "../../components/data/dataContents";
import CardProject from "../../components/card/CardProject";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import CardOrder from "../../components/card/CardOrder";
import { useRouter } from "next/router";
import React from "react";
const AdminDashboard = () => {
  const router = new useRouter()
  return (
    <React.Fragment>
      <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <p className="text-gray-400">Overview</p>
            <div className="py-2 inline-block min-w-full flex justify-between items-center">
              <h3 className="text-4xl">My Projects</h3>
              <div className="flex items-center space-x-3">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <BsSearch />
                    </button>
                  </span>
                  <input type="search" name="q" className="py-3 border text-sm text-white pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
                </div>
                <div className="inline-block relative w-36 text-gray-400">
                  <select className="block appearance-none w-full bg-white border px-4 py-2.5">
                    <option>This Week</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <BsChevronDown />
                  </div>
                </div>
                <div className="inline-block relative w-40 text-white">
                  <select className="block appearance-none w-full bg-blue-500 border px-4 py-2.5">
                    <option>All</option>
                    <option>Option 2</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <BsChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <div className="py-2 inline-block">
              <h4 className="text-4xl text-blue-500 py-4">Active Order</h4>
              <div className="flex flex-wrap gap-4 mt-8 items-center">
                
                {ordersdata.map((product, index) => (
                  product.status_order == 'active' && (
                  <div key={index}>
                    <CardOrder product={product} />
                  </div>
                )))}
                
              </div>
            </div>
          </div>
          <div className="overflow-auto">
          <div className="py-2 inline-block">
              <h4 className="text-4xl text-blue-500 py-4">Awaiting Order</h4>
              <div className="flex flex-wrap gap-4 mt-8 items-center">
              {ordersdata.map((product, index) => (
                  product.status_order == 'awaiting' && (
                  <div key={index}>
                    <CardOrder product={product} />
                  </div>
                )))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}
export default AdminDashboard

