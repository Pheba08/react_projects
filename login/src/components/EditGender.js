import React, { useState } from "react";
import adminlogoWhite from "../assets/adminlogoWhite.svg";
import buttonarraowblue from "../assets/buttonarrowblue.svg";
import { useLocation, useNavigate } from "react-router-dom";

const EditGender = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const gender = state?.gender || { id: null, name: "", description: "" };

  const [editedGender, setEditedGender] = useState({
    id: gender.id,
    name: gender.name,
    description: gender.description,
  });

  const handleChange = (e) => {
    setEditedGender({
      ...editedGender,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    navigate("/gender", { state: { updatedGender: editedGender } });
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      {/* First Layer */}
      <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

      <div className="flex flex-1 pt-[2px] pl-[2px] pb-[2px] bg-white">
        {/* Side Navbar */}
        <aside className="w-[200px] bg-[#173E88] text-white min-h-full rounded-tr-3xl rounded-br-3xl">
          <div className="p-3">
            {/* Logo */}
            <img
              src={adminlogoWhite}
              alt="Skills Connect Logo"
              className="w-[150px] h-[15px] "
            />

            <div className="h-[1px] bg-[#2152AF] w-full my-3"></div>

            <div className="bg-white rounded-2xl px-4 py-[5px] inline-block">
              <h3 className="text-[12px] text-[#173E88] font-poppins font-semibold mb-0">
                Master Data Management
              </h3>
            </div>

            <ul className="pt-4 space-y-1 text-left pl-6 w-full">
              {[
                "Qualification",
                "Language",
                "Gender",
                "Grade",
                "Subject",
                "Topic",
                "Category",
                "Role Management",
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-[12px] cursor-pointer relative px-4 py-[5px] before:content-['-'] before:mr-[18px] 
                 hover:bg-[#94BDEB] hover:text-[#173E88] transition-all rounded-l-2xl w-full block"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex-1 bg-[#E9F3FC]">
          {/* Navbar */}
          <nav className="bg-white h-[38px] font-poppins text-[#173E88] text-[20px] flex items-center justify-between px-2 md:px-5">
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
              <span>Edit Gender</span>
            </button>
          </nav>

          <div className="max-w-[988px] mx-auto bg-white rounded-3xl  mt-10">
            {/* Header Section */}
            <div className="bg-[#94BDEB] rounded-t-3xl">
              <h2 className="text-[14px] font-medium font-poppins text-#94BDEB text-left px-6 py-2">
                Edit and save
              </h2>
            </div>

            {/* Form Section */}
            <div className="px-14 py-6">
              <div className="mb-6 text-left">
                <label
                  htmlFor="gender"
                  className="block text-[12px] font-medium text-[#030303] mb-1"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="name"
                  value={editedGender.name}
                  onChange={handleChange}
                  className="w-[250px] h-[35px] px-4 py-2 border border-[#94BDEB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94BDEB] placeholder:text-[12px] placeholder:text-[#A8A8A8]"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-[12px] font-medium text-[#030303] mb-1 text-left"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  value={editedGender.description}
                  onChange={handleChange}
                  className="w-full h-[90px] px-4 py-2 border border-[#94BDEB] placeholder:text-[12px] placeholder:text-[#A8A8A8] rounded-md focus:outline-none"
                  rows="4"
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button onClick={handleSave} className="bg-[#173E88] text-white text-[16px] px-12 py-[3px] rounded-md hover:bg-blue-700 transition ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGender;
