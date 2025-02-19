import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../assets/buttonarrowblue.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import imageIcon from "../assets/imageIcon.svg";
import closeButton from "../assets/closeButton.svg";
import QuestionList from "./QuestionList";
import RejectedQuestion from "./RejectedQuestion";

const QuestionReview = () => {
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
            <span>Review Questions</span>
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

export default QuestionReview;
