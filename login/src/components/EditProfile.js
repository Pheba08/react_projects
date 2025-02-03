import React from "react";
import NavEditProfile from "../components/NavEditProfile";

const EditProfile = () => {
  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      <NavEditProfile />
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 mt-10">
        {/* Profile Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-[10px] font-semibold text-[#173E88]">Sl No: 001</p>
          <p className="text-[10px] font-semibold text-[#173E88]">
            Joined Date: 01/01/2024
          </p>
        </div>

        {/* Administrator details */}
        <div className="mb-4 p-4">
          <h2 className="text-[11px] font-semibold mb-3 text-left text-[#173E88]">
            Administrator details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left pt-2">
            {/* First Column (Left Aligned) */}
            <div className="grid grid-cols-1 items-start">
              <div className="mb-1">
                <p className="pl-2 text-[9px] text-black font-nunito text-left">
                  Full Name
                </p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-[240px] h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md placeholder-[#A8A8A8]"
                />
              </div>

              <div className="mb-1">
                <p className="pl-2 text-[9px] text-black font-nunito mt-2 text-left">
                  Year of Birth
                </p>
                <input
                  type="text"
                  placeholder="Year of birth"
                  className="w-[240px] h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md placeholder-[#A8A8A8]"
                />
              </div>

              <div className="mb-1">
                <p className="pl-2 text-[9px] text-black font-nunito mt-2 text-left">
                  Gender
                </p>
                <select className="w-[240px] h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md text-[#A8A8A8]">
                  <option value="" disabled selected className="text-[#A8A8A8]">
                    Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-1">
                <p className="pl-2 text-[9px] text-black font-nunito mt-2 text-left">
                  Language Proficiency
                </p>
                <select className="w-[240px] h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md text-[#A8A8A8]">
                  <option value="" disabled selected className="text-[#A8A8A8]">
                    Language
                  </option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Second Column (Center Aligned) */}
            <div className="grid grid-cols-1 place-items-center">
              <div className="w-[240px] mb-4">
                <p className="text-[9px] text-black font-nunito text-left pl-2">
                  Primary Contact Number
                </p>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="w-full h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md placeholder-[#A8A8A8]"
                />
              </div>

              <div className="w-[240px] mb-4">
                <p className="text-[9px] text-black font-nunito text-left pl-2">
                  Second Contact Number
                </p>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="w-full h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md placeholder-[#A8A8A8]"
                />
              </div>

              <div className="w-[240px] mb-4">
                <p className="text-[9px] text-black font-nunito text-left pl-2">
                  Email
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md placeholder-[#A8A8A8]"
                />
              </div>

              <div className="w-[240px] mb-1">
                <p className="text-[9px] text-black font-nunito text-left pl-2">
                  Country
                </p>
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full h-[30px] p-2 text-[9px] border-[#94BDEB] rounded-md placeholder-[#A8A8A8]"
                />
              </div>
            </div>

            {/* Third Column (Right Aligned) */}
            <div className="grid grid-cols-1 place-items-end">
              <div className="w-[240px] mb-1">
                <p className="text-[9px] text-black font-nunito text-left pl-2">
                  Address
                </p>
                <textarea
                  placeholder="Address"
                  className="w-full h-[130px] p-2 text-[9px] border-[#94BDEB] rounded-md placeholder-[#A8A8A8]"
                ></textarea>
              </div>

              {/* Certificate Upload Section */}
              <div className="w-[240px] h-[30px] mt-4 p-2 bg-[#94BDEB80] border-[1px] border-[#94BDEB] rounded-md flex justify-items-end gap-[112px] items-center">
                <p className="text-[9px] text-black pl-2">Certifications</p>
                <button className="bg-[#173E88] text-white text-[9px] px-4 py-2 rounded-md items-end">
                  Upload
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-4">
            <button className="w-[105px] h-[30px] bg-[#173E88] text-white text-[10px] px-10 py-1 rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
