const SUSPENSION_SETTINGS = {
    NEUTRAL: 'neutral',
    FIRM: 'firm',
    SOFT: 'soft'
};

export const setups = {
    Australia: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 38,
            wingLevel: 20
        },
        pro: {
            rideHeight: 19,
            wingLevel: 10
        },
        rookie: {
            rideHeight: 9,
            wingLevel: 6
        }
    },
    Malaysia: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 23,
            wingLevel: 10
        },
        pro: {
            rideHeight: 12,
            wingLevel: 5
        },
        rookie: {
            rideHeight: 6,
            wingLevel: 2
        }
    },
    China: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 10,
            wingLevel: 15
        },
        pro: {
            rideHeight: 5,
            wingLevel: 8
        },
        rookie: {
            rideHeight: 2,
            wingLevel: 4
        }
    },
    Bahrain: {
        suspension: SUSPENSION_SETTINGS.FIRM,
        elite: {
            rideHeight: 15,
            wingLevel: 5
        },
        pro: {
            rideHeight: 8,
            wingLevel: 3
        },
        rookie: {
            rideHeight: 4,
            wingLevel: 1
        }
    },
    Spain: {
        suspension: SUSPENSION_SETTINGS.SOFT,
        elite: {
            rideHeight: 10,
            wingLevel: 25
        },
        pro: {
            rideHeight: 5,
            wingLevel: 13
        },
        rookie: {
            rideHeight: 2,
            wingLevel: 6
        }
    },
    Monaco: {
        suspension: SUSPENSION_SETTINGS.SOFT,
        elite: {
            rideHeight: 43,
            wingLevel: 40
        },
        pro: {
            rideHeight: 22,
            wingLevel: 20
        },
        rookie: {
            rideHeight: 11,
            wingLevel: 10
        }
    },
    Turkey: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 25,
            wingLevel: 15
        },
        pro: {
            rideHeight: 13,
            wingLevel: 8
        },
        rookie: {
            rideHeight: 6,
            wingLevel: 4
        }
    },
    Germany: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 15,
            wingLevel: 15
        },
        pro: {
            rideHeight: 8,
            wingLevel: 8
        },
        rookie: {
            rideHeight: 4,
            wingLevel: 4
        }
    },
    Hungary: {
        suspension: SUSPENSION_SETTINGS.SOFT,
        elite: {
            rideHeight: 20,
            wingLevel: 30
        },
        pro: {
            rideHeight: 10,
            wingLevel: 15
        },
        rookie: {
            rideHeight: 5,
            wingLevel: 7
        }
    },
    Europe: {
        suspension: SUSPENSION_SETTINGS.SOFT,
        elite: {
            rideHeight: 23,
            wingLevel: 25
        },
        pro: {
            rideHeight: 12,
            wingLevel: 13
        },
        rookie: {
            rideHeight: 6,
            wingLevel: 7
        }
    },
    Belgium: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 23,
            wingLevel: 17
        },
        pro: {
            rideHeight: 12,
            wingLevel: 9
        },
        rookie: {
            rideHeight: 6,
            wingLevel: 4
        }
    },
    Italy: {
        suspension: SUSPENSION_SETTINGS.FIRM,
        elite: {
            rideHeight: 23,
            wingLevel: 1
        },
        pro: {
            rideHeight: 12,
            wingLevel: 1
        },
        rookie: {
            rideHeight: 6,
            wingLevel: 1
        }
    },
    Singapore: {
        suspension: SUSPENSION_SETTINGS.SOFT,
        elite: {
            rideHeight: 33,
            wingLevel: 32
        },
        pro: {
            rideHeight: 17,
            wingLevel: 16
        },
        rookie: {
            rideHeight: 9,
            wingLevel: 8
        }
    },
    Japan: {
        suspension: SUSPENSION_SETTINGS.SOFT,
        elite: {
            rideHeight: 23,
            wingLevel: 25
        },
        pro: {
            rideHeight: 12,
            wingLevel: 13
        },
        rookie: {
            rideHeight: 6,
            wingLevel: 7
        }
    },
    Brazil: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 15,
            wingLevel: 15
        },
        pro: {
            rideHeight: 8,
            wingLevel: 8
        },
        rookie: {
            rideHeight: 4,
            wingLevel: 4
        }
    },
    'Abu Dhabi': {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 25,
            wingLevel: 10
        },
        pro: {
            rideHeight: 13,
            wingLevel: 5
        },
        rookie: {
            rideHeight: 6,
            wingLevel: 2
        }
    },
    'Great Britain': {
        suspension: SUSPENSION_SETTINGS.FIRM,
        elite: {
            rideHeight: 18,
            wingLevel: 5
        },
        pro: {
            rideHeight: 9,
            wingLevel: 3
        },
        rookie: {
            rideHeight: 4,
            wingLevel: 2
        }
    },
    France: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 33,
            wingLevel: 15
        },
        pro: {
            rideHeight: 17,
            wingLevel: 8
        },
        rookie: {
            rideHeight: 8,
            wingLevel: 4
        }
    },
    Austria: {
        suspension: SUSPENSION_SETTINGS.FIRM,
        elite: {
            rideHeight: 18,
            wingLevel: 5
        },
        pro: {
            rideHeight: 9,
            wingLevel: 3
        },
        rookie: {
            rideHeight: 4,
            wingLevel: 2
        }
    },
    Canada: {
        suspension: SUSPENSION_SETTINGS.FIRM,
        elite: {
            rideHeight: 18,
            wingLevel: 1
        },
        pro: {
            rideHeight: 9,
            wingLevel: 1
        },
        rookie: {
            rideHeight: 4,
            wingLevel: 1
        }
    },
    Azerbaijan: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 33,
            wingLevel: 10
        },
        pro: {
            rideHeight: 17,
            wingLevel: 5
        },
        rookie: {
            rideHeight: 8,
            wingLevel: 2
        }
    },
    Mexico: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 13,
            wingLevel: 15
        },
        pro: {
            rideHeight: 7,
            wingLevel: 8
        },
        rookie: {
            rideHeight: 3,
            wingLevel: 4
        }
    },
    Russia: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 8,
            wingLevel: 15
        },
        pro: {
            rideHeight: 4,
            wingLevel: 8
        },
        rookie: {
            rideHeight: 2,
            wingLevel: 4
        }
    },
    USA: {
        suspension: SUSPENSION_SETTINGS.NEUTRAL,
        elite: {
            rideHeight: 8,
            wingLevel: 12
        },
        pro: {
            rideHeight: 4,
            wingLevel: 6
        },
        rookie: {
            rideHeight: 2,
            wingLevel: 3
        }
    }
};
