
import { BsFillImageFill, BsCheckCircle } from "react-icons/bs"; 
import { GrDocumentZip } from "react-icons/gr";
//GrDocumentZip
const DetailREquiretment = () => {
    return (
        <div className="text-white text-gray-400 p-2 font-play">
            <div className="flex space-x-24 py-3">
                <div className="block py-2 font-normal">
                    <p className="text-gray-400 text-sm py-1">Created</p>
                    <p className="text-gray-400 text-sm py-1">July 20, 2021</p>
                    <p className="text-gray-400 text-sm py-1">Reference Links</p>
                    <p className="text-gray-400 text-sm py-1">Description</p>
                </div>
                <div className="block py-2 font-semibold text-base">
                    <p className="text-black text-md py-1">July 20, 2021</p>
                    <p className="text-black text-md py-1">3D Animation</p>
                    <p className="text-black text-md py-1">samplelink.com/this-is-sample</p>
                </div>
            </div>
            <p className="text-base font-normal text-black py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Mauris pharetra et ultrices neque ornare. Id nibh tortor id aliquet lectus proin. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Vitae sapien pellentesque habitant morbi tristique. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Enim nulla aliquet porttitor lacus luctus accumsan tortor. A diam maecenas sed enim ut sem. Mattis enim ut tellus elementum sagittis.</p>
            <div className="flex space-x-2 items-center py-4">
                <div className=" w-[135px] h-[67px] bg-gray-100 flex items-center space-x-2 p-2">
                    <BsFillImageFill size={32} className="text-blue-500" />
                    <div className="block">
                        <p className="text-black text-sm py-1">shoes.jpg</p>
                        <p className="text-gray-400 text-[10px]">12 Mb</p>
                    </div>
                </div>
                <div className="w-[165px] h-[67px] bg-gray-100 flex items-center space-x-2 p-2">
                    <GrDocumentZip size={32} className="text-white" />
                    <div className="block">
                        <p className="text-black text-sm py-1">reference.zip</p>
                        <p className="text-gray-400 text-[10px]">135 Mb</p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-2">
                <BsCheckCircle size={24} className="text-gray-400" />
                <p className="text-gray-400 text-base font-medium">The information I provided is accurate and clear. Any changes at this point require approval and may cost extra.</p>
            </div>
        </div>
    )
}
export default DetailREquiretment