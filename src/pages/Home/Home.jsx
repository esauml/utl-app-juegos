import { Pagination } from '@/components';
import { Container, Divider, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
import { CardItems } from '../../components';
import games from '../../data/games';
import { SideList } from './components';

const Home = () => {

	return (
		<Stack spacing={2} direction="row" mt={2} divider={<Divider orientation="vertical" flexItem />} >
			<Paper elevation={0}>
				<h3>Generos</h3>
				<SideList />
			</Paper>

			{/* Paper component fill space */}
			<Paper elevation={0} sx={{ flexGrow: 1 }}>
				<Container maxWidth="lg">
					<h2>Home</h2>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<CardItems items={games} />
					</Grid>
					<Paper elevation={0} sx={{ display: 'flex', justifyContent: 'center', p: 2, m: 1, bgcolor: 'background.paper' }}>
						<Pagination count={5} color="primary" />
					</Paper>
				</Container >
			</Paper>
		</Stack >
	);
};

export default Home;