
function findSumOfMultiples(userInputValues, timesMultiple) {
    if (typeof userInputValues !== "number" ||
        typeof timesMultiple !== 'number' ||
        timesMultiple === null || userInputValues === null ||
        timesMultiple === undefined || userInputValues === undefined) {
        console.error("Input Invalid");
        return 0;
    }

    let eachMultiple = 0;
    let result = 0;
    for (let i = 0; i <= timesMultiple; i++) {
        eachMultiple = i * userInputValues;
        result += eachMultiple;
    }
    return result;
}



// console.log(findSumOfMultiples(8, 3))
// console.log(findSumOfMultiples("10", 5))
// console.log(findSumOfMultiples(5,5))
// console.log(findSumOfMultiples(-10, 5))
// console.log(findSumOfMultiples(null, 3));
console.log(findSumOfMultiples(undefined, 2));
