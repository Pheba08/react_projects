import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#E9F3FC] grid items-center justify-center">
      
      <div className="grid grid-cols-[85%_15%] gap-1">
        {/* first column */}
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <h1 className="text-[16px] font-bold text-black text-left">
            Choose to get started
            <br /> with your role
          </h1>
          <div className="bg-white shadow rounded w-[175px] h-[185px]">Card 1</div>
          <div className="bg-white shadow rounded w-[175px] h-[185px]">Card 2</div>
          <div className="bg-white shadow rounded w-[175px] h-[185px]">Card 3</div>
          <div className="bg-white shadow rounded w-[175px] h-[185px]">Card 4</div>
          <div className="bg-white shadow rounded w-[175px] h-[185px]">Card 5</div>
          <div className="bg-white shadow rounded w-[175px] h-[185px]">Card 6</div>
          <div className="bg-white shadow rounded w-[175px] h-[185px]">Card 7</div>
        </div>

        {/* second column */}
        <div className="grid pl-[50px] items-end lg:grid-row-1 md:grid-row-1 sm:grid-row-1">
          <button className="px-6 py-3 bg-[#173E88] text-white rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
