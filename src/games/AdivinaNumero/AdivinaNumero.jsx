import React, { useEffect, useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { Container } from '@mui/material';
import { randomChoice, checkNumbers } from './core';

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
	const [numeroUsuario, setNumeroUsuario] = useState(0);
	const [numeroIntentos, setNumeroIntentos] = useState(0);
	const [mensaje, setMensaje] = useState('Adivina el número');
	const [usedNumbers, setUsedNumbers ] = useState([]);
	const [difficultyLevel, setDifficultyLevel] = useState('');
	const [maxIntentos, setMaxIntentos] = useState(0);
	const [range, setRange] = useState([0, 0]);
	const [gameStatus, setGameStatus] = useState(status.chosing);

	// Function to handle interaction with the user

	const handleInput = (e) => {
		setNumeroUsuario(Number(e.target.value));
	};

	// Functions to handle dynamic rendering of the game

	const handleButton = () => {

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
			<Container sx={{ justifyContent: 'center' }}>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button onClick={() => setGameDifficulty(dificultades.facil)}>Novato</Button>
					<Button onClick={() => setGameDifficulty(dificultades.medio)}>Intermedio</Button>
					<Button onClick={() => setGameDifficulty(dificultades.dificil)}>Experto</Button>
				</ButtonGroup>
			</Container>
		);
	};

	const renderGame = () => {
		return (
			<Container sx={{ justifyContent: 'center' }}>
				<h1>{mensaje}</h1>
				<h2>Dificultad: {difficultyLevel}</h2>
				<h3>Numero de intentos: {numeroIntentos}</h3>
				<h3>Numero de intentos restantes: {maxIntentos - numeroIntentos}</h3>
				<h3>Rango: {range[0]} - {range[1]}</h3>
				{
					(difficultyLevel === dificultades.facil) ?  <h3>Numeros usados: {usedNumbers.toLocaleString() }</h3> : ''
				}
				<input type="number" onChange={handleInput} step="1" value={numeroUsuario}/>
				<button onClick={handleButton}>Adivinar</button>

				{
					<button onClick={() => window.location.reload()}>Reiniciar Juego</button>
				}
				
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
		<div>
			{
				renderFromStatus()
			}
		</div>
	);
};

export default AdivinaNumero;