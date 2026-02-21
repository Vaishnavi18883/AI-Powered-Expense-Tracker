import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addExpense } from '../Reducer/Expenseslicer';

const Addexp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const categories = [
        "Food",
        "Transportation",
        "Entertainment",
        "Utilities",
        "Healthcare",
        "Other",
    ];
    const [formData,setFormData]= useState({
        name: '',
        description: '',
        category: '',
        amount: 0
    });


    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
       

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addExpense({
            ...formData,
            amount:Number(formData.amount)
        }))
            navigate('/expenselist');
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-[url('https://png.pngtree.com/background/20250203/original/pngtree-dollar-sign-blue-money-bag-and-coin-bussiness-background-picture-image_15843391.jpg')] bg-cover bg-center relative px-4">

                <div className="w-full max-w-md bg-white/30 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-blue-100 transition-all duration-300 hover:scale-[1.01]">

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                        <h2 className="text-2xl font-bold text-blue-700 text-center">
                            Add Expenses
                        </h2>
                        <label className="text-sm font-medium text-white">
                            Expense Name
                        </label>
                        <input
                            type="text"
                            placeholder="Expense Name"
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-current-color"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                   

                        <label className="text-sm font-medium text-white">
                            Description
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-current-color"
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <label className='text-sm font-medium text-white'>
                            Category
                        </label>
                        
                        <select className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-current-color"
                        name='category'
                        value={formData.category}
                        onChange={handleChange}
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        <label className="text-sm font-medium text-white">
                            Amount
                        </label>
                        <input
                            type="number"
                            placeholder="Amount"
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-current-color"
                            name='amount'
                            value={formData.amount}
                            onChange={handleChange}
                        />

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                className="px-5 py-2 rounded-lg border border-blue-400 text-blue-500 hover:bg-blue-100 transition"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition"
                            >
                                Create
                            </button>
                        </div>

                    </form>
                           <p>
                            {formData.name},
                            {formData.description},
                            {formData.category},
                            {formData.amount}
                           </p>
                </div>
              

            </div>
        </div>
    )
}

export default Addexp;