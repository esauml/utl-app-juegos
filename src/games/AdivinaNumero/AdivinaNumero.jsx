import { Badge, Button, ButtonGroup, Chip, Container, Divider, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TransitionAlert } from '../../components';
import { checkNumbers, randomChoice } from './core';

const AdivinaNumero = () => {
	// const
	const dificultades = {
		facil: 'Fácil',
		medio: 'Medio',
		dificil: 'Difícil'
	};

	const status = {
		playing: 'Jugando',
		win: '¡Ganaste!',
		lose: 'Perdiste :(',
		chosing: 'Eligiendo',
	};

	// State Management
	
	const [numero, setNumero] = useState('');
	const [numeroUsuario, setNumeroUsuario] = useState('');
	const [numeroIntentos, setNumeroIntentos] = useState(0);
	const [mensaje, setMensaje] = useState('');
	const [usedNumbers, setUsedNumbers ] = useState([]);
	const [difficultyLevel, setDifficultyLevel] = useState('');
	const [maxIntentos, setMaxIntentos] = useState(0);
	const [range, setRange] = useState([0, 0]);
	const [gameStatus, setGameStatus] = useState(status.chosing);
	const [error, setError] = useState(false);

	// Function to handle interaction with the user

	const handleInput = (e) => {
		setNumeroUsuario(Number(e.target.value));
	};

	// Functions to handle dynamic rendering of the game

	const handleButton = () => {

		// Check if the user has entered a number
		if (numeroUsuario === '') {
			setError(true);
			return;
		}

		// game
		if (numeroIntentos < maxIntentos) {
			setNumeroIntentos(numeroIntentos + 1);
			setUsedNumbers([...usedNumbers, numeroUsuario]);

			if (difficultyLevel === dificultades.facil) {
				setUsedNumbers([...usedNumbers, numeroUsuario]);
			}

			const check = checkNumbers(numeroUsuario, numero[0]);
			console.log(check, numero, numeroUsuario);

			if (check === 0) {
				setGameStatus(status.win);
				setMensaje(status.win);
			} else if (check === 1) {
				setMensaje('El número es menor');
			} else if (check === -1) {
				setMensaje('El número es mayor');
			}

			return;
		}

	};

	const setGameDifficulty = (difficulty) => {
		setGameStatus(status.playing);
		setDifficultyLevel(difficulty);

		if (difficulty === dificultades.facil) {
			setMaxIntentos(7);
			setRange([1, 10]);
			setNumero(randomChoice(1, 1, 10));
		} else if (difficulty === dificultades.medio) {
			setMaxIntentos(7);
			setRange([1, 50]);
			setNumero(randomChoice(1, 1, 50));
		} else if (difficulty === dificultades.dificil) {
			setMaxIntentos(5);
			setRange([1, 100]);
			setNumero(randomChoice(1, 1, 100));
		}
	};
			

	const renderDifficultyLevel = () => {
		return (
			<Stack spacing={2} direction='row'>
				<Button variant='contained' onClick={() => setGameDifficulty(dificultades.facil)}>Novato</Button>
				<Button variant='contained' onClick={() => setGameDifficulty(dificultades.medio)}>Intermedio</Button>
				<Button variant='contained' onClick={() => setGameDifficulty(dificultades.dificil)}>Experto</Button>
			</Stack>
		);
	};

	const renderGame = () => {
		return (
			<Container>
				{
					error && <TransitionAlert open={error} setOpen={setError} message='Ups :( Debes introducir un valor' />
				}
				<h2>
					{mensaje}
				</h2>

				<Stack spacing={2} direction='row' mt={2} justifyContent='center'>
					<Chip label={`Modo ${difficultyLevel}`} />
					<Chip label={`Intentos Máximos ${maxIntentos}`} />
					<Badge badgeContent={maxIntentos - numeroIntentos} color='primary'>
						<Chip label='Intentos restantes' />
					</Badge>
				</Stack>

				<h3>Rango: {range[0]} - {range[1]}</h3>
				{
					(difficultyLevel === dificultades.facil) ? <h3>Numeros usados: {usedNumbers.toLocaleString()}</h3> : ''
				}
				<TextField type='number' onChange={handleInput} value={numeroUsuario}
					size='small' label="Número" variant="outlined" />
				
				<br />
				<br />
				
				<ButtonGroup variant="text" aria-label="text button group">
					<Button onClick={handleButton}>Adivinar</Button>
					{
						<Button color='warning' onClick={() => window.location.reload()}>Reiniciar Juego</Button>
					}
				</ButtonGroup>
				
			</Container>
		);
	};

	// Render
	const renderFromStatus = () => {
		switch (gameStatus) {
		case status.chosing:
			return renderDifficultyLevel();
		case status.playing:
			return renderGame();
		case status.win:
			return renderGame();
		case status.lose:
			return renderGame();
		default:
			return renderDifficultyLevel();
		}
	};

	useEffect(() => {
		if (numeroIntentos === maxIntentos && gameStatus === status.playing) {
			setGameStatus(status.lose);
			setMensaje(status.lose);
		}
	}, [numeroIntentos]);

	return (
		<Container sx={{ justifyContent: 'center', alignItems: 'center', height: '65vh', display: 'flex' }}>
			{
				renderFromStatus()
			}
		</Container>
	);
};

export default AdivinaNumero;