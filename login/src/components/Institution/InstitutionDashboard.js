import React from "react";
import { useNavigate } from "react-router-dom";
import graduationIcon from "../../assets/graduationIcon.svg";
import Sign_in_circle from "../../assets/Sign_in_circle.svg";
import PaymentProof_img from "../../assets/PaymentProof_img.svg";
import pasteSymbol from "../../assets/pasteSymbol.svg";
import right_button_white from "../../assets/right_button_white.svg";;

const InstitutionDashboard = () => {
  const navigate = useNavigate();

  const handleStudentsList = () => navigate("/studentslist");

  return (
    <div className="flex min-h-screen bg-[#E9F3FC] relative">

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-left text-[48px] font-semibold">
            Your <br /> Dashboard
          </h1>
          {/* Search Bar */}
          <div className="flex space-x-4 pt-24">
            <input
              type="text"
              placeholder="Search with contact number"
              className="border border-[#173E88] rounded-lg px-4 py-2 text-[14px] text-[#6D6B6B] outline-none bg-transparent w-full md:w-[400px] h-[32px]"
            />
            <button className="bg-[#173E88] text-white px-4 py-1 rounded-lg text-[14px] font-semibold h-[32px] w-[160px] cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-2 gap-14">
          {/* Left Box */}
          <div className="bg-[#5083CD] p-5 rounded-2xl text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <img src={graduationIcon} alt="Graduation" className="w-10 h-10" />
              <div className="bg-white text-black px-8 py-2 rounded-full text-[14px] font-bold">
                2346
              </div>
              <button onClick={handleStudentsList}>
              <img src={Sign_in_circle} alt="Sign In" className="w-8 h-8" />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg text-left font-semibold">Total Students</span>
              <span className="text-sm text-left text-white ml-28">
                Here is the total number of students currently enrolled under your supervision
              </span>
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-[#5083CD] p-5 rounded-2xl text-white flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <img src={graduationIcon} alt="Graduation" className="w-10 h-10" />
              <div className="bg-white text-black px-8 py-2 rounded-full text-[14px] font-bold">
                2346
              </div>
              <img src={Sign_in_circle} alt="Sign In" className="w-8 h-8" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg text-left font-semibold">New <br /> Enquiries list</span>
              <span className="text-sm text-left text-white ">
                Here is the new enquiries list of students <br /> currently enrolled under your supervision
              </span>
            </div>
          </div>
        </div>

        {/* Search and Assign Pack Section */}
        <div className="bg-white p-6 rounded-2xl mt-10">
          <h2 className="text-[18px] text-left font-bold mb-4">Search and Assign Pack</h2>
          <div className="grid grid-cols-5 gap-6">
            {/* Column 1 - Search by Mobile */}
            <div>
              <label className="block text-sm text-[#173E88] text-left font-medium">Search by Mobile Number</label>
              <input type="text" className="border border-[#173E88] rounded-lg px-4 py-2 w-full mt-2 outline-none" />
            </div>
            {/* Column 2 - Student Name */}
            <div>
              <label className="block text-sm text-[#173E88] text-left font-medium">Student Name</label>
              <input type="text" className="border border-[#173E88] rounded-lg px-4 py-2 w-full mt-2 outline-none" />
            </div>
            {/* Column 3 - Pack Type */}
            <div>
              <label className="block text-sm text-[#173E88] text-left font-medium">Pack Type</label>
              <input type="text" className="border border-[#173E88] rounded-lg px-4 py-2 w-full mt-2 outline-none" />
            </div>
            {/* Column 4 - Payment Proof */}
            <div>
              <label className="block text-sm text-[#173E88] text-left font-medium mb-2">Payment Proof</label>
              <div className="flex items-center bg-[#DFF0FF] px-4 py-1 gap-2 rounded-md w-[120%]">
                <img src={PaymentProof_img} alt="Payment Proof" className="w-7 h-7 mr-2" />
                <span className="text-[12px] text-black text-left font-poppins mr-2">File name.pdf <br /> 9MB</span>
                <a href="#" className="text-[#173E88] text-[12px] font-semibold">View</a>
              </div>
            </div>
            {/* Column 5 - Assign Button */}
            <div className="flex items-end">
              <button className="bg-[#173E88] text-white px-4 py-2 ml-8 rounded-lg w-[70%]">
                Assign
              </button>
            </div>
          </div>
        </div>

        {/* Referral Links Section */}
        <div className="bg-white p-6 rounded-2xl mt-6 grid grid-cols-3 gap-5">
          <div className="text-left">
            <span className="block text-lg font-bold">Referral Links</span>
            <span className="block text-sm text-black">Referral links for sharing with students</span>
          </div>
          <div className="relative w-[130%]">
            <input
              type="text"
              placeholder="Referral link"
              className="border border-[#173E88] rounded-lg px-4 py-2 w-full pr-10 outline-none"
            />
            <img
              src={pasteSymbol}
              alt="Paste Symbol"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
            />
          </div>

          <button className="bg-[#173E88] text-white text-[16px] px-3 py-2 rounded-lg flex items-end justify-center w-[68%] ml-20 h-[40px] ">
            Share referral links <img src={right_button_white} alt="Arrow Right" className="ml-5 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstitutionDashboard;
