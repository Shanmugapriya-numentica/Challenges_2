//6.covert Arrays into obejct

function covertArrayIntoObject(userInput) {

    if (!Array.isArray(userInput)) {
        console.error("Invalid Input");
        return null;
    }

    let resultObject = {};
    let currentArray;

    for (let i = 0; i < userInput.length; i++) {
        currentArray = userInput[i];
        if (!Array.isArray(currentArray) ||
            currentArray.length !== 2 ||
            currentArray[0] === null || currentArray[0] === undefined ||
            currentArray[1] === null || currentArray[1] === undefined) {
            console.error("invalid Values");
            return '';
        }
        resultObject[currentArray[0]] = currentArray[1];
    }
    return resultObject;
}

console.log(covertArrayIntoObject([['name', 'arun'], ['age', 39]]))

console.log(covertArrayIntoObject([['name', 'arun', 'jhon'], ['age', 39]]))
console.log(covertArrayIntoObject([[null, "sam"], ['age', 39]]))

console.log(covertArrayIntoObject([['name', undefined], ['age', 39]]))
