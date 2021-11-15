import { NavigationBar } from '../components/NavigationBar';
import Store from '../Store';

export default function RaceResults() {
    return (
        <Store>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <h2>RaceResults</h2>
            </main>
        </Store>
    );
}
