import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome} from "../Reducer/Incomeslicer";



const ShowIncome = () => {
  const incomeData = useSelector((state) => state.incomesdata.incomes);
  
console.log(incomeData); 



  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  



 const handleDelete = (id)=>{
  dispatch(deleteIncome(id));

 }




// write a function to handle change in select option and filter the income data based on category and show the filtered data in the UI
 const [filteredData, setFilteredData] = useState(incomeData);
 console.log(filteredData,"filtered data");

 const handleChange = (e)=>{  
  const category = e.target.value;
  if(category === ''){
    setFilteredData(incomeData);
  }
  else{
    const filtered = incomeData.filter((item)=> item.category === category);
    setFilteredData(filtered);
  }
  }


  // write a function to handle change in date and filter the income data based on date and show the filtered data in the UI
 const handleDateChange = (e)=>{
  const date = e.target.value;
  if(date === ''){
    setFilteredData(incomeData);
  }
  else{
    const filtered = incomeData.filter((item)=> item.date === date);
    setFilteredData(filtered);
  }

}


// i want reset filter button to reset the filter and show all the data in the UI
const handleResetFilter = ()=>{
  setFilteredData(incomeData);
}




  




  return (
    <div className="min-h-screen bg-[url('https://c1.wallpaperflare.com/preview/969/336/23/money-finance-business-financial.jpg')] bg-cover bg-center p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Income Overview
        </h1>

        <div className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-md p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Income
            </h2>

           <select
              className="border border-gray-300 rounded-xl p-2 text-sm"
              onChange={handleChange}
            >
              <option value="">All Categories</option>
              {incomeData.map((item) => (
                <option key={item.id} value={item.category}>
                  {item.category}
                </option>
              ))}
            </select>

       <input type="date" onChange={handleDateChange} className="border border-gray-300 rounded-xl p-2 text-sm" />


      {/* reset filter button */}
      <button onClick={handleResetFilter} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl text-sm">
        Reset Filter
      </button>




            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm">
             <Link to='/add-income'> + Add Income</Link>
            </button>
          </div>

          <div className="space-y-4">

            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 2 }}
                transition={{ delay: index * 0.30 }}
                whileHover={{ scale: 1.03 }}
                className="flex justify-between items-center bg-green-50/40 p-4 rounded-xl shadow-sm"
              >

                {/* Left Section */}
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.incomeName}
                  </h3>
                  <span className="text-sm text-gray-600">
                    {item.description}
                  </span>
                  <span className="text-xs text-gray-500 ml-4">
                    {item.date}
                  </span>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">

                  <p className="text-green-600 font-bold text-lg">
                    ₹{item.amount}
                  </p>

                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg"
                      onClick={()=> navigate(`/edit-income/${item.id}`)}
                    >
                      Edit
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg"
                      onClick={()=>handleDelete(item.id)}
                    >
                      Delete
                    </motion.button>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default ShowIncome;
