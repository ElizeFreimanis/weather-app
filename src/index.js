import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FullReport from './pages/FullReport';

ReactDOM.render(
    <HashRouter basename='/'>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path=':city' element={<FullReport />} />
            </Route>
        </Routes>
    </HashRouter>,
    document.getElementById('root')
);
