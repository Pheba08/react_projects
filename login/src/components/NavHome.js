import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";

const NavHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    navigate("/loginpage");
  };
  return (
    <div>
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[38px] flex items-center justify-between px-5 md:px-10">
          {/* Logo */}
          <img
            src={adminlogo}
            alt="Skills Connect Logo"
            className="w-[150px] h-[30px]"
          />

          {/* Right-side buttons */}
          <div className="flex items-center gap-3 mx-[10px] sm:mx-[20px] md:mx-[180px] lg:mx-[820px]">
            {/* Inbox Button */}
            <button className="pt-[-1px] text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl  md:block">
              Inbox
            </button>

            {/* User Icon */}
            <div className="pt-[6px]">
              <button
                className="w-[24px] h-[24px] border-[1px] border-[#173E88] rounded-full"
                onClick={handleProfile}
              >
                <img
                  src={UserIcon}
                  alt="User"
                  className="w-[16px] h-[16px] pl-[6px]"
                />
              </button>
            </div>

            {/* Menu Button */}
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl flex items-center justify-center gap-[5px]"
              >
                Menu
                <img
                  src={MenuButton}
                  alt="Menu"
                  className="w-[17px] h-[17px]"
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
    </div>
  );
};

export default NavHome;
