import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>


      Home
      
        <button><Navigate to="/register"></Navigate>Get Started</button>
    </div>
  )
}

export default Home