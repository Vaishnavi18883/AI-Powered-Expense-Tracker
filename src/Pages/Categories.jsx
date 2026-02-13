import { useState } from "react";
import Sidebar from "../Components/Sidebar";

const Categories = () => {
  const [activeTab, setActiveTab] = useState("income");

  const incomeCategories = [
    { title: "Salary", description: "Monthly income from job." },
    { title: "Freelancing", description: "Projects and contract work." },
    { title: "Business", description: "Profit from business." },
    { title: "Investments", description: "Returns from stocks & mutual funds." },
  ];

  const expenseCategories = [
    { title: "Food", description: "Groceries and dining expenses." },
    { title: "Rent", description: "House rent or accommodation." },
    { title: "Travel", description: "Transport and trip expenses." },
    { title: "Shopping", description: "Clothes, gadgets, etc." },
    { title: "Bills", description: "Electricity, water, internet." },
  ];

  const categories =
    activeTab === "income" ? incomeCategories : expenseCategories;

  return (
    <div>
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        Categories
      </h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6 ">
        <button
          onClick={() => setActiveTab("income")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "income"
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
        >
          Income
        </button>

        <button
          onClick={() => setActiveTab("expense")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "expense"
              ? "bg-indigo-600 text-white"
              : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
          }`}
        >
          Expenses
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Categories;
