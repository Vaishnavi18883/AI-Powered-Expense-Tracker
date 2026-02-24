import { createSlice } from "@reduxjs/toolkit"





const initialState1 ={
    expenses :[]
}

const expenseslice = createSlice({
    name : "expensesdata",
    initialState: initialState1,
    reducers :{
        addExpense : (state,action)=>{
            // console.log( action.payload);
            const newExpense= {
                id: Date.now(),
                ...action.payload
            }
            state.expenses.push(newExpense);
            // console.log( state.expenses);

        },
        deleteExpense : (state,action)=>{
            state.expenses = state.expenses.filter(expense => expense.id!== action.payload);

        },
        editExpense :(state,action)=>{
           const index = state.expenses.findIndex(
            expense => expense.id === action.payload.id);
           if(index !== -1){
            state.expenses[index]= action.payload;
           }
        }
        
    }

})



export const {addExpense, deleteExpense,editExpense} = expenseslice.actions;
export default expenseslice.reducer;