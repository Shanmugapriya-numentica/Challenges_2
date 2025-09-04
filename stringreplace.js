
function replaceTemplateString(userInputString, replacementValues) {
    if (typeof userInputString !== 'string' || !Array.isArray(replacementValues)) {
        console.error("Invalid Input");
        return '';
    }

    let result = '';

    for (let i = 0; i < userInputString.length; i++) {
        if (userInputString[i] === '#' && userInputString[i + 1] === '[') {

            let j = i + 2;
            let key = '';
            while (j < userInputString.length && userInputString[j] !== ']') {
                key += userInputString[j];
                j++;
            }

            if (userInputString[j] === ']') {
                let replaced = false;
                for (let k = 0; k < replacementValues.length; k++) {
                    if (replacementValues[k][0] === key) {
                        result += replacementValues[k][1];
                        replaced = true;
                        break;
                    }
                }
                if (!replaced) {
                    result += '#[' + key + ']';
                }
                i = j;
            } else {
                result += userInputString[i];
            }

        } else {

            result += userInputString[i];
        }
    }

    return result;
}


// const userInputString = "Numentica is focused on delivering quality code. Numentica is located in #[location] hello #[state]. Ph #[phone]";
// const replacementValues = [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]];

const userInputString = "It is #[impossible], we #[can't] do it!";
const replacementValues = [["can't", "can"], ["impossible", "possible"]];


console.log(replaceTemplateString(userInputString, replacementValues));

