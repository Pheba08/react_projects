import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../assets/DropDown.svg"
import SolarSystem from "../assets/SolarSystem.svg"
import Saturn from "../assets/Saturn.svg";
import Jupiter from "../assets/Jupiter.svg";
import Venus from "../assets/Venus.svg";
import Mars from "../assets/Mars.svg";

const SelectedPack = () => {
    const navigate = useNavigate();

    // Load active tab from localStorage or default to "create"
    const [activeTab, setActiveTab] = useState(() => localStorage.getItem("activeTab") || "create");

    // Save activeTab to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    const [expandedRow, setExpandedRow] = useState(null);
    const [editMode, setEditMode] = useState(null);

    const questions = [
        {
            id: 1,
            date: "Date",
            question: "Which is the biggest planet in our solar system?",
            options: [
                { label: "A", name: "Saturn", img: Saturn },
                { label: "B", name: "Jupiter", img: Jupiter },
                { label: "C", name: "Venus", img: Venus },
                { label: "D", name: "Mars", img: Mars },
            ],
        },
        { date: "Date", question: "Which is the biggest planet in our solar system?" },
        { date: "Date", question: "Which is the biggest planet in our solar system?" },
        { date: "Date", question: "Which is the biggest planet in our solar system?" },
    ];

    const toggleEdit = (id) => {
        setEditMode(editMode === id ? null : id);
        setExpandedRow(editMode === id ? null : id);
    };

    return (
        <div>
            

            {/* Exam Pack Details */}
            <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-4 pb-10">
                {/* Header */}
                <div className="bg-[#94BDEB] rounded-t-3xl">
                    <h2 className="text-[14px] font-medium font-poppins text-left px-6 py-2">
                        Pack creation
                    </h2>
                </div>

                {/* First Row - 4 Columns */}
                <div className="grid grid-cols-4 gap-7 px-6 py-4">
                    {/* Pack Name */}
                    <div className="text-left">
                        <label className="block text-[12px] font-medium pb-1 ">Pack Name</label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="w-full h-[35px] border border-[#94BDEB] rounded-md px-3 py-2 placeholder text-[#A8A8A8] text-[10px] "
                        />
                    </div>

                    {/* Grade Range */}
                    <div className="text-left">
                        <label className="block text-sm font-medium pb-1">Grade Range</label>
                        <div className="flex items-center gap-2">
                            <select className="h-[35px] border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-1 w-full">
                                <option>Select from grade</option>
                            </select>
                            <span>to</span>
                            <select className="h-[35px] border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-1 w-full">
                                <option>Select to grade</option>
                            </select>
                        </div>
                    </div>

                    {/* Exam Duration */}
                    <div className="text-left">
                        <label className="block text-sm font-medium pb-1">Exam Duration</label>
                        <input
                            type="number"
                            placeholder="000 Minutes"
                            className="w-full h-[35px] border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-2"
                        />
                    </div>

                    {/* Number of Questions */}
                    <div className="flex flex-col justify-center items-center ">
                        <label className="block text-sm font-medium pb-1">Number of Questions</label>
                        <div className="bg-[#173E88] text-white rounded-md w-[70px] h-[35px] flex justify-center items-center font-bold">
                            120
                        </div>
                    </div>
                </div>

                {/* Second Row - About Exam Pack */}
                <div className="px-6">
                    <label className="block text-[12px] font-medium text-left pb-1">About Exam Pack</label>
                    <textarea
                        placeholder="Type..."
                        className="w-full border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-2 h-20"
                    ></textarea>
                </div>
            </div>

            <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-8 ">
                <div className="bg-[#94BDEB] rounded-t-3xl ">
                    <h2 className="text-[14px] font-medium font-poppins text-left px-6 py-2">
                        Questions
                    </h2>
                </div>

                {/* Table */}
                <div className="pt-5 pb-5 pl-3 pr-10 text-left">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                                <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Created Date</th>
                                <th className="w-[70%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Questions & Options</th>
                                <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins items-right">


                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((q) => (
                                <React.Fragment key={q.id}>
                                    {/* Question Row */}
                                    <tr className="border-b">

                                        <td className="px-4 py-2">{q.date}</td>
                                        <td className="px-4 py-2 font-semibold">{q.question}</td>
                                        <td className="pl-20">
                                            {/* Drop down Button */}


                                            <button
                                                className="bg-[#173E88] text-white text-[13px] px-4 py-1 w-[110px] rounded flex items-center justify-between"
                                                onClick={() => toggleEdit(q.id)}
                                            >
                                                Remove
                                                {/* Dropdown icon inside the button */}
                                                <img src={DropDown} alt="Filter" className="w-3 h-3" />
                                            </button>

                                        </td>
                                    </tr>

                                    {/* Expanded Options Row */}
                                    {expandedRow === q.id && q.options && (
                                        <tr>
                                            <td colSpan="4" className="p-4">
                                                {/* Solar System Image */}
                                                <div className="ml-60">
                                                    <img src={SolarSystem} alt="Solar System" className="w-20 h-20" />
                                                </div>

                                                {/* Heading and Options Label */}
                                                <div className="text-center mt-2">

                                                    <p className="text-[13px] text-left font-semibold text-black pl-60">Options</p>
                                                </div>

                                                {/* Answer Choices in One Line */}
                                                <div className="flex items-center space-x-6 mt-4 ml-60">
                                                    {q.options.map((opt, idx) => (
                                                        <div key={idx} className="flex items-center space-x-2">
                                                            <p className="text-sm font-medium pb-14">{opt.label}.</p>
                                                            <img src={opt.img} alt={opt.name} className="w-20 h-20" />
                                                            <p className="text-sm pt-14">{opt.name}</p>
                                                        </div>
                                                    ))}

                                                    <div className="ml-auto">
                                                        <button className="mt-12 ml-60 bg-[#173E88] px-5 py-1 w-[100px] h-[28px] text-[13px] text-white rounded">
                                                            Remove
                                                        </button>

                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}

                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="bg-[#94BDEB] rounded-2xl h-[70px] w-[1250px] p-3 flex items-center justify-end">
                    {/* Save Button */}
                    <button

                        className="bg-[#173E88] h-[35px] text-white mr-5 px-8 py-1 rounded-md hover:bg-[#0f2d5c]"
                    >
                        Create pack
                    </button>
                </div>

            </div>

        </div>

    )
}

export default SelectedPack;
