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
            <p className="text-gray-400">Overview</p>
            <div className="py-2 inline-block min-w-full md:flex md:justify-between md:items-center">
              <a className="text-4xl py-4"><Link href='/customers'>Customers</Link></a>
              <div className="w-full md:w-44 border relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <BsSearch />
                    </button>
                  </span>
                  <input type="text" placeholder="search" className="pl-10 py-2.5 w-full" />
                </div>
            </div>
            <div className="overflow-x-auto p-2 border bg-white">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" className="text-xl font-medium text-back font-bold px-6 py-4 text-left">
                      Customer Name
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                        Order Id
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                        Project Name
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                        Delivery Date
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 text-left">
                        Amount
                      </th>
                      <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 text-left flex justify-center items-center">
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
                            
                            <td className="flex items-center space-x-2 px-6 py-4">
                              <Image src='/img/user/Avatar_4.png' alt="pic" width={50} height={50} />
                              <span className="font-semibold text-black text-base font-semibold">Angeline Lee</span>
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 px-6">
                              {order.order_id}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 px-6 ">
                              {order.title}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 px-6">
                               {order.delivery_date}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4">
                               $ {order.amount}
                            </td>
                            <td className="text-base text-gray-500 font-medium font-light py-4 flex justify-center items-center">
                              <div className={`p-1 px-2 py-1.5 font-normal rounded-2xl text-[12px] ${order.status === 'Completed' ?  'text-green-500 bg-green-50' : order.status ==='Pending Payment' ? 'text-orange-400 bg-orange-100': order.status === 'In Repair' ? 'text-red-400 bg-red-100' : 'text-gray-400 bg-gray-200' }`}>
                                <Link href={'/admin/'+ order.id} key={order.id}> {order.status}</Link>
                              </div>
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