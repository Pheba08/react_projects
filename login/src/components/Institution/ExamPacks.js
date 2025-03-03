import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeButton from "../../assets/closeButton.svg";

const ExamPacks = () => {
  const navigate = useNavigate();
  const [selectedPack, setSelectedPack] = useState(null);

  // Function to open modal
  const openModal = (packName) => {
    setSelectedPack(packName);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedPack(null);
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      packs: "",
      expiryDate: "00/00/00",
      price: "000",
      bundleQuantity: "000",
      bundlePrice: "000",
      a: "",
    },
    {
      id: 2,
      packs: "",
      expiryDate: "00/00/00",
      price: "000",
      bundleQuantity: "000",
      bundlePrice: "000",
      a: "",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col p-4 md:p-6">
      {/* First Row - Stats */}
      <div className="w-full text-[#173E88] p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <div className="w-full pl-10 pr-10">
        <h2 className="text-2xl text-[#173E88] font-bold mb-4 text-left">Packs List</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          {["Junior Pack", "Senior Pack", "Junior Pack", "Senior Pack", "Junior Pack", "Senior Pack", "Junior Pack", "Senior Pack"].map((pack, index) => (
            <div key={index} className="bg-white text-[#173E88] p-6 rounded-3xl flex justify-between">
              <span className="text-lg font-semibold">{pack}</span>
              <button
                className="bg-[#173E88] text-white px-6 py-2 rounded-full hover:bg-blue-800"
                onClick={() => openModal(pack)}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPack && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 md:w-[80%] relative">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-left pl-2 font-bold mb-4 text-[#173E88]">Buy bundle pack</h2>
              <button onClick={closeModal}>
                <img
                  src={closeButton}
                  alt="close button"
                  className="w-[20px] h-[20px]"
                />
              </button>
            </div>
            <div className="overflow-x-auto p-2">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[linear-gradient(180deg,_rgba(80,131,205,0.3)_0%,_rgba(80,131,205,0.05)_100%)] text-left">
                    <th className="px-4 py-2 text-[12px] text-[#173E88] text-center font-poppins">Packs</th>
                    <th className="px-4 py-2 text-[12px] text-[#173E88] text-center font-poppins">Expiry date</th>
                    <th className="px-4 py-2 text-[12px] text-[#173E88] text-center font-poppins">Price for one pack (MRP)</th>
                    <th className="px-4 py-2 text-[12px] text-[#173E88] text-center font-poppins">Bundle quantity</th>
                    <th className="px-4 py-2 text-[12px] text-[#173E88] text-center font-poppins">Bundle price</th>
                    <th className="px-4 py-2 text-[12px] text-[#173E88] text-center font-poppins"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.filter((user) => user.packs?.includes(searchTerm.trim())).map((user, index) => (
                    <tr key={user.id} className={index !== users.length - 1 ? "border-b border-[#94BDEB]" : ""}>
                      <td className="px-4 py-2 text-center text-[12px] text-black font-poppins">
                        <select
                          value={user.packs}
                          onChange={(e) => {
                            const updatedUsers = users.map((u) =>
                              u.id === user.id ? { ...u, packs: e.target.value } : u
                            );
                            setUsers(updatedUsers);
                          }}
                          className="border-none px-2 py-1"
                        >
                          <option value="">Select Pack</option>
                          <option value="Junior Pack">Junior Pack</option>
                          <option value="Senior Pack">Senior Pack</option>
                        </select>
                      </td>

                      <td className="px-4 py-2 text-center text-[12px] text-black font-poppins">{user.expiryDate}</td>
                      <td className="px-4 py-2 text-center text-[12px] text-black font-poppins">{user.price}</td>
                      <td className="px-4 py-2 text-center text-[12px] text-black font-poppins">{user.bundleQuantity}</td>
                      <td className="px-4 py-2 text-center text-[12px] text-black font-poppins">{user.bundlePrice}</td>
                      <td className="px-4 py-2 text-center text-[12px] text-black font-poppins">
                        <button
                          className="bg-[#173E88] text-white text-[12px] px-6 py-1 rounded-full hover:bg-blue-800"
                        >
                          Buy
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPacks;
