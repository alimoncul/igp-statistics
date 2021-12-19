import { createStore, combineReducers } from 'redux';
import { setupReducer } from './reducers/SetupReducer';

let store = createStore(combineReducers({ setups: setupReducer }));

export default store;
