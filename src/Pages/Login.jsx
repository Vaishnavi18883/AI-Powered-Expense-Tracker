import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const users = useSelector((state)=>state.userdata.users)
  const navigate = useNavigate();

  const [formData,setFormData]= useState({
    username : "",
    password:""
  })

  const [message,setMessage]= useState("")

  const handleInput = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const validUser = users.find(
      (user)=>
        user.username === formData.username &&
        user.password === formData.password
    )

    if(validUser){
      setMessage("Login Successful!")
      navigate("/userdashboard")
    }else{
      setMessage("Invalid Username or Password")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">

      <div className="bg-gray-200 rounded-xl shadow-xl w-96 p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInput}
            placeholder="Username"
            className="w-full px-3 py-2 rounded border border-gray-400"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            placeholder="Password"
            className="w-full px-3 py-2 rounded border border-gray-400"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>

          <p>
            Don't have account?{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </p>

        </form>

        {message && (
          <p className="text-center text-green-600 mt-4">
            {message}
          </p>
        )}

      </div>

    </div>
  );
};

export default Login;