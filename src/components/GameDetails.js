import React from 'react';

// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { resizeImage } from '../utils';
import playstation from '../img/playstation.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import logo from '../img/logo.svg';
import nintendo from '../img/nintendo.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
import steam from '../img/steam.svg';
import xbox from '../img/playstation.svg';

const GameDetails = ({ pathId }) => {
    const { gameDetails, isLoading } = useSelector(
        (state) => state.gameDetails
    );
    const history = useHistory(); // use this to set the url of the url bar

    // exiting out of game details popup - add back the scroll bar
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            //the shadow backdrop
            document.body.style.overflow = 'auto';
            history.push('/'); // going back to Home
        }
    };

    // get stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(gameDetails.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull}></img>);
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>);
            }
        }
        return stars;
    };

    // get platform images
    const getPlatform = (platform) => {
        switch (platform) {
            case 'PlayStation 4':
                return playstation;
            case 'PlayStation 5':
                return playstation;
            case 'Xbox Series S/X':
                return xbox;
            case 'Xbox S':
                return xbox;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
        }
    };

    return (
        <CardShadow className="shadow" onClick={(e) => exitDetailHandler(e)}>
            {!isLoading && (
                <>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>
                                    {gameDetails.name}
                                </motion.h3>
                                <p>Rating: {gameDetails.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {gameDetails.platforms.map((data) => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatform(
                                                data.platform.name
                                            )}
                                        ></img>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img
                                src={resizeImage(
                                    gameDetails.background_image,
                                    1280
                                )}
                                layoutId={`image ${pathId}`}
                                alt="background"
                            />
                        </Media>
                        <Description>{gameDetails.description}</Description>
                        <div className="gallery">
                            {gameDetails.screenshots &&
                                gameDetails.screenshots.map((screen) => (
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
