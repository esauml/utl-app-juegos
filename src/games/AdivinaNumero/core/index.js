// function that creates a n digit number with random numbers
// numbers are cant be repeated and cant start with 1 to 9
// returns a array with the numbers
export const randomChoice = (n = 1) => {
    let numbers = [];
    let i = 0;
    while (i < n) {
        let number = Math.floor(Math.random() * 10);
        if (numbers.indexOf(number) === -1 && number !== 0) {
            numbers.push(number);
            i++;
        }
    }
    return numbers;
}

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
}