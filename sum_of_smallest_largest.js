
function findSumOfTwoLargest(userInputArray) {
    if (!Array.isArray(userInputArray) || arguments.length !== 1) {
        console.error("Sorry!, Entered Input is Invalid");
        return NaN;
    }

    let result = 0;

    let numberOfElements = userInputArray.length;
    let newArray = userInputArray;

    for (let i = 0; i < numberOfElements - 1; i++) {
        for (let j = 0; j < numberOfElements - 1 - i; j++) {

            if (newArray[j] < newArray[j + 1]) {

                let temprorayHolder = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temprorayHolder;
            }
        }
    }

    result = userInputArray[0] + userInputArray[userInputArray.length - 1];

    return result;
}


// console.log(findSumOfTwoLargest([2, 3, 4, 20, 9, 10]))
// console.log(findSumOfTwoLargest([2, 12, 66, 80, 120, 45]))
// console.log(findSumOfTwoLargest([10,20,1000,2000]))
// console.log(findSumOfTwoLargest("Hello"))
// console.log(findSumOfTwoLargest([1,2],[12,34]))
