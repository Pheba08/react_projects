import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import masterdata from "../assets/masterdata.svg";
import loginauth from "../assets/loginauth.svg";
import qncreation from "../assets/qncreation.svg";
import qnbankreview from "../assets/qnbankreview.svg";
import valuation from "../assets/valuation.svg";
import packmanagement from "../assets/packmanagement.svg";
import collectionview from "../assets/collectionview.svg";
import UserContext from "../context/UserContext";
import adminlogo from "../assets/adminlogo.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";

const dummyData = [
  {
    username: "admin1@gmail.com",
    name: "Admin One",
    email: "admin1@gmail.com",
    birthYear: "1990",
    gender: "Male",
    language: "English",
    primaryContact: "+91 9876543210",
    secondaryContact: "+91 1234567890",
    country: "India",
    address: "123 Street Name, City, State, 123456",
    slNo: "001",
  },
  {
    username: "admin2@gmail.com",
    name: "Admin Two",
    email: "admin2@gmail.com",
    birthYear: "1985",
    gender: "Female",
    language: "Spanish",
    primaryContact: "+91 9876543211",
    secondaryContact: "+91 1234567891",
    country: "USA",
    address: "456 Avenue Name, City, State, 654321",
    slNo: "002",
  },
  {
    username: "admin3@gmail.com",
    name: "Admin Three",
    email: "admin3@gmail.com",
    birthYear: "1988",
    gender: "male",
    language: "English",
    primaryContact: "+91 9876548711",
    secondaryContact: "+91 9876540711",
    country: "India",
    address: "456 Avenue Name, City, State, 654321",
    slNo: "003",
  },
  {
    username: "admin4@gmail.com",
    name: "Admin Four",
    email: "admin4@gmail.com",
    birthYear: "1999",
    gender: "male",
    language: "English",
    primaryContact: "+91 9876768711",
    secondaryContact: "+91 9876590701",
    country: "India",
    address: "456 Avenue Name, City, State, 654321",
    slNo: "004",
  },
  {
    username: "admin5@gmail.com",
    name: "Admin Five",
    email: "admin5@gmail.com",
    birthYear: "1995",
    gender: "Female",
    language: "English",
    primaryContact: "+91 9876700711",
    secondaryContact: "+91 9876990701",
    country: "India",
    address: "456 Avenue Name, City, State, 654321",
    slNo: "005",
  },
];

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username, setUsername } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [userTiles, setUserTiles] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(username); // Fetch logged in user from context

  const handleProfile = () => {
    const userData = dummyData.find((user) => user.username === loggedInUser);

    if (userData) {
      navigate("/profile", { state: { userData } });
    } else {
      console.error("User data not found!");
    }
  };

  const handleInbox = () => {
    navigate("/inbox");
  };

  const handleLogout = () => {
    navigate("/loginpage");
  };

  useEffect(() => {
    // Check if there's user data passed via location.state
    const userData = location.state?.userData || null;

    if (userData) {
      setUserTiles(userData.tiles);
      setUsername(userData.username);
      setLoggedInUser(userData.username);
    } else if (!username) {
      navigate("/loginpage");
    }
  }, [location.state, navigate, username, setUsername]);

  const isTileEnabled = (tileName) => userTiles.includes(tileName);

  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = (tileName) => {
    // Toggle selection
    setSelectedTile(selectedTile === tileName ? null : tileName);
  };

  const handleNextClick = () => {
    if (selectedTile === "master data management") {
      navigate("/master");
    } else if (selectedTile === "login Authorization") {
      navigate("/loginauthorization");
    } else if (selectedTile === "question creation") {
      navigate("/questioncreation");
    } else if (selectedTile === "question bank review") {
      navigate("/questionreview");
    } else if (selectedTile === "valuation") {
      navigate("/valuation");
    } else if (selectedTile === "pack management") {
      navigate("/packmanagementhome");
    } else if (selectedTile === "collection view") {
      navigate("/collectionview");
    }
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[38px] flex items-center justify-between px-5 md:px-10">
          {/* Logo */}
          <img
            src={adminlogo}
            alt="Skills Connect Logo"
            className="w-[150px] h-[30px]"
          />

          {/* Right-side buttons */}
          <div className="flex items-center gap-3 mx-[10px] sm:mx-[20px] md:mx-[180px] lg:mx-[945px]">
            {/* Inbox Button */}
            <button
              className="pt-[-1px] text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white"
              onClick={handleInbox}
            >
              Inbox
            </button>

            {/* User Icon */}
            <div className="pt-[6px]">
              <button
                className="w-[24px] h-[24px] border-[1px] border-[#173E88] rounded-full hover:bg-[#173E88]"
                onClick={handleProfile}
              >
                <img
                  src={UserIcon}
                  alt="User"
                  className="w-[16px] h-[16px] pl-[6px] hover:invert"
                />
              </button>
            </div>

            {/* Menu Button */}
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

              {/* Dropdown Menu */}
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
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] 
          ${selectedTile === "master data management"
                  ? "border-[#173E88]"
                  : "border-[#3D75DF33]"
                } 
          rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] cursor-pointer 
          ${isTileEnabled("master data management")
                  ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
                  : "opacity-50 pointer-events-none"
                }`}
              onClick={() => handleTileClick("master data management")}
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
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] 
    ${selectedTile === "login Authorization"
                  ? "border-[#173E88]"
                  : "border-[#3D75DF33]"
                } 
    rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] cursor-pointer 
    ${isTileEnabled("login Authorization")
                  ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
                  : "opacity-50 pointer-events-none"
                }`}
              onClick={() => handleTileClick("login Authorization")}
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
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] 
    ${selectedTile === "question creation"
                  ? "border-[#173E88]"
                  : "border-[#3D75DF33]"
                } 
    rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] cursor-pointer 
    ${isTileEnabled("question creation")
                  ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
                  : "opacity-50 pointer-events-none"
                }`}
              onClick={() => handleTileClick("question creation")}
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
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] 
    ${selectedTile === "question bank review"
                  ? "border-[#173E88]"
                  : "border-[#3D75DF33]"
                } 
    rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] cursor-pointer 
    ${isTileEnabled("question bank review")
                  ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
                  : "opacity-50 pointer-events-none"
                }`}
              onClick={() => handleTileClick("question bank review")}
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
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] 
  ${selectedTile === "valuation"
                  ? "border-[#173E88]"
                  : "border-[#3D75DF33]"
                } 
  rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] cursor-pointer 
  ${isTileEnabled("valuation")
                  ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
                  : "opacity-50 pointer-events-none"
                }`}
              onClick={() => handleTileClick("valuation")}
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
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] 
    ${selectedTile === "pack management"
                  ? "border-[#173E88]"
                  : "border-[#3D75DF33]"
                } 
    rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] cursor-pointer 
    ${isTileEnabled("pack management")
                  ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
                  : "opacity-50 pointer-events-none"
                }`}
              onClick={() => handleTileClick("pack management")}
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
              className={`p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[2px] 
    ${selectedTile === "collection view"
                  ? "border-[#173E88]"
                  : "border-[#3D75DF33]"
                } 
    rounded-[25px] shadow-[0px_4px_4px_0px_#00000040] cursor-pointer 
    ${isTileEnabled("collection view")
                  ? "hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300"
                  : "opacity-50 pointer-events-none"
                }`}
              onClick={() => handleTileClick("collection view")}
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
              onClick={handleNextClick}
              disabled={!selectedTile}
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
