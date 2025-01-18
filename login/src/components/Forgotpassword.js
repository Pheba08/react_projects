import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import Forgotpword from "../assets/forgotpword.svg";
import buttonarraow from "../assets/buttonarrow.svg";

const registeredEmails = ["admin1@gmail.com", "admin2@gmail.com"];
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const backtologin = () => {
    navigate("/loginpage");
  };

  const handleForgotPassword = () => {
    if (!email) {
      setError("Please enter your registered email address");
    } else if (!registeredEmails.includes(email)) {
      setError("Please enter a registered email address");
    } else {
      setError("");
      navigate("/checkemail");
    }
  };

  return (
    <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row md:justify-between">
      {/* Back to Login Button */}
      <button
        onClick={backtologin}
        className="absolute top-6 right-6 flex items-center gap-2 text-[#000000] font-poppins font-semibold text-[12px] px-2 py-2 rounded-full shadow-lg border-[1px] overflow-hidden"
      >
        <img
          src={buttonarraow}
          alt="Button arrow"
          className="relative z-10 w-2 h-2"
        />
        <span className="absolute inset-0 bg-gradient-to-b from-[rgba(61,117,223,0.4)] via-[rgba(61,117,223,0.08)] to-transparent rounded-full"></span>
        <span className="relative z-10">Back to login</span>
      </button>

      {/* Left Section - Login Form */}
      <div className="w-1/2">
        <img
          src={adminlogo}
          alt="Skills Connect Logo"
          className="w-[200px] h-[100px] pt-5 mb-8 pl-12"
        />

        <h1 className="text-3xl font-bold font-family-poppins text-[#000000] mb-2 leading-snug text-left pt-2 pl-12">
          Forgot your <br />
          password?
        </h1>

        <p className="text-[12px] w-[600px] text-left gap-0px font-family-Nunito font-400 text-[#030303] pl-12">
          No worries! We’ll send a password reset link to your registered email
          address once you confirm the forget password option
        </p>

        {/* Username Field */}
        <div className="space-y-2 pt-10 pl-12 float-left">
          <label className="block text-[11px] font-nunito text-[#030303] text-justify">
            Please enter your registered email address or username
          </label>
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your registered email address or username"
              className="w-[270px] pl-3 border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] h-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[10px]"
            />
            {/* Error Message */}
            <div className="absolute top-[45px] text-red-500 text-[10px]">
              {error}
            </div>
          </div>
        </div>

        {/* Forgot Button */}
        <button
          type="button"
          onClick={handleForgotPassword}
          className="mt-10 ml-12 w-[270px] h-[38px] bg-[#173E88] text-white rounded-md text-[10px] font-nunito float-left"
        >
          Forget Password
        </button>
      </div>

      {/* Right Section - Illustration */}
      <div className="h-full">
        <img
          src={Forgotpword}
          alt="Forgot Password Illustration"
          className="max-w-full h-[597px] pr-[90px]"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
