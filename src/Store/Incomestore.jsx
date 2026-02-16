import { configureStore } from "@reduxjs/toolkit";
import incomestoreReducer from "../Reducer/Incomeslicer";




const loadstate = () => {
    try{
        const loadfromlocalstorage = localStorage.getItem("incomes");
        if(loadfromlocalstorage===null)return undefined;


        return { incomesdata: 
            { incomes: JSON.parse(loadfromlocalstorage) } };
    }
    catch (error){
        return undefined;
    }

    
}

const savestate = (state)=>{
    try{
        const savetolocalstorage = JSON.stringify(state.incomesdata.incomes);
        localStorage.setItem("incomes", savetolocalstorage);

    }catch(error){
        console.error("Error to save", error);

    }
}

const store = configureStore({
    reducer: {
        incomesdata: incomestoreReducer
    },
    preloadedState: loadstate()
})

store.subscribe(()=>{
    savestate(store.getState());
})

export default store;