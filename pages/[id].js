import { products, dataUser } from "../components/data/dataContents"
import DetailProject from "../components/card/DetailProject"
import ProgressBar from "../components/ProgressBar"
import ListTeam from "../components/ListTeam"
import Image from "next/image"
import Invoice from "../components/Invoice"
import Requiretment from "../components/Requiretment"
import Discussion from "../components/Discussion"
import Delivery from '../components/Delivery'
import OrderRating from "../components/OrderRating"
export const getStaticPaths = async () => {
    const paths = products.map(itemData => ({
        params: { id: itemData.id.toString() },
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = products.filter(p => p.id.toString() === id )
    return {
        props: {
            itemData: data[0],
        },
    }
}


const ProjectDetail = ({itemData}) => {
    return (
        <>
            <div className="p-16 bg-[#FAFAFA] flex gap-8 min-h-screen">
                <div className="w-2/3">
                    <Requiretment />
                    <Invoice />
                    <Discussion />
                    <Delivery />
                    <OrderRating />
                </div>
                <div className="w-1/3">
                <DetailProject itemData = {itemData} />
                    <div className="max-w-sm shadow-sm border font-play py-2 font-medium mt-4">
                        <div className="p-2 bg-white">
                            <p className="py-2">Your order is on progress.
                            </p>
                            <ProgressBar progressPercentage={itemData.progress} />
                        </div>
                    </div>
                    <ListTeam team={itemData.team} />
                </div>
            </div>
        </>
    )
}

export default ProjectDetail

