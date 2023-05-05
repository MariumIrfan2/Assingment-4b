import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../Reducer/LoginSlice";
import SignUpSlice from "../Reducer/SignUpSlice";
import CartSlice from "../Reducer/CartSlice.js";

const store = configureStore({
    reducer: {
        Login: LoginSlice,
        SignUp: SignUpSlice,
        Cart: CartSlice,
    }
});

export default store;