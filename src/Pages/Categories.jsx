import { useState } from "react";
import{motion} from "framer-motion";  
import Sidebar from "../Components/Sidebar";
import { FaMoneyBillWave, FaBriefcase, FaChartLine,FaLaptopCode, FaEllipsisH  } from "react-icons/fa";
import { MdFastfood, MdTravelExplore, MdReceipt,MdLocalMovies,MdHealthAndSafety,MdCategory } from "react-icons/md";


const Categories = () => {
  const [activeTab, setActiveTab] = useState("income");

  const incomeCategories = [
    { title: "Salary", description: "Monthly income from job.",icon: <FaMoneyBillWave className="text-green-500 text-2xl"/>},
    { title: "Business", description: "Profit from business.",icon: <FaBriefcase className="text-blue-500 text-2xl" />},
    { title: "Investments", description: "Returns from stocks & mutual funds.", icon: <FaChartLine className="text-purple-500 text-2xl" /> },
    {
    title: "Freelancing",
    description: "Income earned from freelance projects.",
    icon: <FaLaptopCode className="text-orange-500 text-2xl" />
  },
  {
    title: "Other",
    description: "Miscellaneous or other income sources.",
    icon: <FaEllipsisH className="text-gray-500 text-2xl" />
  }
  ];

  const expenseCategories = [
  {
    title: "Food",
    description: "Groceries and dining expenses.",
    icon: <MdFastfood className="text-red-500 text-2xl" />
  },
  {
    title: "Transportation",
    description: "Travel, fuel, and commuting costs.",
    icon: <MdTravelExplore className="text-indigo-500 text-2xl" />
  },
  {
    title: "Entertainment",
    description: "Movies, outings, and fun activities.",
    icon: <MdLocalMovies className="text-purple-500 text-2xl" />
  },
  {
    title: "Utilities",
    description: "Electricity, water, internet, etc.",
    icon: <MdReceipt className="text-pink-500 text-2xl" />
  },
  {
    title: "Healthcare",
    description: "Medical and health-related expenses.",
    icon: <MdHealthAndSafety className="text-green-500 text-2xl" />
  },
  {
    title: "Other",
    description: "Miscellaneous expenses.",
    icon: <MdCategory className="text-gray-500 text-2xl" />
  }
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
      <div className="grid md:grid-cols-3 gap-4"  
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div>{item.icon}</div>

            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {item.description}
            </p>
            
          </motion.div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Categories;
