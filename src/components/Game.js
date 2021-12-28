import React from 'react';

// styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

// redux
import { useDispatch } from 'react-redux';
import loadGameDetails from '../actions/detailAction';

import { Link } from 'react-router-dom';
import { resizeImage } from '../utils';

const Game = ({ name, released, image, id, screenshots }) => {
    const stringPathId = id.toString();

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'; // removes the scroll side bar from body, so we don't show two scroll bars
        dispatch(loadGameDetails(id, screenshots));
    };
    return (
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={resizeImage(image, 640)}
                    alt={name}
                />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;
