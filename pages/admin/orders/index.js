import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ordersdata } from "../../../components/data/dataContents"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import { picImg } from "../../../public/img/user/Avatar_team.png"
import { BsSearch } from "react-icons/bs"
import { MdEdit } from "react-icons/md"
const Order = () => {
  return (
    <React.Fragment>
      <div className="p-4 pt-4 mt-20">
        <div className="flex flex-col w-full h-full">
          <p className="text-gray-400 md:text-base text-sm">Orders</p>
          <div className="py-2 inline-block min-w-full md:flex md:justify-between md:items-center">
            <a className="md:text-3xl text-xl py-4">
              <Link href="/customers">All Type</Link>
            </a>
            <div className="w-full md:w-44 border relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <BsSearch />
                </button>
              </span>
              <input
                type="text"
                placeholder="search"
                className="pl-10 py-2.5 w-full"
              />
            </div>
          </div>

          <div className="w-full lg:hidden block">
            {ordersdata.map((order, index) => {
              return (
                <div className="bg-white border mb-2 p-4">
                  <div className="flex gap-2 justify-between items-center mt-1 mb-1">
                    <div className="flex space-x-2">
                      <Image
                        src="/img/user/Avatar_4.png"
                        alt="pic"
                        width={45}
                        height={45}
                      />
                      <div>
                        Angeline Lee
                        <p className="text-gray-400 text-sm">
                          {" "}
                          {order.order_id}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`h-6 flex justify-center items-center rounded-lg px-2 text-[12px] ${
                        order.status === "Completed"
                          ? "text-green-500 bg-green-50"
                          : order.status === "Pending Payment"
                          ? "text-orange-400 bg-orange-100"
                          : order.status === "In Repair"
                          ? "text-red-400 bg-red-100"
                          : "text-gray-400 bg-gray-200"
                      }`}
                    >
                      <Link href={"/admin/" + order.id} key={order.id}>
                        {" "}
                        {order.status}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-[600] pt-2"> {order.title}</p>
                    <p className="text-base pt-2 text-gray-400">
                      {" "}
                      {order.delivery_date}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="h-full overflow-x-auto overflow-y-auto p-2 border bg-white lg:block hidden">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="md:text-xl text-sm">
                      <th
                        scope="col"
                        className="font-medium text-back xl:text-[18px] text-[19px] font-bold px-6 py-4 text-left whitespace-nowrap"
                      >
                        Customer Name
                      </th>
                      <th
                        scope="col"
                        className="font-medium xl:text-[18px] text-[19px] text-gray-900 px-6 py-4 text-left whitespace-nowrap"
                      >
                        Order Id
                      </th>
                      <th
                        scope="col"
                        className="font-medium xl:text-[18px] text-[19px] text-gray-900 px-6 py-4 text-left whitespace-nowrap"
                      >
                        Project Name
                      </th>
                      <th
                        scope="col"
                        className="font-medium xl:text-[18px] text-[19px] text-gray-900 px-6 py-4 text-left whitespace-nowrap"
                      >
                        Delivery Date
                      </th>
                      <th
                        scope="col"
                        className="font-medium xl:text-[18px] text-[19px] text-gray-900 px-6 py-4 text-left whitespace-nowrap"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="font-medium xl:text-[18px] text-[19px] text-gray-900 px-6 py-4 text-left flex justify-center items-center"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-x-auto">
                    {ordersdata.map((order, index) => {
                      //console.log(order, index)
                      return (
                        <>
                          <tr className="md:text-base text-sm">
                            <td className="flex items-center space-x-2 px-6 py-4">
                              <Image
                                src="/img/user/Avatar_4.png"
                                alt="pic"
                                width={40}
                                height={40}
                              />
                              <span className="font-semibold text-black font-semibold">
                                Angeline Lee
                              </span>
                            </td>
                            <td className="text-gray-500 text-sm font-medium font-light py-2 px-6">
                              {order.order_id}
                            </td>
                            <td className="text-gray-500 text-sm font-medium font-light py-2 px-6 ">
                              {order.title}
                            </td>
                            <td className="text-gray-500  text-sm font-medium font-light py-2 px-6">
                              {order.delivery_date}
                            </td>
                            <td className="text-gray-500 text-sm font-medium font-light py-2 px-6">
                              $ {order.amount}
                            </td>
                            {/* <td className="text-gray-500 text-sm font-medium font-light py-2 flex justify-center items-center">
                              <div
                                className={`p-1 px-2 py-1 text-center font-normal rounded-2xl text-[12px] ${
                                  order.status === "Completed"
                                    ? "text-green-500 bg-green-50"
                                    : order.status === "Pending Payment"
                                    ? "text-orange-400 bg-orange-100"
                                    : order.status === "In Repair"
                                    ? "text-red-400 bg-red-100"
                                    : "text-gray-400 bg-gray-200"
                                }`}
                              >
                                <Link
                                  href={"/admin/" + order.id}
                                  key={order.id}
                                >
                                  {" "}
                                  {order.status}
                                </Link>
                              </div>
                              $ {order.amount}
                            </td> */}
                            <td className="text-gray-500 text-sm font-medium font-light py-2 px-6">
                              <div
                                className={`py-1 text-center font-normal rounded-2xl text-[12px] ${
                                  order.status === "Completed"
                                    ? "text-green-500 bg-green-50"
                                    : order.status === "Pending Payment"
                                    ? "text-orange-400 bg-orange-100"
                                    : order.status === "In Repair"
                                    ? "text-red-400 bg-red-100"
                                    : "text-gray-400 bg-gray-200"
                                }`}
                              >
                                <Link
                                  href={"/admin/" + order.id}
                                  key={order.id}
                                >
                                  {" "}
                                  {order.status}
                                </Link>
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
