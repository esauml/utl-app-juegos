import React, { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { Container } from '@mui/material';

const AdivinaNumero = () => {
	const [numero, ] = useState(Math.floor(Math.random() * 100));
	const [numeroUsuario, setNumeroUsuario] = useState(0);
	const [numeroIntentos, setNumeroIntentos] = useState(0);
	const [mensaje, setMensaje] = useState('Adivina el número');
	const [usedNumbers, setUsedNumbers ] = useState([]);
	const [difficultyLevel, setDifficultyLevel ] = useState('');

	const handleInput = (e) => {
		setNumeroUsuario(e.target.value);
	};

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

	return (
		<div>
			{
				(difficultyLevel === '') ?
					<Container sx={{ justifyContent: 'center' }}>
						<ButtonGroup variant="contained" aria-label="outlined primary button group">
							<Button onClick={() => setDifficultyLevel('novato')}>Novato</Button>
							<Button onClick={() => setDifficultyLevel('intermedio')}>Intermedio</Button>
							<Button onClick={() => setDifficultyLevel('experto')}>Experto</Button>
						</ButtonGroup>
					</Container>
					:
					<Container sx={{ justifyContent: 'center' }}>
						<h1>{mensaje}</h1>
						<h3>Numero de intentos: {numeroIntentos}</h3>
						{
							(difficultyLevel === 'novato') ?  <h3>Numeros usados: {usedNumbers.toLocaleString() }</h3> : ''
						}
						<input type="number" onChange={handleInput} step="1" value={numeroUsuario}/>
						<button onClick={handleButton}>Adivinar</button>
					</Container>
			}
		</div>
	);
};

export default AdivinaNumero;