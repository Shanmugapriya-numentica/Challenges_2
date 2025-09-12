// isDivisibleInRange([1, 5], 60) // true  (60 is divisible by 1,2,3,4,5)
// isDivisibleInRange([1, 5], 15) // false (15 is not divisible by 4)
// isDivisibleInRange([2, 6], 120) // true  (120 % 2,3,4,5,6 === 0)

function findIsDivisible(inputArray, targetNumber) {

    if (!Array.isArray(inputArray) ||
        typeof targetNumber !== 'number' ||
        typeof inputArray[0] !== 'number' ||
        typeof inputArray[1] !== 'number') {
        console.error("Invalid Input!");
        return false;

    }
    let result = true;

    let start = inputArray[0];
    let end = inputArray[1]


    if (start > end) {
        let temproraryHolder = start;
        start = end;
        end = temproraryHolder;
    }


    for (let i = start; i <= end; i++) {
        if (targetNumber % i == 0) {
            continue;
        }
        else {
            result = false;
        }
    }

    return result;
}

// console.log(findIsDivisible([1, 5], 60))
// console.log(findIsDivisible([2, 6], 120))
// console.log(findIsDivisible([1, 5], 15))
// console.log(findIsDivisible([1, 5], "hi"))

// console.log(findIsDivisible(["good", 5], "hi"))
