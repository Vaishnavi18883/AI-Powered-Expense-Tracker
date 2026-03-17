import { useState } from "react";
import{motion} from "framer-motion";  
import Sidebar from "../Components/Sidebar";
import salary from '../assets/Gif/wallet.gif';
import business from '../assets/Gif/agreement.gif';
import investment from '../assets/Gif/investment.gif';
import freelancing from '../assets/Gif/content-creator.gif';
import other from '../assets/Gif/money.gif'
import food from '../assets/Gif/food.gif';
import transport from '../assets/Gif/path.gif';
import entertainment from '../assets/Gif/cinema.gif';
import utilities from '../assets/Gif/electric-power.gif';
import healthcare from '../assets/Gif/healthcare.gif'
import bill from '../assets/Gif/bill.gif'


const Categories = () => {
  const [activeTab, setActiveTab] = useState("income");

  const incomeCategories = [
    { title: "Salary", description: "Monthly income from job.",icon: (<img src={salary} alt="Salary" className="w-8 h-8"/>)},
    { title: "Business", description: "Profit from business.",icon:(<img src={business} alt="Business" className="w-9 h-9"/>)},
    { title: "Investments", description: "Returns from stocks & mutual funds.", icon:(<img src={investment} alt="Investment" className="w-9 h-9"/>)},
    {
    title: "Freelancing",
    description: "Income earned from freelance projects.",
    icon: (<img src={freelancing} alt="Freelancing" className="w-9 h-9"/>)
   
  },
  {
    title: "Other",
    description: "Miscellaneous or other income sources.",
    icon:(<img src={other} alt="Other Income" className="w-9 h-9"/>)
    
  }
  ];

  const expenseCategories = [
  {
    title: "Food",
    description: "Groceries and dining expenses.",
    icon:(<img src={food} alt="Food" className="w-10 h-10"/>)
    
  },
  {
    title: "Transportation",
    description: "Travel, fuel, and commuting costs.",
    icon:(<img src={transport} alt="Transportation" className="w-10 h-10"/>)


    
  },
  {
    title: "Entertainment",
    description: "Movies, outings, and fun activities.",
    icon:(<img src= {entertainment} alt="Entertainment" className="w-9 h-9"/>)
   
  },
  {
    title: "Utilities",
    description: "Electricity, water, internet, etc.",
    icon:(<img src={utilities} alt="Utilities" className="w-9 h-9"/>)
  
  },
  {
    title: "Healthcare",
    description: "Medical and health-related expenses.",
    icon:(<img src={healthcare} alt="Healthcare" className="w-9 h-9"/>)

  },
  {
    title: "Other",
    description: "Miscellaneous expenses.",
    icon:( <img src={bill} alt="Other Expenses" className="w-9 h-9"/>)
    
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
            <span className="flex gap-3">
            <div>{item.icon}</div>

            <h3 className="text-lg font-semibold text-gray-800 ">
              {item.title}
            </h3>
            </span>
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
