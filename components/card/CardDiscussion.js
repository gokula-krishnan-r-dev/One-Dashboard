import Image from "next/image"
const CardDisscussion = () => {
    const dicussions = [
        {
            id: 1,
            name: "Me",
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.',
            image: '/img/user/Avatar_3.png',
            dateTime: '22:50  August 1, 2021'
        },
        {
            id: 2,
            name: "3D Content Studio",
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.',
            image: '/img/user/Avatar_4.png',
            dateTime: '22:50  Sept 1, 2021'
        },
        {
            id: 3,
            name: "Me",
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.',
            image: '/img/user/Avatar_3.png',
            dateTime: '22:50  Oct 1, 2021'
        },
        {
            id: 4,
            name: "3D Max Studio",
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim massa fermentum purus, amet et tortor vitae sed consectetur. Libero maecenas semper massa integer. Fermentum lectus rutrum sollicitudin.',
            image: '/img/user/Avatar_2.png',
            dateTime: '22:50  Oct 1, 2021'
        }
    ]
    return (
        <>
            <div className="text-white text-gray-400 p-2 font-play">
                {dicussions.map((discuss, index) => {
                    return (
                        <>
                            <div key={index} className="flex space-x-2 border-b mb-4">
                                <div className="w-16">
                                    <Image src={discuss.image} alt="pic" width={60} height={60} />
                                </div>
                                <div className="block py-2">
                                    <h4 className="text-black text-xl font-medium">{discuss.name}</h4>
                                    <p className="text-base text-black py-1 font-normal max-w-2xl">{discuss.comment}.</p>
                                    <p className="text-gray-400 text-sm font-normal py-2">{discuss.dateTime}</p>
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