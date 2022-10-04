import { AdivinaNumero } from '@/games';
import React from 'react';

const games = [
	{
		id: 1,
		name: 'Adivina el número',
		description: 'Adivina el número que estoy pensando',
		image: 'https://i.imgur.com/3J3YQYx.png',
		component: <AdivinaNumero />
	},
	{
		id: 2,
		name: 'Adivina el número 2',
		description: 'Adivina el número que estoy pensando',
		image: 'https://i.imgur.com/3J3YQYx.png',
		component: <div>Otro Juego</div>
	}
];

const defaultGame = {
	id: 0,
	name: 'No existe',
	description: 'No existe',
	image: 'https://i.imgur.com/3J3YQYx.png',
	component: <div>Not Found</div>
};

/**
 * from array of objects get object that has id from parameters (number)
 * 
 * @param {int} id 
 * @returns object of Game
 */
export const getGameById = (id) =>
	games.find((game) => game.id === Number(id)) || defaultGame;

export default games;