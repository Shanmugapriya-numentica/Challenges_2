


function findCommonNumbers(firstSubArray, secondSubArray) {


    if (!Array.isArray(firstSubArray) ||
        !Array.isArray(secondSubArray) ||
        firstSubArray === null || secondSubArray === null ||
        firstSubArray === undefined || secondSubArray === undefined) {
        console.error(" Entered Input is Not Valid!!");
        return [];
    }

    let finalArray = [];

    for (let i = 0; i < firstSubArray.length; i++) {

        if (typeof firstSubArray[i] !== 'number') {
            console.error("Array should only contain numbers");
            return [];
        }

        let isExist = false;
        for (let j = 0; j < secondSubArray.length; j++) {
            if (firstSubArray[i] === secondSubArray[j]) {
                isExist = true;
                continue;
            }
        }
        if (!isExist) {
            finalArray.push(firstSubArray[i]);
        }
    }

    for (let i = 0; i < secondSubArray.length; i++) {

        if (typeof secondSubArray[i] !== 'number') {
            console.error("Array should only contain numbers");
            return [];
        }

        let isExist = false;

        for (let j = 0; j < firstSubArray.length; j++) {
            if (secondSubArray[i] === firstSubArray[j]) {
                isExist = true;
                continue;
            }
        }
        if (!isExist) {
            finalArray.push(secondSubArray[i]);
        }
    }

    return finalArray;
}



console.log(findCommonNumbers([1, 2, 3, 5, 6], [1, 2, 3, 4]))
// console.log(findCommonNumbers([1, 2, 3, 5, 6], [1, "hi", 3, 4]))
// console.log(findCommonNumbers([3, 45, 42, -7, 11, 34],[35, -7, 87, 11, 1, 45]))
// console.log(findCommonNumbers([1,2,3,6,4],"hi"))
// console.log(findCommonNumbers([1, 3, 33, 8], [6,7,90,33, 8]))
// console.log(findCommonNumbers(["a","b","c","d"], ["a",'c']));
// console.log(findCommonNumbers([1, 2, 3, 6, 4, 4, 5, 2], [1, 5, 5, 3, 4]));
// console.log(findCommonNumbers([3, 45, 42, -7, 11, 34],null))
