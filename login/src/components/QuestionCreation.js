import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../assets/buttonarrowblue.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import imageIcon from "../assets/imageIcon.svg";
import closeButton from "../assets/closeButton.svg";
import QuestionList from "./QuestionList";
import RejectedQuestion from "./RejectedQuestion";

const QuestionCreation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load active tab from localStorage or default to "create"
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem("activeTab") || "create");

  // Save activeTab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);


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
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[38px] flex items-center justify-between px-5 md:px-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px] whitespace-nowrap"
          >
            <img src={buttonarrowblue} alt="Button arrow" className="w-3 h-3" />
            <span>Question Creation</span>
          </button>

          {/* Right-side buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleRole}
              className="text-[13px] text-[#173E88] font-nunito w-[116px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white"
            >
              Choose your role
            </button>

            <button className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white">
              Inbox
            </button>

            <button className="w-[24px] h-[24px] border-[1px] border-[#173E88] rounded-full hover:bg-[#173E88]">
              <img
                src={UserIcon}
                alt="User"
                className="w-[16px] h-[16px] pl-[6px] hover:invert"
              />
            </button>

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
      {/* Container with common white background */}
      <div className="mt-4 ml-8 bg-white rounded-xl w-full max-w-7xl">
        {/* Tab Navigation */}
        <div className="flex justify-between px-5 md:px-10 py-0 rounded-t-xl">
          {[
            { label: "Create New Question", key: "create" },
            { label: "Question List", key: "list" },
            { label: "Rejected Questions", key: "rejected" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-[16px] font-semibold px-4 py-2 flex-1 text-center text-[#173E88] border-b-4 ${activeTab === tab.key ? "border-[#173E88]" : "border-transparent"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="pl-8">
          {activeTab === "create" && (
            <div className="flex justify-center">
              <div className="w-full max-w-7xl p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <div className="text-[#173E88] text-[12px] font-semibold">SL No: 001</div>
                  <div className="text-[#173E88] text-[12px] font-semibold">Created Date: 12/05/2024</div>
                </div>

                {/* User Creation */}
                <h2 className="text-[#030303] text-[14px] text-left font-medium mb-2">User Creation</h2>
                <div className="w-1/2 grid grid-cols-2 gap-2 text-left text-[12px]">
                  {["Subject", "Grade", "Topic", "Category"].map((label) => (
                    <div key={label}>
                      <label className="block text-[#030303] mb-1 pl-2">{label}</label>
                      <select className="w-[235px] h-[30px] p-2 border border-[#94BDEB] rounded-md text-[10px] pt-0 text-[#A8A8A8]">
                        <option>Select {label}</option>
                      </select>
                    </div>
                  ))}
                </div>

                {/* Question and Answer Creation */}
                <div className="text-left">
                  <h2 className="text-[#030303] text-[14px] font-medium mt-4 mb-2">Question and Answer Creation</h2>

                  <label className="block text-[#030303] text-[12px] mb-1 pl-2">Question</label>

                  <div className="flex items-center gap-4 relative">
                    {/* Textarea */}
                    <textarea
                      placeholder="Question..."
                      className="w-[1100px] pt-1 placeholder:text-[12px] text-[#A8A8A8] border border-[#94BDEB] rounded-md h-16"
                    ></textarea>

                    {/* Image Upload Box with Close Button */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#E9F3FC] border border-[#94BDEB] flex items-center justify-center rounded-md">
                        <img src={imageIcon} alt="Icon" className="w-4 h-4" />
                      </div>
                      <button className="absolute top-[-1px] right-[-24px]">
                        <img src={closeButton} alt="Close" className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Upload Button */}
                    <button className="mt-7 px-4 py-2 bg-[#173E88] text-white rounded-md text-[12px]">Upload</button>
                  </div>
                </div>

                {/* Options Section */}
                <div className="mt-3 grid grid-cols-2 md:grid-cols-5 text-left gap-10 w-full">
                  {["A", "B", "C", "D"].map((option) => (
                    <div key={option} className="relative">
                      <label className="block text-[#030303] text-[12px] mb-1">Option {option}</label>
                      <input
                        type="text"
                        className="w-[210px] h-[30px] p-2 border border-[#94BDEB] rounded-md text-[12px] text-[#A8A8A8]"
                        placeholder="Title or answer"
                      />

                      {/* Image Upload Box with Close Button */}
                      <div className="relative mt-2">
                        <div className="w-[100px] h-[90px] bg-[#E9F3FC] border border-[#94BDEB] flex items-center justify-center rounded-md"></div>
                        <button className="absolute top-[4px] left-28">
                          <img src={closeButton} alt="Close" className="w-3 h-3" />
                        </button>
                      </div>

                      <input
                        type="text"
                        className="w-[100px] h-[35px] p-2 border border-[#94BDEB] rounded-md text-[10px] text-[#A8A8A8] "
                        placeholder="Weightage mark"
                      />

                      {/* Upload Button */}
                      <button className="ml-4 mt-2 px-4 py-2 bg-[#173E88] text-white rounded-md text-[12px] w-[90px] h-[35px] ">Upload</button>
                    </div>
                  ))}
                  {/* Save Button */}
                  <div className="mt-40 ml-16">
                    <button className="px-4 py-1 h-[35px] bg-[#173E88] text-white rounded-md">Save</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "list" && <QuestionList />}
          {activeTab === "rejected" && <RejectedQuestion />}
        </div>
      </div>
    </div>
  );
};

export default QuestionCreation;
