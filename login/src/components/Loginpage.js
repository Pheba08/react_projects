import React, { useState, useContext } from "react";
import adminlogo from "../assets/adminlogo.svg";
import adminthree from "../assets/adminthree.svg";
import eyebutton from "../assets/eyebutton.svg";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const dummyData = {
  users: [
    {
      username: "admin1@gmail.com",
      password: "111",
      tiles: [
        "master data management",
        "login Authorization",
        "question creation",
        "question bank review",
        "valuation",
        "pack management",
        "collection view",
      ],
    },
    {
      username: "admin2@gmail.com",
      password: "222",
      tiles: [
        "master data management",
        "login Authorization",
        "question creation",
        "question bank review",
        "valuation",
        "pack management",
      ],
    },
    {
      username: "admin3@gmail.com",
      password: "333",
      tiles: [
        "master data management",
        "login Authorization",
        "question creation",
        "question bank review",
        "valuation",
      ],
    },
    {
      username: "admin4@gmail.com",
      password: "444",
      tiles: [
        "master data management",
        "login Authorization",
        "question creation",
        "question bank review",
      ],
    },
    {
      username: "admin5@gmail.com",
      password: "555",
      tiles: [
        "master data management",
        "login Authorization",
        "question creation",
      ],
    },
    {
      username: "admin6@gmail.com",
      password: "666",
      tiles: ["master data management", "login Authorization"],
    },
    {
      username: "admin7@gmail.com",
      password: "777",
      tiles: ["master data management"],
    },
  ],
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setUsername } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userData, setUserData] = useState(dummyData);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkUser = () => {
    const usercheck = userData.users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (usercheck) {
      setUsername(data.username);
      navigate("/homepage", { state: { userData: usercheck } }); // Pass the current user data as state
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
    <div className="bg-[#E9F3FC] w-full h-full flex flex-col md:flex-row md:justify-between overflow-hidden">
      <div className="w-1/2">
        <img
          src={adminlogo}
          alt="Skills Connect Logo"
          className="w-[200px] h-[100px] pt-5 mb-8 pl-12"
        />
        <h1 className="text-3xl font-bold font-family-poppins text-[#000000] text-left pt-1 pl-12">
          Hello, <br />
          Welcome to Skills Connect
        </h1>

        <form className="space-y-6 pl-12" onSubmit={handleSubmit}>
          <div className="space-y-1 pt-8">
            <label className="block text-sm font-nunito text-#030303 text-justify pl-3">
              User Name
            </label>
            <input
              type="text"
              name="username"
              value={data.username}
              placeholder="Enter User Name"
              onChange={changeHandler}
              className="w-[252px] pl-3 border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] focus:outline-none focus:ring-2 focus:ring-blue-500 absolute left-12 text-sm"
            />
          </div>

          <div className="space-y-1 pt-8">
            <label className="block text-sm font-nunito text-[#030303] text-justify pl-3">
              Password
            </label>
            <div className="relative w-[246px]">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={data.password}
                placeholder="Enter Password"
                onChange={changeHandler}
                className="w-[252px] pl-3 pr-10 border rounded-md border-[#A8A8A8] bg-transparent text-gray-900 placeholder-[#A8A8A8] focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="button"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500"
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

          <div className="relative flex items-center gap-x-24 -top-4">
            <label className="flex items-center gap-x-1 ">
              <input
                type="checkbox"
                className="form-checkbox w-3 h-3 border border-[#A8A8A8] rounded-[3px] bg-transparent checked:bg-[#173E88] checked:border-transparent focus:outline-none"
              />
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
            className="w-[86px] h-[34px] bg-[#173E88] text-white rounded-lg font-family-Nunito text-[12px] float-start"
          >
            Log in
          </button>
        </form>
      </div>

      <div className="min-h-screen flex justify-center items-center ">
        <img
          src={adminthree}
          alt="Illustration"
          className="w-full h-full max-w-screen-lg pt-3"
        />
      </div>
    </div>
  );
};

export default LoginPage;
