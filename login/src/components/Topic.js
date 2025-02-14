import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditButton from "../assets/EditButton.svg";
import DeleteButton from "../assets/DeleteButton.svg";
import NavMaster from "./NavMaster";
import SideNavMaster from "./SideNavMaster";

const Topic = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [topics, setTopics] = useState([
    { id: 1, name: "Communication", description: "Description" },
    { id: 2, name: "Leadership", description: "Critical thinking" },
    { id: 3, name: "Creativity", description: "Description" },
    { id: 4, name: "Adaptability", description: "Description" },
    { id: 5, name: "Team work", description: "Description" },
    { id: 6, name: "Problem solving", description: "Description" },
    { id: 7, name: "Active listening", description: "Description" },
  ]);

  useEffect(() => {
    if (location.state?.updatedTopic) {
      setTopics((prevTopics) =>
        prevTopics.map((topic) =>
          topic.id === location.state.updatedTopic.id
            ? location.state.updatedTopic
            : topic
        )
      );
    }
  }, [location.state]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this qualification?");
    if (confirmed) {
      setTopics((prevTopics) =>
        prevTopics.filter((topics) => topics.id !== id)
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
          <h1 className="text-[20px] font-poppins">Topic Management</h1>
          <button
            onClick={() => navigate("/AddTopic")}
            className="text-[13px] text-white font-nunito bg-[#173E88] px-4 py-1 rounded-md hover:bg-[#0F2C64] transition-all"
          >
            Add Topic
          </button>
        </div>

        {/* Table Container */}
        <div className="max-w-[990px] mx-auto bg-white rounded-3xl mt-6">
          {/* Header Section */}
          <div className="bg-[#94BDEB] rounded-t-3xl">
            <h2 className="text-[14px] font-medium font-poppins text-black text-left px-6 py-2">
              Topic management master
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto p-1">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Topic</th>
                  <th className="text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Description</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Edit</th>
                  <th className="text-center px-4 py-2 text-[12px] text-[#173E88] font-poppins">Remove</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((topic, index) => (
                  <tr
                    key={topic.id}
                    className={index !== topics.length - 1 ? "border-b border-[#94BDEB]" : ""}
                  >
                    <td className="px-4 py-2 text-left text-[12px] text-black font-poppins">{topic.name}</td>
                    <td className="px-4 py-2 text-left text-[12px] text-[#6D6B6B] font-poppins">{topic.description}</td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={EditButton}
                        alt="Edit"
                        className="w-3 h-3 mx-auto"
                        onClick={() => navigate("EditTopic", { state: { topic } })}
                      />
                    </td>
                    <td className="px-4 py-2 text-center w-[5%] cursor-pointer">
                      <img
                        src={DeleteButton}
                        alt="Delete"
                        className="w-3 h-3 mx-auto"
                        onClick={() => handleDelete(topic.id)}
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

export default Topic;
