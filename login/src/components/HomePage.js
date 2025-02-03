import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import masterdata from "../assets/masterdata.svg";
import loginauth from "../assets/loginauth.svg";
import qncreation from "../assets/qncreation.svg";
import qnbankreview from "../assets/qnbankreview.svg";
import valuation from "../assets/valuation.svg";
import packmanagement from "../assets/packmanagement.svg";
import collectionview from "../assets/collectionview.svg";
import NavHome from "../components/NavHome";
import UserContext from "../context/UserContext";
import usersData from "../components/Users.json";

const HomePage = () => {
  const { username } = useContext(UserContext);
  const [userTiles, setUserTiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      const currentUser = usersData.users.find(
        (user) => user.username === username
      );
      if (currentUser) {
        setUserTiles(currentUser.tiles);
      }
    } else {
      navigate("/loginpage");
    }
  }, [username, navigate]);

  const isTileEnabled = (tileName) => userTiles.includes(tileName);

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      <NavHome />
      <div className="grid items-center justify-center ml-10 p-16">
        <div className="grid gap-2 md:grid-cols-[85%_15%] grid-cols-1">
          {/* First column */}
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <h1 className="ml-[-94px] sm:ml-0 md:ml-[-50px] lg:ml-[-92px] text-[16px] sm:text-[20px] md:text-[22px] font-bold text-black text-left pt-8">
              Choose to get started
              <br /> with your role
            </h1>

            {/* Master Data Management */}
            <div
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF33] rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] 
    ${
      isTileEnabled("master data management")
        ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
        : "opacity-50 pointer-events-none"
    }`}
            >
              <p className="text-center text-[10px] text-black font-medium">
                Master data management
              </p>
              <img
                src={masterdata}
                alt="Master data management"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>

            {/* Login Authorization */}
            <div
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF33] rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] 
    ${
      isTileEnabled("login Authorization")
        ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
        : "opacity-50 pointer-events-none"
    }`}
            >
              <p className="text-center text-[10px] text-black font-medium">
                Login authorization
              </p>
              <img
                src={loginauth}
                alt="Login authorization"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>

            {/* Question Creation */}
            <div
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF33] rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] 
    ${
      isTileEnabled("question creation")
        ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
        : "opacity-50 pointer-events-none"
    }`}
            >
              <p className="text-center text-[10px] text-black font-medium">
                Question creation
              </p>
              <img
                src={qncreation}
                alt="Question creation"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>

            {/* Question Bank Review */}
            <div
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF33] rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] 
    ${
      isTileEnabled("question bank review")
        ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
        : "opacity-50 pointer-events-none"
    }`}
            >
              <p className="text-center text-[10px] text-black font-medium">
                Question bank review
              </p>
              <img
                src={qnbankreview}
                alt="Question bank review"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>

            {/* Valuation */}
            <div
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF33] rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] 
    ${
      isTileEnabled("valuation")
        ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
        : "opacity-50 pointer-events-none"
    }`}
            >
              <p className="text-center text-[10px] text-black font-medium">
                Valuation
              </p>
              <img
                src={valuation}
                alt="Valuation"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>

            {/* Pack Management */}
            <div
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF33] rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] 
    ${
      isTileEnabled("pack management")
        ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
        : "opacity-50 pointer-events-none"
    }`}
            >
              <p className="text-center text-[10px] text-black font-medium">
                Pack management
              </p>
              <img
                src={packmanagement}
                alt="Pack management"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>

            {/* Collection View */}
            <div
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] border-[#3D75DF33] rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] 
    ${
      isTileEnabled("collection view")
        ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
        : "opacity-50 pointer-events-none"
    }`}
            >
              <p className="text-center text-[10px] text-black font-medium">
                Collection view
              </p>
              <img
                src={collectionview}
                alt="Collection view"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>

          {/* Second column */}
          <div className="flex justify-center md:pl-[40px] md:items-end lg:items-end">
            <button
              className="px-8 py-2 bg-[#173E88] text-Nunito text-[14px] text-white rounded-lg 
                     transition-all duration-300 
                     hover:bg-[#0f2a5e] hover:scale-105 hover:shadow-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
