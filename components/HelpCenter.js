import React from "react"
import Image from "next/image"

import Popup from "reactjs-popup";
import { BsQuestionLg } from "react-icons/bs";

const HelpCenter = () => {
    return (
        <React.Fragment>
            <div className="menu">
                <Popup
                    trigger={
                        <div className="bg-white p-3 rounded-full border">
                            <BsQuestionLg size={28} className="text-white bg-blue-500 rounded-full p-1" />
                        </div>
                    }
                    position="center top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={300}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: '0px', border: 'none' }}
                    arrow={false}
                >
                    <div className="max-w-[191px] bg-blue-50 fixed bottom-8 left-8 font-play">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full bg-white p-3  border">
                            <BsQuestionLg size={28} className="text-white bg-blue-500 rounded-full p-1" />
                        </div>
                        <Image src='/img/Ellipse10.png' alt="pic" width={90} height={90} className="absolute top-0 left-0" />
                        <Image src='/img/Ellipse11.png' alt="pic" width={90} height={90} className="absolute bottom-0 right-0" />
                        <div className="flex flex-col justify-center items-center p-4 space-y-4 pt-12 pb-12">
                            <h3 className="text-md text-center">Help Center</h3>
                            <p className="text-gray-400 text-center font-semibold text-[10px] pt-2 pb-2">
                                Having trouble in 3D Content Studio.
                                Please contact us for more questions.
                            </p>
                            <button className="bg-blue-500 font-normal text-white text-sm py-3 text-[12px] w-[137px]">
                                Go To Help Center
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>
        </React.Fragment>
    )
}
export default HelpCenter


