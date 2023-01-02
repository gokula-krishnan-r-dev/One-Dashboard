import { customers } from "../../../components/data/dataContents";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import React, { useState } from "react"
import Link from "next/link";
export const getStaticPaths = async () => {
    const paths = customers.map(itemData => ({
        params: { id: itemData.id.toString() },
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = customers.filter(p => p.id.toString() === id)
    return {
        props: {
            itemData: data[0],
        },
    }
}


const DetailCustomer = ({ itemData }) => {
    return (
        <React.Fragment>

            <div className="p-4 pt-4 bg-[#FAFAFA] h-full font-play">
                <div className="w-full py-4">
                    <p className="text-gray-400 flex items-center space-x-2 py-1"><a><Link href='/admin/customers'>Customers</Link></a> <BsChevronRight /> <span>Customers Detail</span></p>
                    <h3 className="text-3xl">Customers Detail</h3>
                </div>
                <div className="w-full py-4 bg-white">
                    <div className="flex items-center space-x-2 p-2">
                        <Image src={itemData.img} alt="pic" width={115} height={115} />
                        <div className="block">
                            <p className="text-xl text-black">
                                {itemData.name}
                            </p>
                            <p className="text-[12px] text-gray-400">Last seen 32 minutes ago</p>
                        </div>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <div className="p-4">
                            <div className="p-2">
                                <p className="text-blue-500 text-xl">
                                    CustomerID
                                </p>
                                <p className="text-2xl text-black py-2">
                                    CS15072021001
                                </p>
                            </div>
                            <div className="p-2">
                                <p className="text-blue-500 text-xl">
                                    Email Address
                                </p>
                                <p className="text-2xl text-black py-2">
                                    {itemData.email}
                                </p>
                            </div>
                            <div className="p-2">
                                <p className="text-blue-500 text-xl">
                                    Phone Number
                                </p>
                                <p className="text-2xl text-black py-2">
                                    +63-819-001-9187
                                </p>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="py-2">
                                <p className="text-blue-500 text-xl">
                                    Total Value Orders
                                </p>
                                <p className="text-2xl text-black py-2">
                                    {itemData.tal_orders}
                                </p>
                            </div>
                            <div className="py-2">
                                <p className="text-blue-500 text-xl">
                                    Country
                                </p>
                                <p className="text-2xl text-black py-2">
                                    {itemData.country}
                                </p>
                            </div>

                            <div className="py-2">
                                <button className="p-3 px-4 text-white bg-blue-500">Manage Teams</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-4 w-2/5">
                        <div className="p-6">
                            <p className="text-blue-500 text-xl">
                                        Billing Address
                                 </p>
                            <div className="flex space-x-2 py-2">
                                <input type="text" className="border p-2 basis-1/2" value={itemData.name} />
                                <input type="text" className="border p-2 basis-1/2" value={itemData.name} />
                            </div>
                            <div className="py-2">
                                <input type="text" className="border p-2 w-full" value={itemData.street} />
                            </div>
                            <div className="py-2 flex space-x-2">

                            <input type="text" className="border p-2 basis-1/3" value={itemData.city} />

                            <input type="text" className="border p-2 basis-1/3" value={itemData.country} />

                            <input type="text" className="border p-2 basis-1/3" value={itemData.zipcode} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default DetailCustomer
