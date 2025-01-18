import React from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import checkmail from "../assets/checkmail.svg";
import buttonarraow from "../assets/buttonarrow.svg";

const CheckEmail = () => {
  const navigate = useNavigate();

  const backtologin = () => {
    navigate("/loginpage");
  };

  return (
    // main div
    <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row lg:justify-between">
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
        <span className="absolute inset-0 bg-gradient-to-br from-[rgba(61,117,223,0.4)] via-[rgba(61,117,223,0.08)] to-transparent rounded-full"></span>
        <span className="relative z-10">Back to login</span>
      </button>

      {/* left section-login form */}
      <div className=" w-1/2">
        {/* logo */}
        <img
          src={adminlogo}
          alt="Skills Connect Logo"
          className="w-[200px] h-[100px] pt-5 mb-8 pl-12"
        />

        {/* check email text */}
        <h1 className="text-3xl font-bold font-family-poppins text-[#000000] mb-6 leading-snug text-left pt-6 pl-12">
          Check your email
        </h1>

        {/* text */}
        <p className="text-[12px] w-[600px] text-left gap-0px font-family-Nunito font-400 text-[#030303] pt-6 pl-12">
          We sent a password reset link to{" "}
          <span className="font-family-Nunito text-[12px] font-bold text-[#173E88] underline">
            1234name@gmail.com
          </span>
        </p>

        {/* open mail Button */}
        <button
          type="button"
          className="mt-20 ml-12 w-[270px] h-[38px] bg-[#173E88] text-white rounded-md text-[10px] font-nunito float-left"
        >
          Open Email
        </button>

        {/* Didn't received a email? click to resend */}
        <p className="text-[12px] w-[600px] text-left font-family-Nunito font-400 text-[#030303] pt-[65px] pl-12 float-left">
          Didn't received a email?{" "}
          <span className="font-family-Nunito text-[12px] font-bold text-[#173E88] underline">
            click to resend
          </span>
        </p>
      </div>

      {/* Right Section - Illustration */}
      <div className="h-full">
        <img
          src={checkmail}
          alt="Check Email Illustration"
          className="max-w-full h-[597px] pr-[90px] "
        />
      </div>
    </div>
  );
};

export default CheckEmail;
