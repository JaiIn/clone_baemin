import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NearStores from './NearStores';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/store" element={<NearStores />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;