import Image from "next/image"
import { GrNotification } from "react-icons/gr"
import productimg from "../../public/img/product/product_1.png"
import userImg from "../../public/img/user/Avatar_4.png"
import { BiTime } from "react-icons/bi"
import ProgressBar from "../ProgressBar"
import Link from "next/link"
const CardOrder = (props) => {
  const { product } = props
  return (
    <div className="2xl:w-[300px] xl:w-[296px] md:w-[530px] w-[350px] px-3 py-3 rounded-[6px] bg-white font-play">
      <div className="flex justify-between  py-2">
        <div className="flex space-x-2 items-center">
          <Image src={product.users.img} alt="pic" width={35} height={35} />
          <div className="">
            <p className="text-[12px] 2xl:text-[16px] font-[600]">
              {product.users.name}
            </p>
            <p className="text-gray-300 2xl:text-[14px] text-[12px] font-normal">
              Last seen 32 minutes ago
            </p>
          </div>
        </div>
        <div className="flex space-x-3 items-center">
          <GrNotification size={15} />
          <div className="text-black text-[14px] font-semibold">
            $ {product.amount}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div>
          <h4 className="text-black text-[14px] font-[600]">{product.title}</h4>
          <p className="py-2 text-[14px] text-[#13131380]">
            {product.dateTime}
          </p>
        </div>
        <Image src={product.img} width={66} height={66} alt="product" />
      </div>

      <div className="flex space-x-3 justify-between items-center py-1">
        <div className="w-2/3  mt-1">
          <ProgressBar progressPercentage={product.progress} />
        </div>

        {/*<Link href={'/'+ product.id} key={product.id}>*/}
        <li className="block w-1/3 md:w-1/3 bg-blue-500 mt-4 py-[7px] text-white font-semibold mb-2 text-center">
          <Link href={"admin/" + product.id} key={product.id}>
            View
          </Link>
        </li>
        {/*</Link>*/}
      </div>
      <div className="flex items justify-between">
        <p className="text-[12px] text-black">{product.status}</p>
        <div className="flex space-x-2">
          <BiTime />
          <span className="text-[12px] text-black">23h, 30m</span>
        </div>
      </div>
    </div>
  )
}
export default CardOrder
