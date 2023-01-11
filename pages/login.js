import { useState } from "react";
import Image from "next/image";
import backgoroundImg from "../public/img/bg.svg";
import poster from "../public/img/poster.svg";
import logoimg from "../public/img/Logo.svg";
import { BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from "next/link";
const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const tooglePssword = () => {
        setPasswordShown(!passwordShown)
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    };

    return (
        <>
            <div className="h-screen md:flex">
                <div className="flex flex-col lg:w-1/3 w-full py-10 items-center bg-white">
                    <div className="w-10/12 font-play p-4">
                        <Image src={logoimg} width={280} height={108} className="mx-auto" alt="logo" />
                        <form className="bg-teal-white" onSubmit={handleSubmit(onSubmit)}>
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

                                    id="email"
                                    type="email"
                                    placeholder="Enter Your email"
                                    {...register('email')}
                                    className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300 ${errors.email ? 'is-invalid' : ''}`}
                                />

                                <p className="text-red-500 text-[12px]">{errors.email?.message}</p>
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

                                        id="password"
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="Enter your password"
                                        {...register('password')}
                                        className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300 ${errors.password ? 'is-invalid' : ''}`}
                                    />

                                    <div className="absolute right-1 top-3 flex items-center">
                                        <BiShow size={24} className="text-gray-200" onClick={tooglePssword} />
                                    </div>
                                    <p className="text-red-500 text-[12px] absolute -bottom-2">{errors.password?.message}</p>

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
export default Login;
