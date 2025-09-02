
function convertNumberToString(userInputValue) {
    if (typeof userInputValue !== 'number' ||
        userInputValue < 0 ||
        userInputValue === null ||
        userInputValue === undefined ||
        !Number.isInteger(userInputValue)) {
        console.error("Input is Invalid");
        return '';
    }

    let numbersString = {
        0: "zero", 1: "one", 2: "two", 3: "three", 4: "four",
        5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"
    };

    let result = "";
    let numAsString = String(userInputValue);

    for (let i = 0; i < numAsString.length; i++) {
        let digit = numAsString[i];
        result += numbersString[digit];
    }

    return result;
}

console.log(convertNumberToString(123));
// console.log(convertNumberToString(98));
// console.log(convertNumberToString(-100));
// console.log(convertNumberToString(12.5));
// console.log(convertNumberToString(NaN));
// console.log(convertNumberToString(undefined));
// console.log(convertNumberToString(true));
// console.log(convertNumberToString());