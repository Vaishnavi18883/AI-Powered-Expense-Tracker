import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../Reducer/Userslicer'

const Register = () => {
  const dispatch = useDispatch();
 const register = useSelector((state)=>state.userdata.users) 
 console.log(register);
 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [message, setMessage] = useState("")

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = register.some((user) => user.email === formData.email);
    if (isDuplicate) {
      setMessage("Email already registered!");
      return;
    }

    
    dispatch(registerUser(formData));
    setMessage("Registerd succesfully..!")
    setFormData({
      username:"",
      email:"",
      password:""
    })

  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-blue-50">
        <div className="bg-gray-200 rounded-xl shadow-xl w-96 p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600/75 dark:text-sky-400/75 mb-6">Register</h2>

          <form className="flex flex-col gap-4"
            onSubmit={handleSubmit}>
            <input
              type="text"
              name='username'
              placeholder="Username"
              value={formData.username}
              onChange={handleInput}
              className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
            />
            <input
              type="email"
              name='email'
              placeholder="Email"
              value={formData.email}
              onChange={handleInput}
              className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
            />
            <input
              type="password"
              name='password'
              placeholder="Password"
              value={formData.password}
              onChange={handleInput}
              className="w-full px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:scale-105"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-shadow">
              Register
            </button>
            <p>Already have account? <Link to='/login'><span>Login</span></Link></p>
          </form>
          {message && (
            <p className="text-green-600 text-center">{message}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Register