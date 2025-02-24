import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../assets/FilterIcon.svg";
import DropDown from "../assets/DropDown.svg";
import DropUp from "../assets/DropUp.svg";
import SolarSystem from "../assets/SolarSystem.svg"
import Saturn from "../assets/Saturn.svg";
import Jupiter from "../assets/Jupiter.svg";
import Venus from "../assets/Venus.svg";
import Mars from "../assets/Mars.svg";
import EditBtn from "../assets/EditBtn.svg";
import closeButton from "../assets/closeButton.svg";

const QuestionList = () => {
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
        { id: 5, date: "Date", question: "Which is the biggest planet in our solar system?" },
        { id: 6, date: "Date", question: "Which is the biggest planet in our solar system?" },
        { id: 7, date: "Date", question: "Which is the biggest planet in our solar system?" },
    ];

    const toggleEdit = (id) => {
        setEditMode(editMode === id ? null : id);
        setExpandedRow(editMode === id ? null : id);
    };

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate("/editquestion");
    };

    const [showFilter, setShowFilter] = useState(false);

    return (
        <div>
            {/* Table */}
            <div className="pt-5 pb-5 pl-3 pr-10 text-left">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                            <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Sl No</th>
                            <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Created Date</th>
                            <th className="w-[70%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Questions & Options</th>
                            <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins items-right">
                                <button
                                    className="cursor-pointer"
                                    onClick={() => setShowFilter(true)}
                                >
                                    <img src={FilterIcon} alt="Filter" className="w-5 h-5 ml-16" />
                                </button>
                                {/* Filter Modal */}
                                {showFilter && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black font-medium">
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
                                                    <option>Grade</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                </select>
                                            </div>

                                            <div className="mt-4">
                                                <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB] ">
                                                    <option>Subject</option>
                                                    <option>Project Management</option>
                                                    <option>Coding Fundamentals</option>
                                                </select>
                                            </div>

                                            <div className="mt-4">
                                                <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB] ">
                                                    <option>Topic</option>
                                                    <option>Communication</option>
                                                    <option>Leadership</option>
                                                    <option>Creativity</option>
                                                </select>
                                            </div>

                                            <div className="mt-4">
                                                <select className="w-full rounded-lg border-0 mt-1 bg-[#94BDEB] ">
                                                    <option>Category</option>
                                                    <option>C1</option>
                                                    <option>C2</option>
                                                    <option>C3</option>
                                                    <option>C4</option>
                                                    <option>C5</option>
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
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((q, index) => (
                            <React.Fragment key={q.id}>
                                {/* Question Row */}
                                <tr
                                    className={`${expandedRow === q.id ? "" : index === questions.length - 1 ? "" : "border-b border-[#94BDEB]"}`}
                                >
                                    <td className="px-4 py-2">{q.id}</td>
                                    <td className="px-4 py-2">{q.date}</td>
                                    <td className="px-4 py-2 font-semibold">{q.question}</td>
                                    <td className="px-4 py-2">
                                        {/* Edit Button or Drop-Up Arrow */}
                                        {expandedRow === q.id ? (
                                            <button
                                                className="flex items-center justify-center ml-16"
                                                onClick={() => toggleEdit(null)} // Collapse the row
                                            >
                                                <img src={DropUp} alt="Collapse" className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button
                                                className="bg-[#173E88] text-white px-4 py-1 w-[87px] rounded-md flex items-center justify-between"
                                                onClick={() => toggleEdit(q.id)}
                                            >
                                                Edit
                                                <img src={DropDown} alt="Expand" className="w-3 h-3" />
                                            </button>
                                        )}
                                    </td>
                                </tr>

                                {/* Expanded Options Row */}
                                {expandedRow === q.id && q.options && (
                                    <tr className={index === questions.length - 1 ? "" : "border-b border-[#94BDEB]"}>
                                        <td colSpan="4" className="p-4">
                                            {/* Content inside expanded row */}
                                            <div className="ml-60">
                                                <img src={SolarSystem} alt="Solar System" className="w-20 h-20" />
                                            </div>
                                            <div className="text-center mt-2">
                                                <p className="text-[13px] text-left font-semibold text-black pl-60">Options</p>
                                            </div>
                                            <div className="flex items-center space-x-6 mt-4 ml-60">
                                                {q.options.map((opt, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <p className="text-sm font-medium pb-14">{opt.label}.</p>
                                                        <img src={opt.img} alt={opt.name} className="w-20 h-20" />
                                                        <p className="text-sm pt-14">{opt.name}</p>
                                                    </div>
                                                ))}
                                                <div className="ml-auto">
                                                    <button className="mt-12 ml-60 bg-[#173E88] w-[28px] h-[28px] rounded flex items-center justify-center">
                                                        <img src={EditBtn} onClick={handleEdit} className="w-3 h-3" />
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
    );
};

export default QuestionList;
