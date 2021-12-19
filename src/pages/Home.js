import React, { useEffect } from 'react';
// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// components
import Game from '../components/Game';

const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames);
    }, [dispatch]); // reason for [dispatch] explained here at 5:22: https://developedbyed.com/courses/1203573/lectures/26900539

    const { popularGames, newGames, upcomingGames } = useSelector(
        (state) => state.games
    );

    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        key={game.id}
                        id={game.id}
                        image={game.background_image}
                        screenshots={game.short_screenshots}
                    />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popularGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        key={game.id}
                        id={game.id}
                        image={game.background_image}
                        screenshots={game.short_screenshots}
                    />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game
                        name={game.name}
                        released={game.released}
                        key={game.id}
                        id={game.id}
                        image={game.background_image}
                        screenshots={game.short_screenshots}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
