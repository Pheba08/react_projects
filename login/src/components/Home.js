import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import UserContext from "../context/UserContext";
import welcome from "../assets/welcome.svg";

const Home = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(UserContext);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Restore username to context
    } else {
      navigate("/loginpage"); // Redirect to login if no username found
    }
  }, []);

  const logout = () => {
    setUsername(""); // Clear context
    localStorage.removeItem("username"); // Remove from local storage
    navigate("/loginpage");
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC]">
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[35px] py-2"></div>

        {/* Second Layer */}
        <div className="bg-white h-[35px] py-1">
          <img
            src={adminlogo}
            alt="Skills Connect Logo"
            className="w-[150px] h-[30px] pl-5"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center">
        <div className="container md:flex md:items-center md:justify-between">
          {/* Left Section */}
          <div className="text-center lg:text-left space-y-10">
            <h1 className="text-[30px] font-bold text-gray-800 text-poppins space-y-3">
              Welcome!
            </h1>
            <p className="text-[15px] text-black text-poppins mb-6 space-y-3">
              {username}
            </p>

            <button
              onClick={logout}
              className="bg-[#173E88] text-white text-poppins px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>

          {/* Right Section */}
          <div className="mt-10 lg:mt-0">
            <img
              src={welcome}
              alt="Exit Illustration"
              className="w-full max-w-md mx-auto lg:full pt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
