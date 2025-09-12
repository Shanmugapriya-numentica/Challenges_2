function groupMultiples(userInput) {
    
    if (!Array.isArray(userInput)) {
        console.error("Invalid Input");
        return [];
    }
    const result = [];

    for (let i = 1; i <= 10; i++) {
        const numsDivisible = [];

        for (let j = 0; j < userInput.length; j++) {
            if (typeof userInput[j] !== 'number' ||
                userInput[j] === null ||
                userInput[j] === undefined) {
                console.error("Invalid Input!");
                return '';
            }
            if (userInput[j] % i === 0) {
                numsDivisible.push(userInput[j]);
            }
        }

        if (numsDivisible.length > 0) {
            const subValues = {};
            subValues[i] = numsDivisible;
            result.push(subValues);
        }
    }

    return result;
}


console.log(groupMultiples([34, 12, 10, 15, 7, 21, 81]));
// console.log(groupMultiples([34, 12, 10, 15, 7, 21, 81, "hello"]));
// console.log(groupMultiples([34, 12, 10, 15, 7, 21, undefined]));

// console.log(groupMultiples("hello"));
