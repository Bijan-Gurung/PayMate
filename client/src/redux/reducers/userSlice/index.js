import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token:''
  };

const UserSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        changeToken:(state,action)=>{
            return{
                ...state,
                token: action.payload
            }
        },
        resetUser:(state,action)=>{
            return {...initialState}
        }
    }
})

export const {changeToken,resetUser} = UserSlice.actions;
export default UserSlice.reducer;

