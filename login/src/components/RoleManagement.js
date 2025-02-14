import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditButton from "../assets/EditButton.svg";
import DeleteButton from "../assets/DeleteButton.svg";
import NavMaster from "./NavMaster";
import SideNavMaster from "./SideNavMaster";

const RoleManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [roles, setRoles] = useState([
    { id: 1, name: "Master data management", description: "Description" },
    { id: 2, name: "Login authorization", description: "Description" },
    { id: 3, name: "Pack management", description: "Description" },
    { id: 4, name: "Question creation", description: "Description" },
    { id: 5, name: "Question bank review", description: "Description" },
    { id: 6, name: "Valuation", description: "Description" },
    { id: 7, name: "Collection view", description: "Description" },
  ]);

  useEffect(() => {
    if (location.state?.updatedRole) {
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === location.state.updatedRole.id
            ? location.state.updatedRole
            : role
        )
      );
    }
  }, [location.state]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this qualification?");
    if (confirmed) {
      setRoles((prevRoles) =>
        prevRoles.filter((roles) => roles.id !== id)
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
          <h1 className="text-[20px] font-poppins">Role Management</h1>
          <button
            onClick={() => navigate("/AddRole")}
            className="text-[13px] text-white font-nunito bg-[#173E88] px-4 py-1 rounded-md hover:bg-[#0F2C64] transition-all"
          >
            Add Role
          </button>
        </div>

        {/* Table Container */}
        <div className="max-w-[990px] mx-auto bg-white rounded-3xl mt-6">
          {/* Header Section */}
          <div className="bg-[#94BDEB] rounded-t-3xl">
            <h2 className="text-[14px] font-medium font-poppins text-black text-left px-6 py-2">
              Role management master
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto p-1">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Role Name</th>
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Description</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Edit</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Remove</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role, index) => (
                  <tr
                    key={role.id}
                    className={index !== roles.length - 1 ? "border-b border-[#94BDEB]" : ""}
                  >
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">{role.name}</td>
                    <td className="px-4 py-2 text-left text-[12px] text-[#6D6B6B] font-poppins">{role.description}</td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={EditButton}
                        alt="Edit"
                        className="w-3 h-3 mx-auto"
                        onClick={() => navigate("EditRole", { state: { role } })}
                      />
                    </td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={DeleteButton}
                        alt="Delete"
                        className="w-3 h-3 mx-auto"
                        onClick={() => handleDelete(role.id)}
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

export default RoleManagement;
