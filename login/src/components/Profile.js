import React from "react";
import NavProfile from "../components/NavProfile";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/editprofile");
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      <NavProfile />
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 mt-5 pl-10 pr-10">
        {/* Profile Details */}
        <div className="mb-4">
          <h2 className="text-[11px] font-semibold mb-3 text-left text-[#173E88]">
            Profile Details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left">
            {/* First Column */}
            <div className="grid grid-cols-1 items-start">
              <p className="text-[9px] text-[#A8A8A8] font-nunito">Full Name</p>
              <p className="text-[9px]">Abc</p>

              <p className="text-[9px] text-[#A8A8A8] font-nunito mt-2">
                Year of Birth
              </p>
              <p className="text-[9px]">0000</p>

              <p className="text-[9px] text-[#A8A8A8] font-nunito mt-2">
                Gender
              </p>
              <p className="text-[9px]">Gender</p>

              <p className="text-[9px] text-[#A8A8A8] font-nunito mt-2">
                Language
              </p>
              <p className="text-[9px]">English</p>
            </div>

            {/* Second Column */}
            <div className="grid grid-cols-1 place-items-center ">
              <div className="text-left">
                <p className="text-[9px] text-[#A8A8A8] font-nunito">
                  Primary Contact Number
                </p>
                <p className="text-[9px]">+91 9876543210</p>

                <p className="text-[9px] text-[#A8A8A8] font-nunito mt-2">
                  Secondary Contact Number
                </p>
                <p className="text-[9px]">+91 1234567890</p>

                <p className="text-[9px] text-[#A8A8A8] font-nunito mt-2">
                  Email
                </p>
                <p className="text-[9px]">abc@example.com</p>

                <p className="text-[9px] text-[#A8A8A8] font-nunito mt-2">
                  Country
                </p>
                <p className="text-[9px]">India</p>
              </div>
            </div>

            {/* Third Column */}
            <div className="grid grid-cols-1 place-items-end">
              <div className="text-left">
                <p className="text-[9px] text-[#A8A8A8] font-nunito">Address</p>
                <p className="text-[9px]">
                  123 Street Name, City, State, 123456
                </p>
                {/* sl no */}
                <p className="text-[9px] text-[#173E88] font-nunito pt-4 font-medium font-poppins">
                  SL No
                </p>
                <div className="w-[78px] h-[18px] mt-4 p-2 bg-[#94BDEB80] border-[1px] border-[#94BDEB] rounded flex justify-items-end gap-[72px] items-center">
                  <p className="text-[9px] text-black pl-2">001</p>
                </div>

                {/* Certificate Upload Section */}
                <div className="w-[200px] h-[26px] mt-4 p-2 bg-[#94BDEB80] border-[1px] border-[#94BDEB] rounded-md flex justify-items-end gap-[72px] items-center">
                  <p className="text-[9px] text-black pl-2">Certifications</p>
                  <button className="bg-[#173E88] text-white text-[9px] px-5 py-[6px] rounded-md items-end">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-end mt-2">
            <button
              className="bg-[#173E88] text-white text-[10px] px-10 py-1 rounded-md"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-[#94BDEB] w-full my-3"></div>

        {/* Role Managed */}
        <div className="mb-4">
          <h2 className="text-[11px] font-semibold mb-3 text-left text-[#173E88]">
            Role Managed
          </h2>
          <div className="flex items-center text-[10px]">
            <input
              type="checkbox"
              id="packManagement"
              className="appearance-none w-4 h-4 border border-[#173E88] rounded-sm bg-[#173E88] checked:bg-[#173E88] checked:border-[#173E88] focus:ring-2 focus:ring-[#173E88] cursor-not-allowed"
              checked
              disabled
            />
            <label htmlFor="packManagement" className="ml-2 text-[#173E88]">
              Pack Management
            </label>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] bg-[#94BDEB] w-full my-3"></div>

        {/* Request Role */}
        <div>
          <h2 className="text-[11px] font-semibold mb-3 text-left text-[#173E88]">
            Request Role
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[9px]">
            {[
              "Pack management",
              "Master data management",
              "Question bank review",
              "Collection view",
              "Login authorization",
              "Question creation",
              "Valuation",
              "Career management",
            ].map((role) => (
              <div key={role} className="flex items-center">
                <input
                  type="checkbox"
                  id={role}
                  className="appearance-none w-4 h-4 border border-[#173E88] rounded-sm bg-white checked:bg-[#173E88] checked:border-[#173E88] focus:ring-2 focus:ring-[#173E88] cursor-pointer"
                />
                <label htmlFor={role} className="ml-2 text-black">
                  {role}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Request Button */}
        <div className="flex justify-end mt-2 ">
          <button className="bg-[#173E88] text-white text-[10px] px-8 py-1 rounded-md">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
