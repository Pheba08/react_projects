import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import adminlogo from "../../assets/adminlogo.svg";
import UserIcon from "../../assets/UserIcon.svg";
import MenuButton from "../../assets/MenuButton.svg";
import InstitutionDashboard from "./InstitutionDashboard";
import ExamPacks from "./ExamPacks";
import StudentsList from "./StudentsList";
import EnquiriesList from "./EnquiriesList";

const InstitutionNav = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(() => {
        return localStorage.getItem("activeTab") || "Dashboard";
    });

    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    const handleLogout = () => {
        navigate("/loginpage");
    };

    return (
        <div>
            {/* Navbar */}
            <nav>
                {/* First Layer */}
                <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

                {/* Second Layer */}
                <div className="bg-white h-[38px] flex items-center justify-between px-5 md:px-10">
                    {/* Logo */}
                    <img
                        src={adminlogo}
                        alt="Skills Connect Logo"
                        className="w-[150px] h-[30px]"
                    />

                    {/* Tab Navigation */}
                    <div className="flex space-x-6 mt-1">
                        {["Dashboard", "Exam Packs", "Students List", "Enquiries List"].map((tab) => (
                            <button
                                key={tab}
                                className={`pb-2 text-sm font-semibold transition-all duration-200 relative ${activeTab === tab
                                    ? "text-[#173E88] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#173E88] after:rounded-full after:font-bold"
                                    : "text-[#173E88] opacity-70 "
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Right-side buttons */}
                    <div className="flex items-center gap-3">
                        <button className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl hover:bg-[#173E88] hover:text-white">
                            Inbox
                        </button>

                        <button className="w-[24px] h-[24px] border-[1px] border-[#173E88] rounded-full hover:bg-[#173E88]">
                            <img src={UserIcon} alt="User" className="w-[16px] h-[16px]" />
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-[13px] text-[#173E88] font-nunito w-[67px] h-[26px] border-[1px] border-[#173E88] rounded-2xl flex items-center justify-center gap-[5px] transition-all duration-300 hover:bg-[#173E88] hover:text-white"
                            >
                                Menu
                                <img src={MenuButton} alt="Menu" className="w-[17px] h-[17px]" />
                            </button>

                            {isMenuOpen && (
                                <div className="absolute mt-2 bg-[#173E88] rounded-md shadow-lg w-[64px]">
                                    <button
                                        onClick={handleLogout}
                                        className="px-3 py-2 text-left text-[12px] text-white w-full"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content Based on Active Tab */}
            <div>
                {activeTab === "Dashboard" && <InstitutionDashboard />}
                {activeTab === "Exam Packs" && <ExamPacks />}
                {activeTab === "Students List" && <StudentsList />}
                {activeTab === "Enquiries List" && <EnquiriesList />}
            </div>
        </div>
    );
};

export default InstitutionNav;
