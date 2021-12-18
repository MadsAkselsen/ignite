import React, { useEffect } from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames);
    })

    return(
        <div className="home">
            <h1>Home</h1>
        </div>
    )
}

export default Home;