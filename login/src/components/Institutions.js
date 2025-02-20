import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttonarraowblue from "../assets/buttonarrowblue.svg";
import DeleteButton from "../assets/DeleteButton.svg";
import FilterIcon from "../assets/FilterIcon.svg";
import closeButton from "../assets/closeButton.svg";

const Institutions = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      id: 1,
      joinedDate: "2024-01-01",
      name: "John Doe",
      certificates: "Certified Coach",
      contactNumber: "123-456-7890",
      accountStatus: "Active",
      reselling: "Yes",
      approveStatus: "Approved",
    },
    {
      id: 2,
      joinedDate: "2024-02-15",
      name: "Jane Smith",
      certificates: "Life Coach",
      contactNumber: "987-654-3210",
      accountStatus: "Pending",
      reselling: "No",
      approveStatus: "Pending",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <nav>
        <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>
        <div className="bg-white h-[38px] flex items-center justify-between px-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
          >
            <img
              src={buttonarraowblue}
              alt="Button arrow"
              className="w-3 h-3"
            />
            <span>Institutions</span>
          </button>
        </div>
      </nav>

      {/* Search Bar & Filter */}
      <div className="max-w-[1262px] mx-auto flex justify-between items-center px-4 md:px-0 mt-7">
        {/* Search Input and Button */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search with contact number"
            className="border border-[#173E88] rounded-lg px-4 py-2 text-[12px] text-[#6D6B6B] outline-none bg-transparent w-full md:w-[250px] h-[32px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#173E88] text-white px-4 py-2 rounded-lg text-[12px] h-[32px] w-[80px] cursor-pointer">
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="p-2 cursor-pointer"
          onClick={() => setShowFilter(true)}
        >
          <img src={FilterIcon} alt="Filter" className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#E9F3FC] p-4 pl-8 pr-8 rounded-lg shadow-lg w-[350px] relative">
            <h2 className="text-lg text-left font-semibold">Filter</h2>
            <button
              className="absolute top-5 right-8"
              onClick={() => setShowFilter(false)}
            >
              <img src={closeButton} alt="Filter" className="w-5 h-5" />
            </button>

            <div className="mt-4">
              <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB]">
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            <div className="mt-4">
              <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB] ">
                <option>All</option>
                <option>New Institutions</option>
                <option>Existing Institutions</option>
              </select>
            </div>

            <button
              className="mt-4 bg-[#173E88] text-white px-4 py-1 rounded-lg w-[85px] h-[34px] ml-[198px] "
              onClick={() => setShowFilter(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-8">
        <div className="bg-[#94BDEB] rounded-t-3xl">
          <h2 className="text-[14px] font-medium font-poppins text-left px-6 py-2">
            Counsellors list
          </h2>
        </div>
        <div className="overflow-x-auto p-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)] text-left">
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Joined Date
                </th>
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Name
                </th>
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Certificates
                </th>
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Contact Number
                </th>
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Account Status
                </th>
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Reselling
                </th>
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Approve Status
                </th>
                <th className="px-4 py-2 text-[12px] text-[#173E88] font-poppins">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) =>
                  user.contactNumber.includes(searchTerm.trim())
                )
                .map((user, index) => (
                  <tr
                    key={user.id}
                    className={`cursor-pointer ${
                      index !== users.length - 1
                        ? "border-b border-[#94BDEB]"
                        : ""
                    }`}
                  >
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">
                      {user.joinedDate}
                    </td>
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">
                      {user.name}
                    </td>
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">
                      {user.certificates}
                    </td>
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">
                      {user.contactNumber}
                    </td>
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">
                      {user.accountStatus}
                    </td>
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">
                      {user.reselling}
                    </td>
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">
                      {user.approveStatus}
                    </td>
                    <td
                      className="px-4 py-2 text-center cursor-pointer"
                      onClick={() => removeUser(user.id)}
                    >
                      <img
                        src={DeleteButton}
                        alt="Delete"
                        className="w-3 h-3 mx-[15px] "
                      />
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

export default Institutions;
