import React from 'react';
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../assets/buttonarrowblue.svg";

const Certificates = () => {
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
            <span>Certificates</span>
          </button>
        </div>
      </nav>
            
        </div>
    );
}

export default Certificates;
