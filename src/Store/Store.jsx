import { configureStore } from "@reduxjs/toolkit";
import incomestoreReducer from "../Reducer/Incomeslicer";
import expensestoreReducer from "../Reducer/Expenseslicer";
const loadstate = () => {
    try{
       const incomesfromlocalstorage = localStorage.getItem("incomes");
       const expensesfromlocalstorage = localStorage.getItem("expenses");
       return {
        incomesdata:{
            incomes : incomesfromlocalstorage ? JSON.parse(incomesfromlocalstorage) : []
        },
        expensesdata:{
            expenses : expensesfromlocalstorage ? JSON.parse(expensesfromlocalstorage) : []
        }
       }
    }
    catch (error){
        return undefined;
    }

    
}

const savestate = (state)=>{
    try{
       localStorage.setItem(
        "incomes",
        JSON.stringify(state.incomesdata.incomes)
       )
       localStorage.setItem(
        "expenses",
        JSON.stringify(state.expensesdata.expenses)
       )

    }catch(error){
        console.error("Error to save", error);

    }
}

const store = configureStore({
    reducer: {
        incomesdata: incomestoreReducer,
        expensesdata: expensestoreReducer
    },
    preloadedState: loadstate()
})

store.subscribe(()=>{
    savestate(store.getState());
})

export default store;