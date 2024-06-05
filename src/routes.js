import { BrowserRouter, Routes, Route } from "react-router-dom";

import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";

import Header from './components/Header';
import Footer from "./components/Footer";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalogo" element={<Catalogo/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;