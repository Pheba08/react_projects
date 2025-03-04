import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../../assets/FilterIcon.svg";
import closeButton from "../../assets/closeButton.svg";
import userImagePlaceholder from "../../assets/userImagePlaceholder.svg";

const StudentsList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      id: 1,
      joinedDate: "2024-01-01",
      name: "John Doe",
      packAlotted: "Exam pack",
      dateOfPurchase: "2024-01-02",
      counsellingAttended: "Yes",
      contactNumber: "123-456-7890",
    },
    {
      id: 2,
      joinedDate: "2024-02-15",
      name: "Jane Smith",
      packAlotted: "Exam pack",
      dateOfPurchase: "2024-02-16",
      counsellingAttended: "No",
      contactNumber: "987-654-3210",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedStudent, setSearchedStudent] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleSearch = () => {
    const foundStudent = users.find((user) => user.contactNumber.includes(searchTerm.trim()));
    setSearchedStudent(foundStudent || null);
  };

  return (
    <div>
      <div className="max-w-[1262px] mx-auto flex justify-between items-center px-4 md:px-0 mt-7">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search with contact number"
            className="border border-[#173E88] rounded-lg px-4 py-2 text-[14px] text-[#6D6B6B] outline-none bg-transparent w-full md:w-[250px] h-[32px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-[#173E88] text-white px-4 py-1 rounded-lg text-[14px] h-[32px] w-[80px] cursor-pointer">
            Search
          </button>
        </div>
        <button
          className="p-2 cursor-pointer"
          onClick={() => setShowFilter(true)}
        >
          <img src={FilterIcon} alt="Filter" className="w-5 h-5" />
        </button>
      </div>

      {searchedStudent && (
        <div className="max-w-[94%] mx-auto bg-white border border-[#94BDEB] rounded-lg p-6 mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[16px] font-semibold text-[#173E88]">Student Details</h2>
            <span className="text-[14px] text-[#173E88]">Joined Date: {searchedStudent.joinedDate}</span>
          </div>
          <hr className="border-t-1 border-[#E9F3FC] my-2" />
          <div className="flex items-center gap-4">
            <img src={userImagePlaceholder} alt="Student" className="w-20 h-20 object-cover " />
            <div className="flex-1 text-left space-y-2">
              <p className="text-[16px] font-semibold">{searchedStudent.name}</p>
              <p className="text-[14px] text-black">Pack Alotted: {searchedStudent.packAlotted}</p>
              <p className="text-[14px] text-black">Date of Purchase: {searchedStudent.dateOfPurchase}</p>
              <p className="text-[14px] text-black">Contact Number: {searchedStudent.contactNumber}</p>
              <p className="text-[14px] text-black">Counselling Attended: {searchedStudent.counsellingAttended}</p>
            </div>
            <button className="text-white text-[14px] bg-[#173E88] px-8 py-2 border rounded-md mt-24 " onClick={() => setSearchedStudent(null)}>Cancel</button>
          </div>
        </div>
      )}
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
              <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB]">
                <option>All</option>
                <option>New Institutions</option>
                <option>Existing Institutions</option>
              </select>
            </div>
            <button
              className="mt-4 bg-[#173E88] text-white px-4 py-1 rounded-lg w-[85px] h-[34px] ml-[198px]"
              onClick={() => setShowFilter(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-8">
        <div className="bg-[#94BDEB] rounded-t-3xl">
          <h2 className="text-[16px] font-medium font-poppins text-left px-6 py-2">
            Students list
          </h2>
        </div>
        <div className="overflow-x-auto p-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)] text-left">
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">Joined Date</th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">Student Name</th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">Pack Alotted</th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">Date of Purchase</th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">Counselling Attended</th>
                <th className="px-4 py-2 text-[14px] text-[#173E88] text-center font-poppins">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className={`cursor-pointer ${index !== users.length - 1 ? "border-b border-[#94BDEB]" : ""}`}>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">{user.joinedDate}</td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">{user.name}</td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">{user.packAlotted}</td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">{user.dateOfPurchase}</td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">{user.counsellingAttended}</td>
                  <td className="px-4 py-2 text-center text-[14px] text-black font-poppins">{user.contactNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;