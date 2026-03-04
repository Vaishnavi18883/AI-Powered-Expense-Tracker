import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteExpense } from "../Reducer/Expenseslicer";

const ShowExpenses = () => {
  const expenseData = useSelector((state) => state.expensesdata.expenses);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  }
  // const handleEdit = (id, Updatedata) => {
  //   dispatch(editExpense({ id, ...Updatedata }))
  // }

  const [filteredData, setFilteredData] = useState(expenseData);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
//   useEffect(() => {
//   setFilteredData(expenseData);
// }, [expenseData]);
console.log(filteredData, "filtered data");
  const handleChange = (e)=>{
    const category = e.target.value;
    setCategoryFilter(category);
    if(category === ''){
      setFilteredData(expenseData);
    }
    else{
      const filtered = expenseData.filter((item)=>item.category === category);
      setFilteredData(filtered)
    }

  }  

  const  handleDateChange = (e)=>{
    const date = e.target.value;
    setDateFilter(date);
    if(date === ''){
      setFilteredData(expenseData);
    }
    else{
      const filtered = expenseData.filter((item)=> item.date === date);
      setFilteredData(filtered);
    }

  }

 const handleResetFilter = () => {
  setCategoryFilter('')
  setDateFilter('')
  setFilteredData(expenseData);
 }


    
  

  return (
    <div className="min-h-screen bg-[url('https://img.freepik.com/premium-photo/personal-expenses-concept-financial-analysis-background-golden-coins-pile-icons_488220-465.jpg?w=2000')] bg-cover bg-center p-6">
      <div className="max-w-5xl mx-auto">


        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Expenses Overview
        </h1>


        <div className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-md p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Expenses
            </h2>
              <select onChange={handleChange} 
              value={categoryFilter}
              className="border border-gray-300 rounded-xl p-2 text-sm">      
              <option value="">All Categories</option>
              {expenseData.map((item)=>(
                <option key={item.id} value={item.category}>
                  {item.category}
                  </option>
               ))}
              </select>
              <input type= 'date' 
              value={dateFilter}
              onChange={handleDateChange}
              className="border border-gray-300 rounded-xl p-2 text-sm"/>
              

              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl text-sm"
              onClick={handleResetFilter}>
                Reset Filter
              </button>

            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
              onClick={() => navigate('/add-expenses')}>
              + Add Expense
            </button>
          </div>

          <div className="space-y-4">
            {filteredData.length === 0 ? (
              <p className="text-center text-gray-500 py-6">
                No expenses added yet.
              </p>
            ) : (
              filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center bg-red-50/40 p-4 rounded-xl shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {item.description}
                    </span>
                    <span className="text-xs text-gray-400 ml-4">
                      {item.date}
                    </span>
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
                        onClick={() => navigate(`/edit-expenses/${item.id}`)}
                      >
                        Edit
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg"
                        onClick={() => handleDelete(item.id)}
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