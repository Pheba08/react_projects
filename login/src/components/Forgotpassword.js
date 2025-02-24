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
      navigate("/checkemail", { state: { email } });
    }
  };

  return (
    <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row overflow-hidden">
      <button
        onClick={backtologin}
        className="absolute top-6 right-6 flex items-center gap-2 text-[#000000] font-poppins font-semibold text-[12px] px-2 py-2 rounded-full shadow-lg border-[1px]"
      >
        <img
          src={buttonarraow}
          alt="Button arrow"
          className="w-2 h-2"
        />
        <span className="absolute inset-0 bg-gradient-to-b from-[rgba(61,117,223,0.4)] via-[rgba(61,117,223,0.08)] to-transparent rounded-full"></span>
        <span>Back to login</span>
      </button>
      <div className="w-1/2">
        <img
          src={adminlogo}
          alt="Skills Connect Logo"
          className="w-[200px] h-[100px] pt-5 mb-8 pl-12"
        />
        <h1 className="text-4xl font-bold font-family-poppins text-[#000000] mb-2 text-left pt-2 pl-12">
          Forgot your <br />
          password?
        </h1>
        <p className="text-[12px] w-[600px] text-left font-family-Nunito text-[#030303] pl-12">
          No worries! We’ll send a password reset link to your registered email address
          <br />
          once you confirm the forget password option
        </p>
        <div className="space-y-1 pt-10 pl-12 float-left">
          <label className="w-[380px] text-[14px] font-nunito text-[#030303]">
            Please enter your registered email address or username
          </label>
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address or username"
              className="float-left w-[280px] pl-3 pb-3 border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] h-[40px] focus:ring-blue-500 text-[16px]"
            />
            <div className="absolute top-[45px] text-red-500 text-[10px]">
              {error}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleForgotPassword}
          className="mt-40 ml-12 w-[280px] h-[35px] bg-[#173E88] text-white rounded-md text-[14px] font-nunito flex items-center justify-center"
        >
          Forget Password
        </button>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <img
          src={Forgotpword}
          alt="Illustration"
          className="w-full h-screen pr-[90px] lg:pt-0 sm:pt-20"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
