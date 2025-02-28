import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../../assets/adminlogo.svg";
import eyebutton from "../../assets/eyebutton.svg";
import CreateAccnt from "../../assets/CreateAccnt.svg";
import Weak from "../../assets/Weak.svg";
import Strong from "../../assets/Strong.svg";
import Excellent from "../../assets/Excellent.svg";

const CreateAccount = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const checkPasswordStrength = (password) => {
        if (password.length >= 8 && /[a-z]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return <img src={Excellent} alt="Excellent" className="w-[90px] h-[18px]" />;
        } else if (password.length >= 6) {
            return <img src={Strong} alt="Strong" className="w-[90px] h-[18px]" />;
        } else {
            return <img src={Weak} alt="Weak" className="w-[90px] h-[18px]" />;
        }
    };

    return (
        <div className="bg-[#E9F3FC] w-full h-screen flex flex-col md:flex-row overflow-hidden">
            <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row">
                <div className="w-1/2 pl-10">
                    <img src={adminlogo} alt="Skills Connect Logo" className="w-[160px] h-[80px]" />
                    <h1 className="text-4xl font-bold font-poppins text-[#000000] mb-4 text-left">Create a new account</h1>
                    <form className="space-y-4 float-left">
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="block text-[12px] font-nunito text-[#030303] text-justify pl-3">
                                Mobile number (username)
                            </label>
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className="w-[270px] h-[38px] text-[14px] p-2 border rounded-md border-gray-400 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label className="block text-[12px] font-nunito text-[#030303] text-justify pl-3">
                                Enter password
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                        <div className="flex flex-col space-y-1">
                            <label className="block text-[12px] font-nunito text-[#030303] text-justify pl-3">
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
                        <p className="text-[12px] font-nunito text-[#030303] text-left mt-1 flex">
                            <span>Password Strength</span>
                            <span className="ml-5">{checkPasswordStrength(password)}</span>
                        </p>

                        <div className="flex flex-col space-y-1 text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" checked={password.length >= 8} readOnly className="w-3 h-3 appearance-none rounded-full border-none bg-[#D9D9D9] checked:black" />
                                8 characters
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" checked={/[a-z]/.test(password)} readOnly className="w-3 h-3 appearance-none rounded-full border-none bg-[#D9D9D9] checked:black" />
                                1 lower case character
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" checked={/[^A-Za-z0-9]/.test(password)} readOnly className="w-3 h-3 appearance-none rounded-full border-none bg-[#D9D9D9] checked:black" />
                                1 special character
                            </label>
                        </div>
                        <button
                            type="button"
                            className="w-[270px] h-[40px] bg-[#173E88] text-white rounded-md text-[14px] font-semibold"
                        >
                            Continue
                        </button>
                    </form>
                    <p className="text-[14px] w-[600px] text-left font-nunito text-[#030303] pt-6 float-left">
                        Already have an account? <span className="font-bold text-[#173E88] underline">Sign In</span>
                    </p>
                </div>
                <div className="w-1/2 flex justify-center items-center p-6">
                    <img src={CreateAccnt} alt="Illustration" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;