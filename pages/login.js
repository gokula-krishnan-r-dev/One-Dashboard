import { useState } from "react";
import Image from "next/image";
import backgoroundImg from "../public/img/bg.svg";
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
                <div className="flex flex-col md:w-1/3 py-10 items-center bg-white">
                    <div className="w-10/12 font-play p-4">
                        <Image src={logoimg} width={280} height={108} className="mx-auto" alt="logo" />
                        <form className="bg-teal-white">
                            <h3 className="text-2xl font-bold text-black text-center mb-7 py-6">
                                Hi, Welcome Back
                            </h3>

                            <div className="py-2">
                                <label
                                    className="block text-gray-400 text-lg mb-2 font-medium"
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
                                    className="block text-gray-400 text-lg mb-2 font-medium"
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
                                <span className="text-sm hover:text-blue-500 text-blue-500 cursor-pointer font-medium">
                                    Forgot Password ?
                                </span>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="block w-full bg-blue-500 text-lg font-semibold mt-4 py-3 text-white mb-2"
                                >
                                    Sign in
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center space-x-2 justify-center w-full bg-white border mt-4 py-3 text-black mb-2"
                                >
                                    <FcGoogle size={24} />
                                    <span className="text-lg font-semibold">Sign in with Google</span>
                                </button>
                            </div>
                            <div className="flex justify-center py-2">
                                <p className="text-sm text-black text-base cursor-pointer">
                                    Dont have an account yet ?{" "}
                                    <Link href="/signup"><span className="text-blue-500">Sign Up</span></Link>
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
                   
                </div>
            </div>
        </>
    );
};
export default Login;
