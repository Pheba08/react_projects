import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../assets/adminlogo.svg";
import masterdata from "../assets/masterdata.svg";
import loginauth from "../assets/loginauth.svg";
import qncreation from "../assets/qncreation.svg";
import qnbankreview from "../assets/qnbankreview.svg";
import valuation from "../assets/valuation.svg";
import packmanagement from "../assets/packmanagement.svg";
import collectionview from "../assets/collectionview.svg";
import UserIcon from "../assets/UserIcon.svg";
import MenuButton from "../assets/MenuButton.svg";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/loginpage");
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC]">
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[35px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[35px] flex items-center">
          <img
            src={adminlogo}
            alt="Skills Connect Logo"
            className="w-[150px] h-[30px] pl-5"
          />
          <div className="pl-[750px] ">
            <button className="text-[12px] text-[#173E88] font-nunito w-[60px] border-[1px] border-[#173E88] rounded-2xl">
              Inbox
            </button>
          </div>

          <div className="pl-[14px] pt-[8px] ">
            <button className="w-[21px] h-[18px] border-[1px] border-[#173E88] rounded-2xl">
              <img
                src={UserIcon}
                alt="User"
                className="w-[12px] h-[12px] pl-[5px] "
              />
            </button>
          </div>

          <div className="relative pl-[14px] pt-[4px]">
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[12px] text-[#173E88] font-nunito w-[60px] border-[1px] border-[#173E88] rounded-2xl flex items-center justify-center gap-[5px]"
            >
              Menu
              <img src={MenuButton} alt="Menu" className="w-[12px] h-[12px]" />
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
      </nav>

      {/* Content */}
      <div class="flex flex-col gap-1 items-center p-6 ">
        {/* First Row */}
        <div class="flex gap-1 w-full max-w-[934px] mt-10">
          {/* Title */}
          <div class="w-1/4">
            <h1 className="text-[16px] font-bold text-black pt-[30px] text-left">
              Choose to get started
              <br /> with your role
            </h1>
          </div>
          {/* Master Data Management */}
          <div class="w-1/4 ">
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Master data management
              </p>
              <img
                src={masterdata}
                alt="Master data management"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>
          {/* Login Authorization */}
          <div className="w-1/4 ">
            <div className="bg-white shadow rounded p-4 items-center w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Login authorization
              </p>
              <img
                src={loginauth}
                alt="Login authorization"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>

          {/* Question Creation */}
          <div class="w-1/4 ">
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Question creation
              </p>
              <img
                src={qncreation}
                alt="Question creation"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>
          <div class="w-1/4"></div>
        </div>

        {/* Second Row */}
        <div class="flex gap-1 w-full max-w-[934px] mt-2 ">
          {/* Question Bank Review */}
          <div class="w-1/4 ">
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Question bank review
              </p>
              <img
                src={qnbankreview}
                alt="Question bank review"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>
          {/* Valuation */}
          <div class="w-1/4 ">
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">Valuation</p>
              <img
                src={valuation}
                alt="Valuation"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>
          {/* Pack Management */}
          <div class="w-1/4 ">
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Pack management
              </p>
              <img
                src={packmanagement}
                alt="Pack management"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>
          {/* Collection View */}
          <div class="w-1/4 ">
            <div class="bg-white shadow rounded p-4 items-center p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <p className="text-center text-[10px] text-black">
                Collection view
              </p>
              <img
                src={collectionview}
                alt="Collection view"
                className="h-[130px] w-[130px] pt-[10px]"
              />
            </div>
          </div>

          <div class="w-1/4">
            <div className="flex items-center pl-[80px] justify-center sm:justify-start pt-[126px]">
              <button className="px-6 py-3 bg-[#173E88] text-white rounded-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import adminlogo from "../assets/adminlogo.svg";
// import masterdata from "../assets/masterdata.svg";
// import loginauth from "../assets/loginauth.svg";
// import qncreation from "../assets/qncreation.svg";
// import qnbankreview from "../assets/qnbankreview.svg";
// import valuation from "../assets/valuation.svg";
// import packmanagement from "../assets/packmanagement.svg";
// import collectionview from "../assets/collectionview.svg";
// import UserIcon from "../assets/UserIcon.svg";
// import MenuButton from "../assets/MenuButton.svg";

// const HomePage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/loginpage");
//   };

//   return (
//     <div className="min-h-screen bg-[#E9F3FC]">
//       {/* Navbar */}
//       <nav>
//         {/* First Layer */}
//         <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[35px]"></div>

//         {/* Second Layer */}
//         <div className="bg-white h-[35px] flex items-center">
//           <img
//             src={adminlogo}
//             alt="Skills Connect Logo"
//             className="w-[150px] h-[30px] pl-5"
//           />
//           <div className="pl-[750px] ">
//             <button className="text-[12px] text-[#173E88] font-nunito w-[60px] border-[1px] border-[#173E88] rounded-2xl">
//               Inbox
//             </button>
//           </div>

//           <div className="pl-[14px] pt-[8px] ">
//             <button className="w-[21px] h-[18px] border-[1px] border-[#173E88] rounded-2xl">
//               <img
//                 src={UserIcon}
//                 alt="User"
//                 className="w-[12px] h-[12px] pl-[5px] "
//               />
//             </button>
//           </div>

//           <div className="relative pl-[14px] pt-[4px]">
//             {/* Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-[12px] text-[#173E88] font-nunito w-[60px] border-[1px] border-[#173E88] rounded-2xl flex items-center justify-center gap-[5px]"
//             >
//               Menu
//               <img src={MenuButton} alt="Menu" className="w-[12px] h-[12px]" />
//             </button>

//             {/* Dropdown Menu */}
//             {isMenuOpen && (
//               <div className="absolute mt-2 bg-[#173E88] rounded-md shadow-lg w-[64px]">
//                 <button
//                   onClick={handleLogout}
//                   className="px-3 py-2 text-left text-[12px] text-white"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>

//       <div className="grid grid-cols-5 gap-4 p-6 pt-14 pl-28">
//         {/* Title */}
//         <div className="col-span-1 flex items-center text-left">
//           <h1 className="text-[16px] font-bold text-black">
//             Choose to get started
//             <br /> with your role
//           </h1>
//         </div>

//         {/* First Row: 3 Cards */}
//         <div className="col-span-3 grid grid-cols-3 gap-4">
//           <div className="bg-white shadow rounded p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:translate-y-[-5px] transition-all duration-300">
//             <p className="text-center text-[10px] text-black">
//               Master data management
//             </p>
//             <img
//               src={masterdata}
//               alt="Master data management"
//               className="h-[130px] w-[130px] pt-[10px]"
//             />
//           </div>

//           <div className="bg-white shadow rounded p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:translate-y-[-5px] transition-all duration-300">
//             <p className="text-center text-[10px] text-black">
//               Login authorization
//             </p>
//             <img
//               src={loginauth}
//               alt="Login authorization"
//               className="h-[130px] w-[130px] pt-[10px]"
//             />
//           </div>
//           <div className="bg-white shadow rounded p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:translate-y-[-5px] transition-all duration-300">
//             <p className="text-center text-[10px] text-black">
//               Question creation
//             </p>
//             <img
//               src={qncreation}
//               alt="Question creation"
//               className="h-[130px] w-[130px] pt-[10px]"
//             />
//           </div>
//         </div>

//         {/* Second Row: 4 Cards and Button */}
//         <div className="col-span-5 grid grid-cols-5 gap-4">
//           <div className="bg-white shadow rounded p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:translate-y-[-5px] transition-all duration-300">
//             <p className="text-center text-[10px] text-black">
//               Question bank review
//             </p>
//             <img
//               src={qnbankreview}
//               alt="Question bank review"
//               className="h-[130px] w-[130px] pt-[10px]"
//             />
//           </div>
//           <div className="bg-white shadow rounded p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:translate-y-[-5px] transition-all duration-300">
//             <p className="text-center text-[10px] text-black">Valuation</p>
//             <img
//               src={valuation}
//               alt="Valuation"
//               className="h-[130px] w-[130px] pt-[10px]"
//             />
//           </div>
//           <div className="bg-white shadow rounded p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:translate-y-[-5px] transition-all duration-300">
//             <p className="text-center text-[10px] text-black">
//               Pack management
//             </p>
//             <img
//               src={packmanagement}
//               alt="Pack management"
//               className="h-[130px] w-[130px] pt-[10px]"
//             />
//           </div>
//           <div className="bg-white shadow rounded p-4 w-[175px] h-[185px] bg-gradient-to-t from-[rgba(80,131,205,0.3)] to-[rgba(80,131,205,0.05)] border-[3px] border-[#3D75DF66] rounded-[25px] shadow-xl hover:border-[#173E88] hover:translate-y-[-5px] transition-all duration-300">
//             <p className="text-center text-[10px] text-black">
//               Collection view
//             </p>
//             <img
//               src={collectionview}
//               alt="Collection view"
//               className="h-[130px] w-[130px] pt-[10px]"
//             />
//           </div>
//           <div className="pt-32">
//             <button className="px-6 py-3 bg-[#173E88] text-white rounded-lg">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

