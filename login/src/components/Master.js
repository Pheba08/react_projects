import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditButton from "../assets/EditButton.svg";
import DeleteButton from "../assets/DeleteButton.svg";
import NavMaster from "./NavMaster";
import SideNavMaster from "./SideNavMaster";

const Master = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [qualifications, setQualifications] = useState([
    { id: 1, name: "ITI", description: "Industrial Training Institute" },
    { id: 2, name: "SSLC/HSE", description: "Secondary & Higher Secondary Education" },
    { id: 3, name: "Under Graduate", description: "Bachelor's Degree" },
    { id: 4, name: "Post Graduate", description: "Master's Degree" },
    { id: 5, name: "Diploma", description: "Diploma Course" },
    { id: 6, name: "PHD", description: "Doctorate" },
    { id: 7, name: "Other", description: "Other Qualifications" },
  ]);

  useEffect(() => {
    if (location.state?.newQualification) {
      setQualifications((prevQualifications) => [
        ...prevQualifications,
        location.state.newQualification,
      ]);
      navigate("/master", { replace: true, state: {} });
    }

    if (location.state?.updatedQualification) {
      setQualifications((prevQualifications) =>
        prevQualifications.map((qualification) =>
          qualification.id === location.state.updatedQualification.id
            ? location.state.updatedQualification
            : qualification
        )
      );
      navigate("/master", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this qualification?");
    if (confirmed) {
      setQualifications((prevQualifications) =>
        prevQualifications.filter((qualification) => qualification.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      <NavMaster />
      <div className="absolute top-[38px] left-0 ">
        <SideNavMaster />
      </div>
      <div className="ml-[200px] p-6 pt-[27px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[20px] font-poppins">Qualification</h1>
          <button
            onClick={() => navigate("AddQualification")}
            className="text-[13px] text-white font-nunito bg-[#173E88] px-4 py-1 rounded-md hover:bg-[#0F2C64] transition-all"
          >
            Add Qualification
          </button>
        </div>
        <div className="max-w-[1130px] mx-auto bg-white rounded-3xl mt-6">
          <div className="bg-[#94BDEB] rounded-t-3xl">
            <h2 className="text-[14px] font-medium font-poppins text-black text-left px-6 py-2">
              Language management master
            </h2>
          </div>
          <div className="overflow-x-auto p-1">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Qualification Name</th>
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Description</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Edit</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Remove</th>
                </tr>
              </thead>
              <tbody>
                {qualifications.map((qualification, index) => (
                  <tr
                    key={qualification.id}
                    className={index !== qualifications.length - 1 ? "border-b border-[#94BDEB]" : ""}
                  >
                    <td className="px-4 py-2 text-left w-[20%] text-[12px] text-black font-poppins">{qualification.name}</td>
                    <td className="px-4 py-2 text-left text-[12px] text-[#6D6B6B] font-poppins">{qualification.description}</td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={EditButton}
                        alt="Edit"
                        className="w-3 h-3 mx-auto"
                        onClick={() => navigate("EditQualification", { state: { qualification } })}
                      />
                    </td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={DeleteButton}
                        alt="Delete"
                        className="w-3 h-3 mx-auto"
                        onClick={() => handleDelete(qualification.id)}
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

export default Master;
