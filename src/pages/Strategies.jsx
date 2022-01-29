import { NavigationBar } from '../components/NavigationBar';
import { CardInfo } from '../components/CardInfo';
import { TYRE_LIST } from '../constants/tyre';
import { useSelector } from 'react-redux';
import { calculateWear } from '../lib/wearCalculator';
import { WearTable } from '../components/WearTable';

export default function Strategies() {
    const wears = useSelector((state) => state.wears);
    let maximumColumnCount = 0;
    const calculatedWears = Object.values(wears).map((wearPerLap, index) => {
        const table = calculateWear(wearPerLap);
        if (table.length > maximumColumnCount) {
            maximumColumnCount = table.length;
        }
        return {
            table,
            tyre: Object.keys(wears)[index]
        };
    });

    return (
        <div>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <div className="flex flex-row justify-center space-x-4">
                    <CardInfo tyre={TYRE_LIST.SUPERSOFT} />
                    <CardInfo tyre={TYRE_LIST.SOFT} />
                    <CardInfo tyre={TYRE_LIST.MEDIUM} />
                    <CardInfo tyre={TYRE_LIST.HARD} />
                    <CardInfo tyre={TYRE_LIST.INTERMEDIATE} />
                    <CardInfo tyre={TYRE_LIST.WET} />
                </div>
                <div className="flex flex-row justify-center mt-4">
                    <WearTable maximumColumnCount={maximumColumnCount} wears={calculatedWears} />
                </div>
            </main>
        </div>
    );
}
