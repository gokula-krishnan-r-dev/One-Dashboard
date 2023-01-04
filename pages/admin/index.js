

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
          <div className="font-play">
            <p className="text-gray-400 text-base">Overview</p>
            <div className="py-2 inline-block min-w-full md:flex md:justify-between md:items-center">
              <h3 className="text-3xl font-semibold">Orders</h3>
              <div className="flex items-center flex-wrap md:space-x-2">
                <div className="w-full md:w-44 border relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <BsSearch />
                    </button>
                  </span>
                  <input type="text" placeholder="search" className="pl-10 py-2.5 w-full" />
                </div>
                <div className="w-full md:w-44 border relative mt-2">
                  <select className="block appearance-none w-full bg-white px-4 py-2.5">
                    <option>This Week</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <BsChevronDown />
                  </div>
                </div>
                <div className="w-full md:w-44 border relative mt-2">
                  <select className="block appearance-none w-full px-4 py-2.5">
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
              </div>
            </div>
          </div>
          
          <div className="w-full">
              <h4 className="text-3xl font-semibold text-blue-500 py-4">Active Order</h4>
              <div className="flex flex-wrap gap-4 mt-8 items-center lg:justify-start sm:justify-center">

                {ordersdata.map((product, index) => (
                  product.status_order == 'active' && (
                    <div key={index}>
                      <CardOrder product={product} />
                    </div>
                  )))}

              </div>
          </div>
          <div className="w-full">
              <h4 className="text-3xl font-semibold text-blue-500 py-4">Awaiting</h4>
              <div className="flex flex-wrap gap-4 mt-8 items-center lg:justify-start sm:justify-center">

                {ordersdata.map((product, index) => (
                  product.status_order == 'awaiting' && (
                    <div key={index}>
                      <CardOrder product={product} />
                    </div>
                  )))}

              </div>
          </div>

          {/*
          <div className="overflow-auto">
            <div className="py-2 inline-block">
              <h4 className="text-3xl font-semibold text-blue-500 py-4">Active Order</h4>
              <div className="flex flex-wrap gap-4 mt-8 items-center lg:justify-start sm:justify-center">

                {ordersdata.map((product, index) => (
                  product.status_order == 'active' && (
                    <div key={index}>
                      <CardOrder product={product} />
                    </div>
                  )))}

              </div>
            </div>
          </div>
            */}
          {/*
          <div className="overflow-auto">
            <div className="py-2 inline-block">
              <h4 className="text-3xl font-semibold text-blue-500 py-4">Awaiting Order</h4>
              <div className="flex flex-wrap gap-4 mt-8 items-center lg:justify-start sm:justify-center">
                {ordersdata.map((product, index) => (
                  product.status_order == 'awaiting' && (
                    <div key={index}>
                      <CardOrder product={product} />
                    </div>
                  )))}
              </div>
            </div>
          </div>
            */}
        </div>
      </div>
    </React.Fragment>

  );
}
export default AdminDashboard

