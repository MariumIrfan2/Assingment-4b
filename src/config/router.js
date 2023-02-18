import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";


function AppRouter() {
    return (
        <BrowserRouter>
          
            <Routes>
                <Route path='/*' element={<Dashboard />} />
            </Routes>


        </BrowserRouter>
    )
}

export default AppRouter;