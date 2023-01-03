import Image from "next/image"
import { GrNotification } from "react-icons/gr";
import productimg from '../../public/img/product/product_1.png'
import userImg from '../../public/img/user/Avatar_4.png'
import { BiTime } from "react-icons/bi";
import ProgressBar from "../ProgressBar"
import Link from "next/link";
const CardOrder = (props) => {
    const { product } = props
    return (
        <div className="2xl:w-[392px] xl:w-[320px] w-[300px] shadow-sm p-2 bg-white font-play">
            <div className="flex justify-between py-2">
                <div className="flex space-x-2 items-center">
                    <Image src={product.users.img} alt="pic" width={40} height={40} />
                    <div>
                        <p className="text-sm font-medium">{product.users.name}</p>
                        <p className="text-gray-300 text-[12px] font-normal">Last seen 32 minutes ago</p>
                    </div>
                </div>
                <div className="flex space-x-2 items-center"> 
                    <GrNotification />
                    <div className="text-black font-semibold">$ {product.amount}</div>
                </div>
            </div>
            <div className="flex justify-between items-center py-2">
                <div>
                    <h4 className="text-black text-xl font-medium">{product.title}</h4>
                    <p className="py-2 text-gray-400">{product.dateTime}</p>
                </div>
                <Image src={product.img}  width={91} height={91} alt="product" />
            </div>

            <div className="flex space-x-4 justify-between items-center py-2">
                <div className="w-2/3">
                    <ProgressBar progressPercentage={product.progress} />
                </div>
                
                {/*<Link href={'/'+ product.id} key={product.id}>*/}
                 <li className="block w-1/3 bg-blue-500 mt-4 py-2 text-white font-semibold mb-2 text-center"><Link href={'admin/'+ product.id} key={product.id}>View</Link></li>
                {/*</Link>*/}
            </div>
            <div className="flex items justify-between">
                <p className="text-[12px] text-black">{product.status}</p>
                <div className="flex space-x-2">
                     <span className="text-[12px] text-black">23h, 30m</span>
                     <BiTime />
                </div>
            </div>
        </div>
    )

}
export default CardOrder
