import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome } from "../Reducer/Incomeslicer";

const ShowIncome = () => {
  const incomeData = useSelector((state) => state.incomesdata.incomes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => dispatch(deleteIncome(id));

  // Filters
  const [filteredData, setFilteredData] = useState(incomeData);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Category filter
  const handleChange = (e) => {
    const category = e.target.value;
    setCategoryFilter(category);
    let filtered = category ? incomeData.filter((item) => item.category === category) : incomeData;
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Date filter
  const handleDateChange = (e) => {
    const date = e.target.value;
    setDateFilter(date);
    let filtered = date ? incomeData.filter((item) => item.date === date) : incomeData;
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Reset filter
  const handleResetFilter = () => {
    setFilteredData(incomeData);
    setCategoryFilter("");
    setDateFilter("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[url('https://c1.wallpaperflare.com/preview/969/336/23/money-finance-business-financial.jpg')] bg-cover bg-center p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Income Overview</h1>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-md p-6">
          {/* Filters */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <h2 className="text-xl font-semibold text-gray-800">Recent Income</h2>

            <select
              type="button"
              className="border border-gray-300 rounded-xl p-2 text-sm focus:outline-none focus:ring-0 appearance-none"
              onChange={handleChange}
              value={categoryFilter}
            >
              <option value="">All Categories</option>
              {incomeData.map((item) => (
                <option key={item.id} value={item.category}>
                  {item.category}
                </option>
              ))}
            </select>

            <input
              type="date"
              className="border border-gray-300 rounded-xl p-2 text-sm focus:outline-none focus:ring-0 appearance-none"
              onChange={handleDateChange}
              value={dateFilter}
            />

            <button
              type="button"
              onClick={handleResetFilter}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-0"
            >
              Reset Filter
            </button>

            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-0"
            >
              <Link to="/add-income">+ Add Income</Link>
            </button>
          </div>

          {/* Income List */}
          <div className="space-y-4">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 2 }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="flex justify-between items-center bg-green-50/40 p-4 rounded-xl shadow-sm"
              >
                {/* Left */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.incomeName}</h3>
                  <span className="text-base text-gray-500">{item.category}</span>
                  <span className="text-xs text-gray-400 ml-4">{item.date}</span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-6">
                  <p className="text-green-600 font-bold text-lg">₹{item.amount}</p>

                  <div className="flex gap-2">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-0 appearance-none"
                      onClick={() => navigate(`/edit-income/${item.id}`)}
                    >
                      Edit
                    </motion.button>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg focus:outline-none focus:ring-0 appearance-none"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              type="button"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded-lg focus:outline-none focus:ring-0 appearance-none"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 rounded-lg focus:outline-none focus:ring-0 appearance-none ${
                  currentPage === index + 1 ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded-lg focus:outline-none focus:ring-0 appearance-none"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowIncome;