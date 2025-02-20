import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../assets/buttonarrowblue.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import closeButton from "../assets/closeButton.svg";
import SolarSystem from "../assets/SolarSystem.svg"
import Saturn from "../assets/Saturn.svg";
import Jupiter from "../assets/Jupiter.svg";
import Venus from "../assets/Venus.svg";
import Mars from "../assets/Mars.svg";
import EditBtnBlue from "../assets/EditBtnBlue.svg";
import FilterIcon from "../assets/FilterIcon.svg";
import DropDown from "../assets/DropDown.svg";
import ApprovedQuestions from "./ApprovedQuestions";


const QuestionReview = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [expandedRow, setExpandedRow] = useState(null);
  const [editMode, setEditMode] = useState(null);

  const questions = [
    {
      id: 1,
      date: "Date",
      question: "Which is the biggest planet in our solar system?",
      options: [
        { label: "A", name: "Saturn", img: Saturn },
        { label: "B", name: "Jupiter", img: Jupiter },
        { label: "C", name: "Venus", img: Venus },
        { label: "D", name: "Mars", img: Mars },
      ],
    },
    { id: 5, date: "Date", question: "Which is the biggest planet in our solar system?" },
    { id: 6, date: "Date", question: "Which is the biggest planet in our solar system?" },
    { id: 7, date: "Date", question: "Which is the biggest planet in our solar system?" },
  ];

  const toggleEdit = (id) => {
    setEditMode(editMode === id ? null : id);
    setExpandedRow(editMode === id ? null : id);
  };

  const handleEdit = () => {
    navigate("/editquestion");
  };

  const [showFilter, setShowFilter] = useState(false);

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
            { label: "Question List", key: "list" },
            { label: "Approved Questions", key: "approved" },
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
          {activeTab === "list" && (
            <div>
              {/* Table */}
              <div className="pt-5 pb-5 pl-3 pr-10 text-left">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                      <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Sl No</th>
                      <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Created Date</th>
                      <th className="w-[70%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Questions & Options</th>
                      <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins items-right">
                        <button
                          className="cursor-pointer"
                          onClick={() => setShowFilter(true)}
                        >
                          <img src={FilterIcon} alt="Filter" className="w-5 h-5 ml-16" />
                        </button>
                        {/* Filter Modal */}
                        {showFilter && (
                          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black font-medium">
                            <div className="bg-[#E9F3FC] p-4 pl-8 pr-8 rounded-lg shadow-lg w-[350px] relative">
                              <h2 className="text-lg text-left font-semibold">Filter</h2>
                              <button
                                className="absolute top-5 right-8"
                                onClick={() => setShowFilter(false)}
                              >
                                <img src={closeButton} alt="Filter" className="w-5 h-5" />
                              </button>

                              <div className="mt-4">
                                <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB]">
                                  <option>Grade</option>
                                  <option>A</option>
                                  <option>B</option>
                                  <option>C</option>
                                </select>
                              </div>

                              <div className="mt-4">
                                <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB] ">
                                  <option>Subject</option>
                                  <option>Project Management</option>
                                  <option>Coding Fundamentals</option>
                                </select>
                              </div>

                              <div className="mt-4">
                                <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB] ">
                                  <option>Topic</option>
                                  <option>Communication</option>
                                  <option>Leadership</option>
                                  <option>Creativity</option>
                                </select>
                              </div>

                              <div className="mt-4">
                                <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB] ">
                                  <option>Category</option>
                                  <option>C1</option>
                                  <option>C2</option>
                                  <option>C3</option>
                                  <option>C4</option>
                                  <option>C5</option>
                                </select>
                              </div>

                              <button
                                className="mt-4 bg-[#173E88] text-white px-4 py-1 rounded-lg w-[85px] h-[34px] ml-[198px] "
                                onClick={() => setShowFilter(false)}
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        )}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((q) => (
                      <React.Fragment key={q.id}>
                        {/* Question Row */}
                        <tr className="border-b">
                          <td className="px-4 py-2">{q.id}</td>
                          <td className="px-4 py-2">{q.date}</td>
                          <td className="px-4 py-2 font-semibold">{q.question}</td>
                          <td className="px-4 py-2">
                            {/* Approve Button */}
                            <button
                              className="bg-[#173E88] text-white text-[13px] px-4 py-1 w-[110px] rounded flex items-center justify-between"
                              onClick={() => toggleEdit(q.id)}
                            >
                              Approve
                              {/* Dropdown icon inside the button */}
                              <img src={DropDown} alt="Filter" className="w-3 h-3" />
                            </button>

                          </td>
                        </tr>

                        {/* Expanded Options Row */}
                        {expandedRow === q.id && q.options && (
                          <tr>
                            <td colSpan="4" className="p-4">
                              {/* Solar System Image */}
                              <div className="ml-60">
                                <img src={SolarSystem} alt="Solar System" className="w-20 h-20" />
                              </div>

                              {/* Heading and Options Label */}
                              <div className="text-center mt-2">

                                <p className="text-[13px] text-left font-semibold text-black pl-60">Options</p>
                              </div>

                              {/* Answer Choices in One Line */}
                              <div className="flex items-center space-x-4 mt-4 ml-60">
                                {q.options.map((opt, idx) => (
                                  <div key={idx} className="flex items-center space-x-2">
                                    <p className="text-sm font-medium pb-14">{opt.label}.</p>
                                    <img src={opt.img} alt={opt.name} className="w-20 h-20" />
                                    <p className="text-sm pt-14">{opt.name}</p>
                                  </div>
                                ))}
                                {/* Action Buttons */}
                                <div className="flex justify-end mt-12 pl-16 space-x-4">
                                  <button
                                    className="border border-[#173E88] w-[28px] h-[28px] rounded flex items-center justify-center"
                                    onClick={handleEdit}
                                  >
                                    <img src={EditBtnBlue} className="w-3 h-3" />
                                  </button>

                                  <button className="border border-[#173E88] w-[78px] h-[28px] text-[13px] text-[#173E88] rounded">
                                    Reject
                                  </button>

                                  <button className="bg-[#173E88] w-[78px] h-[28px] text-[12px] text-white rounded">
                                    Approve
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}

                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === "approved" && <ApprovedQuestions />}
        </div>
      </div>
    </div>
  );
};

export default QuestionReview;
