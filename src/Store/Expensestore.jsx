import { configureStore } from "@reduxjs/toolkit";
import expensestoreReducer from "../Reducer/Expenseslicer";                                                                                     



const loadstate =()=>{
    try{
        const loadfromlocalstorage = localStorage.getItem("expenses");
        if(loadfromlocalstorage === null) return undefined;

        return { expensesdata:
             { expenses: JSON.parse(loadfromlocalstorage) } };
    }catch(error){
        return undefined;
    }
}



const savestate = (state)=>{
    try{
        const savetolocalstorage = JSON.stringify(state.expensesdata.expenses);
        localStorage.setItem("expenses", savetolocalstorage);
    }catch(error){
        console.log("Error to save",error);
    }
}

const store = configureStore({
    reducer:{
        expensesdata : expensestoreReducer
    },
    preloadedState: loadstate()
})

store.subscribe(()=>{
    savestate(store.getState());
})

export default store;
