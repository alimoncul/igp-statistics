import { SET_RACE_RESULTS } from '../Actions';

export const raceResultReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RACE_RESULTS: {
            state = action.results;
            return state;
        }
        default: {
            return state;
        }
    }
};
