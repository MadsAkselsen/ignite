import React from 'react';

// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { resizeImage } from '../utils';

const GameDetails = () => {
    const history = useHistory(); // use this to set the url of the url bar
    console.log(history);
    // exiting out of game details popup - add back the scroll bar
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            //the shadow backdrop
            document.body.style.overflow = 'auto';
            history.push('/'); // going back to Home
        }
    };
    const { gameDetails, isLoading } = useSelector(
        (state) => state.gameDetails
    );
    return (
        <CardShadow className="shadow" onClick={(e) => exitDetailHandler(e)}>
            {!isLoading && (
                <>
                    <Detail>
                        <Stats>
                            <div className="rating">
                                <h3>{gameDetails.name}</h3>
                                <p>Rating: {gameDetails.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {gameDetails.platforms.map((data) => (
                                        <h3 key={data.platform.id}>
                                            {data.platform.name}
                                        </h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img
                                src={resizeImage(
                                    gameDetails.background_image,
                                    1280
                                )}
                                alt="background"
                            />
                        </Media>
                        <Description>{gameDetails.description}</Description>
                        <div className="gallery">
                            {gameDetails.screenshots.map((screen) => (
                                <img
                                    src={resizeImage(screen.image, 1280)}
                                    alt="gallery"
                                    key={screen.id}
                                />
                            ))}
                        </div>
                    </Detail>
                </>
            )}
        </CardShadow>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;
const Info = styled(motion.div)`
    text-align: center;
`;
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetails;
