import React from "react"
import Link from "next/link";
import Image from "next/image"
import { ordersdata } from "../../../components/data/dataContents"
import { AiOutlinePlus, AiOutlineClose, } from "react-icons/ai";
import { picImg } from '../../../public/img/user/Avatar_team.png'
import { BsSearch } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
const Order = () => {
  return (
    <React.Fragment>
      <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <p className="text-gray-400">Overview</p>
            <div className="py-2 inline-block min-w-full flex justify-between items-center">
              <a className="text-4xl py-4"><Link href='/customers'>Customers</Link></a>
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
                        Order Id
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                        Project Name
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                        Delivery Date
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                        Amount
                      </th>
                      <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left flex justify-center items-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersdata.map((order, index) => {
                      //console.log(order, index)
                      return (
                        <>
                        
                          <tr>
                            
                            <td className="flex items-center space-x-2 text-sm font-light px-6 py-4 whitespace-nowrap">
                              <Image src='/img/user/Avatar_4.png' alt="pic" width={32} height={32} />
                              <span className="font-semibold text-black">Angeline Lee</span>
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                              {order.order_id}
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                              {order.title}
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                               {order.delivery_date}
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                               $ {order.amount}
                            </td>
                            <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap flex justify-center items-center">
                                <Link href={'/admin/'+ order.id} key={order.id}> {order.status}</Link>
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
export default Order