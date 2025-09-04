
function findMissingNumber(userInputArray) {
    if (!Array.isArray(userInputArray) || arguments.length !== 1) {
        console.error("Input is Invalid!");
        return [];
    }
    let result = [];

    let sortedArray = userInputArray;

    for (let i = 0; i < userInputArray.length - 1; i++) {
        for (let j = 0; j < userInputArray.length - 1 - i; j++) {

            if (sortedArray[j] > sortedArray[j + 1]) {

                let temprorayHolder = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temprorayHolder;
            }
        }
    }

    let startValue = sortedArray[0];
    let endValue = sortedArray[sortedArray.length - 1];

    if (typeof startValue !== 'number' || typeof endValue !== 'number') {
        console.error("Array should contain Only Numbers!!");
        return [];
    }

    function findIsExist(value, sortedArray) {

        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] === value) {
                return true;
            }
        } return false;
    }

    for (let i = startValue; i <= endValue; i++) {
        if (!(findIsExist(i, sortedArray))) {
            result.push(i);
        }
    }
    return "Missing Numbers are: " + result;
}




console.log(findMissingNumber([68, 71, 69, 73]))
// console.log(findMissingNumber("Happy NewYear!!"))
// console.log(findMissingNumber([10, 19, 20]))
// console.log(findMissingNumber(["hello","l"]))
// console.log(findMissingNumber([null])
// console.log(findMissingNumber([]))



