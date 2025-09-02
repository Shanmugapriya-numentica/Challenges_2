
function checkSpaces(inputString) {

    let spaceExist = false;

    if (typeof inputString !== 'string' || inputString == null ||
        inputString == undefined) {
        console.log("Input 'Invalid!");
        return '';
    }

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ') {
            spaceExist = true;
        }
    }
    return spaceExist;
}

console.log(checkSpaces("User arun"))
// console.log(checkSpaces("arun"))
// console.log(checkSpaces(" "))
// console.log(checkSpaces(123))
// console.log(checkSpaces(null))
// console.log(checkSpaces(undefined))