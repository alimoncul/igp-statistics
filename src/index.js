import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Strategies from './pages/Strategies';
import RaceAnalysis from './pages/RaceAnalysis';
import RaceResults from './pages/RaceResults';
import Setups from './pages/Setups';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="strategies" element={<Strategies />} />
            <Route path="race-analysis" element={<RaceAnalysis />} />
            <Route path="race-results" element={<RaceResults />} />
            <Route path="setups" element={<Setups />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: '1rem' }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    rootElement
);
