import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token:''
  };

const UserSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        changeToken:(state,action)=>{
            state.token = action.payload.token
        },
        resetUser:(state,action)=>{
            return {...initialState}
        }
    }
})

export const {changeToken,resetUser} = UserSlice.actions;
export default UserSlice.reducer;

