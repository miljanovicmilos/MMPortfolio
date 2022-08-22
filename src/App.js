import './index.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import React, {useState} from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SiteRoutes from "./routes/Routes"


function App() {
    const route = window.location.pathname.split("/")[1]


    return (
        <div>
            <BrowserRouter>
                <Header/>
                <SiteRoutes/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
