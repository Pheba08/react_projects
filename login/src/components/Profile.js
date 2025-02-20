import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import buttonarraowblue from "../assets/buttonarrowblue.svg";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.userData; // Get user data from state

  const handleEdit = () => {
    navigate("/editprofile", { state: { userData } });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
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
          <div className="flex items-center gap-3 mx-[10px] sm:mx-[20px] md:mx-[180px] lg:mx-[870px]">
            {/* Chose your role */}
            <button
            onClick={handleRole}
            className="pt-[-1px] text-[13px] text-[#173E88] font-nunito w-[116px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white">
              Chose your role
            </button>

            {/* Inbox Button */}
            <button className="pt-[-1px] text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl  md:block hover:bg-[#173E88] hover:text-white">
              Inbox
            </button>

            {/* User Icon */}
            <div className="pt-[6px]">
              <button className="w-[24px] h-[24px] border-[1px] border-[#173E88] rounded-full hover:bg-[#173E88]">
                <img
                  src={UserIcon}
                  alt="User"
                  className="w-[16px] h-[16px] pl-[6px] hover:invert"
                />
              </button>
            </div>

            {/* Menu Button */}
            <div>
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


      <div className="max-w-[1230px] mx-auto bg-white rounded-lg p-6 mt-5 pl-10 pr-10">
        {/* Profile Details */}
        <div className="mb-4">
          <h2 className="text-[14px] font-semibold mb-3 text-left text-[#173E88]">
            Profile Details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left">
            {/* First Column */}
            <div className="grid grid-cols-1 items-start">
              <p className="text-[12px] text-[#A8A8A8] font-nunito">Full Name</p>
              <p className="text-[12px]">{userData.name}</p>

              <p className="text-[12px] text-[#A8A8A8] font-nunito mt-2">
                Year of Birth
              </p>
              <p className="text-[12px]">{userData.birthYear}</p>

              <p className="text-[12px] text-[#A8A8A8] font-nunito mt-2">
                Gender
              </p>
              <p className="text-[12px]">{userData.gender}</p>

              <p className="text-[12px] text-[#A8A8A8] font-nunito mt-2">
                Language
              </p>
              <p className="text-[12px]">{userData.language}</p>
            </div>

            {/* Second Column */}
            <div className="grid grid-cols-1 place-items-center ">
              <div className="text-left">
                <p className="text-[12px] text-[#A8A8A8] font-nunito">
                  Primary Contact Number
                </p>
                <p className="text-[12px]">{userData.primaryContact}</p>

                <p className="text-[12px] text-[#A8A8A8] font-nunito mt-2">
                  Secondary Contact Number
                </p>
                <p className="text-[12px]">{userData.secondaryContact}</p>

                <p className="text-[12px] text-[#A8A8A8] font-nunito mt-2">
                  Email
                </p>
                <p className="text-[12px]">{userData.email}</p>

                <p className="text-[12px] text-[#A8A8A8] font-nunito mt-2">
                  Country
                </p>
                <p className="text-[12px]">{userData.country}</p>
              </div>
            </div>

            {/* Third Column */}
            <div className="grid grid-cols-1 place-items-end">
              <div className="text-left">
                <p className="text-[12px] text-[#A8A8A8] font-nunito">Address</p>
                <p className="text-[12px]">{userData.address}</p>
                {/* sl no */}
                <p className="text-[12px] text-[#173E88] font-nunito pt-4 font-medium font-poppins">
                  SL No
                </p>
                <div className="w-[78px] h-[18px] mt-4 p-2 bg-[#94BDEB80] border-[1px] border-[#94BDEB] rounded flex justify-items-end gap-[72px] items-center">
                  <p className="text-[12px] text-black pl-2">{userData.slNo}</p>
                </div>

                {/* Certificate Upload Section */}
                <div className="w-[200px] h-[26px] mt-4 p-2 bg-[#94BDEB80] border-[1px] border-[#94BDEB] rounded-md flex justify-items-end gap-[72px] items-center">
                  <p className="text-[12px] text-black pl-2">Certifications</p>
                  <button className="bg-[#173E88] text-white text-[9px] px-5 py-[6px] rounded-md items-end">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-end mt-2">
            <button
              className="bg-[#173E88] text-white text-[10px] px-10 py-1 rounded-md"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-[#94BDEB] w-full my-3"></div>

        {/* Role Managed */}
        <div className="mb-4">
          <h2 className="text-[14px] font-semibold mb-3 text-left text-[#173E88]">
            Role Managed
          </h2>
          <div className="flex items-center text-[12px]">
            <input
              type="checkbox"
              id="packManagement"
              className="appearance-none w-4 h-4 border border-[#173E88] rounded-sm bg-[#173E88] checked:bg-[#173E88] checked:border-[#173E88] focus:ring-2 focus:ring-[#173E88] cursor-not-allowed"
              checked
              disabled
            />
            <label htmlFor="packManagement" className="ml-2 text-[#173E88]">
              Pack Management
            </label>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-[#94BDEB] w-full my-3"></div>

        {/* Request Role */}
        <div>
          <h2 className="text-[14px] font-semibold mb-3 text-left text-[#173E88]">
            Request Role
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[12px]">
            {[
              "Pack management",
              "Master data management",
              "Question bank review",
              "Collection view",
              "Login authorization",
              "Question creation",
              "Valuation",
              "Career management",
            ].map((role) => (
              <div key={role} className="flex items-center">
                <input
                  type="checkbox"
                  id={role}
                  className="appearance-none w-4 h-4 border border-[#173E88] rounded-sm bg-white checked:bg-[#173E88] checked:border-[#173E88] focus:ring-2 focus:ring-[#173E88] cursor-pointer"
                />
                <label htmlFor={role} className="ml-2 text-black">
                  {role}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Request Button */}
        <div className="flex justify-end mt-2 ">
          <button className="bg-[#173E88] text-white text-[10px] px-8 py-1 rounded-md">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
