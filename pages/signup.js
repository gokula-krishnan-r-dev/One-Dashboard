import { useState } from "react";
import Image from "next/image";
import backgoroundImg from "../public/img/bg.svg";
import poster from "../public/img/poster.svg";
import logoimg from "../public/img/Logo.svg";
import { BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Link from "next/link";
const Signup = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const tooglePssword = () => {
        setPasswordShown(!passwordShown)
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <div className="h-screen md:flex">
                <div className="flex flex-col lg:w-1/3 w-full py-10 items-center bg-white">
                    <div className="w-10/12 font-play">
                        <Image src={logoimg} className="mx-auto" alt="logo" />
                        <form className="bg-teal-white" onSubmit={handleSubmit(onSubmit)}>
                            <p className="text-2xl font-medium text-black text-center mb-7 py-6">
                                Lets get Started!
                            </p>
                            <div className="py-2 md:space-x-4 md:flex md:justify-between">
                                <div className="w-full relative">
                                    <label
                                        className="block text-gray-400 text-sm mb-2"
                                    >
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                            id="firstName"
                                            type="text"
                                            placeholder="Enter your first name"
                                           {...register("firstName", { required: true, maxLength: 10 })}
                                        />        
                                        {errors.firstName && <p className="absolute -bottom-1 text-red-500 text-[12px]">First Name is required</p>}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label
                                        className="block text-gray-400 text-sm mb-2"
                                    >
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            {...register("lastName", { required: true, maxLength: 10 })}
                                            />        
                                            {errors.lastName && <p className="absolute -bottom-1 text-red-500 text-[12px]">Last Name is required</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="md:py-2 py-0 relative mb-2">
                                <label
                                    className="block text-gray-400 text-sm mb-2"
                                    htmlFor="username"
                                >
                                    Email
                                </label>
                                <input
                                    className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                    id="email"
                                    type="email"
                                    placeholder="Enter Your email"
                                    {...register("email",
                                    {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                                />

                {errors.email && <p className="absolute -bottom-3 text-red-500 text-[12px]">Please check the Email</p>}
                            </div>
                            <div className="py-2 md:space-x-4 md:flex md:justify-between">
                                <div className="w-full relative">
                                    <label
                                        className="block text-gray-400 text-sm mb-2"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                            id="password"
                                            type={passwordShown ? "text" : "password"}
                                            placeholder="Enter your password"
                                            {...register("password", {
                                                required: true,
                                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                            })}
                                        />

                {errors.password && <p className="absolute -bottom-2 text-red-500 text-[12px]">Please check the Password</p>}
                                        <div className="absolute right-1 top-3 flex items-center">
                                            <BiShow size={24} className="text-gray-200" onClick={tooglePssword} />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label
                                        className="block text-gray-400 text-sm mb-2"
                                        htmlFor="repassword"
                                    >
                                        Re-Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                                            id="cpassword"
                                            type={passwordShown ? "text" : "password"}
                                            placeholder="Enter your password"
                                            {...register("cpassword", {
                                                required: true,
                                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                            })}
                                        />

                                         {errors.cpassword && <p className="absolute -bottom-2 text-red-500 text-[12px]">Please check the re-Password</p>}
                                        
                                        <div className="absolute right-1 top-3 flex items-center">
                                            <BiShow size={24} className="text-gray-200" onClick={tooglePssword} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button
                                    className="block w-full bg-[#007AFF] mt-4 py-3 text-white mb-2"
                                >
                                    Sign Up
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center space-x-2 justify-center w-full bg-white border mt-4 py-3 text-black mb-2"
                                >
                                    <FcGoogle size={24} />
                                    <span>Sign Up with Google</span>
                                </button>
                            </div>
                            <div className="flex justify-center py-2">
                                <p className="text-sm text-[#131313] cursor-pointer">
                                  Already have an account?
                                    <Link href="/login"><span className="text-[#007AFF]"> Sign In</span></Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="relative overflow-hidden lg:flex lg:w-2/3 ">
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
export default Signup;
