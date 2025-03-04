import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import addButton from "../../assets/addButton.svg";
import ashCircle from "../../assets/ashCircle.svg";
import circleWithArrow from "../../assets/circleWithArrow.svg";

const data = [
  { name: "Total", value: 100, color: "#FFA500" }, // Orange
  { name: "Used", value: 80, color: "#008000" }, // Green
  { name: "Balance", value: 20, color: "#FF0000" }, // Red
];

const packs = [
  { name: "5th Standard Pack", path: "/fifthstdpack" },
  { name: "6th Standard Pack", path: "/sixthstdpack" },
  { name: "7th Standard Pack", path: "/seventhstdpack" },
];

const InstitutionSideNav = ({ onBuyMoreClick }) => {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <div className="flex p-[2px] ">
      {/* Sidebar */}
      <aside className="sticky top-2 w-[230px] bg-[#DFF0FF] text-white h-[calc(100vh-42px)] p-5">
        <div className="flex items-center w-full">
          <h1 className="text-[28px] text-black font-semibold">My packs</h1>
          <img src={addButton} alt="Add Button" className="w-[26px] h-[26px] ml-3 mt-2" />
        </div>
        <div className="h-[1px] bg-[#FFFFFF] w-full my-3"></div>
        <nav role="navigation" aria-label="Sidebar Menu" className="pt-4">
          <ul className="space-y-2 text-left w-full">
            {packs.map((pack, index) => (
              <li key={index} className="w-full">
                <div className="bg-white p-4 rounded-3xl text-center">
                  <div className="flex items-center justify-between mb-1">
                    <img src={ashCircle} alt="Ash Circle" className="w-10 h-10" />
                    <img src={circleWithArrow} alt="Circle with Arrow" className="w-5 h-5 mb-5" />
                  </div>
                  <h2 className="text-[14px] text-left font-semibold text-black mb-3">{pack.name}</h2>
                  <div className="flex justify-around items-center mb-4">
                    {data.map((item, index) => (
                      <div key={index} className="text-center">
                        <h3 className="text-[14px] text-black mb-1">{item.name}</h3>
                        <PieChart width={50} height={50}>
                          <Pie
                            data={[{ value: item.value }, { value: 100 - item.value }]}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={18}
                            outerRadius={20}
                            startAngle={90}
                            endAngle={-270}
                            fill="#ccc"
                            stroke="none"
                          >
                            <Cell key={`cell-${index}-filled`} fill={item.color} />
                            <Cell key={`cell-${index}-empty`} fill="#FFFFFF" />
                          </Pie>
                        </PieChart>
                        <p className="text-black text-xs font-semibold mt-[-32px]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <button
                  onClick={onBuyMoreClick} // Call function to show FifthStdPack
                  className="mt-3 inline-block bg-[#173E88] text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-800"
                >
                  Buy More
                </button>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default InstitutionSideNav;
