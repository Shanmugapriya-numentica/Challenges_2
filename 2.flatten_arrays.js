
function flattenArrays(userInputArray) {

    if (!Array.isArray(userInputArray)) {
        console.error("Input Invalid");
        return [];
    }

    let result = [];

    for (let i = 0; i < userInputArray.length; i++) {

        let currentValue = userInputArray[i];

        if (Array.isArray(currentValue)) {

            let flat = flattenArrays(currentValue);
            for (let j = 0; j < flat.length; j++) {
                result.push(flat[j]);
            }

        }

        else if (!Array.isArray(currentValue) &&
            currentValue !== null &&
            currentValue !== undefined) {

            result.push(currentValue);
        }
    }
    return result;
}

// console.log(flattenArrays([1, 2, [3, 4, 5], 6, 7, [8, 9], 10, 11, 12]))
// console.log(flattenArrays([1, 2, [3, 4, 5, [6, 7]], [8, 9], 10, 11, 12]))
console.log(flattenArrays([1, 2, [3, 4, 5, [6, 7, 8, [8.1, 8.2], 9]], 10, 11, 12, [13, 14], 15]))
// console.log(flattenArrays([1, 2, [3, 4, 5], 6, 7, [null,8], 10, 11, 12]))