import Image from "next/image"
import { GrNotification } from "react-icons/gr";
import productimg from '../../public/img/product/product_1.png'
import ProgressBar from "../ProgressBar"
import Link from "next/link";
const CardProject = (props) => {
    const { product } = props
    return (
        <div className="w-[370px] shadow-md p-2 bg-white font-play">
            <div className="flex justify-between py-2">
                <div className="bg-[#F5F5F5] py-2 px-2 text-[12px] text-[#13131380] rounded-full">{product.status}</div>
                <div className="flex space-x-2 items-center"> 
                    <div className="text-black">Nov 10, 1:27 PM</div>
                    <GrNotification />
                </div>
            </div>
            <div className="flex justify-between items-center py-2">
                <div>
                    <h4 className="text-black">{product.title}</h4>
                    <p className="py-2 text-[#13131380]">{product.dateTime}</p>
                </div>
                <Image src={product.img}  width={91} height={91} alt="product" />
            </div>

            <div className="flex space-x-4 justify-between items-center py-2">
                <div className="w-2/3">
                    <ProgressBar progressPercentage={product.progress} />
                </div>
                
                {/*<Link href={'/'+ product.id} key={product.id}>*/}
                 <a className="block w-1/3 bg-[#007AFF] mt-4 py-2 text-white font-semibold mb-2 text-center"><Link href={'/'+ product.id} key={product.id}>View</Link></a>
                {/*</Link>*/}
            </div>
        </div>
    )

}
export default CardProject
