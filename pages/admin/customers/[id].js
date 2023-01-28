import { customers } from "../../../components/data/dataContents";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import React, { useState } from "react"
import Link from "next/link";

import { US, IN, DE, ID, PH, AU, GB } from 'country-flag-icons/react/3x2'
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
    // const allData = JSON.stringify(customers)
    const data = customers.filter(p => p.id.toString() === id)
    return {
        props: {
            itemData: JSON.parse(JSON.stringify(data[0])),
        },
    }
}


const DetailCustomer = ({ itemData }) => {
    console.log(itemData)
    return (
        <React.Fragment>

            <div className="p-4 pt-4 mt-20 font-play">
                <div className="w-full py-4">
                    <p className="text-gray-400 md:text-base text-sm flex items-center space-x-2 py-1"><a><Link href='/admin/customers'>Customers</Link></a> <BsChevronRight /> <span>Customers Detail</span></p>
                    <h3 className="md:text-3xl text-xl font-semibold py-1">Customers Detail</h3>
                </div>
                <div className="w-full py-4 bg-white mt-2">
                    <div className="flex items-center space-x-2 p-2">
                        <Image src={itemData.img} alt="pic" width={115} height={115} className="p-2" />
                        <div className="block">
                            <p className="md:text-2xl text-xl text-black font-semibold">
                                {itemData.name}
                            </p>
                            <p className="text-[12px] text-gray-400">Last seen 32 minutes ago</p>
                        </div>
                    </div>
                    <div className="md:flex md:w-2/3 w-4/5 md:justify-between block">
                        <div className="p-4 md:text-xl text-base">
                            <div className="p-2">
                                <p className="text-blue-500">
                                    CustomerID
                                </p>
                                <p className="md:text-2xl text-lg text-black py-2 font-semibold">
                                    CS15072021001
                                </p>
                            </div>
                            <div className="p-2">
                                <p className="text-blue-500">
                                    Email Address
                                </p>
                                <p className="md:text-2xl text-lg text-black py-2 font-semibold">
                                    {itemData.email}
                                </p>
                            </div>
                            <div className="p-2">
                                <p className="text-blue-500 ">
                                    Phone Number
                                </p>
                                <p className="md:text-2xl text-lg text-black py-2 font-semibold">
                                    +63-819-001-9187
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:text-xl text-base">
                            <div className="p-2">
                                <p className="text-blue-500">
                                    Total Value Orders
                                </p>
                                <p className="md:text-2xl text-lg text-black py-2 font-semibold">
                                    ${itemData.total_orders}
                                </p>
                            </div>
                            <div className="p-2">
                                    <p className="text-blue-500">
                                        Country
                                    </p>
                                <div className="flex space-x-2 items-center">
                                    <p className="md:text-2xl text-lg text-black py-2 font-semibold">

                                        {itemData.country.name}


                                    </p>
                                    { itemData.country.flag == 'IN' ? <IN className="w-8 h-auto" /> : itemData.country.flag =='US' ? <US className="w-8 h-auto" /> : itemData.country.flag == 'UK' ? <UK className="w-8 h-auto" />: itemData.country.flag == 'DE' ? <DE className="w-8 h-auto" />: itemData.country.flag == 'PH' ? <PH className="w-8 h-auto" /> : <AU className="w-8 h-auto" /> }
                                    
                                </div>
                            </div>

                            <div className="p-2">
                                <button className="p-3 px-4 text-white bg-blue-500">Manage Teams</button>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 lg:w-2/5 sm:w-9/12 w-full">
                        <div className="p-6">
                            <p className="text-blue-500 md:text-xl text-lg">
                                Billing Address
                            </p>
                            <div className="md:flex md:gap-2 py-2 text-xl font-semibold">
                                <input type="text" className="border p-2 md:basis-1/2 w-full mt-2" value="David" />
                                <input type="text" className="border p-2 md:basis-1/2 w-full mt-2" value="Morgan" />
                            </div>
                            <div className="py-2 text-xl font-semibold">
                                <input type="text" className="border p-2 w-full" value={itemData.street} />
                            </div>
                            <div className="md:flex gap-2 md:items-center py-2 text-xl font-semibold">
                                <input type="text" className="border p-2 md:basis-1/3 mt-2 w-full" value={itemData.city} />
                                <input type="text" className="border p-2 md:basis-1/3 mt-2 w-full" value={itemData.country.name} />
                                <input type="text" className="border p-2 md:basis-1/3 mt-2 w-full" value={itemData.zipcode} />
                            </div>
                          
                           {/* */}
                        </div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}

export default DetailCustomer
