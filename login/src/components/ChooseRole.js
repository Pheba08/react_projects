import React from "react";
import adminlogo from "../assets/adminlogo.svg";
import masterdata from "../assets/masterdata.svg";
import loginauth from "../assets/loginauth.svg";
import qncreation from "../assets/qncreation.svg";
import qnbankreview from "../assets/qnbankreview.svg";
import valuation from "../assets/valuation.svg";
import packmanagement from "../assets/packmanagement.svg";
import collectionview from "../assets/collectionview.svg";

const ChooseRole = () => {
  return (
    <div className="min-h-screen bg-[#E9F3FC]">
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[35px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[35px] flex items-center">
          <img
            src={adminlogo}
            alt="Skills Connect Logo"
            className="w-[150px] h-[30px] pl-5"
          />
        </div>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center p-6 pl-10">
        {/* First Row with Flex */}
        <div className="flex flex-wrap gap-3 w-full max-w-5xl pl-[32px] mt-10 ">
          {/* Title */}
          <h1 className="text-[20px] font-bold text-black pt-[30px] mb-8 text-left-2">
            Choose to get started
            <br /> with your role
          </h1>
          {/* Master Data Management */}
          <div className="flex flex-col items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#173E88] rounded-[25px] shadow-lg">
            <p className="text-center text-[10px] text-black">
              Master data management
            </p>
            <img
              src={masterdata}
              alt="Master data management"
              className="h-[130px] w-[130px] pt-[10px]"
            />
          </div>

          {/* Login Authorization */}
          <div className="flex flex-col items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-lg">
            <p className="text-center text-[10px] text-black">
              Login authorization
            </p>
            <img
              src={loginauth}
              alt="Login authorization"
              className="h-[130px] w-[130px] pt-[10px]"
            />
          </div>

          {/* Question Creation */}
          <div className="flex flex-col items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-lg">
            <p className="text-center text-[10px] text-black">
              Question creation
            </p>
            <img
              src={qncreation}
              alt="Question creation"
              className="h-[130px] w-[130px] pt-[10px]"
            />
          </div>
        </div>

        {/* Second Row with Flex */}
        <div className="flex flex-wrap gap-3 w-full max-w-5xl mt-3 pl-[60px] ">
          {/* Question Bank Review */}
          <div className="flex flex-col items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-lg">
            <p className="text-center text-[10px] text-black">
              Question bank review
            </p>
            <img
              src={qnbankreview}
              alt="Question bank review"
              className="h-[130px] w-[130px] pt-[10px]"
            />
          </div>
          {/* Valuation */}
          <div className="flex flex-col items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-lg">
            <p className="text-center text-[10px] text-black">Valuation</p>
            <img
              src={valuation}
              alt="Valuation"
              className="h-[130px] w-[130px] pt-[10px]"
            />
          </div>

          {/* Pack Management */}
          <div className="flex flex-col items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-lg">
            <p className="text-center text-[10px] text-black">
              Pack management
            </p>
            <img
              src={packmanagement}
              alt="Pack management"
              className="h-[130px] w-[130px] pt-[10px]"
            />
          </div>

          {/* Collection View */}
          <div className="flex flex-col items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-lg">
            <p className="text-center text-[10px] text-black">
              Collection view
            </p>
            <img
              src={collectionview}
              alt="Collection view"
              className="h-[130px] w-[130px] pt-[10px]"
            />
          </div>
          {/* Next Button */}
          <div className="flex items-center pl-[80px] pt-[126px] ">
            <button className="px-6 py-3 bg-[#173E88] text-white rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
