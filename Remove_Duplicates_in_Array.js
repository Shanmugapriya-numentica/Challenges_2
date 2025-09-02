
function removeDuplicates(inputArray) {

    if (!Array.isArray(inputArray) || inputArray.length < 0) {
        console.error("Invalid Input!");
        return [];
    }

    let result = [];
    let InvalidDataExist = false;

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i] === null || inputArray[i] === undefined) {
            if (!InvalidDataExist) {
                console.warn("null, undefined inputs filtered ")
                InvalidDataExist = true;
            }
            continue;
        }

        let exist = false;
        for (let j = 0; j < result.length; j++) {
            if (inputArray[i] === result[j] &&
                typeof inputArray[i] === typeof result[j]) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            result[result.length] = inputArray[i];
        }
    }
    return result;
}

// console.log(removeDuplicates([1, 'two', 'three', 'two', 3, 'two', 2, true]))
// console.log(removeDuplicates("hi"))
console.log(removeDuplicates([null, 78, undefined, "hello", "Good Day"]))


