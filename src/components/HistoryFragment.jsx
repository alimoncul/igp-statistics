import React from 'react';
import { Separator } from './Separator';

export const HistoryFragment = (props = { header: '', description: '', list: [] }) => {
    const header = props.header;
    const description = props.description;
    const list = props.list;
    return (
        <div className="bg-gray-100 shadow-xl flex-row w-1/2 font-sans border-2 rounded-xl border-gray-400">
            <h1 className="place-self-center m-2">{header}</h1>
            <Separator />
            {description && <p className="m-2">{description}</p>}
            {description && list && list.length && <Separator />}
            {list && list.length && generateList(list)}
        </div>
    );
};

function generateList(list) {
    return (
        <ul className="m-2">
            {list.map((l) => {
                return <li>{l}</li>;
            })}
        </ul>
    );
}
