import React from "react";
import buttonarraowblue from "../assets/buttonarrowblue.svg";
import { useNavigate } from "react-router-dom";

const Inbox = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[38px] flex items-center justify-between px-2 md:px-5">
          {/* button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
          >
            <img
              src={buttonarraowblue}
              alt="Button arrow"
              className="w-3 h-3"
            />
            <span>Inbox</span>
          </button>
        </div>
      </nav>

      <h1 className="text-[30px] text-left font-Poppins pt-3 pl-[70px] ">Inbox</h1>

      <div className="max-w-[1230px] mx-auto bg-[#DAE8F7] rounded-2xl p-6 mt-3  items-center">
        <div className="max-w-[1200px] bg-white rounded-xl p-6 mt-3 ">
          <p className="text-left text-[16px] ">Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.</p>
          <p className="text-[#8C8A8A] text-[12px] text-left ">1hr ago</p>
        </div>

        <div className="max-w-[1200px] bg-white rounded-xl p-6 mt-3 ">
          <p className="text-left text-[16px] ">Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.</p>
          <p className="text-[#8C8A8A] text-[12px] text-left ">1:22 pm . 12 July 2024</p>
        </div>

        <div className="max-w-[1200px] bg-white rounded-xl p-6 mt-3 ">
          <p className="text-left text-[16px] ">Congratulations! Your exam result has arrived. You can view your result from the Exam History section in your dashboard.</p>
          <p className="text-[#8C8A8A] text-[12px] text-left ">1:22 pm . 12 July 2024</p>
        </div>


      </div>
    </div>
  );
};

export default Inbox;
