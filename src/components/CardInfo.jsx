import React from 'react';
import { Tyre } from '../components/Tyre';
import { TYRE_LIST } from '../constants/tyre';
import { WearInput } from './WearInput';

export const CardInfo = (props) => {
    const tyre = TYRE_LIST[props.tyre] || TYRE_LIST.SUPERSOFT;
    return (
        <div className="bg-gray-300 rounded-xl w-40 h-24 flex p-2 hover:bg-gray-500 cursor-pointer self-center flex-col">
            <Tyre textClass={'text-sm'} sizeBuffer={2} tyre={tyre}></Tyre>
            <WearInput tyre={tyre} />
        </div>
    );
};
