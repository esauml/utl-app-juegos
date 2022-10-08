import { GameStrategy } from '@/utilities';
import { Container, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../../data/games';

const GamePage = () => {
	const { id } = useParams();

	const { name, description } = getGameById(Number(id));

	return (
		<>
			<Typography
				variant="h2"
				align="center"
				sx={{ m: 2, color: 'primary.main' }}
			>
				{name}
			</Typography>
			<Container maxWidth="xl" sx={{ justifyContent: 'center' }}>
				{/* Two aside sections  with Stack*/}
				<Stack direction="row" spacing={2}>
					<Paper
						sx={{
							p: 2,
							textAlign: 'center',
							color: 'text.secondary',
							// backgroundColor: '#eeeeee',
							flex: '1 1 0',
						}}
					>
						<GameStrategy id={id} />
					</Paper>

					<Paper sx={{ p: 2, maxWidth: '700px' }}>
						<Typography variant="h5" align="center">
              Ficha tecnica del juego
						</Typography>
						<Typography
							variant="h6"
							align="left"
							sx={{ color: 'text.primary', mt: 2 }}
						>
              Nombre: {name}
						</Typography>

						<Typography
							variant="h6"
							align="left"
							sx={{ color: 'text.secondary', mt: 2 }}
						>
              Descripción
						</Typography>
						<Typography variant="body1" align="left">
							{description}
						</Typography>
					</Paper>
				</Stack>
			</Container>
		</>
	);
};

export default GamePage;
