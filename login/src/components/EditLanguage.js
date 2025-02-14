import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavMaster from "./NavMaster";
import SideNavMaster from "./SideNavMaster";

const EditLanguage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (location.state?.language) {
      setLanguage(location.state.language.name);
      setDescription(location.state.language.description);
    }
  }, [location.state]);

  const handleUpdate = () => {
    if (language.trim() && description.trim()) {
      const updatedLanguage = {
        id: location.state.language.id,
        name: language,
        description: description,
      };
      navigate("/language", { state: { updatedLanguage } });
    }
  };

  return (
    <div className="min-h-screen bg-[#E9F3FC] overflow-hidden">
      <NavMaster heading="Edit Language" showIcons={false} />
      <div className="absolute top-[38px] left-0">
        <SideNavMaster />
      </div>
      <div className="ml-[200px] p-6 pt-[27px]">
        <div className="max-w-[990px] mx-auto bg-white rounded-3xl mt-14">
          <div className="bg-[#94BDEB] rounded-t-3xl">
            <h2 className="text-[14px] font-medium font-poppins text-black text-left px-6 py-2">
              Edit Language
            </h2>
          </div>
          <div className="px-14 py-6">
            <div className="mb-6 text-left">
              <label
                htmlFor="language"
                className="block text-[12px] font-medium text-[#030303] mb-1"
              >
                Language
              </label>
              <input
                type="text"
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                placeholder="Type"
                className="w-[250px] h-[35px] px-4 py-2 border border-[#94BDEB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94BDEB] placeholder:text-[12px] placeholder:text-[#A8A8A8]"
              />
            </div>
            <div className="mb-6 text-left">
              <label
                htmlFor="description"
                className="block text-[12px] font-medium text-[#030303] mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Type"
                className="w-full h-[90px] px-4 py-2 border border-[#94BDEB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94BDEB] placeholder:text-[12px] placeholder:text-[#A8A8A8]"
                rows="4"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                className="bg-[#173E88] text-white text-[16px] px-12 py-[3px] rounded-md hover:bg-blue-700 transition"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLanguage;


// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const EditLanguage = () => {
//   const navigate = useNavigate();

//   const { state } = useLocation();
//   const language = state?.language || { id: null, name: "", description: "" };

//   const [editedLanguage, setEditedLanguage] = useState({
//     id: language.id,
//     name: language.name,
//     description: language.description,
//   });

//   const handleChange = (e) => {
//     setEditedLanguage({
//       ...editedLanguage,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSave = () => {
//     navigate("/language", { state: { updatedLanguage: editedLanguage } });
//   };

//   return (
//     <div className="min-h-screen overflow-hidden flex flex-col">
//       {/* First Layer */}
//       <div className="bg-gradient-to-r from-[#173E88] to-[#5083CD] h-[38px]"></div>

//       <div className="flex flex-1 pt-[2px] pl-[2px] pb-[2px] bg-white">
//         {/* Side Navbar */}
        

//         <div className="flex-1 bg-[#E9F3FC]">
//           {/* Navbar */}
          

//           <div className="max-w-[988px] mx-auto bg-white rounded-3xl  mt-10">
//             {/* Header Section */}
//             <div className="bg-[#94BDEB] rounded-t-3xl">
//               <h2 className="text-[14px] font-medium font-poppins text-#94BDEB text-left px-6 py-2">
//                 Edit and save
//               </h2>
//             </div>

//             {/* Form Section */}
//             <div className="px-14 py-6">
//               <div className="mb-6 text-left">
//                 <label
//                   htmlFor="language"
//                   className="block text-[12px] font-medium text-[#030303] mb-1"
//                 >
//                   Language
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={editedLanguage.name}
//                   onChange={handleChange}
//                   className="w-[250px] h-[35px] px-4 py-2 border border-[#94BDEB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#94BDEB] placeholder:text-[12px] placeholder:text-[#A8A8A8]"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label
//                   htmlFor="description"
//                   className="block text-[12px] font-medium text-[#030303] mb-1 text-left"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={editedLanguage.description}
//                   onChange={handleChange}
//                   className="w-full h-[90px] px-4 py-2 border border-[#94BDEB] placeholder:text-[12px] placeholder:text-[#A8A8A8] rounded-md focus:outline-none"
//                   rows="4"
//                 />
//               </div>

//               {/* Save Button */}
//               <div className="flex justify-end">
//                 <button onClick={handleSave} className="bg-[#173E88] text-white text-[16px] px-12 py-[3px] rounded-md hover:bg-blue-700 transition ">
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditLanguage;
