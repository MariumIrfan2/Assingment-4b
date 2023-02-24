import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/DashboardScreens/Home";
import Product from "../screens/Product";


function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                {/* <Route path='/*' element={<Dashboard />} /> */}
                <Route path='/' element={<Product />} />
                <Route path="Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;