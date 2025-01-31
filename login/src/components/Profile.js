import React from "react";
import NavProfile from "../components/NavProfile";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      <NavProfile />
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md items-center justify-center p-6 mt-2 sm:mt-2 md:mt-4 lg:mt-6">
        {/* Row 1: Profile Details */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 text-left text-[#173E88]">Profile details</h2>
          <div className="flex flex-wrap gap-6">
            {/* First Column */}
            <div className="flex-1 min-w-[200px] text-left">
              <div className="mb-4">
                <p className="font-medium">Full Name</p>
                <p>Abc</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Year of Birth</p>
                <p>0000</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Gender</p>
                <p>Gender</p>
              </div>
              <div>
                <p className="font-medium">Language Proficiency</p>
                <p>English</p>
              </div>
            </div>

            {/* Second Column */}
            <div className="flex-1 min-w-[200px] text-left">
              <div className="mb-4">
                <p className="font-medium">Primary Contact</p>
                <p>+91 9876543210</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Second Contact</p>
                <p>+91 1234567890</p>
              </div>
              <div className="mb-4">
                <p className="font-medium">Email</p>
                <p>abc@example.com</p>
              </div>
              <div>
                <p className="font-medium">Country</p>
                <p>India</p>
              </div>
            </div>

            {/* Third Column */}
            <div className="flex-1 min-w-[200px] text-left">
              <div>
                <p className="font-medium">Address</p>
                <p>123 Street Name, City, State, 123456</p>
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md">
              Edit
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] bg-[#94BDEB] w-full my-4"></div>

        {/* Row 2: Role Managed */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 text-left text-[#173E88]">Role managed</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="packManagement"
              className="mr-2"
              checked
              disabled
            />
            <label htmlFor="packManagement" className="font-medium">
              Pack Management
            </label>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] bg-[#94BDEB] w-full my-4"></div>

        {/* Row 3: Request Role */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-left text-[#173E88]">Request role</h2>
          <div className="flex flex-wrap gap-6">
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
              <div key={role} className="flex items-center min-w-[200px] text-left">
                <input type="checkbox" id={role} className="mr-2" />
                <label htmlFor={role}>{role}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Request Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md">
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
