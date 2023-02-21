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
                    placeholder="Search"
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
                        width={45}
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
                    <div className="flex justify-between">
                      <p className="text-base text-gray-400"> {member.email}</p>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5.625C9.62132 5.625 10.125 5.12132 10.125 4.5C10.125 3.87868 9.62132 3.375 9 3.375C8.37868 3.375 7.875 3.87868 7.875 4.5C7.875 5.12132 8.37868 5.625 9 5.625Z"
                          fill="#131313"
                        />
                        <path
                          d="M9 10.125C9.62132 10.125 10.125 9.62132 10.125 9C10.125 8.37868 9.62132 7.875 9 7.875C8.37868 7.875 7.875 8.37868 7.875 9C7.875 9.62132 8.37868 10.125 9 10.125Z"
                          fill="#131313"
                        />
                        <path
                          d="M9 14.625C9.62132 14.625 10.125 14.1213 10.125 13.5C10.125 12.8787 9.62132 12.375 9 12.375C8.37868 12.375 7.875 12.8787 7.875 13.5C7.875 14.1213 8.37868 14.625 9 14.625Z"
                          fill="#131313"
                        />
                      </svg>
                    </div>
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
                        className="font-medium xl:text-[18px] text-[19px] font-bold py-4 text-left px-4 whitespace-nowrap"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 xl:text-[18px] text-[19px] py-4 text-left px-0 whitespace-nowrap"
                      >
                        Customer ID
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 xl:text-[18px] text-[19px] py-4 text-left px-4 whitespace-nowrap"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 xl:text-[18px] text-[19px] py-4 text-left px-4 whitespace-nowrap"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 xl:text-[18px] text-[19px] py-4 text-center px-12 whitespace-nowrap"
                      >
                        Total Orders
                      </th>
                      <th
                        scope="col"
                        className="font-medium text-gray-900 xl:text-[18px] text-[19px] py-4 text-center px-4 whitespace-nowrap"
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
                          <tr className="md:text-base   text-sm">
                            <td className="flex items-start justify-start gap-3 text-sm font-light py-1 px-0">
                              <Image
                                className="pt-3"
                                src={member.img}
                                alt="pic"
                                width={40}
                                height={40}
                              />
                              <span className="font-semibold pt-2 my-auto">
                                {member.name}
                              </span>
                            </td>
                            <td className="text-gray-500 text-sm  font-medium font-light py-1 px-0">
                              {member.order_id}
                            </td>
                            <td className="text-gray-500 text-sm  font-medium font-light py-1 px-4">
                              {member.country.name}
                            </td>
                            <td className="text-gray-500 text-sm  font-medium font-light py-1 text-left px-4">
                              {member.email}
                            </td>
                            <td className="text-gray-500 text-sm font-medium font-light py-1  text-center px-12">
                              $ {member.total_orders}
                            </td>
                            <td className="text-gray-500  font-medium font-light py-1 mb-6 flex justify-center px-4">
                              <Link
                                href={"customers/" + member.id}
                                key={member.id}
                              >
                                <MdEdit color="#9FA5B4" size={18} />
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
