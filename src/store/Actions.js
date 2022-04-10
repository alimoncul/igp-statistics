export const SET_TRACK = 'SET_TRACK';
export const SET_WEAR_RATE = 'SET_WEAR_RATE';
export const SET_RACE_RESULTS = 'SET_RACE_RESULTS';

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

export const setRaceResults = (results) => {
    return {
        type: SET_RACE_RESULTS,
        results
    };
};
