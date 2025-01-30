import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get("http://localhost:5001/employees");
    setEmployees(response.data);
  };

  const deleteEmployee = async (id) => {
    if (window.confirm("Do you want to delete this employee?")) {
      await axios.delete(`http://localhost:5001/employees/${id}`);
      fetchEmployees();
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-10 bg-whitesmoke">
      <div className="flex justify-between mb-4 items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 border-sky-700 w-1/3 rounded-xl shadow-lg focus:outline-none focus:ring-1 focus:ring-sky-900"
        />
        <button
          onClick={() => navigate("/add")}
          className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-900 transition duration-300 shadow-lg"
        >
          Add Employee
        </button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-sky-700 text-white">
            
            <th className="border border-gray-300 p-3">Name</th>
            <th className="border border-gray-300 p-3">Email</th>
            <th className="border border-gray-300 p-3">Phone</th>
            <th className="border border-gray-300 p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id} className="hover:bg-gray-100 transition duration-200">
              
              <td className="border border-gray-300 p-3 text-center">{emp.name}</td>
              <td className="border border-gray-300 p-3 text-center">{emp.email}</td>
              <td className="border border-gray-300 p-3 text-center">{emp.phone}</td>
              <td className="border border-gray-300 p-3 space-x-2 text-center">
                <button
                  onClick={() => navigate(`/view/${emp.id}`)}
                  className="bg-sky-700 text-white px-3 py-1 rounded hover:bg-sky-900 transition duration-300"
                >
                  View
                </button>
                <button
                  onClick={() => navigate(`/edit/${emp.id}`)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-800 transition duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEmployee(emp.id)}
                  className="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
