import { SET_WEAR_RATE } from '../Actions';

export const wearReducer = (
    state = {
        SUPERSOFT: 0,
        SOFT: 0,
        MEDIUM: 0,
        HARD: 0,
        INTERMEDIATE: 0,
        WET: 0
    },
    action
) => {
    switch (action.type) {
        case SET_WEAR_RATE: {
            state[action.opts.tyre] = parseInt(action.opts.wear);
            return { ...state };
        }
        default: {
            return state;
        }
    }
};
