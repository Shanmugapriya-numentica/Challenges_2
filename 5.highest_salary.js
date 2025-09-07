function findHighestSalary(userInputArray) {
    let result = {};

    if (!Array.isArray(userInputArray) || userInputArray.length === 0) {
        console.error("Invalid input!");
        return '';
    }

    for (let i = 0; i < userInputArray.length; i++) {

        let currentValue = userInputArray[i];
        let dept = currentValue.dept;
        if (
            typeof currentValue.name !== 'string' ||
            typeof currentValue.dept !== 'string' ||
            typeof currentValue.salary !== "number" ||
            currentValue.salary < 0
        ) {
            console.error("Invalid Input");
            return '';
        }

        if (!(dept in result)) {
            result[dept] = {
                name: currentValue.name,
                salary: currentValue.salary
            };
        } else {
            if (currentValue.salary > result[dept].salary) {
                result[dept] = {
                    name: currentValue.name,
                    salary: currentValue.salary
                };
            }
        }
    }

    return result;
}

// const employees = [
//     { name: "Raj", dept: "IT", salary: 600 },
//     { name: "Arun", dept: "IT", salary: 750 },
//     { name: "Deepak", dept: "HR", salary: 500 }
// ];

// const employees = [
//     { name: null, dept: "IT", salary: 600 },
//     { name: "Arun", dept: "IT", salary: 750 },
//     { name: "Deepak", dept: "HR", salary: 500 }
// ];

const employees = [
    { name: null, dept: "IT", salary: -600 },
    { name: "Arun", dept: "IT", salary: -750 },
    { name: "Deepak", dept: "HR", salary: 500 }
];

console.log(findHighestSalary(employees));
