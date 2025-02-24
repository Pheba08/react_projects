import React, { useState, useEffect, useRef } from "react";
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

  const [selectedImages, setSelectedImages] = useState({}); // For options A, B, C, D
  const [selectedQuestionImage, setSelectedQuestionImage] = useState(null); // For the main question image

  const fileInputRefs = useRef({}); // For option images
  const questionFileInputRef = useRef(null); // For the main question image

  // Added State for Subject, Grade, Topic, and Category
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");

  // Subject, Grade, Topic, Category Data
  const subjects = ["Project Management", "Coding Fundamentals", "Effective Communication", "Leadership Development", "Data Analysis", "Design Thinking", "Time Management"];
  const grades = ["A", "B", "C", "D", "E", "F", "G"];
  const topics = ["Communication", "Leadership", "Creativity", "Adaptability", "Team work", "Problem solving", "Active listening"];
  const categories = ["C1", "C2", "C3","C4", "C5", "C6", "C7"];


  const handleImageClick = (option) => {
    if (fileInputRefs.current[option]) {
      fileInputRefs.current[option].click();
    }
  };

  const handleImageChange = (event, option) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImages((prev) => ({
        ...prev,
        [option]: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveImage = (option) => {
    setSelectedImages((prev) => ({
      ...prev,
      [option]: null,
    }));
  };

  const handleQuestionImageClick = () => {
    if (questionFileInputRef.current) {
      questionFileInputRef.current.click();
    }
  };

  const handleQuestionImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedQuestionImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveQuestionImage = () => {
    setSelectedQuestionImage(null);
  };

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
      <div className="mt-4 ml-8 bg-white rounded-xl w-full max-w-7xl mb-5">
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

                {/* Added Subject, Grade, Topic, Category */}
                <div className="w-1/2 grid grid-cols-2 gap-4 text-left text-[12px]">
                  <div>
                    <label className="block text-[#030303] mb-1 pl-2">Subject</label>
                    <select
                      className="w-[235px] h-[30px] py-[1px] border border-[#94BDEB] rounded-md text-[11px] text-[#A8A8A8] "
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option value="">Subject</option>
                      {subjects.map((subj) => (
                        <option key={subj} value={subj}>
                          {subj}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#030303] mb-1 pl-2">Grade</label>
                    <select
                      className="w-[235px] h-[30px] py-[1px] border border-[#94BDEB] rounded-md text-[11px] text-[#A8A8A8]"
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    >
                      <option value="">Grade</option>
                      {grades.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#030303] mb-1 pl-2">Topic</label>
                    <select
                      className="w-[235px] h-[30px] py-[1px] border border-[#94BDEB] rounded-md text-[11px] text-[#A8A8A8]"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    >
                      <option>Topic</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#030303] mb-1 pl-2">Category</label>
                    <select
                      className="w-[235px] h-[30px] py-[1px] border border-[#94BDEB] rounded-md text-[11px] text-[#A8A8A8]"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Category</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
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

                    {/* Image Upload Box with Upload Button on Right Side */}
                    <div className="flex items-center gap-4 relative">
                      {/* Image Upload Box */}
                      <div className="relative">
                        <div
                          className="w-16 h-16 bg-[#E9F3FC] border border-[#94BDEB] flex items-center justify-center rounded-md cursor-pointer"
                          onClick={handleQuestionImageClick}
                        >
                          {selectedQuestionImage ? (
                            <img src={selectedQuestionImage} alt="Uploaded" className="w-full h-full object-cover rounded-md" />
                          ) : (
                            <img src={imageIcon} alt="Icon" className="w-4 h-4" />
                          )}
                        </div>

                        {/* Hidden File Input */}
                        <input
                          type="file"
                          accept="image/*"
                          ref={questionFileInputRef}
                          onChange={handleQuestionImageChange}
                          className="hidden"
                        />

                        {/* Close Button (Only visible when an image is selected) */}
                        {selectedQuestionImage && (
                          <button
                            className="absolute top-[-1px] right-[-26px] rounded-full"
                            onClick={handleRemoveQuestionImage}
                          >
                            <img src={closeButton} alt="Close" className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      {/* Upload Button - Positioned to the Right of Image */}
                      <button className="mt-7 px-4 py-2 bg-[#173E88] text-white rounded-md text-[12px]">
                        Upload
                      </button>
                    </div>


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

                      {/* Image Upload Box */}
                      <div
                        className="relative mt-2 w-[100px] h-[90px] bg-[#E9F3FC] border border-[#94BDEB] flex items-center justify-center rounded-md cursor-pointer"
                        onClick={() => handleImageClick(option)}
                      >
                        {selectedImages[option] ? (
                          <img src={selectedImages[option]} alt="Uploaded" className="w-full h-full object-cover rounded-md" />
                        ) : (
                          <img src={imageIcon} alt="Icon" className="w-4 h-4" />
                        )}
                      </div>

                      {/* Hidden File Input */}
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => (fileInputRefs.current[option] = el)}
                        onChange={(e) => handleImageChange(e, option)}
                        className="hidden"
                      />


                      {/* Close Button (Only visible when image is selected) */}
                      {selectedImages[option] && (
                        <button
                          className="absolute top-[60px] left-28"
                          onClick={() => handleRemoveImage(option)}
                        >
                          <img src={closeButton} alt="Close" className="w-3 h-3" />
                        </button>
                      )}

                      {/* Weightage Mark Input */}
                      <input
                        type="text"
                        className="w-[100px] h-[35px] p-2 border border-[#94BDEB] rounded-md text-[10px] text-[#A8A8A8]"
                        placeholder="Weightage mark"
                      />

                      {/* Upload Button */}
                      <button className="ml-4 mt-2 px-4 py-2 bg-[#173E88] text-white rounded-md text-[12px] w-[90px] h-[35px]">
                        Upload
                      </button>
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
