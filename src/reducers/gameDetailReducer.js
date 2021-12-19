const initialState = { gameDetails: {} };

const gameDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return {
                ...state,
                gameDetails: action.payload.gameDetails,
            };
        default:
            return { ...state };
    }
};

export default gameDetailReducer;
