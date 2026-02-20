import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        expensesdata : expenseSlice.reducer

    },
    preloadedState: loadstate() 


});
store.subscribe(()=>{
    savestate(store.getState())
})
export default Expensestore;
