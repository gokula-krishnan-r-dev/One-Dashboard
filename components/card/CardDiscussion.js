import Image from "next/image"
const CardDisscussion = () => {
  const dicussions = [
    {
      id: 1,
      name: "Me",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.",
      image: "/img/user/Avatar_3.png",
      dateTime: "22:50  August 1, 2021",
    },
    {
      id: 2,
      name: "3D Content Studio",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.",
      image: "/img/user/Avatar_4.png",
      dateTime: "22:50  Sept 1, 2021",
    },
    {
      id: 3,
      name: "Me",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.",
      image: "/img/user/Avatar_3.png",
      dateTime: "22:50  Oct 1, 2021",
    },
    {
      id: 4,
      name: "3D Max Studio",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.",
      image: "/img/user/Avatar_2.png",
      dateTime: "22:50  Oct 1, 2021",
    },
  ]
  return (
    <>
      <div className="text-white text-gray-400 p-2 font-play">
        {dicussions.map((discuss, index) => {
          return (
            <>
              <div key={index} className="flex space-x-0 border-b mb-4">
                <div className="md:w-[55px] w-[120px]">
                  <Image
                    className="md:w-[45px] w-[90px]"
                    src={discuss.image}
                    alt="pic"
                    width={45}
                    height={45}
                  />
                </div>
                <div className="block pl-2 lg:pl-0 py-0">
                  <h4 className="text-black text-[20px] 2xl:text-[16px] xl:text-[16px] font-medium">
                    {discuss.name}
                  </h4>
                  <p className="text-[16px] 2xl:text-[16px] xl:text-[13px] text-black py-1 font-normal max-w-2xl">
                    {discuss.comment}.
                  </p>
                  <p className="text-gray-400 text-sm font-normal py-2">
                    {discuss.dateTime}
                  </p>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
export default CardDisscussion
