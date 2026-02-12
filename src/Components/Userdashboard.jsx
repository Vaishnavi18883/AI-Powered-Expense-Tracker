import React from "react";
import Sidebar from "./Sidebar";

const Userdashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">

    <Sidebar/>

      {/* Main Section */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">User Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="p-6 flex-1 overflow-y-auto">
          <div className="grid grid-cols-3 gap-6">

            {/* Cards */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Total Expenses</h3>
              <p className="text-2xl mt-2">₹12,000</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">This Month</h3>
              <p className="text-2xl mt-2">₹4,500</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Savings</h3>
              <p className="text-2xl mt-2">₹7,500</p>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
};

export default Userdashboard;
