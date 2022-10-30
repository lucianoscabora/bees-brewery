import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


//Pages
import App from './App';
import Home from './Pages/Home/Home';

export const RoutesApp = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/card/:fullname" element={<App />} />
                    
                    
                </Routes>
        </BrowserRouter>
    )
} 