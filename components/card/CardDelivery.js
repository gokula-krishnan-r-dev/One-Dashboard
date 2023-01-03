import Image from "next/image"
import { SiHackthebox } from "react-icons/si";
import { BsDownload } from "react-icons/bs";
import PicAtach from '../../public/img/pic_delivery.png'
import imgPic from '../../public/img/user/Avatar_5.png'
const CardDelivery = () => {
    return (
        <div className="text-white text-gray-400 p-2 font-play">
            <div className="flex justify-between space-x-2 mb-4">
                <div className='flex space-x-4'>
                    <div className="w-16">
                        <Image src={imgPic} alt="pic" width={60} height={60} />
                    </div>
                    <div className="block">
                        <h4 className="text-black text-xl font-medium">3D Content Studio</h4>
                        <p className="text-base text-black py-1 font-normal max-w-sm">Thanks again for your oder! Your delivery is enclosed.Thanks again and have a great day :).</p>
                    </div>
                </div>
                <SiHackthebox size={70} className="text-blue-500" />
            </div>
            <h5 className='text-black'>ATTACHMENTS</h5>
            <div className="max-w-[330px] rounded overflow-hidden shadow-lg">
                <Image className="w-full" src={PicAtach} alt="Pic" />
                <div className="px-2 py-2 flex items-center justify-between">
                    <p className='text-black font-semibold text-sm'>3D Model.jpg <span className='text-gray-400'>(24MB)</span></p>
                    <BsDownload size={24} className="text-blue-500" />
                </div>
            </div>
            <p className='text-sm mt-2 font-medium text-gray-400 p-2'>22:50  August 1, 2021</p>
        </div>
    )
}
export default CardDelivery