import React, { useState } from "react";
import adminlogoWhite from "../assets/adminlogoWhite.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import { useNavigate } from "react-router-dom";

const Inbox = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/loginpage");
  };

  const handleRole = () => {
    navigate("/homepage");
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      {/* First Layer */}
      <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

      <div className="flex flex-1 pt-[2px] pl-[2px] pb-[2px] bg-white">
        {/* Side Navbar */}
        <aside className="w-[200px] bg-[#173E88] text-white min-h-full rounded-tr-3xl rounded-br-3xl">
          <div className="p-3">
            {/* Logo */}
            <img
              src={adminlogoWhite}
              alt="Skills Connect Logo"
              className="w-[150px] h-[15px] "
            />

            <div className="h-[1px] bg-[#2152AF] w-full my-3"></div>

            <div className="bg-white rounded-2xl px-4 py-[5px] inline-block">
              <h3 className="text-[12px] text-[#173E88] font-poppins font-semibold mb-0">
                Master Data Management
              </h3>
            </div>

            <ul className="pt-4 space-y-1 text-left pl-6 w-full">
              {[
                "Qualification",
                "Language",
                "Gender",
                "Grade",
                "Subject",
                "Topic",
                "Category",
                "Role Management",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-[12px] cursor-pointer relative px-4 py-[5px] before:content-['-'] before:mr-[18px] 
                 hover:bg-[#94BDEB] hover:text-[#173E88] transition-all rounded-l-2xl w-full block"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex-1 bg-[#E9F3FC]">
          {/* Navbar */}
          <nav className="bg-white h-[38px] font-poppins text-[#173E88] text-[20px] flex items-center justify-between px-2 md:px-5">
            <span>Master data management</span>

            {/* Right-side buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleRole}
                className="text-[13px] text-[#173E88] font-nunito w-[116px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white"
              >
                Chose your role
              </button>

              <button className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white">
                Inbox
              </button>

              <div className="pt-[6px]">
                <button className="w-[24px] h-[24px] border-[1px] border-[#173E88] rounded-full hover:bg-[#173E88]">
                  <img
                    src={UserIcon}
                    alt="User"
                    className="w-[16px] h-[16px] pl-[6px] hover:invert"
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl flex items-center justify-center gap-[5px] transition-all duration-300 hover:bg-[#173E88] hover:text-white"
                >
                  Menu
                  <img
                    src={MenuButton}
                    alt="Menu"
                    className="w-[17px] h-[17px]"
                  />
                </button>

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
          </nav>

          <div className="flex items-center justify-between px-[20px] pt-6">
            <h1 className="text-[20px] text-left font-poppins">
              Qualification
            </h1>
            <button className="text-[13px] text-white font-nunito bg-[#173E88] px-4 py-1 rounded-md hover:bg-[#0F2C64] transition-all">
              Add Qualification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
