import React from "react"
import Image from "next/image"
const HelpCenter = () => {
    return (
        <React.Fragment>
            <div className="max-w-sm relative bg-blue-50">
                <Image src='/img/Ellipse10.png' alt="pic" width={75} height={75} className="absolute top-0 left-0" />
                <Image src='/img/Ellipse11.png' alt="pic" width={75} height={75} className="absolute bottom-0 right-0" />
                <div className="flex flex-col justify-center items-center p-4 space-y-4">
                    <h3 className="text-md text-center">Help Center</h3>
                    <p className="text-gray-400 text-center text-[13px]">
                         Having trouble in 3D Content Studio.
                        Please contact us for more questions.
                    </p>
                    <button className="bg-blue-500 bg- text-white text-sm py-3 text-[12px] w-[137px]">
                        Go To Help Center
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HelpCenter