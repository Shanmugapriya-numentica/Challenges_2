
function removeZeros(userInput, mode) {

    mode = mode.toLowerCase();
    if (typeof userInput !== 'string' || (mode !== 'leading' && mode !== 'trailing' && mode !== 'both')) {
        console.error("Invalid input or mode!");
        return '';
    }

    let start = 0;
    let end = userInput.length - 1;

    if (mode === 'leading' || mode === 'both') {
        while (start <= end && userInput[start] === '0') {
            start++;
        }
    }

    if (mode === 'trailing' || mode === 'both') {
        while (end >= start && userInput[end] === '0') {
            end--;
        }
    }
    let result = '';


    for (let i = start; i <= end; i++) {
        result += userInput[i];
    }

    return result;
}

console.log(removeZeros("00001234000", "botH"));  
console.log(removeZeros("000000123423423000", "leAding"));
// console.log(removeZeros("000000123423423000", "trailing"));
// console.log(removeZeros("000000000010", "leading"));
// console.log(removeZeros("01000000000", "leading"));
// console.log(removeZeros("123400", "trailing"));
