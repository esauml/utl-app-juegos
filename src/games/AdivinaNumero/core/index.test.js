import { checkNumbers, randomChoice } from './index';

describe('core: juego adivina numero', () => {

	it('Devolución un numero aleatorio entre 1 y 10', () => {
		const random = randomChoice(1);
		expect(random).toHaveLength(1);
		expect(random[0]).toBeGreaterThanOrEqual(1);
		expect(random[0]).toBeLessThanOrEqual(10);
	});

	it('Verificación de numeros', () => {
		const random = randomChoice(1);
		const numbers = 5;
		const result = checkNumbers(numbers, random[0]);

		// check result to be a number
		expect(typeof result).toBe('number');

		// check result to be 1, -1 or 0
		expect(result).toBeGreaterThanOrEqual(-1);
		expect(result).toBeLessThanOrEqual(1);

	});

});