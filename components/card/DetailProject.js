import Image from "next/image"
import ProgressBar from "../ProgressBar"
const DetailProject = (props) => {
    const { itemData } = props

    //const imgStatus = itemData.status == 'Pending Payment' ? '/img/icon/document_pending.svg' : '/img/icon/documents_review.svg'
    const imgStatus = itemData.status == 'Pending Payment' ? '/img/icon/documents_review.svg' : itemData.status == 'Completed' ? "/img/icon/delivery-truck.svg" : itemData.status == 'In Repair' ? "/img/icon/inproduction.svg" : "/img/icon/documents_review.svg";

    return (
        <>
            <div className="bg-white shadow-sm border font-play p-4">
                <div className="flex w-full items-center justify-between p-2 space-x-4">
                    <Image src={itemData.img} width={91} height={91} alt="product" className="w-1/4" />
                    <div className="flex items-center justify-between w-1/2 font-medium">
                        <div className="full">
                            <p className="text-black py-2 font-semibold text-base">{itemData.title}</p>
                            <div className="w-36 bg-[#F9C152] py-2 text-[12px] text-white text-center rounded-full">{itemData.status}</div>
                        </div>
                    </div>
                    <Image src={imgStatus} width={60} height={60} alt="product" className="w-1/4" />
                </div>
                <div className="flex flex-col w-full text-sm font-medium">
                   <ul className="flex w-full justify-between p-2">
                        <li className="text-[#131313]">Order By</li>
                        <li className="text-blue-500 text-blue-500">Angeline Lee</li>
                   </ul>
                   <ul className="flex w-full justify-between p-2">
                        <li className="text-[#131313]">Delivery Date</li>
                        <li className="text-[#003672]">July 28, 2021 at 3.45 PM</li>
                   </ul>
                   <ul className="flex w-full justify-between p-2">
                        <li className="text-black">Order Number</li>
                        <li className="text-[#003672]">#{itemData.order_id}</li>
                   </ul>
                </div>
            </div>


        </>
    )
}
export default DetailProject
