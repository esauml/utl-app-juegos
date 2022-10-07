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
		const numbers = [5];
		const result = checkNumbers(numbers, random);

		// check result to be an array
		expect(result).toBeInstanceOf(Array);

		// check result to be an array with 3 elements
		expect(result).toHaveLength(3);

		// check if the last element is a boolean value
		expect(typeof result[2]).toBe('boolean');
	});

});