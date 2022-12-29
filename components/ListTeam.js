

import Image from "next/image"
const ListTeam = (props) => {
    const { team } = props
    return (
        <div className="max-w-sm mt-4 font-play py-2 font-medium">
            <div className="p-2 flex space-x-4">
                {team.map((t, index) => {
                    return (
                        <>
                            <Image src={t.img} alt="pic" width={40} height={40} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default ListTeam