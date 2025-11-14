function mergeValues(userInput) {

  let result = {};

  for (let i = 0; i < userInput.length; i++) {
    let currentValue = userInput[i];

    for (let key in currentValue) {

      if (!(key in result)) {
        result[key] = [];
      }

      let values = currentValue[key];

      for (let j = 0; j < values.length; j++) {
        if (!Array.isArray(result[key]) || typeof values[j] !== "string") {
          console.error("invalid");
          return {};
        }

        let index = result[key].length;
        let value = values[j];
        result[key][index] = value;
      }
    }
  }
  return result;
}

// let userInput = [
//   { fruits: ["apple"], veggies: ["carrot"] },
//   { fruits: ["banana"], drinks: ["water"] }
// ];

let userInput = [
  { fruits: [null], veggies: ["carrot"] },
  { fruits: ["banana"], drinks: ["water"] }
];

console.log(mergeValues(userInput));

