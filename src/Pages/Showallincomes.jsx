import React from "react";
import { motion } from "framer-motion";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome, editIncome } from "../Reducer/Incomeslicer";



const ShowIncome = () => {
  const incomeData = useSelector((state) => state.incomesdata.incomes);
 const dispatch = useDispatch();
 const navigate = useNavigate();


 const handleDelete = (id)=>{
  dispatch(deleteIncome(id));

 }
 const handleEdit =(id,Updatedata)=>{
  dispatch(editIncome({id,...Updatedata}))

 }
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Income Overview
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Income
            </h2>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm">
             <Link to='/add-income'> + Add Income</Link>
            </button>
          </div>

          <div className="space-y-4">

            {incomeData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 2 }}
                transition={{ delay: index * 0.30 }}
                whileHover={{ scale: 1.03 }}
                className="flex justify-between items-center bg-green-50 p-4 rounded-xl shadow-sm"
              >

                {/* Left Section */}
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.incomeName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
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
