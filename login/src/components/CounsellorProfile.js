import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttonarraowblue from "../assets/buttonarrowblue.svg";
import propicOne from "../assets/propicOne.svg";

const CounsellorProfile = () => {
  const navigate = useNavigate();

  const [reselling, setReselling] = useState(false);
  const [counselling, setCounselling] = useState(false);
  const [accountStatus, setAccountStatus] = useState(false);
  const [permission, setPermission] = useState(false);

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>
        <div className="bg-white h-[38px] flex items-center justify-between px-2 md:px-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
          >
            <img src={buttonarraowblue} alt="Back" className="w-3 h-3" />
            <span>Counsellor profile</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-8 p-8">
        {/* First Column (Profile Info) */}
        <div className="col-span-3 bg-[#DFF0FF] p-5">
          <div className="text-left">
            <img
              src={propicOne}
              alt="Profile"
              className="w-34 h-40 items-start"
            />
            <h2 className="text-[20px] text-[#030303] font-semibold font-poppins mt-2">
              Full Name
            </h2>
            <p className="text-[12px] text-[#030303] font-semibold font-nunito">
              Specialization
            </p>

            <div className="grid grid-cols-2 text-[10px] font-nunito m-4">
              <span>
                <span className="text-[#6D6B6B]">Rating</span> <br />
                <span className="text-[14px] text-[#030303]">0 ⭐</span>
              </span>
              <span>
                <span className="text-[#6D6B6B]">Session Charge</span> <br />
                <span className="text-[16px] text-[#030303]">₹000/hr</span>
              </span>
            </div>
          </div>
          <div className="text-[#030303] text-left">
            <h2 className="text-[12px] text-[#030303] font-semibold font-nunito mt-2">
              About
            </h2>
            <p className="text-[10px] mt-1">
              I’m a child counselor with 5 years of experience, specializing in
              career path counseling for young people. I help children explore
              their interests, set goals, and develop a clear vision for their
              future. My approach combines empathy and practical guidance to
              support them in making informed and confident career choices.
            </p>
          </div>
        </div>

        {/* Second Column (Profile Details) */}
        <div className="col-span-6 space-y-5">
          <h2 className="text-[18px] text-left font-semibold font-nunito">
            Profile Details
          </h2>
          {/* Personal Details */}
          <div className="bg-[#F9F9F9] p-4 rounded-xl">
            <h2 className="text-[14px] text-left font-semibold font-Poppins">
              Full name
            </h2>

            <div className="grid grid-cols-2 gap-5">
              <div className="text-[8px] text-left mt-4 space-y-3">
                <p>Year of birth</p>
                <p>Gender</p>
                <p>Primary Contact Number</p>
                <p>Secondary Contact Number</p>
                <p>Language Proficiency</p>
                <p>Email</p>
              </div>
              <div className="text-[8px] text-left mt-4 space-y-3">
                <p>Address</p>
                <p>Country</p>
                <p>Educational Qualification</p>
                <p>Certifications</p>
                <p>Specialization</p>
                <p>Overall counselling experience</p>
              </div>
            </div>
          </div>

          {/* Banking Information */}
          <div className="bg-[#F9F9F9] p-5 rounded-xl">
            <h2 className="text-[12px] text-left font-semibold font-Poppins">
              Banking Information
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <div className="text-[8px] text-left mt-4 space-y-3">
                <p>Account holder name</p>
                <p>bank name</p>
                <p>Bracnch</p>
                <p>Account type</p>
                <p>Contact number</p>
              </div>
              <div className="text-[8px] text-left mt-4 space-y-3">
                <p>Account number / IBAN</p>
                <p>IFSC</p>
                <p>BIC/SWIFT code</p>
                <p>UPI ID</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Column (Settings & Permissions) */}
        <div className="col-span-3 space-y-5 mt-10">
          {/* Session Charge */}
          <div className="bg-white p-5 rounded-xl border border-[#173E88] text-left m-3">
            <h2 className="text-[12px] text-[#173E88] font-semibold font-poppins ">
              Add session charge <br />
              and time duration
            </h2>

            <label className="text-[10px] text-[#6D6B6B] block mt-3">
              Session Charge
            </label>
            <div className="mt-3 space-x-2">
              <span className="text-[14px] text-[#030303] font-semibold ">
                ₹
              </span>
              <input
                type="text"
                className="w-[140px] h-[25px] p-2 border rounded border-[#94BDEB] mb-3"
              />
              <span className="text-[14px] text-[#030303] font-semibold">
                / hr
              </span>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-white p-7 rounded-xl border border-[#173E88] text-left m-3">
            <div className="grid grid-cols-2 gap-5">
              {/* Reselling */}
              <div>
                <h3 className="text-[12px] text-[#173E88] font-poppins font-semibold">
                  Reselling
                </h3>
                <button
                  className={`w-16 h-6 rounded-full p-1 flex items-center mt-3 relative ${
                    reselling ? "bg-[#E9F3FC]" : "bg-[#6D6B6B]"
                  }`}
                  onClick={() => setReselling(!reselling)}
                >
                  {/* Disable Text (Left Side) */}
                  <span
                    className={`absolute left-7 text-[9px] font-medium transition-all ${
                      reselling ? "opacity-0" : "opacity-100 text-[#E9F3FC]"
                    }`}
                  >
                    Disable
                  </span>

                  {/* Enable Text (Right Side) */}
                  <span
                    className={`absolute right-7 text-[9px] font-medium transition-all ${
                      reselling ? "opacity-100 text-[#173E88]" : "opacity-0"
                    }`}
                  >
                    Enable
                  </span>

                  {/* Toggle Circle */}
                  <div
                    className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                      reselling ? "translate-x-9 bg-[#173E88]" : "bg-[#E9F3FC]"
                    }`}
                  ></div>
                </button>
              </div>

              {/* Counselling */}
              <div>
                <h3 className="text-[12px] text-[#173E88] font-poppins font-semibold">
                  Counselling
                </h3>
                <button
                  className={`w-16 h-6 rounded-full p-1 flex items-center mt-3 relative ${
                    counselling ? "bg-[#E9F3FC]" : "bg-[#6D6B6B]"
                  }`}
                  onClick={() => setCounselling(!counselling)}
                >
                  {/* Disable Text (Left Side) */}
                  <span
                    className={`absolute left-7 text-[9px] font-medium transition-all ${
                      counselling ? "opacity-0" : "opacity-100 text-[#E9F3FC]"
                    }`}
                  >
                    Disable
                  </span>

                  {/* Enable Text (Right Side) */}
                  <span
                    className={`absolute right-7 text-[9px] font-medium transition-all ${
                      counselling ? "opacity-100 text-[#173E88]" : "opacity-0"
                    }`}
                  >
                    Enable
                  </span>

                  {/* Toggle Circle */}
                  <div
                    className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                      counselling
                        ? "translate-x-9 bg-[#173E88]"
                        : "bg-[#E9F3FC]"
                    }`}
                  ></div>
                </button>
              </div>

              {/* Account Status */}
              <div>
                <h3 className="text-[12px] text-[#173E88] font-poppins font-semibold">
                  Account Status
                </h3>
                <button
                  className={`w-16 h-6 rounded-full p-1 flex items-center mt-3 relative ${
                    accountStatus ? "bg-[#E9F3FC]" : "bg-[#6D6B6B]"
                  }`}
                  onClick={() => setAccountStatus(!accountStatus)}
                >
                  {/* Disable Text (Left Side) */}
                  <span
                    className={`absolute left-7 text-[9px] font-medium transition-all ${
                      accountStatus ? "opacity-0" : "opacity-100 text-[#E9F3FC]"
                    }`}
                  >
                    Disable
                  </span>

                  {/* Enable Text (Right Side) */}
                  <span
                    className={`absolute right-7 text-[9px] font-medium transition-all ${
                      accountStatus ? "opacity-100 text-[#173E88]" : "opacity-0"
                    }`}
                  >
                    Enable
                  </span>

                  {/* Toggle Circle */}
                  <div
                    className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                      accountStatus
                        ? "translate-x-9 bg-[#173E88]"
                        : "bg-[#E9F3FC]"
                    }`}
                  ></div>
                </button>
              </div>

              {/* Permission */}
              <div>
                <h3 className="text-[12px] text-[#173E88] font-poppins font-semibold">
                  Permission
                </h3>
                <button
                  className={`w-16 h-6 rounded-full p-1 flex items-center mt-3 relative ${
                    permission ? "bg-[#E9F3FC]" : "bg-[#6D6B6B]"
                  }`}
                  onClick={() => setPermission(!permission)}
                >
                  {/* Disable Text (Left Side) */}
                  <span
                    className={`absolute left-7 text-[9px] font-medium transition-all ${
                      permission ? "opacity-0" : "opacity-100 text-[#E9F3FC]"
                    }`}
                  >
                    Disable
                  </span>

                  {/* Enable Text (Right Side) */}
                  <span
                    className={`absolute right-7 text-[9px] font-medium transition-all ${
                      permission ? "opacity-100 text-[#173E88]" : "opacity-0"
                    }`}
                  >
                    Enable
                  </span>

                  {/* Toggle Circle */}
                  <div
                    className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
                      permission ? "translate-x-9 bg-[#173E88]" : "bg-[#E9F3FC]"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorProfile;
