import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../../assets/buttonarrowblue.svg";
import ProfileImage from "../../assets/ProfileImage.svg";

const EditProfileDetails = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>
        <div className="bg-white h-[38px] flex items-center justify-between px-2 md:px-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
          >
            <img src={buttonarrowblue} alt="Back" className="w-3 h-3" />
            <span>Edit your profile</span>
          </button>
        </div>
      </nav>

      <div className="mt-1 ml-12">
        <div className="col-span-3 flex flex-col gap-3">
          <h2 className="text-[19px] text-left text-[#030303] font-nunito font-medium pt-4 pb-3">
            Account Details
          </h2>

          <div className="bg-[#F9F9F9] p-6 mr-10 rounded-xl grid grid-cols-1 gap-6 justify-items-center relative">
            <div className="w-[1100px] bg-[#173E88] rounded-xl flex items-center justify-center px-4 py-4">
              <img
                src={selectedImage || ProfileImage}
                alt="Profile"
                className="w-[115px] h-[115px] object-cover rounded-full"
              />
            </div>

            <div className="grid grid-cols-2 w-full px-16">
              <p className="text-sm text-black text-left">Profile Photo</p>
              <p className="text-sm text-black text-right">This will be displayed on your profile</p>
            </div>

            <div className="flex justify-end w-full px-16 gap-3">
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <button
                className="px-6 py-1 text-white bg-[#173E88] rounded-md"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Upload
              </button>
              <button
                className="px-6 py-1 border border-[#173E88] text-[#173E88] rounded-md"
                onClick={() => setSelectedImage(null)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="bg-[#F9F9F9] p-10 rounded-xl text-left text-[#030303] space-y-4 mb-5 mr-10">
            <h2 className="text-[16px] font-semibold">Institution Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-[14px]">
              <div className="space-y-2">
                <label className="pl-2">
                  Organization Name
                  <input type="text" placeholder="Full Name" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Classes
                  <input type="text" placeholder="Year of Birth" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Primary Contact Number
                  <input type="text" placeholder="Contact Number" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Secondary Contact Number
                  <input type="text" placeholder="Contact Number" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
              </div>
              <div className="space-y-2">
                <label className="pl-2">
                  Email
                  <input type="email" placeholder="Email" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Address
                  <textarea
                    placeholder="Address"
                    className="w-full h-[118px] p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md resize-none align-top"
                  />
                </label>

                <label className="pl-2">
                  Country
                  <input type="text" placeholder="Country" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
              </div>
            </div>

            <h2 className="text-[16px] font-semibold mt-4">Banking Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-[14px]">
              <div className="space-y-2">
                <label className="pl-2">
                  Account holder name
                  <input type="text" placeholder="Account holder name" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Bank name
                  <input type="text" placeholder="Bank name" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Branch
                  <input type="text" placeholder="Branch" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Account type
                  <input type="text" placeholder="Account type" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  Contact number
                  <input type="text" placeholder="Account holder contact number" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
              </div>
              <div className="pt-20">
                <label className="pl-2">
                  Account number / IBAN
                  <input type="text" placeholder="Account number / IBAN" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  IFSC
                  <input type="text" placeholder="IFSC" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  BIC/SWIFT Code
                  <input type="text" placeholder="BIC/SWIFT Code" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>
                <label className="pl-2">
                  UPI ID
                  <input type="text" placeholder="UPI ID" className="w-full p-2 mt-1 mb-2 text-[12px] border border-[#94BDEB] bg-[#F9F9F9] rounded-md" />
                </label>

              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-28 py-2 text-white bg-[#173E88] rounded-md">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileDetails;
