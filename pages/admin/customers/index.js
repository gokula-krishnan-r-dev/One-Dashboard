import React from "react"
import Link from "next/link";
import Image from "next/image"
import { customers } from "../../../components/data/dataContents"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { picImg } from '../../../public/img/user/Avatar_team.png'
import { BsSearch } from "react-icons/bs";
const Customer = () => {
  return (
    <React.Fragment>
      <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <p className="text-gray-400">Overview</p>
            <div className="py-2 inline-block min-w-full flex justify-between items-center">
              <h3 className="text-4xl py-4">Customers</h3>
              <div className="flex items-center space-x-3">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <BsSearch />
                    </button>
                  </span>
                  <input type="search" name="q" className="py-3 border text-sm text-white pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto p-2 border bg-white">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" className="text-md font-medium text-back font-bold px-6 py-4 text-left">
                        Name
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                        Country
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                        Email
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                        Total Orders
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left flex justify-center items-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((member, index) => {
                      //console.log(member, index)
                      return (
                        <>
                          <tr>
                            <td className="flex items-center space-x-2 text-sm font-light px-6 py-4 whitespace-nowrap">
                              <Image src='/img/user/Avatar_team.png' alt="pic" width={32} height={32} />
                              <span className="font-semibold">{member.name}</span>
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                              {member.country}
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                              {member.email}
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                              {member.total_orders}
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap flex justify-center items-center">
                               {member.act}
                            </td>
                          </tr>
                        </>
                      )
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Customer