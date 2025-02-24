import React from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../assets/buttonarrowblue.svg";
import fileIcon from "../assets/FilterIcon.svg";

const Certificates = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav>
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>
        <div className="bg-white h-[38px] flex items-center justify-between px-2 md:px-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
          >
            <img src={buttonarrowblue} alt="Back" className="w-3 h-3" />
            <span>Certificates</span>
          </button>
        </div>
      </nav>

      {/* First Row - 7 Rectangular Boxes (Half Width) */}
      <div className="w-1/2 grid grid-cols-7 gap-4 p-5 h-1/2">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="w-32 aspect-square bg-white border-2 border-white rounded-lg flex flex-col items-center justify-center"
          >
            <div className="w-4/5 h-4/5 bg-[#BED7F3] rounded-lg flex flex-col items-center justify-center gap-2 p-2">
              <img src={fileIcon} alt="File Icon" className="w-8 h-8" />
              <span className="text-sm font-medium text-[#173E88]">File {index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Input Fields */}
      <div className="bg-white w-full p-5 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <textarea
          placeholder="Description"
          className="border border-gray-300 p-2 rounded-md w-full"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default Certificates;
