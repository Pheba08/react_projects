import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import adminlogoWhite from "../assets/adminlogoWhite.svg";

const menuItems = [
  { name: "Qualification", path: "/master" },
  { name: "Language", path: "/language" },
  { name: "Gender", path: "/gender" },
  { name: "Grade", path: "/grade" },
  { name: "Category", path: "/category" },
  { name: "Subject", path: "/subject" },
  { name: "Topic", path: "/topic" }, 
  { name: "Role Management", path: "/rolemanagement" },
];

const SideNavMaster = () => {
  const location = useLocation();

  return (
    <div className="flex p-[2px] ">
      {/* Sidebar */}
      <aside className="w-[200px] bg-[#173E88] text-white h-[calc(100vh-42px)] rounded-tr-3xl rounded-br-3xl">
        <div className="p-3">
          <img
            src={adminlogoWhite}
            alt="Skills Connect Logo"
            className="w-[150px] h-[15px]"
          />
          <div className="h-[1px] bg-[#2152AF] w-full my-3"></div>
          <div className="bg-white rounded-2xl px-4 py-[5px] inline-block">
            <h3 className="text-[12px] text-[#173E88] font-poppins font-semibold mb-0">
              Master Data Management
            </h3>
          </div>
          <nav role="navigation" aria-label="Sidebar Menu" className="pt-4">
            <ul className="space-y-1 text-left pl-6 w-full">
              {menuItems.map((item, index) => (
                <li key={index} className="w-full">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-[12px] cursor-pointer px-4 py-[5px] before:content-['-'] before:mr-[18px] transition-all rounded-l-2xl w-full block ${
                        location.pathname.startsWith(item.path)
                          ? "bg-[#94BDEB] text-[#173E88]"
                          : "hover:bg-[#94BDEB] hover:text-[#173E88]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default SideNavMaster;
