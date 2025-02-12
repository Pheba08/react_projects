import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";
import buttonarrowblue from "../assets/buttonarrowblue.svg"; // Import back arrow icon

const NavMaster = ({ heading = "Master Data Management", showIcons = true }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleInbox = () => {
    navigate("/inbox");
  };

  const handleRole = () => {
    navigate("/homepage");
  };

  const handleLogout = () => {
    navigate("/loginpage");
  };

  return (
    <nav>
      {/* First Layer */}
      <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

      {/* Second Layer */}
      <div className="bg-white h-[38px] font-poppins text-[#173E88] text-[10px] flex items-center justify-between px-5">
        {/* Left Section: Back Arrow (only when showIcons is false) + Heading */}
        <div className="flex items-center gap-4 px-[200px]">
          {!showIcons && (
            <button onClick={handleBack} className="focus:outline-none">
              <img src={buttonarrowblue} alt="Back" className="w-4 h-4 cursor-pointer" />
            </button>
          )}
          <h1 className="text-[#173E88] font-poppins font-semibold text-[19px]">
            {heading}
          </h1>
        </div>

        {/* Right Section: Icons (conditionally rendered) */}
        {showIcons && (
          <div className="flex items-center gap-3 pr-1">
            {/* Choose your role */}
            <button
              onClick={handleRole}
              className="text-[13px] text-[#173E88] font-nunito w-[116px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white"
            >
              Choose your role
            </button>

            {/* Inbox Button */}
            <button
              className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border border-[#173E88] rounded-2xl hover:bg-[#173E88] hover:text-white transition"
              onClick={handleInbox}
            >
              Inbox
            </button>

            {/* User Icon */}
            <button className="w-[26px] h-[26px] border border-[#173E88] rounded-full flex items-center justify-center hover:bg-[#173E88] transition">
              <img src={UserIcon} alt="User" className="w-[16px] h-[16px] hover:invert" />
            </button>

            {/* Menu Button */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border border-[#173E88] rounded-2xl flex items-center justify-center gap-1 hover:bg-[#173E88] hover:text-white transition"
              >
                Menu
                <img src={MenuButton} alt="Menu" className="w-[17px] h-[17px]" />
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 bg-[#173E88] rounded-md shadow-lg w-[80px]">
                  <button
                    onClick={handleLogout}
                    className="w-full px-3 py-2 text-left text-[12px] text-white hover:bg-[#0F2C64]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMaster;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import UserIcon from "../assets/UserIcon.svg";
// import MenuButton from "../assets/MenuButton.svg";

// const NavMaster = ({ heading = "Master Data Management", showIcons = true }) => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleInbox = () => {
//     navigate("/inbox");
//   };

//   const handleRole = () => {
//     navigate("/homepage");
//   };

//   const handleLogout = () => {
//     navigate("/loginpage");
//   };

//   return (
//     <nav>
//       {/* First Layer */}
//       <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

//       {/* Second Layer */}
//       <div className="bg-white h-[38px] font-poppins text-[#173E88] text-[10px] flex items-center justify-between px-5">
//         {/* Dynamic Title */}
//         <h1 className="text-[#173E88] px-[200px] font-poppins font-semibold text-[19px]">
//           {heading}
//         </h1>

//         {/* Right-side buttons (conditionally rendered) */}
//         {showIcons && (
//           <div className="flex items-center gap-3 pr-1">
//             {/* Choose your role */}
//             <button
//               onClick={handleRole}
//               className="text-[13px] text-[#173E88] font-nunito w-[116px] h-[26px] border-[1px] border-[#173E88] rounded-2xl md:block hover:bg-[#173E88] hover:text-white"
//             >
//               Choose your role
//             </button>

//             {/* Inbox Button */}
//             <button
//               className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border border-[#173E88] rounded-2xl hover:bg-[#173E88] hover:text-white transition"
//               onClick={handleInbox}
//             >
//               Inbox
//             </button>

//             {/* User Icon */}
//             <button className="w-[26px] h-[26px] border border-[#173E88] rounded-full flex items-center justify-center hover:bg-[#173E88] transition">
//               <img src={UserIcon} alt="User" className="w-[16px] h-[16px] hover:invert" />
//             </button>

//             {/* Menu Button */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border border-[#173E88] rounded-2xl flex items-center justify-center gap-1 hover:bg-[#173E88] hover:text-white transition"
//               >
//                 Menu
//                 <img src={MenuButton} alt="Menu" className="w-[17px] h-[17px]" />
//               </button>

//               {/* Dropdown Menu */}
//               {isMenuOpen && (
//                 <div className="absolute right-0 mt-2 bg-[#173E88] rounded-md shadow-lg w-[80px]">
//                   <button
//                     onClick={handleLogout}
//                     className="w-full px-3 py-2 text-left text-[12px] text-white hover:bg-[#0F2C64]"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavMaster;
