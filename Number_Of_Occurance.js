
function findNumberOfOccurance(inputString, targetWord) {

    if (typeof inputString !== 'string' || typeof targetWord !== 'string') {
        return "Input Invalid";
    }

    let inputStringArray = inputString.split('');
    let targetWordArray = targetWord.split('');
    let count = 0;

    for (let i = 0; i < inputStringArray.length - targetWordArray.length; i++) {

        let isPresented = false;

        for (let j = 0; j < targetWordArray.length; j++) {

            if (inputStringArray[i + j] !== targetWordArray[j]) {
                isPresented = true;
                break;
            }

        }
        if (!isPresented) {
            count++;
        }
    }

    return count;
}


console.log(findNumberOfOccurance("be kind whenever possible. kindness is what matters", "kind"))
// console.log(findNumberOfOccurance("Good Morning", "happy"))
// console.log(findNumberOfOccurance(90,"ji"))
// console.log(findNumberOfOccurance(null, 89))
// console.log(findNumberOfOccurance([8,9,2],"hello"))
// console.log(findNumberOfOccurance(23,34))