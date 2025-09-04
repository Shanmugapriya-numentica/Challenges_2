
function convertPhoneNum(userInputNumber) {

    let userInput = String(userInputNumber);

    if (typeof userInputNumber !== 'number' ||
        userInput.length !== 10) {
        console.error("Input Invalid!");
        return '';
    }

    let areaCode = '';
    let localFirstPart = '';
    let localSecondPart = '';
    let phoneNum = '';

    for (let i = 0; i < 3; i++) {
        areaCode += userInput[i];
    }
    for (let i = 3; i < 6; i++) {
        localFirstPart += userInput[i];
    }
    for (let i = 5; i < 9; i++) {
        localSecondPart += userInput[i];
    }

    phoneNum = '(' + areaCode + ')' + localFirstPart + '-' + localSecondPart;
    return phoneNum;
}

console.log(convertPhoneNum(9840164723))
// console.log(convertPhoneNum(9840164723456))
// console.log(convertPhoneNum(984-0164723))
// console.log(convertPhoneNum(12346))
// console.log(convertPhoneNum("Something good is on it's way"))
// console.log(convertPhoneNum(null))
