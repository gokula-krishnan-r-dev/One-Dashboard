
import React from "react";
const Subnav = (props) => {
    const { data } = props
    console.log(data)
    return (
        <React.Fragment>
            {data.map((item) => (
                <>
                    <div className="flex flex-col text-[12px] font-play">
                       <p className="pt-2 pl-6 text-gray-400"> {item.title}</p>
                    </div>
                </>
            ))}
        </React.Fragment>
    )
}
export default Subnav