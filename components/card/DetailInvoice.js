
import { BsDownload } from "react-icons/bs";
const DetailInvoice = () => {
    return (
        <>
            <div className="text-white text-gray-400 p-2 font-play">
                <div className="md:flex md:justify-between block">
                    <div className="md:py-2 w-full">
                        <h4 className="text-lg font-bold text-blue-500 font-semibold">3D Content Studio</h4>
                        <h4 className="text-lg font-normal text-gray-700">1234 State St <br/> New Delhi, India, 1234 </h4>
                    </div>
                    <div className="md:block font-bold w-full">
                        <h3 className="text-2xl text-blue-600 md:text-right py-1">Invoice
                        </h3>
                        <h3 className="text-2xl text-blue-600">#OD170720201002
                        </h3>
                    </div>
                </div>
                <div className='border-b mb-2'>
                    <h4 className='text-black text-xl py-2'>Delivery Time: 15 Days</h4>
                </div>
                <div className='block mb-2'>
                    <p className='text-blue-500 text-base font-semibold py-2'>Bill To</p>
                    <div className='flex justify-between'>
                        <p className='text-gray-400 font-normal text-base w-40 font-play'>Angeline Lee 1234 State St Manila, Philippines, 1234</p>
                        <div className='w-48 text-base'>
                            <ul className='flex items-center justify-between'>
                                <li className='text-gray-400'>Issue Date</li>
                                <li className='text-black'>July 20, 2021</li>
                            </ul>
                            <ul className='flex items-center justify-between'>
                                <li className='text-gray-400'>Due Date</li>
                                <li className='text-black'>July 27, 2021</li>
                            </ul>
                            <ul className='flex items-center justify-between'>
                                <li className='text-gray-400'>Amount Due</li>
                                <li className='text-black'>#30.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-black text-base font-semibold flex items-center justify-between mb-2 border-b'>
                    <p className='py-2'>Item Name 1</p>
                    <p className='py-2'>$30.00</p>
                </div>
                <div className='text-black text-base font-semibold flex items-center justify-between mb-4'>
                    <p className='py-2'>Total Due</p>
                    <p className='py-2'>$30.00</p>
                </div>
                <button className='border-2 border-blue-400 text-[#007AFF] w-full py-3 flex space-x-2 items-center justify-center text-md font-semibold'><BsDownload /><span>Download Invoice</span></button>
                <button className='bg-blue-500 mt-2 text-white w-full py-3 flex space-x-2 items-center justify-center text-md font-semibold'>Pay Now</button>
            </div>
        </>
    )
}
export default DetailInvoice