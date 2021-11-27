import { NavigationBar } from '../components/NavigationBar';
import Store from '../Store';

export default function RaceResults() {
    return (
        <Store>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <h1 className="font-bold text-center text-black" style={{ fontSize: 40 }}>
                    RaceResults | Coming soon
                </h1>
            </main>
        </Store>
    );
}
