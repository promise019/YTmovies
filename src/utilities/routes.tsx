import { BrowserRouter, Route, Routes } from "react-router";
import Landingpage from "../pages/landingpage";
import MainApplication from "../component/layout/Appwrapper";
import Homepage from "../pages/homepage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Landingpage/>}/>
                <Route path="/app" element={<MainApplication/>}>
                    <Route path="home" element={<Homepage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}