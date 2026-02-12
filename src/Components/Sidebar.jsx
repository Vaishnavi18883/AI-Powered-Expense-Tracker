import React from 'react'

const Sidebar = () => {
  return (
    <div>
           {/* Sidebar  */}
      <aside className="w-64 min-h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Expenses</li>
          <li className="hover:text-gray-300 cursor-pointer">Income</li>
          <li className="hover:text-gray-300 cursor-pointer">Categories</li>
          <li className="hover:text-gray-300 cursor-pointer">Distribution</li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar