import { products, dataUser } from "../../components/data/dataContents"
import DetailProject from "../../components/card/DetailProject"
import ProgressBar from "../../components/ProgressBar"
import ListTeam from "../../components/ListTeam"
import Image from "next/image"
import Invoice from "../../components/Invoice"
import Requiretment from "../../components/Requiretment"
import Discussion from "../../components/Discussion"
import Delivery from "../../components/Delivery"
import OrderRating from "../../components/OrderRating"
import InputMessage from "../../components/InputMessage"
import { BsChevronRight } from "react-icons/bs"
import CardExtendDeliver from "../../components/card/CardExtendDeliver"

import React from "react"
export const getStaticPaths = async () => {
  const paths = products.map((itemData) => ({
    params: { id: itemData.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = products.filter((p) => p.id.toString() === id)
  return {
    props: {
      itemData: data[0],
    },
  }
}

const ProjectDetail = ({ itemData }) => {
  return (
    <React.Fragment>
      <div className="p-4 pt-1 pl-6  overflow-y-auto mt-20">
        <div className="w-full py-4">
          <p className="text-gray-400 flex items-center space-x-2 py-1">
            <span>Order</span> <BsChevronRight />{" "}
            <span>#{itemData.order_id}</span>
          </p>
          <h3 className="text-3xl xl:text-2xl text-[#131313] text-font leading-[110%] font-[600]">
            Project Name 1
          </h3>
        </div>
        <div className="flex  flex-wrap lg:flex-nowrap w-full space-x-0">
          <div className="lg:w-[75%] pr-0 md:pr-9 w-full">
            <div className="py-2 smooth-tras">
              <Requiretment />
            </div>
            <div className="py-2">
              <Invoice />
            </div>
            <div className="py-2">
              <Discussion />
            </div>
            <div className="py-2">
              <Delivery />
            </div>

            <div className="py-2">
              <InputMessage />
            </div>
          </div>
          <div className="lg:w-[30%] w-full flex flex-col pl-0 xl:pl-5 2xl:pl-10">
            {/* {itemData.status != "Completed" ? (
              <div className="py-2">
                <CardExtendDeliver />
              </div>
            ) : null} */}

            <div className="py-2">
              <DetailProject itemData={itemData} />
            </div>
            <div className="py-2">
              <div className="bg-white shadow-sm border font-play p-4 font-medium">
                <p className="py-0 text-[12px] font-[600]">
                  Your order is on progress.
                </p>
                <ProgressBar progressPercentage={itemData.progress} />
              </div>
            </div>
            <div className="py-2">
              <ListTeam team={itemData.team} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProjectDetail
