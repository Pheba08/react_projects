import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import buttonarraowblue from "../assets/buttonarrowblue.svg";
import ActivePack from "../assets/ActivePack.svg";
import InActivePack from "../assets/InActivePack.svg";
import DropDownBlue from "../assets/DropDownBlue.svg"
import SolarSystem from "../assets/SolarSystem.svg"
import Saturn from "../assets/Saturn.svg";
import Jupiter from "../assets/Jupiter.svg";
import Venus from "../assets/Venus.svg";
import Mars from "../assets/Mars.svg";
import EditBtn from "../assets/EditBtn.svg";

const CreateJuniorPack = () => {
    const navigate = useNavigate();

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

    const handleEdit = () => {
        navigate("/editquestion");
    };

    const handleEditJuniorPack = () => {
        navigate("/editjuniorpack");
    };

    return (
        <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
            {/* Navbar */}
            <nav>
                {/* First Layer */}
                <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

                {/* Second Layer */}
                <div className="bg-white h-[38px] flex items-center justify-between px-5 md:px-8">
                    {/* button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-5 text-[#173E88] font-poppins font-semibold text-[19px]"
                    >
                        <img
                            src={buttonarraowblue}
                            alt="Button arrow"
                            className="w-3 h-3"
                        />
                        <span>Created packs list</span>
                    </button>
                </div>
            </nav>
            <div className="mb-10">
                <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-8">
                    <div className="bg-[#94BDEB] rounded-t-3xl">
                        <h2 className="text-[14px] font-medium font-poppins text-left px-6 py-2">
                            Grade category
                        </h2>
                    </div>
                    <div className="p-8 flex items-center gap-12 w-full">
                        {/* First Pack */}
                        <div className="relative">

                            <img src={ActivePack} alt="Menu" className="w-[100px] h-[100px]" />
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#173E88] font-semibold">
                                Junior <br />
                                Pack
                            </p>


                        </div>

                        {/* Second Pack */}
                        <div className="relative">

                            <img src={InActivePack} alt="Menu" className="w-[100px] h-[100px] " />
                            <p className="absolute text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-semibold ">
                                Senior <br />
                                Pack
                            </p>

                        </div>
                    </div>
                </div>

                <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-8 pb-10">
                    <div className="bg-[#94BDEB] rounded-t-3xl ">
                        <h2 className="text-[14px] font-medium font-poppins text-left px-6 py-2">
                            Exam pack details
                        </h2>
                    </div>
                    <p className='text-[12px] text-left pl-7 pt-3 font-medioum'>Exam pack for Junior</p>

                    <p className='text-[12px] text-left pl-7 pt-3 font-medioum '>Description...</p>
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
                                    <th className="w-[10%] text-left px-4 py-2 text-[12px] text-[#173E88] font-poppins">Sl No</th>
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
                                            <td className="px-4 py-2">{q.id}</td>
                                            <td className="px-4 py-2">{q.date}</td>
                                            <td className="px-4 py-2 font-semibold">{q.question}</td>
                                            <td className="pl-20">
                                                {/* Drop down Button */}
                                                <button
                                                    className="items-center justify-between"
                                                    onClick={() => toggleEdit(q.id)}
                                                >
                                                    {/* Dropdown icon inside the button */}
                                                    <img src={DropDownBlue} alt="Filter" className="w-3 h-3" />
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
                                                            <button className="mt-12 ml-60 bg-[#173E88] w-[28px] h-[28px] rounded flex items-center justify-center">
                                                                <img src={EditBtn}
                                                                    onClick={handleEdit}
                                                                    className="w-3 h-3" />
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
                    <div className="bg-[#94BDEB] rounded-2xl h-[80px] w-[1262px] p-3 flex items-center justify-between">
                        {/* Date on the Left */}
                        <p className="pl-4 text-[#173E88] font-semibold">Pack created date : 12 / 05 / 2024</p>

                        {/* Edit Pack Button on the Right */}
                        <button onClick={handleEditJuniorPack} className="mr-4 bg-[#173E88] text-white px-8 py-2 rounded-md hover:bg-[#0f2d5c]">
                            Edit Pack
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateJuniorPack;
