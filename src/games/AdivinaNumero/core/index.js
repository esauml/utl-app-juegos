// function that creates a n digit number with random numbers
// inputs range: min and max and the number of digits
// numbers are cant be repeated
// returns a array with the numbers
export const randomChoice = (n = 1, min = 1, max = 10) => {
	const result = [];
	while (result.length < n) {
		const random = Math.floor(Math.random() * (max - min + 1)) + min;
		if (result.indexOf(random) === -1) {
			result.push(random);
		}
	}
	return result;
};

// function that receives two numbers
// returns if its bigger, smaller or equal
// return values: 1, -1, 0
export const checkNumbers = (a, b) => {
	if (a > b) {
		return 1;
	} else if (a < b) {
		return -1;
	}
	return 0;
};