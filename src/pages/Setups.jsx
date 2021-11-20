import { NavigationBar } from '../components/NavigationBar';
import Store from '../Store';

export default function Setups() {
    return (
        <Store>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <h1 className="font-bold text-center text-white" style={{ fontSize: 40 }}>
                    Setups | Coming soon
                </h1>
            </main>
        </Store>
    );
}
