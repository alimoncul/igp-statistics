import { NavigationBar } from '../components/NavigationBar';
import Store from '../Store';

export default function RaceAnalysis() {
    return (
        <Store>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <h2>RaceAnalysis</h2>
            </main>
        </Store>
    );
}
