import { createSlice } from "@reduxjs/toolkit"




const initialState= {
    expenses :[],
}

const expenseSlice = createSlice({
    name : "expensesdata",
    initialState,
    reducers:{
        addExpense: (state,action)=>{
            const newExpense ={
                id: Date.now(),
                ...action.payload
            }
            state.expenses.push(newExpense)
        }
    }
})

export const{addExpense}= expenseSlice.actions;
export default expenseSlice.reducer
