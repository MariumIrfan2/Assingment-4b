import { createSlice } from '@reduxjs/toolkit'
import React from 'react';



const SignUpSlice = createSlice({
    name: "SignUp",
    initialState: {  },
    reducers: {
        add(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
         },
        del() { }
    },
})



export const { add, del } = SignUpSlice.actions;
export default SignUpSlice.reducer