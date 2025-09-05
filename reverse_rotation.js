function reverseRotateCharacters(inputString, nthPosition) {

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
        let index = (i + nthPosition) % arrayLength;
        newWord += inputString[index];
    }

    return newWord;
}


console.log(reverseRotateCharacters("unar", 2));
// console.log(reverseRotateCharacters("llohe", 3));
// console.log(reverseRotateCharacters("lohel", -3)); 
// console.log(reverseRotateCharacters("unar", 85));
// console.log(reverseRotateCharacters("unar", null));