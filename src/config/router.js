import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import LogIn from "../screens/logIn";
import SignUp from "../screens/signUp";


function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='dashboard/*' element={<Dashboard />} />
                <Route path="login" element={<LogIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/" element={<LogIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;