
function findEvenNumbersSum(userInputArray) {
    if (!Array.isArray(userInputArray)) {
        console.error("Input Invalid");
        return 0;
    }

    let result = 0;

    for (let i = 0; i < userInputArray.length; i++) {
        if (userInputArray[i] % 2 == 0) {
            result += userInputArray[i];
        }
    }
    return result;
}
//
// console.log(findEvenNumbersSum([38, 3, 2, 28, 31]))
// console.log(findEvenNumbersSum("Have a nice day!"))
// console.log(findEvenNumbersSum([1,2,3,4,5,6], "hello"))
// console.log(findEvenNumbersSum(1,3))
// console.log(findEvenNumbersSum([1,3,2]))