import { createSlice } from '@reduxjs/toolkit'
import React from 'react';



const ProductSlice = createSlice({
    name: "Product",
    initialState: { dummyData: "ABC", },
    reducers: {
        add(state, action) {
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.title = action.payload.title;
        },
        del() { }
    },
})



export const { add, del } = ProductSlice.actions;
export default ProductSlice.reducer