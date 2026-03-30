

function findCommonInterest(userInput) {

    let bookDetails = {};
    for (let i = 0; i < userInput.length; i++) {
        let student = userInput[i];
        for (let j = 0; j < student.books.length; j++) {
            let book = student.books[j];
            if (!bookDetails[book]) {
                bookDetails[book] = [];
            }
            bookDetails[book].push(student.name);
        }
    }

    let commonInterest = {};
    for (let i = 0; i < userInput.length; i++) {

        let studentA = userInput[i];
        commonInterest[studentA.name] = {};

        for (let j = 0; j < userInput.length; j++) {
            if (i === j) continue;

            let studentB = userInput[j];
            for (let m = 0; m < studentA.books.length; m++) {
                let bookA = studentA.books[m];

                for (let n = 0; n < studentB.books.length; n++) {
                    let bookB = studentB.books[n];
                    if (bookA === bookB) {
                        commonInterest[studentA.name][studentB.name] = true;
                    }
                }
            }
        }
    }

    let maxCount = 0;
    let maxuserInput = [];

    for (let name in commonInterest) {
        let count = 0;
        for (let other in commonInterest[name]) {
            count++;
        }

        if (count > maxCount) {
            maxCount = count;
            maxuserInput.length = 0;
            maxuserInput.push(name);
        } else if (count === maxCount) {
            maxuserInput.push(name);
        }
    }

    return {
        bookDetails: bookDetails,
        mostConnected: maxuserInput
    };


}

let userInput = [
    {
        id: 0,
        name: 'Arun',
        books: ['Wings of Fire', 'Chakra'],
    }, {
        id: 1,
        name: 'Ashok',
        books: ['Chakra', 'War and Peace', 'The Shining']
    }, {
        id: 2,
        name: 'Balu',
        books: ['Wings of Fire', 'All about Cricket'],
    }, {
        id: 3,
        name: 'Cathi',
        books: ['Against the wind', 'The Shining', 'War and Peace']
    },
];

let result = findCommonInterest(userInput);

for (let book in result.bookDetails) {
    console.log(book + " - [" + result.bookDetails[book].join(', ') + "]");
}

console.log("userInput with most commonInterest interests: " + result.mostConnected.join(', '));
