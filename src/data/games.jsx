import { AdivinaNumero } from '@/games';
import React from 'react';
import Ahoracado from '../games/Ahoracado/Ahorcado';

const games = [
	{
		id: 1,
		name: 'Adivina el número',
		description: 'Adivina el número que estoy pensando',
		image: 'https://images-na.ssl-images-amazon.com/images/I/51848OMGGeL.png',
		component: <AdivinaNumero />,
		alt: 'Adivina el número',
		date: '2021-10-01',
		caption: 'Adivina el número',
	},
	{
		id: 2,
		name: 'Ahorcado',
		description: 'Juego del Ahorcado',
		image: 'data:image/png;base64,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',
		component: <Ahoracado />,
		alt: 'Ahoracado',
		date: '2022-12-05',
		caption: 'Ahoracado',
	},
	{
		id: 9999,
		name: 'Example component',
		description: 'example component description',
		image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
		component: <div>Otro Juego</div>,
		alt: 'alta de prueba',
		date: '2021-10-01',
		caption: 'componente de prueba',
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
	caption: 'Not Found',
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