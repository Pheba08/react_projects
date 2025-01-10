import React from 'react';
import adminlogo from '../assets/adminlogo.svg';
import adminthree from '../assets/adminthree.svg';

const Admin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9F3FC]">
      
      {/*Main div*/}
      <div className="bg-[#E9F3FC] w-[1225px] h-[596px] -top-[391px] -left-[500px] opacity-100 grid grid-cols-2">

        {/*Left Section-login Form*/}
        <div className="p-10 flex flex-col justify-between">
          {/* Logo */}
          <img src={adminlogo} alt="Skills Connect Logo" className="w-[196px] mb-8" />

          {/* Welcome Text */}
          <h1 className="text-4xl font-semibold font-poppins text-[#000000] mb-6 leading-snug">
            Hello, <br />
            Welcome to Skills Connect
          </h1>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="block text-sm font-nunito text-gray-700">
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter User Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-nunito text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  👁️
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-[#173E88] text-white py-3 px-6 rounded-lg hover:bg-[#0f2a6d] transition duration-200"
            >
              Log in
            </button>
          </form>
        </div>

        {/* Right Section - Illustration */}
        <div className="flex items-center justify-center p-10">
          <img src={adminthree} alt="Illustration" className="w-[400px]" />
        </div>
      </div>
      

{/* width: 1297px;
height: 979px;
top: 101px;
left: 1133px;
gap: 0px;
opacity: 0px;
 */}
    </div>
  );
};



export default Admin;



 {/* <div className="bg-white shadow-lg rounded-lg flex overflow-hidden">

  


  <form className="space-y-4">
  <div className="w-[420px] h-[220px] top-[388px] gap-0 opacity-100">
      <label className="w-[71px] height-[19px] top-[388px] left-[16px] gap-0px opacity-0px font-Nunito font-size:14px font-weight: 400 line-height: 19.1px text-align: left text-underline-position: from-font text-decoration-skip-ink: none block text-gray-700 background: #030303">User Name</label>
      <input
        type="text"
        placeholder="Enter User Name"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div>
      <label className="block text-gray-700">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <label className="text-gray-700">Remember me</label>
      </div>
      <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
    >
      Log In
    </button>
  </form>
</div>


<div className="hidden md:flex items-center justify-center bg-blue-50 w-96 w-[1297px] h-[979px] top-[101px] left-[1133px] gap-0 opacity-0">
<div className="p-10">
<img
src={}
alt="Illustration"
className="w-full"
/>
</div>
</div>

</div> */}

