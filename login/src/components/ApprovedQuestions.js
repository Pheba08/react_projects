import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDownBlue from "../assets/DropDownBlue.svg"
import DropUp from "../assets/DropUp.svg";
import SolarSystem from "../assets/SolarSystem.svg"
import Saturn from "../assets/Saturn.svg";
import Jupiter from "../assets/Jupiter.svg";
import Venus from "../assets/Venus.svg";
import Mars from "../assets/Mars.svg";
import EditBtn from "../assets/EditBtn.svg";

const ApprovedQuestions = () => {
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
        if (expandedRow === id) {
            setExpandedRow(null);
            setEditMode(null);
        } else {
            setExpandedRow(id);
            setEditMode(id);
        }
    };

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate("/editquestion");
    };

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
                                    <td className="pl-20">
                                        {/* Edit Button or Drop-Up Arrow */}
                                        {expandedRow === q.id ? (
                                            <button
                                                className="flex items-center justify-center ml-4"
                                                onClick={() => toggleEdit(null)} // Collapse the row
                                            >
                                                <img src={DropUp} alt="Collapse" className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button
                                                className="flex items-center justify-center ml-4"
                                                onClick={() => toggleEdit(q.id)}
                                            >
                                                <img src={DropDownBlue} alt="Expand" className="w-4 h-4" />
                                            </button>
                                        )}
                                    </td>

                                </tr>

                                {/* Expanded Options Row */}
                                {expandedRow === q.id && q.options && (
                                    <tr className={index === questions.length - 1 ? "" : "border-b border-[#94BDEB]"}>
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

export default ApprovedQuestions;
