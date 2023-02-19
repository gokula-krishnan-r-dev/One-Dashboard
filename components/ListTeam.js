import Image from "next/image"
import React from "react"
const ListTeam = (props) => {
  const { team } = props
  return (
    <React.Fragment>
      <div className="font-play py-2 font-medium">
        <div className="p-2 flex -space-x-3 pl-3">
          {team.map((t, index) => {
            return (
              <>
                <Image src={t.img} alt="pic" width={40} height={40} />
              </>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
export default ListTeam
