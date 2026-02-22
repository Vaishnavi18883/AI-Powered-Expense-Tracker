import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteExpense } from "../Reducer/Expenseslicer";

const ShowExpenses = () => {
  const expenseData = useSelector((state) => state.expensesdata.expenses);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id)=>{
    dispatch(deleteExpense(id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        
  
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Expenses Overview
        </h1>

   
        <div className="bg-white rounded-2xl shadow-md p-6">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Expenses
            </h2>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
            onClick={()=>navigate('/add-expenses')}>
              + Add Expense
            </button>
          </div>

         <div className="space-y-4">
  {expenseData.length === 0 ? (
    <p className="text-center text-gray-500 py-6">
      No expenses added yet.
    </p>
  ) : (
    expenseData.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 }}
        whileHover={{ scale: 1.02 }}
        className="flex justify-between items-center bg-red-50 p-4 rounded-xl shadow-sm"
      >
        <div>
          <h3 className="font-semibold text-gray-800">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500">
            {item.description}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-red-600 font-bold text-lg">
            ₹{item.amount}
          </p>

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg"
            >
              Edit
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg"
              onClick={()=> handleDelete(item.id)}
            >
              Delete
            </motion.button>
          </div>
        </div>
      </motion.div>
    ))
  )}
</div>

        </div>
      </div>
    </div>
  )
};

export default ShowExpenses;