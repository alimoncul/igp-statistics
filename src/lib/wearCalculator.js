export function calculateWear(wearPerLap) {
    let wear = 100;
    let laps = [];
    if (wearPerLap <= 0) {
        return [];
    }
    while (wear > 0) {
        if (wear < wearPerLap) {
            laps.push(0);
            wear = 0;
        } else {
            const wearDownTo = (wear * (100 - wearPerLap)) / 100;
            laps.push(wearDownTo);
            wear = wearDownTo;
        }
    }
    return laps.map((l) => l.toFixed(2));
}
