import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../screens/Dashboard";
import LogIn from "../../screens/logIn";
import SignUp from "../../screens/signUp";
import Home from "../../screens/Home";
import Products from "../../screens/Products/Products";
import Cart from "../../screens/Products/Cart";



function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='dashboard/*' element={<Dashboard />} />
                <Route path="login" element={<LogIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="products" element={<Products />} />
                <Route path="Cart" element={<Cart />} />
              
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;