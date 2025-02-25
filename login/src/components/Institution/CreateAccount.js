import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../../assets/adminlogo.svg";
import eyebutton from "../../assets/eyebutton.svg";
import CreateAccnt from "../../assets/CreateAccnt.svg";

const CreateAccount = () => {
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className="bg-[#E9F3FC] w-full h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Main Container */}
            <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row">
                {/* Left Section - Form */}
                <div className="w-1/2 pt-1 pl-10">
                    {/* Logo */}
                    <img src={adminlogo} alt="Skills Connect Logo" className="w-[160px] h-[80px]" />

                    {/* Title */}
                    <h1 className="text-4xl font-bold font-poppins text-[#000000] mb-4 text-left">Create a new account</h1>

                    {/* Form */}
                    <form className="space-y-4 float-left">
                        {/* Full Name */}
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="password" className="block text-[12px] font-nunito text-[#030303] text-justify pl-3">
                                Mobile number (username)
                            </label>
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="password" className="block text-[12px] font-nunito text-[#030303] text-justify pl-3">
                                Enter password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter Password"
                                    className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-2 text-gray-500"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    <img src={eyebutton} alt="Toggle Password Visibility" className="w-[15px] h-[15px]" />
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="password" className="block text-[12px] font-nunito text-[#030303] text-justify pl-3">
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-2 text-gray-500"
                                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                >
                                    <img src={eyebutton} alt="Toggle Password Visibility" className="w-[15px] h-[15px]" />
                                </button>
                            </div>
                        </div>

                        {/* Continue Button */}
                        <button
                            type="button"
                            className="w-[270px] h-[40px] bg-[#173E88] text-white rounded-md text-[14px] font-semibold"
                        >
                            Continue
                        </button>
                    </form>
                </div>

                {/* Right Section - Illustration */}
                <div className="w-1/2 flex justify-center items-center p-6">
                    <img src={CreateAccnt} alt="Illustration" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
