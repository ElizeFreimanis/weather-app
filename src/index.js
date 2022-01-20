import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FullReport from './pages/FullReport';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path=':city' element={<FullReport />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
