import React from "react"
import Link from "next/link"
import Image from "next/image"
import { customers } from "../../../components/data/dataContents"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"
import { picImg } from "../../../public/img/user/Avatar_team.png"
import { BsSearch } from "react-icons/bs"
import { MdEdit } from "react-icons/md"
const Customer = () => {
  return (
    <React.Fragment>
      <div className="p-4 pt-4 mt-20">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto font-play">
            <p className="text-gray-400 md:text-base text-sm">Overview</p>
            <div className="py-2 inline-block min-w-full md:flex md:justify-between md:items-center">
              <a className="md:text-3xl text-xl py-4 font-semibold">
                <Link href="/customers">Customers</Link>
              </a>
              <div className="flex items-center space-x-3">
                <div className="w-full md:w-[100%] border relative mt-2">
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
                    className="pl-10 py-2.5 outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:hidden block">
            {customers.map((member, index) => {
              return (
                <div className="bg-white border mb-2 p-4">
                  <div className="flex gap-2 justify-between items-center mt-1 mb-1">
                    <div className="flex space-x-2">
                      <Image
                        src="/img/user/Avatar_4.png"
                        alt="pic"
                        width={40}
                        height={40}
                      />
                      <div>
                        <a>
                          <Link href={"customers/" + member.id} key={member.id}>
                            {" "}
                            {member.name}
                          </Link>
                        </a>

                        <p className="text-gray-400 text-sm">
                          {member.order_id}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-400">$ {member.total_orders}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg"> {member.country.name}</p>
                    <p className="text-base text-gray-400"> {member.email}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="overflow-x-auto p-2 border bg-white lg:block hidden">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="md:text-xl text-sm">
                      <th
                        scope="col"
                        className="font-medium text-back font-bold py-4 text-left px-4 whitespace-nowrap"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 py-4 text-left px-12 whitespace-nowrap"
                      >
                        Customer ID
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 py-4 text-left px-4 whitespace-nowrap"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 py-4 text-left px-4 whitespace-nowrap"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 py-4 text-center px-4 whitespace-nowrap"
                      >
                        Total Orders
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 py-4 text-center px-4 whitespace-nowrap"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((member, index) => {
                      //console.log(member, index)
                      return (
                        <>
                          <tr className="md:text-base  text-sm">
                            <td className="flex items-center justify-center gap-2 text-sm font-light py-4 px-4">
                              <Image
                                src={member.img}
                                alt="pic"
                                width={50}
                                height={50}
                              />
                              <span className="font-semibold">
                                {member.name}
                              </span>
                            </td>
                            <td className="text-gray-500 font-medium font-light py-6 px-12">
                              {member.order_id}
                            </td>
                            <td className="text-gray-500 font-medium font-light py-4 px-4">
                              {member.country.name}
                            </td>
                            <td className="text-gray-500 font-medium font-light py-4 text-left px-4">
                              {member.email}
                            </td>
                            <td className="text-gray-500 font-medium font-light py-4  text-center px-4">
                              $ {member.total_orders}
                            </td>
                            <td className="text-gray-500 font-medium font-light py-4 mb-6 flex justify-center px-4">
                              <Link
                                href={"customers/" + member.id}
                                key={member.id}
                              >
                                <MdEdit size={24} />
                              </Link>
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
