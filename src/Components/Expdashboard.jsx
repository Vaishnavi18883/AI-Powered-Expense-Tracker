import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Expdashboard = () => {
  return (
    <div>
        <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <div className="flex flex-col flex-1">
          {/* header */}
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold">Expenses Dashboard</h1>
          </header>
          {/* Content */}
          <main className="p-6 flex-1 overflow-y-auto">
            <div className="grid grid-cols-4 gap-3">

              {/* Cards */}
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Total Income</h3>
                <p className="text-2xl mt-2">₹11,000</p>
              </div>

              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Total Expenses</h3>
                <p className="text-2xl mt-2">₹110002</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">Remaining Amount</h3>
                <p className="text-2xl mt-2">₹110002</p>
              </div>


              <div className="flex flex-col p-4 rounded-lg gap-4 w-48">
                <button className="bg-gray-600 text-white py-2 rounded-md 
                     hover:bg-gray-500
                   
                     transition-all duration-300 
                     shadow-md hover:shadow-lg">
                  <Link to={'/add-expenses'}>Add Expense</Link>
                </button>

                <button className="bg-blue-500 text-white py-2 rounded-md 
                     hover:bg-blue-600 
                     transition-all duration-300 
                     shadow-md hover:shadow-lg">
                  <Link to={'/show-all-expenses'}>Show Expenses</Link>
                </button>
              </div>

              <div className='border-2 h-60 w-3xl'>
                graph
              </div>


            </div>
          </main>


        </div>

      </div>
    </div>
  )
}

export default Expdashboard