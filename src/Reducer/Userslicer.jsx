import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

const userSlice = createSlice({
    name: "userdata",
    initialState,
    reducers:{
        registerUser : (state, action)=>{
       state.users.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));

        }
    }
    
})

export const{registerUser}= userSlice.actions;
export default userSlice.reducer;
