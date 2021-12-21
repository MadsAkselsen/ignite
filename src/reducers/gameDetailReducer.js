const initialState = { gameDetails: {}, isLoading: true };

const gameDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return {
                ...state,
                gameDetails: action.payload.gameDetails,
                isLoading: false,
            };
        case 'LOADING_DETAIL':
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};

export default gameDetailReducer;
