import Image from "next/image"
import { GrNotification } from "react-icons/gr"
import productimg from "../../public/img/product/product_1.png"
import ProgressBar from "../ProgressBar"
import Link from "next/link"
const CardProject = (props) => {
  const { product } = props
  return (
    <div className="2xl:w-[300px] xl:w-[267px] md:w-[530px] w-[350px] px-3 py-3 rounded-[6px] bg-white font-play">
      <div className="flex justify-between py-2">
        <div className="bg-[#F5F5F5] py-2 px-2 text-[12px] text-[#13131380] rounded-full">
          {product.status}
        </div>
        <div className="flex space-x-2 items-center">
          <div className="text-black text-[13px] font-play font-[600]">
            Nov 10, 1:27 PM
          </div>
          <GrNotification />
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div>
          <h4 className="text-black text-[16px] font-[600]">{product.title}</h4>
          <p className="py-2 text-[14px] text-[#13131380]">
            {product.dateTime}
          </p>
        </div>
        <Image src={product.img} width={81} height={81} alt="product" />
      </div>

      <div className="flex space-x-4 justify-between items-center py-2">
        <div className="w-2/3">
          <ProgressBar progressPercentage={product.progress} />
        </div>

        {/*<Link href={'/'+ product.id} key={product.id}>*/}
        <li className="block w-1/3 md:w-1/4 bg-blue-500 mt-4 py-2 text-white font-semibold mb-2 text-center">
          <Link href={"client/" + product.id} key={product.id}>
            View
          </Link>
        </li>
        {/*</Link>*/}
      </div>
    </div>
  )
}
export default CardProject
