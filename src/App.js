import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { Tyre } from './components/Tyre';
import './index.css';
import Store from './Store';

function App() {
    return (
        <Store>
            <NavigationBar />
            <Tyre type="SUPERSOFT" />
            <Tyre type="SOFT" />
            <Tyre type="MEDIUM" />
            <Tyre type="HARD" />
            <Tyre type="INTERMEDIATE" />
            <Tyre type="WET" />
        </Store>
    );
}

export default App;
