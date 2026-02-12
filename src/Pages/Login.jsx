import React from "react";
import { Link, Navigate } from "react-router-dom";


const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="bg-gray-200 rounded-xl shadow-xl w-96 p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600/75 dark:text-sky-400/75 mb-6">Login</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-shadow">
           
            Login
          
          </button>
          <p>Don't have account?<Link to = '/register'><span>Register</span></Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
