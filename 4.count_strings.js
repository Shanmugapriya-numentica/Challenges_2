//4.count


function countStrings(userInput) {
    if (!Array.isArray(userInput)) {
        console.error("Input Invalid");
        return '';
    }
    let resultObject = {};

    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === null || userInput[i] === undefined) {
            console.log("Invalid Values");
            return [];
        }

        if (!(userInput[i] in resultObject)) {
            resultObject[userInput[i]] = 0;
        }
        resultObject[userInput[i]] += 1;
    }
    return resultObject;
}

console.log(countStrings(['a', 'b', 'c', 'c', 'b', 'a', 'd', "b"]))
console.log(countStrings([100, 'a', 'b', 'c', 'c', 'b', 'a', 'd']))
console.log(countStrings(['a', 'b', 'c', 'c', null, "b"]))
console.log(countStrings("hello"))