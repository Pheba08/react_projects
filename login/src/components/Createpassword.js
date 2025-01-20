import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import eyebutton from "../assets/eyebutton.svg";
import createpword from "../assets/createpword.svg";
import buttonarraow from "../assets/buttonarrow.svg";

const CreatePassword = () => {
  const navigate = useNavigate();

  const backtologin = () => {
    navigate("/loginpage");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row overflow-hidden">
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

      {/* main div */}
      <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row lg:justify-between ">
        {/* left section-login form */}
        <div className=" w-1/2">
          {/* logo */}
          <img
            src={adminlogo}
            alt="Skills Connect Logo"
            className="w-[200px] h-[100px] pt-5 mb-8 pl-12"
          />

          {/* text */}
          <h1 className="text-3xl font-bold font-family-poppins text-[#000000] mb-6 leading-snug text-left pt-4 pl-12">
            Create a secure <br />
            password
          </h1>

          {/* login form */}
          <form className="space-y-10">
            {/* new password */}
            <div className="space-y-1 pt-2">
              <label className="block text-[12px] font-nunito text-#030303 text-justify pl-14">
                Enter new password
              </label>
              <div className="relative w-[200px]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-[214px] pl-3  border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] focus:outline-none focus:ring-2 focus:ring-blue-500 absolute left-12 text-sm"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1/2 transform translate-y-3 transform translate-x-14 text-gray-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <img
                    src={eyebutton}
                    alt="Eye Button"
                    className="w-[15px] h-[15px] "
                  />
                </button>
              </div>
            </div>

            {/* confirm password */}
            <div className="space-y-1 pt-5">
              <label className="block text-[12px] font-nunito text-[#030303] text-justify pl-14">
                Confirm password
              </label>
              <div className="relative w-[200px]">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-[214px] pl-3  border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] focus:outline-none focus:ring-2 focus:ring-blue-500 absolute left-12 text-sm"
                />
                <button
                  type="button"
                  className="absolute right-1 top-1/2 transform translate-y-3 transform translate-x-14 text-gray-500"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  <img
                    src={eyebutton}
                    alt="Eye Button"
                    className="w-[15px] h-[15px] "
                  />
                </button>
              </div>
            </div>

            <br />

            {/* continue button */}
            <button
              type="button"
              className="w-[214px] h-[32px] bg-[#173E88] text-white rounded-md text-[10px] font-nunito absolute left-12"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Section - Illustration */}
        <div className="h-full flex items-center">
        <img
          src={createpword}
          alt="Illustration"
          className="w-full h-[597px] pr-[90px] lg:pt-0 sm:pt-24"
        />
      </div>
        
        
        
        {/* <div className="h-full">
          <img
            src={createpword}
            alt="Create password Illustration"
            className="max-w-full h-[597px] max-w-[90%] max-h-[100%] pr-[90px]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default CreatePassword;
