import { GrNotification } from "react-icons/gr"
import productimg from "../../public/img/product/product_7.png"
import Image from "next/image"
const ListNotifications = (props) => {
  const { notifications } = props
  //console.log(notifications)
  return (
    <div className="max-w-full lg:max-w-full  px-6 mt-4 mb-4  font-play">
      <div className="flex  space-x-4 items-center  ">
        {notifications.icon}

        <div className="w-[97%] py-1">
          <p className="text-[14px] w-full text-[#131313CC] leading-[150%] font-[400]">
            {notifications.title}
          </p>
          <p className="text-[12px] font-[400] leading-[150%] text-[#13131399]">
            {notifications.dateTime} • {notifications.item}
          </p>
        </div>
        <Image
          width={44}
          height={44}
          alt="pic"
          src={notifications.img}
          className="rounded-full"
        />
      </div>
    </div>
  )
}
export default ListNotifications
