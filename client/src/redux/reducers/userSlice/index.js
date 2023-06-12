import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  toekn:""
  };

const UserSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        changeToken:(state,action)=>{
            state.token = action.payload.token
        }
    }
})

export const {changeToken} = UserSlice.actions;
export default UserSlice.reducer;

