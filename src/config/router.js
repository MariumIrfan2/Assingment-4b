import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Product from "../screens/Product";


function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/*' element={<Dashboard />} />
                <Route path='product' element={<Product />} />
                {/* <Route path="dashboard" element={<Dashboard />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;