import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import checkmail from "../assets/checkmail.svg";
import buttonarraow from "../assets/buttonarrow.svg";

const CheckEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your registered email";

  const backtologin = () => {
    navigate("/loginpage");
  };

  return (
    <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row overflow-hidden">
      <button
        onClick={backtologin}
        className="absolute top-6 right-6 flex items-center gap-2 text-[#000000] font-poppins font-semibold text-[12px] px-2 py-2 rounded-full shadow-lg border-[1px]"
      >
        <img src={buttonarraow} alt="Button arrow" className="w-2 h-2" />
        <span className="absolute inset-0 bg-gradient-to-br from-[rgba(61,117,223,0.4)] via-[rgba(61,117,223,0.08)] to-transparent rounded-full"></span>
        <span>Back to login</span>
      </button>
      <div className="w-1/2">
        <img
          src={adminlogo}
          alt="Skills Connect Logo"
          className="w-[200px] h-[100px] pt-5 mb-8 pl-12"
        />
        <h1 className="text-4xl font-bold font-family-poppins text-[#000000] mb-6 text-left pt-6 pl-12">
          Check your email
        </h1>
        <p className="text-[14px] w-[600px] text-left font-family-Nunito font-400 text-[#030303] pt-6 pl-12">
          We sent a password reset link to{" "}
          <span className="font-family-Nunito text-[14px] font-bold text-[#173E88] underline">
            {email}
          </span>
        </p>
        <button
          type="button"
          className="mt-20 ml-12 w-[270px] h-[36px] bg-[#173E88] text-white rounded-md text-[14px] font-nunito float-left"
        >
          Open Email
        </button>
        <p className="text-[14px] w-[600px] text-left font-family-Nunito font-400 text-[#030303] pt-[65px] pl-12 float-left">
          Didn't receive an email?{" "}
          <span className="font-family-Nunito text-[12px] font-bold text-[#173E88] underline">
            click to resend
          </span>
        </p>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <img
          src={checkmail}
          alt="Illustration"
          className="w-full h-screen pr-[90px] lg:pt-0 sm:pt-20"
        />
      </div>
    </div>
  );
};

export default CheckEmail;
