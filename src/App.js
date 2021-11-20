import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { Tyre } from './components/Tyre';
import './index.css';
import Store from './Store';

function App() {
    return (
        <Store>
            <NavigationBar />
            <div>
                <h1 className="font-bold text-center text-white" style={{ fontSize: 40 }}>
                    Welcome to iGP Statistics
                </h1>
            </div>
        </Store>
    );
}

export default App;
