import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Strategies from './pages/Strategies';
import RaceAnalysis from './pages/RaceAnalysis';
import RaceResults from './pages/RaceResults';
import Setups from './pages/Setups';
import store from './store';

const rootElement = document.getElementById('root');
render(
    <Provider store={store}>
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
                            <p>There's nothing here! We couldn't had any time for not found page :(</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    </Provider>,
    rootElement
);
