import { NavigationBar } from '../components/NavigationBar';
import Store from '../Store';

export default function Main() {
    return (
        <Store>
            <NavigationBar />
            <main style={{ padding: '1rem 0' }}>
                <h1 className="font-bold text-center text-black" style={{ fontSize: 40 }}>
                    Welcome to iGP Statistics
                </h1>
            </main>
        </Store>
    );
}
