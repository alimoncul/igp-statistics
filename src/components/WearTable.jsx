import React from 'react';
import { Tyre } from './Tyre';

export const WearTable = (props) => {
    const wears = props.wears;
    const maximumColumnCount = props.maximumColumnCount;
    const tableHeads = [];
    const tableClass = 'border px-1 py-1';
    for (let i = 0; i < maximumColumnCount; i++) {
        tableHeads.push(
            <th key={`Lap ${i + 1}`} className={tableClass}>
                Lap {i + 1}
            </th>
        );
    }

    const tableRows = wears
        .filter((w) => w.table.length)
        .map((wear) => {
            const tyre = wear.tyre;
            const table = wear.table;
            const tableDatas = [];
            for (let i = 0; i < maximumColumnCount; i++) {
                tableDatas.push(
                    <td key={`td-${tyre}-${i}`} className={tableClass}>
                        {table[i] || '-'}
                    </td>
                );
            }
            return (
                <tr key={`tr${tyre}`}>
                    <td className={tableClass}>
                        <Tyre textClass={'text-sm'} sizeBuffer={0} tyre={tyre}></Tyre>
                    </td>
                    {tableDatas}
                </tr>
            );
        });

    return tableRows.length ? (
        <div className="self-center flex-col">
            <table className="table-auto border text-center text-xs">
                <thead>
                    <tr>
                        <th className={tableClass}>Tyres/Laps</th>
                        {tableHeads}
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        </div>
    ) : null;
};
