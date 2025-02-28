import React from "react";
import { useNavigate } from "react-router-dom";

const ExamPacks = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#E9F3FC] w-full h-screen flex flex-col p-4 md:p-8 overflow-hidden">
            {/* First Row - Stats */}
            <div className="w-full text-[#173E88] p-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-6">
                <div className="bg-white p-3 rounded-full flex justify-between w-full">
                    <span className="text-[24px] text-left p-5 pl-8 font-semibold">
                        Total <br /> Packs
                    </span>
                    <span className="text-[30px] text-right p-5 pr-10 pt-8 font-bold">5000</span>
                </div>
                <div className="bg-white p-3 rounded-full flex justify-between w-full">
                    <span className="text-[24px] text-left p-5 pl-8 font-semibold">
                        Total Pack <br /> Sold
                    </span>
                    <span className="text-[30px] text-right p-5 pr-10 pt-8 font-bold">5000</span>
                </div>
                <div className="bg-white p-3 rounded-full flex justify-between w-full">
                    <span className="text-[24px] text-left p-5 pl-8 font-semibold">
                        Balance <br /> Pack
                    </span>
                    <span className="text-[30px] text-right p-5 pr-10 pt-8 font-bold">5000</span>
                </div>
            </div>


            {/* Second Row - Packs List */}
            <div className="w-1/2 pl-12">
                <h2 className="text-2xl text-[#173E88] font-bold mb-4 text-left">Packs List</h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white text-[#173E88] p-6 rounded-3xl flex justify-between">
                        <span className="text-lg font-semibold">Junior Pack</span>
                        <button
                            className="bg-[#173E88] text-white px-6 py-2 rounded-full hover:bg-blue-800"
                            onClick={() => navigate("/junior-pack")}
                        >
                            View
                        </button>
                    </div>
                    <div className="bg-white text-[#173E88] p-6 rounded-3xl flex justify-between">
                        <span className="text-lg font-semibold">Senior Pack</span>
                        <button
                            className="bg-[#173E88] text-white px-6 py-2 rounded-full hover:bg-blue-800"
                            onClick={() => navigate("/senior-pack")}
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExamPacks;
