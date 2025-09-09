function groupByUserId(userInputArray) {
    if (!Array.isArray(userInputArray)) {
        console.error("Invalid Input");
    }

    let result = {};

    for (let i = 0; i < userInputArray.length; i++) {
        let currentValue = userInputArray[i];
        let { userId, amount, category, ts, currency } = currentValue;

        if (userId === null || amount === null || category === null || currency === null ||
            userId === undefined || amount === undefined || category === undefined || currency === undefined ||
            typeof amount !== 'number' || typeof category !== 'string') {
            console.error("Invalid Input");
            return '';
        }

        if (!result[userId]) {
            result[userId] = {
                key: userId,
                totalAmount: 0,
                byCategory: {},
                count: 0,
                lastTransactionAt: ts,
                currency: currency
            };
        }

        let currentUser = result[userId];
        currentUser.totalAmount += amount;

        if (!currentUser.byCategory[category]) {
            currentUser.byCategory[category] = 0;
        }
        currentUser.byCategory[category] += amount;

        currentUser.count++;

        if (ts > currentUser.lastTransactionAt) {
            currentUser.lastTransactionAt = ts;
        }
    }

    result = Object.values(result);

    return result;

}

let inputArray = [
    { id: "t1", userId: 101, category: "food", amount: 120.5, currency: "INR", ts: "2025-08-01T09:10:00Z" },
    { id: "t2", userId: 101, category: "travel", amount: 80.00, currency: "INR", ts: "2025-08-02T14:33:00Z" },
    { id: "t3", userId: 102, category: "food", amount: 60.00, currency: "INR", ts: "2025-08-02T07:05:00Z" },
    { id: "t4", userId: 101, category: "food", amount: -20.00, currency: "INR", ts: "2025-08-03T10:00:00Z" } // refund
];
console.log(groupByUserId(inputArray))