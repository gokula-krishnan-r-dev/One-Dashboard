import React from "react"
const CardExtendDeliver = () => {
    return (
        <React.Fragment >
            <div className="bg-white font-play border">
                <div className="p-4 flex justify-between">    
                    <div className="text-center">
                        <h3 className="text-3xl text-black py-1 font-semibold">02</h3>
                        <h3 className="text-gray-400 text-2xl py-1">Days</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl text-black py-1 font-semibold">26</h3>
                        <h3 className="text-gray-400 text-2xl py-1">Hours</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl text-black py-1 font-semibold">30</h3>
                        <h3 className="text-gray-400 text-2xl py-1">Minutes</h3>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl text-black py-1 font-semibold">42</h3>
                        <h3 className="text-gray-400 text-2xl py-1">Seconds</h3>
                    </div>
                </div>
                <div className="p-4">
                <button className="text-blue-500 border border-blue-500 py-3 px-3 w-full">Extends Delivery Date</button>
                </div>
            </div>
        </React.Fragment>
    )

}
export default CardExtendDeliver