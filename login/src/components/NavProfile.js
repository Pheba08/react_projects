import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import buttonarraowblue from "../assets/buttonarrowblue.svg";

const NavProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const backtoprofile = () => {
    navigate("/homepage");
  };

  const handleLogout = () => {
    navigate("/loginpage");
  };

  const handleRole = () => {
    navigate("/homepage");
  };
  return (
    <div>
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[38px] flex items-center justify-between px-5 md:px-10">
         
          {/* button */}
          <button
            onClick={backtoprofile}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
          >
            <img
              src={buttonarraowblue}
              alt="Button arrow"
              className="w-3 h-3"
            />
            <span>Profile</span>
          </button>

          {/* Right-side buttons */}
          <div
          onClick={handleRole}
          className="flex items-center gap-3 mx-[10px] sm:mx-[20px] md:mx-[180px] lg:mx-[766px]">
            {/* Chose your role */}
            <button className="pt-[-1px] text-[13px] text-[#173E88] font-nunito w-[116px] h-[26px] border-[1px] border-[#173E88] rounded-2xl  md:block">
              Chose your role
            </button>

            {/* Inbox Button */}
            <button className="pt-[-1px] text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl  md:block">
              Inbox
            </button>

            {/* User Icon */}
            <div className="pt-[6px]">
              <button className="w-[24px] h-[24px] border-[1px] border-[#173E88] rounded-full">
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

export default NavProfile;
