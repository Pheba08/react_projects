import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentProof_img from "../../assets/PaymentProof_img.svg";

const EnquiriesList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      id: 1,
      enquiryDate: "2024-01-01",
      name: "John Doe",
      packType: "Junior pack",
      contactNumber: "123-456-7890",
      paymentProof: (
        <div className="flex items-center bg-[#DFF0FF] px-4 py-1 gap-2 rounded w-fit">
          <img src={PaymentProof_img} alt="Payment Proof" className="w-7 h-7 mr-2" />
          <span className="text-[12px] text-black text-left font-poppins mr-2">File name.pdf <br /> 9MB</span>
          <a href="#" className="text-[#173E88] text-[12px] font-semibold ">View</a>
        </div>
      ),
      contacted: false,
      assigned: false,
    },
    {
      id: 2,
      enquiryDate: "2024-02-15",
      name: "Jane Smith",
      packType: "Senior pack",
      contactNumber: "987-654-3210",
      paymentProof: "",
      contacted: true,
      assigned: true,
    },
  ]);

  // Handle Contact Button Click
  const handleContactClick = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, contacted: true } : user
      )
    );
  };

  // Handle Assign Pack Button Click
  const handleAssignPackClick = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, assigned: true } : user
      )
    );
  };

  return (
    <div>
      {/* Table Section */}
      <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-8">
        <div className="bg-[#94BDEB] rounded-t-3xl">
          <h2 className="text-[16px] font-medium font-poppins text-left px-6 py-2">
            Enquiries list
          </h2>
        </div>
        <div className="overflow-x-auto p-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)] text-left">
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">
                  Enquiry Date
                </th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">
                  Student Name
                </th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">
                  Pack type
                </th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">
                  Contact Number
                </th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">
                  Payment proof
                </th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins w-[120px] "></th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins w-[150px]"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`cursor-pointer ${index !== users.length - 1 ? "border-b border-[#94BDEB]" : ""
                    }`}
                >
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">
                    {user.enquiryDate}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">
                    {user.packType}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">
                    {user.contactNumber}
                  </td>
                  <td className="px-4 py-2 place-items-center text-[12px] text-black font-poppins">
                    {user.paymentProof}
                  </td>
                  {/* Contact Button or Text */}
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">
                    {user.contacted ? (
                      <span className="text-[#6D6B6B]">Contacted</span>
                    ) : (
                      <button
                        className="bg-[#173E88] text-white px-3 py-1 rounded"
                        onClick={() => handleContactClick(user.id)}
                      >
                        Contact
                      </button>
                    )}
                  </td>
                  {/* Assign Pack Button or Text */}
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">
                    {user.assigned ? (
                      <span className="text-[#6D6B6B]">Assigned</span>
                    ) : (
                      <button
                        className="bg-[#173E88] text-white px-3 py-1 rounded"
                        onClick={() => handleAssignPackClick(user.id)}
                      >
                        Assign Pack
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnquiriesList;
