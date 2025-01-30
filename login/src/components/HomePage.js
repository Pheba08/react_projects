import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import masterdata from "../assets/masterdata.svg";
import loginauth from "../assets/loginauth.svg";
import qncreation from "../assets/qncreation.svg";
import qnbankreview from "../assets/qnbankreview.svg";
import valuation from "../assets/valuation.svg";
import packmanagement from "../assets/packmanagement.svg";
import collectionview from "../assets/collectionview.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/loginpage");
  };
  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[35px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[35px] flex items-center justify-between px-5 md:px-10">
          {/* Logo */}
          <img
            src={adminlogo}
            alt="Skills Connect Logo"
            className="w-[150px] h-[30px]"
          />

          {/* Right-side buttons */}
          <div className="flex items-center gap-3 mx-[10px] sm:mx-[20px] md:mx-[180px] lg:mx-[750px]">
            {/* Inbox Button */}
            <button className="text-[12px] text-[#173E88] font-nunito w-[60px] border-[1px] border-[#173E88] rounded-2xl  md:block">
              Inbox
            </button>

            {/* User Icon */}
            <div className="pt-[6px]">
              <button className="w-[21px] h-[18px] border-[1px] border-[#173E88] rounded-2xl">
                <img
                  src={UserIcon}
                  alt="User"
                  className="w-[12px] h-[12px] pl-[6px]"
                />
              </button>
            </div>

            {/* Menu Button */}
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[12px] text-[#173E88] font-nunito w-[60px] border-[1px] border-[#173E88] rounded-2xl flex items-center justify-center gap-[5px]"
              >
                Menu
                <img
                  src={MenuButton}
                  alt="Menu"
                  className="w-[12px] h-[12px]"
                />
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute mt-2 bg-[#173E88] rounded-md shadow-lg w-[64px]">
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-left text-[12px] text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="grid items-center justify-center p-12"> */}
      <div className="grid items-center justify-center ml-10 p-16">
        <div className="grid gap-1 md:grid-cols-[85%_15%] grid-cols-1 ">
          {/* first column */}
          <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <h1 className="ml-[-94px] sm:ml-0 md:ml-[-50px] lg:ml-[-92px] text-[14px] sm:text-[18px] md:text-[22px]  font-bold text-black text-left pt-8">
              Choose to get started
              <br /> with your role
            </h1>

            {/* Master Data Management */}
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
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
            <div className="bg-white shadow rounded p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
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
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Question creation
              </p>
              <img
                src={qncreation}
                alt="Question creation"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
            {/* Question Bank Review */}
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
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
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">Valuation</p>
              <img
                src={valuation}
                alt="Valuation"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
            {/* Pack Management */}
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
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
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Collection view
              </p>
              <img
                src={collectionview}
                alt="Collection view"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>

          {/* second column */}
          <div className="flex justify-center md:pl-[50px] md:items-end lg:items-end">
            <button className="px-8 py-2 bg-[#173E88] text-Nunito text-[14px] text-white rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
