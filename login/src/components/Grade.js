import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditButton from "../assets/EditButton.svg";
import DeleteButton from "../assets/DeleteButton.svg";
import NavMaster from "./NavMaster";
import SideNavMaster from "./SideNavMaster";

const Grade = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [grades, setGrades] = useState([
    { id: 1, name: "A", description: "Grade A" },
    { id: 2, name: "B", description: "Grade B" },
    { id: 3, name: "C", description: "Grade C" },
    { id: 4, name: "D", description: "Grade D" },
    { id: 5, name: "E", description: "Grade E" },
    { id: 6, name: "F", description: "Grade F" },
    { id: 7, name: "G", description: "Grade G" },
  ]);

  useEffect(() => {
    if (location.state?.updatedGrade) {
      setGrades((prevGrades) =>
        prevGrades.map((grade) =>
          grade.id === location.state.updatedGrade.id
            ? location.state.updatedGrade
            : grade
        )
      );
    }
  }, [location.state]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this qualification?");
    if (confirmed) {
      setGrades((prevGrades) =>
        prevGrades.filter((grades) => grades.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      {/* Navbar */}
      <NavMaster />

      {/* Side Navigation */}
      <div className="absolute top-[38px] left-0">
        <SideNavMaster />
      </div>

      {/* Main Content */}
      <div className="ml-[200px] p-6 pt-[27px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[20px] font-poppins">Grade Management</h1>
          <button
            onClick={() => navigate("/AddGrade")}
            className="text-[13px] text-white font-nunito bg-[#173E88] px-4 py-1 rounded-md hover:bg-[#0F2C64] transition-all"
          >
            Add Grade
          </button>
        </div>

        {/* Table Container */}
        <div className="max-w-[1130px] mx-auto bg-white rounded-3xl mt-6">
          {/* Header Section */}
          <div className="bg-[#94BDEB] rounded-t-3xl">
            <h2 className="text-[14px] font-medium font-poppins text-black text-left px-6 py-2">
              Grade management master
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto p-1">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Grade</th>
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Description</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Edit</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Remove</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade, index) => (
                  <tr
                    key={grade.id}
                    className={index !== grades.length - 1 ? "border-b border-[#94BDEB]" : ""}
                  >
                    <td className="px-4 py-2 text-left w-[20%] text-[12px] text-black font-poppins">{grade.name}</td>
                    <td className="px-4 py-2 text-left text-[12px] text-[#6D6B6B] font-poppins">{grade.description}</td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={EditButton}
                        alt="Edit"
                        className="w-3 h-3 mx-auto"
                        onClick={() => navigate("EditGrade", { state: { grade } })}
                      />
                    </td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={DeleteButton}
                        alt="Delete"
                        className="w-3 h-3 mx-auto"
                        onClick={() => handleDelete(grade.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade;
