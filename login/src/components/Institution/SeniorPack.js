import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import ashCircle from "../../assets/ashCircle.svg";
import circleWithArrow from "../../assets/circleWithArrow.svg";
import PaymentProof_img from "../../assets/PaymentProof_img.svg";

const data = [
  { name: "Total", value: 100, color: "#FE8B44" },
  { name: "Used", value: 80, color: "#7ED328" },
  { name: "Balance", value: 20, color: "#E33333" },
];

const SeniorPack = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: 1,
      studentName: "John Doe",
      packAlotted: "2024-01-01",
      dateOfPurchase: "2024-01-01",
      contactNumber: "123-456-7890",
      viewResult: (
        <p>
          <Link to="/viewResult" className="text-[14px] text-[#173E88] hover:underline">
            View result
          </Link>{" "}
        </p>
      ),
    },
    {
      id: 1,
      studentName: "Jane Smith",
      packAlotted: "2024-01-01",
      dateOfPurchase: "2024-01-01",
      contactNumber: "123-456-7890",
      viewResult: (
        <p>
          <Link to="/viewResult" className="text-[14px] text-[#173E88] hover:underline">
            View result
          </Link>{" "}
        </p>
      ),
    },
    {
      id: 1,
      studentName: "Jane Smith",
      packAlotted: "2024-01-01",
      dateOfPurchase: "2024-01-01",
      contactNumber: "123-456-7890",
      viewResult: (
        <p>
          <Link to="/viewResult" className="text-[14px] text-[#173E88] hover:underline">
            View result
          </Link>{" "}
        </p>
      ),
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <div className="relative">
          {/* Ash Circle (Directly overlaying the text) */}
          <img
            src={ashCircle}
            alt="Ash Circle"
            className="absolute top-1/2 left-3 w-18 h-18 -translate-x-1/2 -translate-y-1/2"
          />

          {/* Heading (Pack Name) */}
          <h2 className="text-[26px] text-left font-semibold text-black relative z-10">
            Senior pack
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <button
            className="px-4 py-2 bg-[#173E88] text-white rounded-full hover:bg-blue-800"
            onClick={() => navigate("/buy-more")}
          >
            Buy More
          </button>
          <img src={circleWithArrow} alt="Arrow" className="w-7 h-7" />
        </div>
      </div>

      <div className="flex justify-center gap-24 items-center mt-6 mb-4 flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="relative">
            {/* Name positioned at the top-left */}
            <h3 className="absolute top-3 left-[-3.5rem] text-[14px] text-black transform -translate-y-1/2">
              {item.name}
            </h3>


            {/* PieChart with thin bars */}
            <PieChart width={70} height={70}>
              <Pie
                data={[{ value: item.value }, { value: 100 - item.value }]}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={32}
                outerRadius={35}
                startAngle={90}
                endAngle={-270}
                fill="#ccc"
                stroke="none"
              >
                <Cell key={`cell-${index}-filled`} fill={item.color} />
                <Cell key={`cell-${index}-empty`} fill="#FFFFFF" />
              </Pie>

              {/* Enlarged ashCircle without making the bar thick */}
              <foreignObject x="5%" y="5%" width="90%" height="90%">
                <img src={ashCircle} alt="ashCircle" className="w-full h-full" />
              </foreignObject>

              {/* Displaying the Value in the Center */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fontWeight="bold"
                fill="black"
              >
                {item.value}
              </text>
            </PieChart>
          </div>
        ))}
      </div>

      {/* Search and Assign Pack Section */}
      <div className="bg-white p-6 rounded-2xl mt-10">
        <h2 className="text-[18px] text-left font-bold mb-4">Search and Assign Pack</h2>
        <div className="grid grid-cols-5 gap-6">
          {/* Column 1 - Search by Mobile */}
          <div>
            <label className="block text-sm text-[#173E88] text-left font-medium">Search by Mobile Number</label>
            <input type="text" className="border border-[#173E88] rounded-lg px-4 py-2 w-full mt-2 outline-none" />
          </div>
          {/* Column 2 - Student Name */}
          <div>
            <label className="block text-sm text-[#173E88] text-left font-medium">Student Name</label>
            <input type="text" className="border border-[#173E88] rounded-lg px-4 py-2 w-full mt-2 outline-none" />
          </div>
          {/* Column 3 - Pack Type */}
          <div>
            <label className="block text-sm text-[#173E88] text-left font-medium">Pack Type</label>
            <input type="text" className="border border-[#173E88] rounded-lg px-4 py-2 w-full mt-2 outline-none" />
          </div>
          {/* Column 4 - Payment Proof */}
          <div>
            <label className="block text-sm text-[#173E88] text-left font-medium mb-2">Payment Proof</label>
            <div className="flex items-center bg-[#DFF0FF] px-4 py-1 gap-2 rounded-md w-[120%]">
              <img src={PaymentProof_img} alt="Payment Proof" className="w-7 h-7 mr-2" />
              <span className="text-[12px] text-black text-left font-poppins mr-2">File name.pdf <br /> 9MB</span>
              <a href="#" className="text-[#173E88] text-[12px] font-semibold hover:underline">View</a>
            </div>
          </div>
          {/* Column 5 - Assign Button */}
          <div className="flex items-end">
            <button className="bg-[#173E88] text-white px-4 py-2 ml-8 rounded-lg w-[70%]">
              Assign
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-[1262px] mx-auto bg-white rounded-3xl mt-8">
        <div className="bg-[#94BDEB] rounded-t-3xl">
          <h2 className="text-[14px] font-medium font-poppins text-left px-6 py-2">
            Pack Allotment details
          </h2>
        </div>
        <div className="overflow-x-auto p-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)]">
                <th className="px-4 py-2 text-center text-[14px] text-[#173E88] font-poppins">
                  Student name
                </th>
                <th className="px-4 py-2 text-center text-[14px] text-[#173E88] font-poppins">
                  Pack allotted
                </th>
                <th className="px-4 py-2 text-center text-[14px] text-[#173E88] font-poppins">
                  Date of purchase
                </th>
                <th className="px-4 py-2 text-center text-[14px] text-[#173E88] font-poppins">
                  Contact Number
                </th>
                <th className="px-4 py-2 text-center text-[14px] text-[#173E88] font-poppins">
                  View result
                </th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) =>
                  user.contactNumber.includes(searchTerm.trim())
                )
                .map((user) => (
                  <tr key={user.id} className="border-t border-[#94BDEB]">
                    <td className="px-4 py-2">{user.studentName}</td>
                    <td className="px-4 py-2">{user.packAlotted}</td>
                    <td className="px-4 py-2">{user.dateOfPurchase}</td>
                    <td className="px-4 py-2">{user.contactNumber}</td>
                    <td className="px-4 py-2">{user.viewResult}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default SeniorPack;
