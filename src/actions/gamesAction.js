import { getPopularGames, getUpcomingGames, getNewGames } from "../api";

// ACTION CREATOR
export const loadGames = async (dispatch) => {
    // FETCH AXIOS
    const popularGames = await getPopularGames();
    const upcomingGames = await getUpcomingGames();
    const newGames = await getNewGames();
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGames.results,
            upcomingGames: upcomingGames.results,
            newGames: newGames.results
        }
    })
}