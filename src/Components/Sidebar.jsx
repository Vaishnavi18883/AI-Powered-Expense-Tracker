import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
           {/* Sidebar  */}
      <aside className="w-64 min-h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6"><Link to={'/userdashboard'}>Dashboard</Link></h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer"><Link to={'/'}>Home</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to={'/expenesdashboard'}>Expenses</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to={'/incomedashboard'}>Income</Link></li>
          <li className="hover:text-gray-300 cursor-pointer"><Link to={'/categories'}>Categories</Link></li>
        
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar