
function repeatString(inputString, numberOfTimes) {

    let result = '';

    if (typeof inputString !== 'string' ||
        inputString == null || numberOfTimes == null ||
        inputString == undefined || numberOfTimes == undefined ||
        typeof numberOfTimes !== 'number' ||
        numberOfTimes <= 0) {
        console.error("Input Invalid!");
        return '';
    }

    for (let i = 0; i < numberOfTimes; i++) {
        result += inputString;
    }

    return result;
}

// console.log(repeatString("arun", 3))
// console.log(repeatString("arun", -3))
// console.log(repeatString(3))
console.log(repeatString("arun", 0))
console.log(repeatString(undefined, 0))