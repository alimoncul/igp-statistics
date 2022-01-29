import React from 'react';

const DEFAULT_TYPE = 'SUPERSOFT';
const TYRE_TYPES = {
    SUPERSOFT: 'bg-red-600',
    SOFT: 'bg-yellow-400',
    MEDIUM: 'bg-white',
    HARD: 'bg-yellow-600',
    INTERMEDIATE: 'bg-green-700',
    WET: 'bg-blue-600'
};

const TYRE_CODES = {
    SUPERSOFT: 'SS',
    SOFT: 'S',
    MEDIUM: 'M',
    HARD: 'H',
    INTERMEDIATE: 'I',
    WET: 'W'
};

export const Tyre = (props) => {
    const color = TYRE_TYPES[props.tyre || DEFAULT_TYPE];
    const code = TYRE_CODES[props.tyre || DEFAULT_TYPE];
    const sizeBuffer = props?.sizeBuffer || 0;
    const textClass = props?.textClass || 'text-xs';
    return (
        <div
            className={`grid w-${9 + sizeBuffer} h-${
                9 + sizeBuffer
            } border-2 border-black rounded-full self-center justify-items-center place-content-center ${color}`}
        >
            <div
                className={`grid w-${5 + sizeBuffer} h-${
                    5 + sizeBuffer
                } rounded-full bg-black text-gray-300 justify-items-center place-content-center ${textClass} font-bold`}
            >
                {code}
            </div>
        </div>
    );
};
