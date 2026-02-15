import { configureStore } from "@reduxjs/toolkit";
import incomestoreReducer from "../Reducer/Incomeslicer";

const store = configureStore({
    reducer: {
        incomestore: incomestoreReducer
    }
})

export default store;