import { createSlice } from '@reduxjs/toolkit'
import React from 'react';


const loginSlice = createSlice({
    name: "Login",
    initialState: { },
    reducers: {
        add(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
         },
        del() { }
    },
})



export const { add, del } = loginSlice.actions;
export default loginSlice.reducer


