import { getGameDetails } from '../api';

const loadGameDetails = (id, screenshots) => async (dispatch) => {
    dispatch({
        type: 'LOADING_DETAIL',
    });

    const gameDetails = await getGameDetails(id, screenshots);
    // screenshots are not part of detail response, so need to retrieve them from the games state
    gameDetails.screenshots = screenshots;

    dispatch({
        type: 'GET_DETAILS',
        payload: {
            gameDetails: gameDetails,
        },
    });
};

export default loadGameDetails;
