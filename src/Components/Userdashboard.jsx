import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Incomeexpense from "../Charts/Incomeexpense";

const Userdashboard = () => {
const expenses = useSelector((state)=> state.expensesdata.expenses);
const totalExpenses = expenses.reduce((total,item)=> total+item.amount,0);
const incomes = useSelector((state)=> state.incomesdata.incomes);
const totalIncome = incomes.reduce((total,item)=> total+ item.amount,0);
const remainingAmt = totalIncome - totalExpenses;








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

  {/* Cards */}
  <div className="grid grid-cols-3 gap-6 mb-6">

    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Total Expenses</h3>
      <p className="text-2xl mt-2">₹{totalExpenses}</p>
    </div>

    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Total Income</h3>
      <p className="text-2xl mt-2">₹{totalIncome}</p>
    </div>

    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Savings</h3>
      <p className="text-2xl mt-2">₹{remainingAmt}</p>
    </div>

  </div>

  {/* Chart Section */}
  <div className="bg-white p-6 rounded shadow">

    <h3 className="text-lg font-semibold mb-4">
      Income vs Expense Overview
    </h3>

    <Incomeexpense 
      incomes={incomes} 
      expenses={expenses} 
    />

  </div>

</main>
      </div>
      
    </div>
  );
};

export default Userdashboard;
