import { configureStore } from "@reduxjs/toolkit";
import incomestoreReducer from "../Reducer/Incomeslicer";
import expensestoreReducer from "../Reducer/Expenseslicer";
import userstoreReducer from '../Reducer/Userslicer'
const loadstate = () => {
    try{
       const incomesfromlocalstorage = localStorage.getItem("incomes");
       const expensesfromlocalstorage = localStorage.getItem("expenses");
       const usersfromlocalstorage = localStorage.getItem('users')
       return {
        incomesdata:{
            incomes : incomesfromlocalstorage ? JSON.parse(incomesfromlocalstorage) : []
        },
        expensesdata:{
            expenses : expensesfromlocalstorage ? JSON.parse(expensesfromlocalstorage) : []

        },
        userdata:{
            users : usersfromlocalstorage? JSON.parse(usersfromlocalstorage):[]
        },
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
       localStorage.setItem(
        "users",
        JSON.stringify(state.userdata.users)
       )

    }catch(error){
        console.error("Error to save", error);

    }
}

const store = configureStore({
    reducer: {
        incomesdata: incomestoreReducer,
        expensesdata: expensestoreReducer,
        userdata: userstoreReducer,
    },
    preloadedState: loadstate()
})

store.subscribe(()=>{
    savestate(store.getState());
})

export default store;