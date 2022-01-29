import React from 'react';
import { Tyre } from './Tyre';
import wearColor from '../lib/wearColor';
const tableClass = 'border px-1 py-1';

export const WearTable = (props) => {
    const wears = props.wears;
    const maximumColumnCount = props.maximumColumnCount;
    const tableHeads = [];
    const tableRows = [];
    const wearsExists = wears.filter((w) => w.table.length);
    wearsExists.forEach((wear) => {
        const tyre = wear.tyre;
        tableHeads.push(
            <th key={tyre} className={tableClass}>
                <Tyre textClass={'text-sm'} sizeBuffer={0} tyre={tyre} />
            </th>
        );
    });

    for (let i = 0; i < maximumColumnCount; i++) {
        const tds = [
            <td key={i} className={tableClass}>
                Lap {i}
            </td>
        ];

        wearsExists.forEach((wear) => {
            const table = wear.table;
            tds.push(
                <td style={{ backgroundColor: wearColor(table[i] || 0) }} key={`${wear.tyre}-${i}`} className={tableClass}>
                    {table[i] || '-'}
                </td>
            );
        });
        tableRows.push(<tr key={`row${i}`}>{tds}</tr>);
    }

    return tableRows.length ? (
        <div className="self-center flex-col">
            <table className="table-auto border text-center text-xs">
                <thead>
                    <tr>
                        <th className={tableClass}>Laps/Tyres</th>
                        {tableHeads}
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    ) : null;
};
