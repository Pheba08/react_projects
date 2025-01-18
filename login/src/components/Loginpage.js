import React, { useState, useContext } from "react";
import adminlogo from "../assets/adminlogo.svg";
import adminthree from "../assets/adminthree.svg";
import eyebutton from "../assets/eyebutton.svg";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router";

const users = [
  { username: "admin1@gmail.com", password: "12345678" },
  { username: "admin2@gmail.com", password: "012345678" },
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setUsername } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkUser = () => {
    const usercheck = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (usercheck) {
      setUsername(data.username);
      localStorage.setItem("username", data.username); // Save to local storage

      navigate("/home");
    } else {
      setError("Incorrect username or password. Please try again.");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      setError("Both fields are required");
    } else if (!validateEmail(data.username)) {
      setError("Please enter a valid email address");
    } else {
      checkUser();
    }
  };

  return (
    <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row md:justify-between ">
      <div className="w-1/2">
        <img
          src={adminlogo}
          alt="Skills Connect Logo"
          className="w-[200px] h-[100px] pt-5 mb-8 pl-12"
        />
        <h1 className="text-2xl font-bold font-family-poppins text-[#000000] leading-snug text-left pt-1 pl-12">
          Hello, <br />
          Welcome to Skills Connect
        </h1>

        <form className="space-y-6 pl-12" onSubmit={handleSubmit}>
          <div className="space-y-2 pt-8">
            <label className="block text-sm font-nunito text-#030303 text-justify pl-3">
              User Name
            </label>
            <input
              type="text"
              name="username"
              value={data.username}
              placeholder="Enter User Name"
              onChange={changeHandler}
              className="w-[198px] pl-3 border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] focus:outline-none focus:ring-2 focus:ring-blue-500 absolute left-12 text-sm"
            />
          </div>

          <div className="space-y-2 pt-8">
            <label className="block text-sm font-nunito text-[#030303] text-justify pl-3">
              Password
            </label>
            <div className="relative w-[200px]">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={data.password}
                placeholder="Enter Password"
                onChange={changeHandler}
                className="w-full pl-3 pr-10 border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <img
                  src={eyebutton}
                  alt="Eye Button"
                  className="w-[15px] h-[15px]"
                />
              </button>
            </div>
          </div>

          <div className="relative flex items-center gap-x-8 -top-4">
            <label className="flex items-center gap-x-2 ">
              <input type="checkbox" className="form-checkbox text-[#030303]" />
              <span className="text-[10px] text-[#030303]">Remember me</span>
            </label>
            <Link
              to="/forgotpassword"
              className="text-[10px] text-[#030303] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Error Message */}
          {error && (
            <div className="absolute top-[390px] text-red-500 text-[10px]">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-[82px] h-[34px] bg-[#173E88] text-white rounded-lg font-family-Nunito text-[12px] float-start"
          >
            Log in
          </button>
        </form>
      </div>

      <div className="h-full">
        <img
          src={adminthree}
          alt="Illustration"
          className="w-screen h-screen pt-[70px] pl-[128px]"
        />
      </div>
    </div>
  );
};

export default LoginPage;
