import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import buttonarraowblue from "../assets/buttonarrowblue.svg";

const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = location.state || {}; // Get the userData from location state

  // Set initial state for the form based on userData
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    birthYear: userData?.birthYear || "",
    gender: userData?.gender || "",
    language: userData?.language || "",
    primaryContact: userData?.primaryContact || "",
    secondaryContact: userData?.secondaryContact || "",
    email: userData?.email || "",
    country: userData?.country || "",
    address: userData?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    navigate("/profile", {
      state: { userData: formData },
    });
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        {/* First Layer */}
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

        {/* Second Layer */}
        <div className="bg-white h-[38px] flex items-center justify-between px-5 md:px-10">
          {/* button */}
          <button
            onClick={() => navigate(-1)}
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

      <div className="max-w-[1230px] mx-auto bg-white rounded-lg p-6 mt-10">
        {/* Profile Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-[10px] font-semibold text-[#173E88]">Sl No: 001</p>
          <p className="text-[10px] font-semibold text-[#173E88]">
            Joined Date: 01/01/2024
          </p>
        </div>

        {/* Administrator details */}
        <div className="mb-4 p-4">
          <h2 className="text-[14px] font-semibold mb-3 text-left text-[#173E88]">
            Administrator details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left pt-2">
            {/* First Column (Left Aligned) */}
            <div className="grid grid-cols-1 items-start">
              <div className="mb-1">
                <p className="pl-2 text-[12px] text-black font-nunito text-left">
                  Full Name
                </p>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 text-[10px] border-[#94BDEB] rounded-md placeholder text-[#A8A8A8]"
                />
              </div>


              <div className="mb-1">
                <p className="pl-2 text-[12px] text-black font-nunito mt-2 text-left">
                  Year of Birth
                </p>
                <input
                  type="text"
                  placeholder="Year of birth"
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 text-[10px] border-[#94BDEB] rounded-md placeholder text-[#A8A8A8]"
                />
              </div>

              <div className="mb-1">
                <p className="pl-2 text-[12px] text-black font-nunito mt-2 text-left">
                  Gender
                </p>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 pt-0 text-[10px] border-[#94BDEB] rounded-md text-[#A8A8A8]"
                >
                  <option value="" disabled className="text-[#A8A8A8]">
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-1">
                <p className="pl-2 text-[12px] text-black font-nunito mt-2 text-left">
                  Language Proficiency
                </p>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 pt-0 text-[10px] border-[#94BDEB] rounded-md text-[#A8A8A8]"
                >
                  <option value="" disabled selected className="text-[#A8A8A8]">
                    Language
                  </option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Second Column (Center Aligned) */}
            <div className="grid grid-cols-1 place-items-center">
              <div className="w-[240px] mb-4">
                <p className="text-[12px] text-black font-nunito text-left pl-2">
                  Primary Contact Number
                </p>
                <input
                  type="text"
                  placeholder="Contact number"
                  name="primaryContact"
                  value={formData.primaryContact}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 pt-0 text-[10px] border-[#94BDEB] rounded-md placeholder text-[#A8A8A8]"
                />
              </div>

              <div className="w-[240px] mb-4">
                <p className="text-[12px] text-black font-nunito text-left pl-2">
                  Secondary Contact Number
                </p>
                <input
                  type="text"
                  placeholder="Contact number"
                  name="secondaryContact"
                  value={formData.secondaryContact}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 text-[10px] border-[#94BDEB] rounded-md placeholder text-[#A8A8A8]"
                />
              </div>

              <div className="w-[240px] mb-4">
                <p className="text-[12px] text-black font-nunito text-left pl-2">
                  Email
                </p>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 text-[10px] border-[#94BDEB] rounded-md placeholder text-[#A8A8A8]"
                />
              </div>

              <div className="w-[240px] mb-1">
                <p className="text-[12px] text-black font-nunito text-left pl-2">
                  Country
                </p>
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-[240px] h-[30px] p-2 text-[10px] border-[#94BDEB] rounded-md placeholder text-[#A8A8A8]"
                />
              </div>
            </div>

            {/* Third Column (Right Aligned) */}
            <div className="grid grid-cols-1 place-items-end">
              <div className="w-[240px] mb-1">
                <p className="text-[12px] text-black font-nunito text-left pl-2">
                  Address
                </p>
                <textarea
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-[130px] p-2 text-[10px] border-[#94BDEB] rounded-md placeholder text-[#A8A8A8]"
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
            <button
              className="w-[105px] h-[30px] bg-[#173E88] text-white text-[10px] px-10 py-1 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
