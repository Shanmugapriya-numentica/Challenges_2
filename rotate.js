function rotateCharacters(inputString, nthPosition) {

    if (typeof inputString !== 'string' ||
        typeof nthPosition !== 'number' ||
        inputString.length < nthPosition ||
        inputString === null || nthPosition === undefined) {
        console.error("Invalid Input!");
        return '';
    }

    let newWord = '';
    let arrayLength = inputString.length;

    if (arrayLength === 0) return inputString;

    nthPosition = nthPosition % arrayLength;

    if (nthPosition < 0) {
        nthPosition = arrayLength + nthPosition;
    }

    for (let i = 0; i < arrayLength; i++) {
        let index = (i - nthPosition + arrayLength) % arrayLength;
        newWord += inputString[index];
    }

    return newWord;
}


console.log(rotateCharacters("arun", 2));
console.log(rotateCharacters("arun", -2));
console.log(rotateCharacters("hello", 3));
console.log(rotateCharacters("hello", -3)); 