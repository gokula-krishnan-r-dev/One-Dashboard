import { useState } from "react";
import Image from "next/image";
import backgoroundImg from "../public/img/background.svg";
import poster from "../public/img/poster.svg";
import logoimg from "../public/img/Logo.svg";
import { BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const tooglePssword = () => {
        setPasswordShown(!passwordShown)
    }
    return (
        <>
            <div className="h-screen md:flex">
                <div className="flex flex-col md:w-1/3 justify-center py-10 items-center bg-white">
                    <div className="w-10/12 font-play">
                        <Image src={logoimg} className="mx-auto" alt="logo" />
                        <form className="bg-teal-white">
                            <p className="text-2xl font-medium text-black text-center mb-7 py-6">
                                Hi Welcome Back
                            </p>

                            <div className="py-2">
                                <label
                                    className="block text-gray-400 text-sm mb-2"
                                    htmlFor="username"
                                >
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="email"
                                    type="email"
                                    placeholder="Enter Your email"
                                />
                            </div>
                            <div className="py-2">
                                <label
                                    className="block text-gray-400 text-sm mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                        id="password"
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="Enter your password"
                                    />
                                    <div className="absolute right-1 top-3 flex items-center">
                                        <BiShow size={24} className="text-gray-200" onClick={tooglePssword}/>        
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <span className="text-sm hover:text-blue-500 text-[#007AFF] cursor-pointer">
                                    Forgot Password ?
                                </span>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="block w-full bg-[#007AFF] mt-4 py-3 text-white mb-2"
                                >
                                    Sign in
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center space-x-2 justify-center w-full bg-white border mt-4 py-3 text-black mb-2"
                                >
                                    <FcGoogle size={24} />
                                    <span>Sign in with Google</span>
                                </button>
                            </div>
                            <div className="flex justify-center py-2">
                                <p className="text-sm text-[#131313] cursor-pointer">
                                    Dont have an account yet ?{" "}
                                    <Link href="/signup"><span className="text-[#007AFF]">Sign Up</span></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="relative overflow-hidden md:flex w-2/3  relative">
                    <Image
                        src={backgoroundImg}
                        layout="fill"
                        objectFit="cover"
                        alt="backgorund"
                    />
                    <Image
                        src={poster}
                        width={700}
                        height={700}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        alt="bgpic"
                    />
                </div>
            </div>
        </>
    );
};
export default Login;
