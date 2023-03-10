import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/DashboardScreens/Home";
import LogIn from "../screens/logIn";
import Product from "../screens/Product";
import SignUp from "../screens/signUp";


function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='dashboard/*' element={<Dashboard />} />
                <Route path='product' element={<Product />} />
                <Route path="/" element={<SignUp />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;