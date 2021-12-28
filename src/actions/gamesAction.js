import {
    getPopularGames,
    getUpcomingGames,
    getNewGames,
    searchGame,
} from '../api';

// ACTION CREATOR
export const loadGames = async (dispatch) => {
    // FETCH AXIOS
    const popularGames = await getPopularGames();
    const upcomingGames = await getUpcomingGames();
    const newGames = await getNewGames();
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popularGames: popularGames.results,
            upcomingGames: upcomingGames.results,
            newGames: newGames.results,
        },
    });
};

export const fetchSearch = (searchInput) => async (dispatch) => {
    // FETCH AXIOS
    const searchGames = await searchGame(searchInput);
    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searchGames.results,
        },
    });
};
