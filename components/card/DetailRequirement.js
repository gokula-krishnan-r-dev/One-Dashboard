import Image from "next/image"
import { BsFillImageFill, BsCheckCircle } from "react-icons/bs"
import { GrDocumentZip } from "react-icons/gr"
import photoicon from "../../public/img/icon/photoicon.svg"
import zipicon from "../../public/img/icon/zipicon.svg"
//GrDocumentZip
const DetailREquiretment = () => {
  return (
    <div className="text-white SmoothAnimation smooth-tras text-gray-400 p-2 font-play">
      <div className="flex space-x-6 sm:space-x-6 md:space-x-24 pt-3">
        <div className="block py-2 font-normal">
          <p className="text-[#131313] 2xl:text-[14px] text-sm xl:text-[12px] py-1 ">
            Created
          </p>
          <p className="text-[#131313] 2xl:text-[14px] text-sm xl:text-[12px]  py-1">
            July 20, 2021
          </p>
          <p className="text-[#131313] 2xl:text-[14px] text-sm xl:text-[12px]  py-1">
            Reference Links
          </p>
          <p className="text-[#131313] 2xl:text-[14px] text-sm xl:text-[12px]  py-1">
            Description
          </p>
        </div>
        <div className="block pt-2 font-semibold text-base">
          <p className="text-[#131313] text-[16px] 2xl:text-[16px] xl:text-[14px] text--font font-[600] py-1">
            July 20, 2021
          </p>
          <p className="text-[#131313] text-[16px] 2xl:text-[16px] xl:text-[14px] text--font font-[600] py-1">
            3D Animation
          </p>
          <p className="text-[#131313] text-[16px] 2xl:text-[16px] xl:text-[14px] text--font font-[600] py-1">
            samplelink.com/this-is-sample
          </p>
        </div>
      </div>
      <p className="text-[16px] 2xl:text-[16px] xl:text-[14px] font-[400] text--font  text-black py-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu
        volutpat odio facilisis mauris. Mauris pharetra et ultrices neque
        ornare. Id nibh tortor id aliquet lectus proin. Nunc aliquet bibendum
        enim facilisis gravida neque convallis a. Vitae sapien pellentesque
        habitant morbi tristique. Nibh venenatis cras sed felis eget velit
        aliquet sagittis id. Enim nulla aliquet porttitor lacus luctus accumsan
        tortor. A diam maecenas sed enim ut sem. Mattis enim ut tellus elementum
        sagittis.
      </p>
      <div className="flex space-x-2 items-center py-4">
        <div className="md:w-[165px] w-[120px] h-[50x] bg-gray-100 flex items-center space-x-2  py-1">
          <Image
            width={32}
            height={32}
            alt="loog"
            src={photoicon}
            className="ml-4 md:w-[32px] w-[25px]"
          />
          <div className="block">
            <p className="text-black text-[12px] md:text-sm py-1">shoes.jpg</p>
            <p className="text-gray-400 text-[10px]">12 Mb</p>
          </div>
        </div>
        <div className="md:w-[165px] w-[135px] h-[50px] bg-gray-100 flex items-center space-x-2 py-1">
          <Image
            width={32}
            height={32}
            alt="loog"
            src={zipicon}
            className="ml-4 md:w-[32px] w-[25px]"
          />
          <div className="block">
            <p className="text-black text-[12px] md:text-sm py-1">
              reference.zip
            </p>
            <p className="text-gray-400 text-[10px]">135 Mb</p>
          </div>
        </div>
      </div>
      <div className="flex items-center py-2 space-x-2">
        <BsCheckCircle size={16} className="text-gray-400" />
        <p className="text-[#13131380] text-[16px] 2xl:text-[16px] xl:text-[13px]  font-medium">
          The information I provided is accurate and clear. Any changes at this
          point require approval and may cost extra.
        </p>
      </div>
    </div>
  )
}
export default DetailREquiretment
