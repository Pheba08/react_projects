import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttonarraowblue from "../assets/buttonarrowblue.svg";

const NavEditProfile = () => {
  const navigate = useNavigate();

  const backtoprofile = () => {
    navigate("/homepage");
  };

  return (
    <div>
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
            <span>Edit Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavEditProfile;
