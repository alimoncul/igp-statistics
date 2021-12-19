import { SET_TRACK } from '../Actions';

export const setupReducer = (state = { track: '' }, action) => {
    switch (action.type) {
        case SET_TRACK: {
            return { ...state, track: action.track };
        }
        default: {
            return state;
        }
    }
};
