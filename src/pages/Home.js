import React, { useEffect } from 'react';
// styling and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animations';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// components
import Game from '../components/Game';
import GameDetails from '../components/GameDetails.js';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
    const { popularGames, newGames, upcomingGames, searched } = useSelector(
        (state) => state.games
    );

    // get the current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2]; //getting the id part of the pathname

    //FETCH GAMES
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames);
    }, [dispatch]); // reason for [dispatch] explained here at 5:22: https://developedbyed.com/courses/1203573/lectures/26900539

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                {/* AnimatePresence animates the components inside when it becomes visible*/}
                <AnimatePresence>
                    {pathId && <GameDetails pathId={pathId} />}
                </AnimatePresence>
                {searched.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map((game) => (
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
                    </div>
                ) : (
                    ''
                )}
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
            </AnimateSharedLayout>
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
