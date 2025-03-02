import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    loggedin:false,
    user:{
        first_name:''
    }
}

export const userData =createSlice({
    name:'userData',
    initialState,
    reducers:{
        login:(state,action) => {

        },
        logout: () => {

        }
    }
})

export const {login, logout} = userData.actions

export default userData.reducer