import Image from "next/image"
import { members } from "../../components/data/dataContents"
import { AiOutlinePlus } from "react-icons/ai";
import Project from "../../components/Project";
const Team = () => {
    return (
        <>
            <div className="flex gap-4 p-4 pt-4 font-play">
                <div className="flex flex-col w-full shadow-md p-2">
                    <div className="overflow-x-auto py-4 flex items-center justify-between">
                        <div>
                            <p className="text-gray-400">Team</p>
                            <h2 className="text-3xl">Team Member(4)</h2>
                        </div>
                        <div>
                            <button className="px-4 py-3 bg-blue-500 text-white flex items-center space-x-2"><AiOutlinePlus size={24} /><span>Add Member</span></button>
                        </div>
                    </div>
                    <div className="overflow-x-auto p-2">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-md font-medium text-back font-bold px-6 py-4 text-left">
                                                Name
                                            </th>
                                            <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                                Country
                                            </th>
                                            <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                                Email
                                            </th>
                                            <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {members.map((member, index) => {
                                            console.log(member, index)
                                            return (
                                                <>
                                                    <tr>
                                                        <td className="flex items-center space-x-2 text-sm font-light px-6 py-4 whitespace-nowrap">
                                                            <Image src='/img/user/avatar_team.png' alt="pic" width={32} height={32} />
                                                            <span className="font-semibold">{member.name}</span>
                                                        </td>
                                                        <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                                                            {member.country}
                                                        </td>
                                                        <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                                                            {member.email}
                                                        </td>
                                                        <td className="text-sm text-gray-500 font-medium font-light px-6 py-4 whitespace-nowrap">
                                                            {member.act}
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Team