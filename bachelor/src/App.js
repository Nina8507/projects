import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles
import "./styles/globals.scss";

import HomePage from './pages/HomePage';
import LoRaPage from './pages/LoRaPage';
import BachelorPage from './pages/BachelorPage';
import SharedNavbar from './components/SharedNavbar';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<SharedNavbar />} >
                    <Route index element={<HomePage />} />
                    <Route path='/loraPage' element={<LoRaPage />} />
                    <Route path='/bachelorPage' element={<BachelorPage />} /> 
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}  

export default App;