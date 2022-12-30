import Image from "next/image";
import { AiOutlineMore } from "react-icons/ai";
import PicImg from '../public/img/user/Avatar.png'
const Profile = () => {
    return (
        <>

            <div className="py-6 max-w-2xl mx-auto">
                <div className="py-2 flex flex-col sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl">Profile</h3>
                        <AiOutlineMore size={26} />
                    </div>
                    <div className="py-2 flex items-center justify-center">
                        <Image src={PicImg} width={36} height={36} alt="pic" />
                    </div>
                    <div className="py-2 space-x-4 flex justify-between">
                        <div className="basis-1/2">
                            <label
                                className="block text-gray-400 text-sm mb-2"
                            >
                                First Name
                            </label>
                            <div className="relative">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="firstname"
                                    type="text"
                                    placeholder="Enter your first name"
                                />

                            </div>
                        </div>
                        <div className="basis-1/2">
                            <label
                                className="block text-gray-400 text-sm mb-2"
                            >
                                Last Name
                            </label>
                            <div className="relative">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="lastname"
                                    type="text"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <label
                            className="block text-gray-400 text-sm mb-2"
                            htmlFor="username"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                            id="email"
                            type="email"
                            placeholder="Enter Your email"
                        />
                    </div>
                    <div className="py-2">
                        <label
                            className="block text-gray-400 text-sm mb-2"
                            htmlFor="username"
                        >
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                            id="phone"
                            type="text"
                            placeholder="Enter Your Phone Number"
                        />
                    </div>
                    <div className="py-2">
                        <p>Billing Address</p>
                    </div>
                    <div className="py-2">

                        <div className="inline-block relative w-full">
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select Country</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 space-x-4 flex justify-between">
                        <div className="basis-1/2">
                            <div className="relative">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="firstnameaddress"
                                    type="text"
                                    placeholder="Enter your first name"
                                />

                            </div>
                        </div>
                        <div className="basis-1/2">
                            <div className="relative">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="lastnameaddress"
                                    type="text"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                            id="company"
                            type="text"
                            placeholder="Company Name Optional"
                        />
                    </div>
                    <div className="py-2">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                            id="address"
                            type="text"
                            placeholder="Address"
                        />
                    </div>
                    <div className="py-2 space-x-4 flex justify-between">
                        <div className="basis-1/3">
                            <div className="relative">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="ciry"
                                    type="text"
                                    placeholder="City"
                                />

                            </div>
                        </div>
                        <div className="basis-1/3 relative">
  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>Really long option</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
                        <div className="basis-1/3">
                            <div className="relative">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="zipcode"
                                    type="text"
                                    placeholder="Zip Code"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <button className="text-white bg-blue-500 py-2 px-2 w-full">Save</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Profile