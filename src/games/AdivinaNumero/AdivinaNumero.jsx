import React, { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { Container } from '@mui/material';
import { randomChoice, checkNumbers } from './core';

const AdivinaNumero = () => {
	// const
	const dificultades = {
		facil: 'Fácil',
		medio: 'Medio',
		dificil: 'Difícil',
	};

	// State Management
	
	const [numero, setNumero] = useState(0);
	const [numeroUsuario, setNumeroUsuario] = useState(0);
	const [numeroIntentos, setNumeroIntentos] = useState(0);
	const [mensaje, setMensaje] = useState('Adivina el número');
	const [usedNumbers, setUsedNumbers ] = useState([]);
	const [difficultyLevel, setDifficultyLevel] = useState('');
	const [maxIntentos, setMaxIntentos] = useState(0);
	const [ range, setRange ] = useState([0, 0]);

	// Function to handle interaction with the user

	const handleInput = (e) => {
		setNumeroUsuario(e.target.value);
	};

	const setDifficultyEasy = () => {
		setDifficultyLevel(dificultades.facil);
		setMaxIntentos(7);
		setRange([1, 10]);
		setNumero(randomChoice(1, ...range));
	};

	const setDifficultyMedium = () => {
		setDifficultyLevel(dificultades.medio);
		setMaxIntentos(7);
		setRange([1, 50]);
		setNumero(randomChoice(1, ...range));
	};

	const setDifficultyHard = () => {
		setDifficultyLevel(dificultades.dificil);
		setMaxIntentos(5);
		setRange([1, 100]);
		setNumero(randomChoice(1, ...range));
	};

	// Functions to handle dynamic rendering of the game

	const handleButton = () => {
		let numerosUsados = usedNumbers;
		setNumeroIntentos(numeroIntentos + 1);
		if (numeroUsuario < numero) {
			setMensaje('El número es mayor');
			numerosUsados.push(numeroUsuario);
			console.log(usedNumbers);
			setUsedNumbers(numerosUsados);
		} else if (numeroUsuario > numero) {
			setMensaje('El número es menor');
			numerosUsados.push(numeroUsuario);
			console.log(usedNumbers);
			setUsedNumbers(numerosUsados);
		} else {
			setMensaje('¡Has ganado!');
		}
	};

	const renderDifficultyLevel = () => {
		return (
			<Container sx={{ justifyContent: 'center' }}>
				<ButtonGroup variant="contained" aria-label="outlined primary button group">
					<Button onClick={setDifficultyEasy}>Novato</Button>
					<Button onClick={setDifficultyMedium}>Intermedio</Button>
					<Button onClick={setDifficultyHard}>Experto</Button>
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
				{
					(difficultyLevel === 'novato') ?  <h3>Numeros usados: {usedNumbers.toLocaleString() }</h3> : ''
				}
				<input type="number" onChange={handleInput} step="1" value={numeroUsuario}/>
				<button onClick={handleButton}>Adivinar</button>

				{
					<button onClick={() => window.location.reload()}>Reiniciar Juego</button>
				}
				
			</Container>
		);
	};

	return (
		<div>
			{
				(difficultyLevel === '') ? renderDifficultyLevel() : renderGame()
			}
		</div>
	);
};

export default AdivinaNumero;