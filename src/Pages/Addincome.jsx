import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addIncome } from '../Reducer/Incomeslicer';

const Addincome = () => {
    const dispatch = useDispatch();
    const categories = [
        "Salary",
        "Freelancing",
        "Business",
        "Investments",
        "Other",
    ];

    const [formData, setFormData] = useState({
        incomeName: "",
        description: "",
        category: "",
        amount: ""
    })
      const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addIncome({
            ...formData,
            amount: Number(formData.amount)
        }));

    }

//   console.log(formData);
  
   
    
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/074/778/946/small/declining-income-represented-by-stacked-coins-on-wooden-blocks-spelling-income-against-a-neutral-background-symbolizing-financial-loss-economic-downturn-and-reduced-earnings-with-a-somber-mood-free-photo.jpg')] bg-cover bg-center relative px-4">

                <div className="w-full max-w-md bg-white/30 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-blue-100">

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                        <h2 className="text-2xl font-bold text-blue-700 text-center">
                            Add Income
                        </h2>
                        <label className="text-sm font-medium text-white" >
                            Income Name
                        </label>
                        <input
                            type="text"
                            placeholder="Income Name"
                            name='incomeName'
                            value={formData.incomeName}
                            onChange={handleChange}
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label className="text-sm font-medium text-white">
                            Description
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            value={formData.description}
                            name="description"
                            onChange={handleChange}
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <label className="text-sm font-medium text-white">
                            Category
                        </label>

                        <select
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                        <label className="text-sm font-medium text-white">
                            Amount
                        </label>
                        <input
                            type="number"
                            placeholder="Amount"
                            value={formData.amount}
                            name="amount"
                            onChange={handleChange} 
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                className="px-5 py-2 rounded-lg border border-blue-400 text-blue-600 hover:bg-blue-100 transition"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                Create
                            </button>
                        </div>

                    </form>
                    <p>{formData.incomeName},
                        {formData.description},
                        {formData.category},
                        {formData.amount}</p>

                </div>

            </div>
        </div>
    )
}


export default Addincome;
