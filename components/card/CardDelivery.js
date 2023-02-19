import Image from "next/image"
import { SiHackthebox } from "react-icons/si"
import { BsDownload } from "react-icons/bs"
import PicAtach from "../../public/img/pic_delivery.png"
import imgPic from "../../public/img/user/Avatar_5.png"
import Cubebox from "../../public/img/icon/cubeboxicon.svg"
const CardDelivery = () => {
  return (
    <div className="text-white text-gray-400 p-2 pt-5 font-play">
      <div className="flex justify-between space-x-2 mb-4">
        <div className="flex space-x-4">
          <div className="w-[45px]">
            <Image src={imgPic} alt="pic" width={45} height={45} />
          </div>
          <div className="block">
            <h4 className="text-black text-[20px] 2xl:text-[20px] xl:text-[16px] font-[600]">
              3D Content Studio
            </h4>
            <p className="text-[16px] 2xl:text-[16px] xl:text-[14px] hidden md:block  text-black py-1 font-normal max-w-sm">
              Thanks again for your oder! Your delivery is enclosed.Thanks again
              and have a great day :).
            </p>
          </div>
        </div>
        {/* <SiHackthebox size={70} className="text-blue-500" /> */}
        <Image
          width={67}
          height={67}
          alt="loog"
          src={Cubebox}
          className="ml-4 hidden md:block"
        />
      </div>
      <p className="text-[16px] 2xl:text-[16px] xl:text-[14px] md:hidden text-[#00000080] md:text-black py-1 font-normal max-w-full">
        Thanks again for your oder! Your delivery is enclosed.Thanks again and
        have a great day :).
      </p>
      <h5 className="text-[#131313] pt-2 text--font text-[16px] 2xl:text-[16px] xl:text-[14px] font-[500] leading-[20px]">
        ATTACHMENTS
      </h5>
      <div className="max-w-[270px] text-[12px] 2xl:text-[12px] xl:text-[14px] cursor-pointer mt-2 rounded overflow-hidden border-[1px] border-[#EBEBEB]">
        <Image
          className="w-full"
          width={326}
          height={220}
          src={PicAtach}
          alt="Pic"
        />
        <div className="px-2 py-2 flex items-center justify-between">
          <p className="text-black font-semibold text-sm">
            3D Model.jpg <span className="text-gray-400">(24MB)</span>
          </p>
          <BsDownload size={24} className="text-blue-500" />
        </div>
      </div>
      <p className="text-sm mt-2 font-medium text-gray-400 p-2">
        22:50 August 1, 2021
      </p>
    </div>
  )
}
export default CardDelivery
