import React, { useState, useEffect } from "react";
import ActivePack from "../assets/ActivePack.svg";
import DropDown from "../assets/DropDown.svg"
import SolarSystem from "../assets/SolarSystem.svg"
import Saturn from "../assets/Saturn.svg";
import Jupiter from "../assets/Jupiter.svg";
import Venus from "../assets/Venus.svg";
import Mars from "../assets/Mars.svg";

const SeniorApprovedQuestions = () => {

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
            {/* Junior Pack Image & Text */}
            <div className="relative w-[100px] h-[100px]">
                <img src={ActivePack} alt="Menu" className="w-full h-full" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#173E88] font-semibold text-center">
                    Junior <br />
                    Pack
                </p>
            </div>

                            {/* Approved question filter */}
                            <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-3 pb-6">
                                {/* Header */}
                                <div className="bg-[#94BDEB] rounded-t-3xl">
                                    <h2 className="text-[14px] font-medium font-poppins text-left px-6 py-2">
                                        Approved question filter
                                    </h2>
                                </div>

                                {/* First Row - 5 Columns */}
                                <div className="grid grid-cols-5 gap-7 px-6 py-4">
                                    {/* Grade */}
                                    <div className="text-left">
                                        <label className="block text-[12px] font-medium pb-1 ">Grade</label>
                                        <select className="h-[35px] border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-1 w-full">
                                                <option>Grade</option>
                                            </select>
                                    </div>

                                    {/* Subject */}
                                    <div className="text-left">
                                        <label className="block text-sm font-medium pb-1">Subject</label>
                                        <div className="flex items-center gap-2">
                                            <select className="h-[35px] border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-1 w-full">
                                                <option>Subject</option>
                                            </select>
                                            
                                        </div>
                                    </div>

                                    {/* Topic */}
                                    <div className="text-left">
                                        <label className="block text-sm font-medium pb-1">Topic</label>
                                        <select className="h-[35px] border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-1 w-full">
                                                <option>Topic</option>
                                            </select>
                                    </div>

                                    {/* Category */}
                                    <div className="text-left">
                                        <label className="block text-sm font-medium pb-1">Category</label>
                                        <select className="h-[35px] border border-[#94BDEB] rounded-md placeholder text-[#A8A8A8] text-[10px] px-3 py-1 w-full">
                                                <option>Category</option>
                                            </select>
                                    </div>

                                    {/* Number of Questions */}
                                    <div className="flex flex-col justify-center items-center ">
                                        <label className="block text-sm font-medium pb-1">Number of Questions</label>
                                        <div className="bg-[#173E88] text-white rounded-md w-[70px] h-[35px] flex justify-center items-center font-bold">
                                            120
                                        </div>
                                    </div>
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
                                                Select
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

                                                    <div className="mt-12">
                                                        <button className="ml-40 bg-[#173E88] w-[180px] h-[28px] text-[13px] text-white rounded">
                                                            Move to exam pack
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


            </div>

        </div>

    );
};

export default SeniorApprovedQuestions;