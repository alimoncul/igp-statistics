import { FileUploadButton } from '../components/FileUploadButton';
import { NavigationBar } from '../components/NavigationBar';
import { readCSV } from '../lib/readCSV';
import { useDispatch, useSelector } from 'react-redux';
import { setRaceResults } from '../store/Actions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { mapResults } from '../lib/mapResults';

export default function RaceResults() {
    const dispatch = useDispatch();
    const results = useSelector((state) => state.results);
    const handleChange = async (file) => {
        const results = await readCSV(file);
        dispatch(setRaceResults(mapResults(results)));
    };
    return (
        <div>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <FileUploadButton handleChange={handleChange.bind(this)} text="Upload race result .csv file"></FileUploadButton>
                {results?.length ? (
                    <ResponsiveContainer width="95%" height={400}>
                        <BarChart
                            className="flex flex-grow"
                            data={results}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 30,
                                bottom: 10
                            }}
                        >
                            <CartesianGrid strokeDasharray="5 5" />
                            <XAxis dataKey="pos" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar dataKey="time">
                                {results.map((result) => {
                                    return <Cell fill={result.color} />;
                                })}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    ''
                )}
            </main>
        </div>
    );
}

const CustomTooltip = (opts) => {
    const { active, payload, label } = opts;
    if (active && payload && payload.length) {
        return (
            <div style={{ background: '#DCDCDC', padding: 10, borderRadius: 4, borderWidth: 1, borderColor: '#000' }}>
                <p>{`Position: ${label} | ${payload[0]?.payload?.driver}`}</p>
                <p>{`Finished: ${payload[0]?.payload?.pos > 1 ? '+' + payload[0]?.payload?.time : 'First Place'}`}</p>
                <p>{`Pitstops: ${payload[0]?.payload?.pit}`}</p>
                <p>{`Best Lap: ${payload[0]?.payload?.bestLap}`}</p>
            </div>
        );
    }

    return null;
};
