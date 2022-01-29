export const SET_TRACK = 'SET_TRACK';
export const SET_WEAR_RATE = 'SET_WEAR_RATE';

export const setTrack = (track) => {
    return {
        type: SET_TRACK,
        track
    };
};

export const setWearRate = (opts) => {
    return {
        type: SET_WEAR_RATE,
        opts
    };
};
