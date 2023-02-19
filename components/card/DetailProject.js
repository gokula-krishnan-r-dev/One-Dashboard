import Image from "next/image"
import ProgressBar from "../ProgressBar"
const DetailProject = (props) => {
  const { itemData } = props

  //const imgStatus = itemData.status == 'Pending Payment' ? '/img/icon/document_pending.svg' : '/img/icon/documents_review.svg'
  const imgStatus =
    itemData.status == "Pending Payment"
      ? "/img/icon/documents_review.svg"
      : itemData.status == "Completed"
      ? "/img/icon/delivery-truck.svg"
      : itemData.status == "In Repair"
      ? "/img/icon/inproduction.svg"
      : "/img/icon/documents_review.svg"

  return (
    <>
      <div className="bg-white shadow-sm border font-play p-5 xl:py-3 xl:px-4">
        <div className="flex w-full items-center justify-between p-1 space-x-4">
          <Image
            src={itemData.img}
            width={91}
            height={91}
            alt="product"
            className="w-1/4 object-contain"
          />
          <div className="flex items-center justify-between w-1/2 font-medium">
            <div className="full">
              <p className="text-black lg:text-[13px] text-[12px] py-1 font-semibold 2xl:text-base">
                {itemData.title}
              </p>

              <div
                className={`2xl:w-36 xl:w-[90px] w-[120px] py-[7px] text-[10px] text-white text-center rounded-full ${
                  itemData.status == "Completed"
                    ? "bg-green-500"
                    : "bg-[#F9C152]"
                }`}
              >
                {itemData.status}
              </div>
            </div>
          </div>
          <Image
            src={imgStatus}
            width={60}
            height={60}
            alt="product"
            className="w-1/5"
          />
        </div>
        <div className="flex flex-col  w-full 2xl:text-sm lg:text-[13px] sm:text-[13px] text-[10px] font-[600] font-play">
          <ul className="flex w-full justify-between pt-2 px-2">
            <li className="text-[#131313] ">Order By</li>
            <li className="text-blue-500 ">{itemData.users.name}</li>
          </ul>
          <ul className="flex w-full justify-between pt-2 px-2">
            <li className="text-[#131313]">Delivery Date</li>
            <li className="text-[#003672]">July 28, 2021 at 3.45 PM</li>
          </ul>
          <ul className="flex w-full justify-between pt-2 pb-2 px-2">
            <li className="text-black">Order Number</li>
            <li className="text-[#003672]">#{itemData.order_id}</li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default DetailProject
