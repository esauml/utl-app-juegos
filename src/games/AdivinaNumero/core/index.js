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

// function that receives two arrays of numbers 
// checks if the numbers are the same number and in the same position
// also check how many numbers are the same but in different position
// also check if numbers in array 1 are bigger than numbers in array 2
// returns an array with the number of numbers in the same position, the number of numbers in different position and if the first array is bigger than the second array
export const checkNumbers = (numbers, randomNumbers) => {
	let samePosition = 0;
	let sameNumber = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === randomNumbers[i]) {
			samePosition++;
		} else if (randomNumbers.includes(numbers[i])) {
			sameNumber++;
		}
	}

	// check if numbers are bigger
	let bigger = false;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > randomNumbers[i]) {
			bigger = true;
			break;
		} else if (numbers[i] < randomNumbers[i]) {
			break;
		}
	}

	return [samePosition, sameNumber, bigger];
};