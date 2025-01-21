export {
	rollDice,
	generateRandom6DigitNumber,
	extractNumbersAsString,
	getRandomIndex,
};

function rollDice(probability) {
	return Math.random() < probability;
}
function generateRandom6DigitNumber() {
	return Math.floor(Math.random() * 900000) + 100000;
}
function extractNumbersAsString(str) {
	// Use regular expression to find all occurrences of digits
	const result = str.match(/\d+/g);
	// If matches are found, join them together into a single string
	return result ? result.join("") : "";
}

function getRandomIndex(i) {
	return Math.floor(Math.random() * i); // Random number between 0 and i
}
