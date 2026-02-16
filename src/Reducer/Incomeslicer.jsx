import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    incomes: [],
}

const incomeSlice = createSlice({
    name: "incomesdata",
    initialState,
    reducers: {
        addIncome: (state, action) => {
            const newIncome = {
                id: Date.now(),
                ...action.payload
            }
            state.incomes.push(newIncome);
        },
        deleteIncome: (state, action) => {
        state.incomes = state.incomes.filter(income => income.id !== action.payload);
        },
        editIncome : (state,action)=>{
            const index = state.incomes.findIndex(income =>income.id===action.payload.id);
            if(index !== -1){
                state.incomes[index]= action.payload;
            }
        }
    }
});

export const { addIncome, deleteIncome,editIncome} = incomeSlice.actions;
export default incomeSlice.reducer;
