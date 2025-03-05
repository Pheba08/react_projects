import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import addButton from "../../assets/addButton.svg";
import ashCircle from "../../assets/ashCircle.svg";
import circleWithArrow from "../../assets/circleWithArrow.svg";

const data = [
  { name: "Total", value: 100, color: "#FE8B44" },
  { name: "Used", value: 80, color: "#7ED328" },
  { name: "Balance", value: 20, color: "#E33333" },
];

const packs = [
  { name: "Junior Pack", path: "/juniorpack" },
  { name: "Senior Pack", path: "/seniorpack" },
];

const InstitutionSideNav = ({ onBuyMoreClick, onBuySeniorClick }) => {
  return (
    <div className="relative flex">
      {/* Sidebar */}
      <aside className="sticky top-20 w-[230px] bg-[#DFF0FF] text-white p-3 h-[558px] overflow-y-auto">
        <div className="flex items-center w-full">
          <h1 className="text-[28px] text-black font-semibold pl-5">My packs</h1>
          <img src={addButton} alt="Add Button" className="w-[26px] h-[26px] ml-3 mt-2" />
        </div>
        <div className="h-[1px] bg-[#FFFFFF] w-full my-3"></div>

        <nav role="navigation" aria-label="Sidebar Menu" className="pt-2">
          <ul className="space-y-2 text-left w-full">
            {packs.map((pack, index) => (
              <li key={index} className="w-full">
                <div className="bg-white p-4 rounded-3xl text-center">
                  <div className="relative mb-3 flex items-center justify-between">
                    {/* Pack Name with Overlay */}
                    <div className="relative">
                      <img
                        src={ashCircle}
                        alt="Ash Circle"
                        className="absolute top-1/2 left-3 w-10 h-10 -translate-x-1/2 -translate-y-1/2"
                      />
                      <h2 className="text-[16px] text-left font-semibold text-black relative z-10">
                        {pack.name}
                      </h2>
                    </div>

                    {/* Arrow Icon */}
                    <img src={circleWithArrow} alt="Circle with Arrow" className="w-5 h-5" />
                  </div>

                  {/* Pie Chart Section */}
                  <div className="flex justify-around items-center">
                    {data.map((item, index) => (
                      <div key={index} className="text-center relative">
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
                          {/* Display Value Inside */}
                          <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="10"
                            fontWeight="bold"
                            fill="black"
                          >
                            {item.value}
                          </text>
                        </PieChart>
                      </div>
                    ))}
                  </div>

                  {/* Single Buy More Button (Fix) */}
                  <button
                    onClick={() => {
                      if (pack.name === "Junior Pack") {
                        onBuyMoreClick(); // Calls Junior Pack function
                      } else {
                        onBuySeniorClick(); // Calls Senior Pack function
                      }
                    }}
                    className="mt-3 ml-20 inline-block bg-[#173E88] text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-800"
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
