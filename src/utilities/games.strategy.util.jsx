import PropTypes from 'prop-types';
import React from 'react';
import { getGameById } from '../data/games';


const GameStrategy = ({ id }) => {
	const { component } = getGameById(id);
	return (
		<>
			{component}
		</>
	);
};

GameStrategy.propTypes = {
	id: PropTypes.number.isRequired,
};

export default GameStrategy;
