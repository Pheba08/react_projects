import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentsList = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-[#E9F3FC] w-full h-screen flex flex-col md:flex-row overflow-hidden">
      <h1>StudentsList</h1>
    </div>
  );
};

export default StudentsList;