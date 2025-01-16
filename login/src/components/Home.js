import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../components/UserContext'; // Import UserContext

import welcome from '../assets/welcome.svg';

const Home = () => {

  const navigate = useNavigate();
  const { username, setUsername } = useContext(UserContext);

  useEffect(() => {
    if (!username) {
      navigate('/Loginpage');
    }
  }, [username, navigate]);

  const logout = () => {
    setUsername('');
    navigate('/Loginpage');
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] flex items-center justify-center">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">

        {/* Left Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-[40px] font-bold text-gray-800 mb-4 text-poppins">Welcome!</h1>
          <p className="text-xl text-black text-poppins mb-6">{username}</p>

          <button
            onClick={logout}
            className="bg-[#173E88] text-white px-6 py-3 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Right Section */}
        <div className="mt-10 lg:mt-0">
          <img
            src={welcome}
            alt="Exit Illustration"
            className="w-full max-w-md mx-auto lg:full"
          />
        </div>
      </div>
    </div>
  ); 
}

export default Home;
