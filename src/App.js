import './App.css';
import { NavigationBar } from './components/NavigationBar';
import './index.css';
import Store from './Store';

function App() {
    return (
        <Store>
            <NavigationBar />
        </Store>
    );
}

export default App;
