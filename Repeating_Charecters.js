
function findMostRepeating(userInputString) {
    if (typeof userInputString !== 'string' || userInputString.length === 0) {
        console.error("Invalid input!");
        return '';
    }

    let maxTillNow = '';
    let currentValue = '';
    let maxCountTillNow = 0;
    let currentValueCount = 0;

    for (let i = 0; i < userInputString.length; i++) {
        if (userInputString[i] === currentValue) {
            currentValueCount++;
        } else {
            currentValue = userInputString[i];
            currentValueCount = 1;
        }

        if (currentValueCount > maxCountTillNow) {
            maxTillNow = currentValue;
            maxCountTillNow = currentValueCount;
        }
    }

    return maxTillNow;
}

console.log(findMostRepeating("traaainngfornewbie"));
// console.log(findMostRepeating("trabbbbinngfornewbie"));
// console.log(findMostRepeating("boookkeeper"));
// console.log(findMostRepeating("mississippi"));
// console.log(findMostRepeating("xyz"));                   
