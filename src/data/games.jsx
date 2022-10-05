import { AdivinaNumero } from '@/games';
import React from 'react';

const games = [
	{
		id: 1,
		name: 'Adivina el número',
		description: 'Adivina el número que estoy pensando',
		image: 'https://images-na.ssl-images-amazon.com/images/I/51848OMGGeL.png',
		component: <AdivinaNumero />,
		alt: 'Adivina el número',
		date: '2021-10-01',
	},
	{
		id: 2,
		name: 'Example component',
		description: 'example component description',
		image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
		component: <div>Otro Juego</div>,
		alt: 'alta de prueba',
		date: '2021-10-01',
	}
];

const defaultGame = {
	id: 0,
	name: 'No existe',
	description: 'No existe',
	image: 'https://i.imgur.com/3J3YQYx.png',
	component: <div>Not Found</div>,
	alt: 'Not Found',
	date: '2021-10-01',
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