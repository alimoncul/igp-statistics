import { NavigationBar } from '../components/NavigationBar';
import Store from '../Store';

export default function Strategies() {
    return (
        <Store>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <h2>Strategies</h2>
            </main>
        </Store>
    );
}
