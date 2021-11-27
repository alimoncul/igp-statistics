import React from 'react';
import { Tyre } from '../components/Tyre';

export const CardInfo = () => {
    return (
        <div class="bg-gray-700 rounded-l-2xl w-60 flex-row">
            <h1>Supersoft Wear Rate per Lap</h1>
            <Tyre></Tyre>
        </div>
    );
};
