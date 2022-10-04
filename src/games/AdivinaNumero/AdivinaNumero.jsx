import React, { useState } from 'react';

const AdivinaNumero = () => {
	const [numero, ] = useState(Math.floor(Math.random() * 100));
	const [numeroUsuario, setNumeroUsuario] = useState(0);
	const [mensaje, setMensaje] = useState('Adivina el número');

	const handleInput = (e) => {
		setNumeroUsuario(e.target.value);
	};

	const handleButton = () => {
		if (numeroUsuario < numero) {
			setMensaje('El número es mayor');
		} else if (numeroUsuario > numero) {
			setMensaje('El número es menor');
		} else {
			setMensaje('¡Has ganado!');
		}
	};

	return (
		<div>
			<h1>{mensaje}</h1>
			<input type="number" onChange={handleInput} />
			<button onClick={handleButton}>Adivinar</button>
		</div>
	);
};

export default AdivinaNumero;