import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../../assets/buttonarrowblue.svg";
import ProfileImage from "../../assets/ProfileImage.svg";

const ProfileDetails = () => {
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate("/editprofiledetails");
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
                        <span>Profile</span>
                    </button>
                    <button
                        onClick={handleEditProfile} // Define this function as needed
                        className="bg-[#173E88] text-white font-poppins font-medium text-[14px] px-6 py-1 rounded-full"
                    >
                        Edit Profile
                    </button>
                </div>
            </nav>

            <div className="mt-1 ml-12">
                <div className="col-span-3 flex flex-col gap-3">

                    <h2 className="text-[19px] text-left text-[#030303] font-nunito font-medium pt-4 pb-3">
                        Profile Details
                    </h2>

                    <div className="bg-[#F9F9F9] p-6 mr-10 rounded-xl grid grid-cols-1 gap-6 justify-items-center relative">
                        <div className="w-[1100px] bg-[#173E88] rounded-xl flex items-center justify-center px-4 py-4">
                            <img
                                src={ProfileImage}
                                alt="Profile"
                                className="w-[115px] h-[115px] object-cover rounded-full"
                            />
                        </div>

                        <div className="grid grid-cols-2 w-full px-16">
                            <p className="text-sm text-black text-left">Profile Photo</p>
                            <p className="text-sm text-black text-right">This will be displayed on your profile</p>
                        </div>
                    </div>

                    <div className="bg-[#F9F9F9] pl-10 pt-5 rounded-xl text-left text-[#030303] space-y-4 pb-5 mr-10">
                        <h2 className="text-[18px] font-semibold">Organization Name
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-[14px]">
                            <div className="space-y-2">

                                <p className="mb-2">
                                    Classes

                                </p>
                                <p className="mb-2">
                                    Primary Contact Number

                                </p>
                                <p className="mb-2">
                                    Secondary Contact Number

                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="mb-2">
                                    Email

                                </p>
                                <p className="mb-2">
                                    Address

                                </p>

                                <p className="mb-2">
                                    Country

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F9F9F9] pl-10 pt-1 rounded-xl text-left text-[#030303] space-y-4 pb-5 mr-10">
                        <h2 className="text-[16px] font-semibold mt-4">Banking Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-[14px]">
                            <div className="space-y-2">
                                <p className="mb-2">
                                    Account holder name

                                </p>
                                <p className="mb-2">
                                    Bank name

                                </p>
                                <p className="mb-2">
                                    Branch

                                </p>
                                <p className="mb-2">
                                    Account type

                                </p>
                                <p className="mb-2">
                                    Contact number

                                </p>
                            </div>
                            <div className="pt-7">
                                <p className="mb-2">
                                    Account number / IBAN

                                </p>
                                <p className="mb-2">
                                    IFSC

                                </p>
                                <p className="mb-2">
                                    BIC/SWIFT Code

                                </p>
                                <p className="mb-2">
                                    UPI ID

                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
