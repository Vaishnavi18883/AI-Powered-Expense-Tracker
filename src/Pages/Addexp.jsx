import React from 'react'

const Addexp = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-[url('https://png.pngtree.com/background/20250203/original/pngtree-dollar-sign-blue-money-bag-and-coin-bussiness-background-picture-image_15843391.jpg')] bg-cover bg-center relative px-4">

                <div className="w-full max-w-md bg-white/30 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-blue-100 transition-all duration-300 hover:scale-[1.01]">

                    <form className="flex flex-col gap-5">

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
                        />
                   

                        <label className="text-sm font-medium text-white">
                            Description
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-current-color"
                        />
                        <label className="text-sm font-medium text-white">
                            Amount
                        </label>
                        <input
                            type="number"
                            placeholder="Amount"
                            className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-current-color"
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
                </div>

            </div>
        </div>
    )
}

export default Addexp;