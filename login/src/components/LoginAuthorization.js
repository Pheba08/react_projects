import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogoWhite from "../assets/adminlogoWhite.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import dashboard from "../assets/dashboard.svg";

const LoginAuthorization = () => {
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
      <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>
      <div className="flex flex-1 pt-[2px] pl-[2px] pb-[2px] bg-white">
        <aside className="w-[200px] bg-[#173E88] text-white min-h-full rounded-tr-3xl rounded-br-3xl">
          <div className="p-3">
            <img
              src={adminlogoWhite}
              alt="Skills Connect Logo"
              className="w-[150px] h-[15px]"
            />
            <div className="h-[1px] bg-[#2152AF] w-full my-3"></div>

            <ul className="pt-1 space-y-2 text-left pl-6 w-full">
              {[
                { name: "Home", icon: dashboard },
                { name: "Counselors", icon: dashboard, path: "/counsellors" },
                { name: "Institution", icon: dashboard, path: "/institutions" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 text-[12px] cursor-pointer px-4 py-[5px] transition-all rounded-l-2xl w-full block 
      hover:bg-white hover:text-[#173E88] hover:w-full"
                  onClick={() => navigate(item.path)} // Added navigation here
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="w-[18px] h-[18px] transition-all filter hover:invert hover:brightness-0 hover:sepia hover:hue-rotate-[200deg]"
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="flex-1 bg-[#E9F3FC]">
          <nav className="bg-white h-[38px] font-poppins text-[#173E88] text-[20px] flex items-center justify-between px-2 md:px-5">
            <span className="hidden md:block">Login Authorization</span>
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
          <div className="m-6">
            <h1 className="text-[38px] text-left font-poppins">
              Your <br />
              Dashboard
            </h1>
          </div>
          <div className="m-12">
            <h2 className="text-[16px] font-Inter mt-4 text-left">
              Counselors Profiles
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-2">
              {["New counselors", "Existing counselors"].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-4 rounded-3xl shadow-md w-full text-black font-medium text-[14px] font-poppins"
                >
                  {item}
                  <button
                    className="w-10 h-10 bg-[#173E88] rounded-full flex items-center justify-center hover:bg-[#0f2a5e] hover:scale-105 hover:shadow-lg"
                    onClick={() => navigate("/counsellorprofile")} 
                  >
                    <span className="text-white">
                      <img
                        src={ArrowRight}
                        alt="Right arrow"
                        className="w-[18px] h-[18px]"
                      />
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <h2 className="text-[16px] font-Inter mt-10 text-left">
              Institution Profiles
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-2">
              {["New institutions", "Existing institutions"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white p-4 rounded-3xl shadow-md w-full text-black font-medium text-[14px] font-poppins"
                  >
                    {item}
                    <button className="w-10 h-10 bg-[#173E88] rounded-full flex items-center justify-center hover:bg-[#0f2a5e] hover:scale-105 hover:shadow-lg"
                    onClick={() => navigate("/institutionprofile")}
                    >
                      <span className="text-white">
                        <img
                          src={ArrowRight}
                          alt="Right arrow"
                          className="w-[155px] h-[18px]"
                        />
                      </span>
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAuthorization;
