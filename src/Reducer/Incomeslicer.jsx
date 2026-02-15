import { createSlice } from "@reduxjs/toolkit";




const incomeSlice = createSlice({
    name: "income",
    initialState: [],
    reducers: {
        addIncome: (state, action) => {
            const newIncome = {
                id: Date.now(),
                ...action.payload
            }
            state.income.push(newIncome);
        }
    }
});


export const {addIncome} = incomeSlice.actions;

export default incomeSlice.reducer; 