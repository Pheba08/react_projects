import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttonarrowblue from "../assets/buttonarrowblue.svg";

const InstitutionProfile = () => {
  const navigate = useNavigate();
  const [reselling, setReselling] = useState(false);
  const [accountStatus, setAccountStatus] = useState(false);

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
            <span>Institution Profile</span>
          </button>
        </div>
      </nav>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-8 mt-5 ml-12">
        {/* First Column (Spanning 3 Columns) */}
        <div className="col-span-3 flex flex-col gap-3">
          {/* Profile Picture */}
          <h1 className="text-[16px] text-left text-[#030303] font-nunito font-medium">
            Profile Details
          </h1>
          <div className="bg-[#F9F9F9] p-6 rounded-xl grid place-items-center">
            <div className="w-[780px] h-20 bg-[#173E88] rounded-md grid place-items-center">
              <span className="text-white text-sm">Profile Photo</span>
            </div>
          </div>

          {/* Organization Details */}
          <div className="bg-[#F9F9F9] p-3 rounded-xl text-left text-[#030303] space-y-4">
            <h2 className="text-[12px] font-semibold">Organization Name</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px]">
              <p>Classes</p>
              <p>Email</p>
              <p>Primary Contact Number</p>
              <p>Address</p>
              <p>Secondary Contact Number</p>
              <p>Country</p>
            </div>
          </div>

          {/* Banking Information */}
          <div className="bg-[#F9F9F9] p-3 rounded-xl text-left text-[#030303] space-y-4">
            <h2 className="text-[12px] font-semibold">Banking Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px]">
              <p>Account Holder Name</p>
              <p>Account Number / IBAN</p>
              <p>Bank Name</p>
              <p>IFSC</p>
              <p>Branch</p>
              <p>BIC / SWIFT Code</p>
              <p>Account Type</p>
              <p>UPI ID</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1 flex items-center mt-3">
          <div className="bg-white p-4 rounded-lg border border-[#173E88] grid gap-3 w-[235px] h-[170px] ">
            <div className="grid grid-cols-2 gap-7 items-center">
              {/* Reselling */}
              <div className="grid gap-3">
                <h3 className="text-[12px] text-[#173E88] text-left font-poppins font-semibold">
                  Reselling
                </h3>
                <button
                  className={`w-16 h-6 rounded-full p-1 flex items-center relative transition-all duration-300 ${
                    reselling ? "bg-[#E9F3FC]" : "bg-[#6D6B6B]"
                  }`}
                  onClick={() => setReselling(!reselling)}
                >
                  <span
                    className={`text-[10px] font-medium absolute left-6 ${
                      reselling ? "opacity-0" : "opacity-100 text-[#E9F3FC]"
                    }`}
                  >
                    Disable
                  </span>
                  <span
                    className={`text-[10px] font-medium absolute right-6 ${
                      reselling ? "opacity-100 text-[#173E88]" : "opacity-0"
                    }`}
                  >
                    Enable
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full shadow-md absolute transition-all duration-300 ${
                      reselling ? "translate-x-10 bg-[#173E88]" : "bg-[#E9F3FC]"
                    }`}
                  ></div>
                </button>
              </div>

              {/* Account Status */}
              <div className="grid gap-3">
                <h3 className="text-[12px] text-[#173E88] text-left font-poppins font-semibold">
                  Account Status
                </h3>
                <button
                  className={`w-16 h-6 rounded-full p-1 flex items-center relative transition-all duration-300 ${
                    accountStatus ? "bg-[#E9F3FC]" : "bg-[#6D6B6B]"
                  }`}
                  onClick={() => setAccountStatus(!accountStatus)}
                >
                  <span
                    className={`text-[10px] font-medium absolute left-6 ${
                      accountStatus ? "opacity-0" : "opacity-100 text-[#E9F3FC]"
                    }`}
                  >
                    Disable
                  </span>
                  <span
                    className={`text-[10px] font-medium absolute right-6 ${
                      accountStatus ? "opacity-100 text-[#173E88]" : "opacity-0"
                    }`}
                  >
                    Enable
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full shadow-md absolute transition-all duration-300 ${
                      accountStatus
                        ? "translate-x-10 bg-[#173E88]"
                        : "bg-[#E9F3FC]"
                    }`}
                  ></div>
                </button>
              </div>
            </div>
            <h1 className="text-[12px] text-[#173E88] text-left font-poppins font-medium pt-3">
              Permission
            </h1>
            <button className="bg-[#173E88] text-white px-4 py-1.5 rounded-2xl w-full h-[30px] text-[12px]">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionProfile;
