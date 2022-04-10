import { generateRandomColor } from './generateRandomColor';

export function mapResults(results) {
    return results.map((r, index) => {
        return {
            driver: r.Driver?.trim(),
            name: `${index + 1} ${r.Driver}`,
            finish: r.Finish,
            pit: r.Pit,
            pos: index + 1,
            points: r.Pts,
            topkph: r['Top KPH'],
            bestLap: r['Best lap'],
            time: index === 0 ? 0 : getDiff(r.Finish),
            color: generateRandomColor()
        };
    });
}

function getDiff(diff) {
    if (diff.includes('lap')) {
        const lappedCount = diff.substr(1)?.split(' ')?.[0];
        return 90 * lappedCount;
    } else {
        const plusSplit = diff?.split(' ');
        const timeSplit = plusSplit?.[1]?.split(':');
        const minutesToSeconds = timeSplit?.[0] * 60;
        return minutesToSeconds + parseFloat(timeSplit?.[1]);
    }
}
