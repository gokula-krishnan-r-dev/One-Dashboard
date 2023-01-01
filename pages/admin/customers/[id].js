import { customers } from "../../../components/data/dataContents";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import React, { useState } from "react"
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

            <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
                 <div className="w-full py-4">
                    <p className="text-gray-400 flex items-center space-x-2 py-1"><span>Customer Detail</span> <BsChevronRight /> <span>Customers Detail</span></p>
                    <h3 className="text-3xl">Customers Detail</h3>
                </div>
                <div className="w-full py-4 bg-white">
                    <div className="flex items-center space-x-2">
                        <Image src={itemData.img} alt="pic" width={115} height={115} />
                       <div>
                            <p className="text-xl text-black">
                                    Angeline Lee
                            </p>
                            <p className="text-[12px] text-gray-400">Last seen 32 minutes ago</p>
                       </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default DetailCustomer
