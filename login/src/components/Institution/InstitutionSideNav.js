import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import addButton from "../../assets/addButton.svg";
import ashCircle from "../../assets/ashCircle.svg";
import circleWithArrow from "../../assets/circleWithArrow.svg";
import questionMark from "../../assets/questionMark.svg";
import supportTick from "../../assets/supportTick.svg";
import supportCloseButton from "../../assets/supportCloseButton.svg";;

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
  const [showSupportPopup, setShowSupportPopup] = useState(false);

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <aside className="sticky top-20 w-[240px] bg-[#DFF0FF] text-white p-3 h-[558px] flex flex-col justify-between">
        {/* Title and Add Button (Fixed) */}
        <div>
          <div className="flex items-center w-full">
            <h1 className="text-[28px] text-black font-semibold pl-5">My packs</h1>
            <img src={addButton} alt="Add Button" className="w-[26px] h-[26px] ml-3 mt-2" />
          </div>
          <div className="h-[1px] bg-[#FFFFFF] w-full my-3"></div>
        </div>

        {/* Scrollable Section */}
        <div className="scrollable-container overflow-y-auto max-h-[450px] pr-2">
          <nav role="navigation" aria-label="Sidebar Menu">
            <ul className="space-y-2 text-left w-full">
              {packs.map((pack, index) => (
                <li key={index} className="w-full">
                  <div className="bg-white p-4 rounded-3xl text-center">
                    <div className="relative mb-3 flex items-center justify-between">
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
                      <img src={circleWithArrow} alt="Circle with Arrow" className="w-5 h-5" />
                    </div>
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
                    <button
                      onClick={() => {
                        if (pack.name === "Junior Pack") {
                          onBuyMoreClick();
                        } else {
                          onBuySeniorClick();
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


          {/* Help Box (Fixed) */}
          <div className="bg-white bg-opacity-50 p-4 rounded-lg mt-4 relative">
            <div className="absolute top-4 left-2 bg-white p-1 rounded">
              <img src={questionMark} alt="Help" className="w-5 h-5" />
            </div>
            <h3 className="text-[14px] text-black text-left font-semibold pl-10">Need Help?</h3>
            <p className="text-[10px] text-black text-left pt-3 pl-10">
              If you need any help or clarification, you can reach out via email, and we will get back to you soon.
            </p>
            <button
              onClick={() => setShowSupportPopup(true)}
              className="mt-2 bg-[#173E88] text-white px-3 py-1 rounded-md text-sm font-semibold w-full hover:bg-[#173E88]"
            >
              Support
            </button>
          </div>
        </div>
      </aside>


      <div className="flex-1 p-4">
        <Outlet />
      </div>

      {/* Support Popup */}
      {showSupportPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50">
          <div className="bg-[#E9F3FC] p-6 rounded-lg flex items-center shadow-lg w-[500px] relative">
            <img src={supportTick} alt="Support Tick" className="w-12 h-12 mr-4" />
            <div>
              <h2 className="text-lg text-left pl-5 font-semibold text-black">Your Support Request Has Been Received.</h2>
              <p className="text-sm mt-2 text-black text-left pl-5">Thank you for reaching out to us. We have received your support request and our team is currently reviewing it.</p>
            </div>
            <button onClick={() => setShowSupportPopup(false)} className="absolute top-2 right-2">
              <img src={supportCloseButton} alt="Close" className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionSideNav;
