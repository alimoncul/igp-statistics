import { createStore, combineReducers } from 'redux';
import { raceResultReducer } from './reducers/RaceResultReducer';
import { setupReducer } from './reducers/SetupReducer';
import { wearReducer } from './reducers/WearReducer';

let store = createStore(
    combineReducers({ setups: setupReducer, wears: wearReducer, results: raceResultReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
