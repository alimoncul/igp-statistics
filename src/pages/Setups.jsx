import { NavigationBar } from '../components/NavigationBar';
import Store from '../Store';

export default function Setups() {
    return (
        <Store>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <h2>Setups</h2>
            </main>
        </Store>
    );
}
