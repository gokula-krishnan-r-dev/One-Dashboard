import React from "react"
import { BsChevronRight } from "react-icons/bs";
import { customers } from "../../../components/data/dataContents"
{/*
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
*/}
const DetailCustomer = () => {
    //console.log(itemData, "test")
    return (
        <React.Fragment>
            <div className="p-4 pt-4 bg-[#FAFAFA] h-full">
                <div className="w-full py-4">
                    <p className="text-gray-400 flex items-center space-x-2 py-1"><span>Customer</span> <BsChevronRight /> <span>Customers Detail</span></p>
                    <h3 className="text-3xl">Customer Detail</h3>
                </div>
                
            </div>
        </React.Fragment>
    )

}
export default DetailCustomer