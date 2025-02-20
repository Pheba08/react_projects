import React from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../assets/buttonarrowblue.svg";
import imageIcon from "../assets/imageIcon.svg";
import closeButton from "../assets/closeButton.svg";

const EditQuestion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>
        <div className="bg-white h-[38px] flex items-center justify-between px-2 md:px-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
          >
            <img src={buttonarrowblue} alt="Back" className="w-3 h-3" />
            <span>Edit Question</span>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex justify-center pt-2">
        <div className="bg-white w-full max-w-7xl p-4 rounded-md">
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
                  <div className="w-[100px] h-[90px] bg-[#E9F3FC] border border-[#94BDEB] flex items-center justify-center rounded-md">
                    
                  </div>
                  <button className="absolute top-[4px] left-28 ">
                    <img src={closeButton} alt="Close" className="w-3 h-3" />
                  </button>
                </div>

                <input
                  type="text"
                  className="w-[100px] h-[35px] p-2 border border-[#94BDEB] rounded-md text-[10px] text-[#A8A8A8] "
                  placeholder="Weightage mark"
                />

                {/* Upload Button */}
                <button className="ml-5 mt-2 px-4 py-2 bg-[#173E88] text-white rounded-md text-[12px] w-[90px] h-[35px] ">Upload</button>
                
              </div>
            ))}
            {/* Save Button */}
          <div className="mt-40 ml-16">
            <button className="px-4 py-1 h-[35px] bg-[#173E88] text-white rounded-md">Save</button>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default EditQuestion;