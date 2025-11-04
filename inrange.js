


function checkInRange([inputValue1, inputValue2], valueToCheck) {
    if (typeof inputValue1 !== 'number' ||
        typeof inputValue2 !== 'number' ||
        typeof valueToCheck !== 'number') {
        console.error("Input Invalid!!");
        return false;
    }

    let result = true;

    let start = inputValue1;
    let end = inputValue2;

    if (start > end) {
        start = inputValue2;
        end = inputValue1;
    }
    if (valueToCheck < start || valueToCheck > end) {
        result = false;
        return result;
    }
    return result;
}


// console.log(checkDate('2025-01-01', '2025-02-01', '2025-02-01'))
// console.log(checkInRange([100, 10], -50))
// console.log(checkInRange([100, 10], 40))
// console.log(checkInRange([1, 10.8], 10.2))
// console.log(checkInRange([1, 10], 224))