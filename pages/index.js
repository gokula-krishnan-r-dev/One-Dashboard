import { products } from "../components/data/dataContents";
import CardProject from "../components/card/CardProject";
export default function Home() {
  return (
    <>

      <div className="flex gap-4 p-4 pt-4 bg-[#FAFAFA] h-full">
        <div className="flex flex-col w-full">
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-4 mt-8">
                {products.map((product, index) => (
                  <div key={index}>
                    <CardProject product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
