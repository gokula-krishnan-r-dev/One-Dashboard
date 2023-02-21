import { BsDownload } from "react-icons/bs"
const DetailInvoice = () => {
  return (
    <>
      <div className="text-white text-gray-400 p-2 font-play">
        <div className="md:flex md:justify-between block">
          <div className="md:py-2 w-full">
            <h4 className=" text-[16px] 2xl:text-[16px] xl:text-[14px] font-bold text-[#007AFF]">
              3D Content Studio
            </h4>
            <h4 className="text-[16px] 2xl:text-[16px] xl:text-[14px] font-[500] font-normal text-gray-700">
              1234 State St <br /> New Delhi, India, 1234{" "}
            </h4>
          </div>
          <div className="md:block font-bold w-full">
            <h3 className="text-[17px]  2xl:text-[24px] xl:text-[18px] text-blue-600 text-right md:text-right py-1">
              Invoice
            </h3>
            <h3 className="text-[17px]  2xl:text-[24px] xl:text-[18px]  items-end flex justify-end text-blue-600">
              #OD170720201002
            </h3>
          </div>
        </div>
        <div className="border-b mb-2">
          <h4 className="text-black text-[16px] 2xl:text-[16px] xl:text-[14px] py-2">
            Delivery Time: 15 Days
          </h4>
        </div>
        <div className="block mb-2">
          <p className="text-blue-500 text-[16px] 2xl:text-[16px] xl:text-[14px] font-semibold py-2">
            Bill To
          </p>
          <div className="flex justify-between">
            <p className="text-[#131313] font-normal text-[13px] 2xl:text-[16px] xl:text-[14px] w-[120px] font-play">
              Angeline Lee 1234 State St Manila, Philippines, 1234
            </p>
            <div className="w-[130px] text-[12px] 2xl:text-[16px] xl:text-[13px]">
              <ul className="flex items-center justify-between">
                <li className="text-gray-400 ">Issue Date</li>
                <li className="text-black">July 20, 2021</li>
              </ul>
              <ul className="flex items-center justify-between">
                <li className="text-gray-400">Due Date</li>
                <li className="text-black">July 27, 2021</li>
              </ul>
              <ul className="flex items-center justify-between">
                <li className="text-gray-400">Amount Due</li>
                <li className="text-black">$30.00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-black text-[16px] 2xl:text-[16px] xl:text-[14px] font-semibold flex items-center justify-between mb-2 border-b">
          <p className="py-2">Item Name 1</p>
          <p className="py-2">$30.00</p>
        </div>
        <div className="text-black text-[16px] 2xl:text-[16px] xl:text-[14px] font-semibold flex items-center justify-between mb-4">
          <p className="py-2">Total Due</p>
          <p className="py-2">$30.00</p>
        </div>
        <button className="border-2 border-blue-400 text-[#007AFF] w-full py-3 flex space-x-2 items-center justify-center text-md font-semibold">
          <BsDownload />
          <span>Download Invoice</span>
        </button>
        <button className="bg-blue-500 mt-2 text-white w-full py-3 flex space-x-2 items-center justify-center text-md font-semibold">
          Pay Now
        </button>
      </div>
    </>
  )
}
export default DetailInvoice
