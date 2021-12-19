import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import gameDetailReducer from './gameDetailReducer';

const initState = {
    name: '',
    isLogged: false,
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

const rootReducer = combineReducers({
    games: gamesReducer,
    user: userReducer,
    gameDetails: gameDetailReducer,
});

export default rootReducer;
