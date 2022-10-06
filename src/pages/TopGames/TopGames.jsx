import { Container, Grid } from '@mui/material';
import React from 'react';
import { CardItems } from '../../components';
import games from '../../data/games';
import { ImgCarousel } from './components/ImgCarousel';

const TopGames = () => {

	// order games by attribute date and then get only the first 4
	const gamesByDate = games.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	}).slice(0, 4);

	const carouselImages = gamesByDate.map((game) => {
		return {
			url: game.image,
			caption: game.caption,
		};
	});


	return (
		<>
			<ImgCarousel slideImages={carouselImages} />

			<Container maxWidth="lg">
				<h1>LO MÁS NUEVO</h1>

				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<CardItems items={gamesByDate} />
				</Grid>
			</Container >
		</>
	);
};

export default TopGames;