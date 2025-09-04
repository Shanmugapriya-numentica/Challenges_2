
function checkInRange([inputValue1, inputValue2], valueToCheck) {
    if (typeof inputValue1 !== 'number' ||
        typeof inputValue2 !== 'number' ||
        typeof valueToCheck !== 'number') {
        console.error("Input Invalid!!");
        return false;
    }

    let result = true;

    let start = inputValue1;
    let end = inputValue2;

    if (start > end) {
        start = inputValue2;
        end = inputValue1;
    }
    if (valueToCheck < start || valueToCheck > end) {
        result = false;
        return result;
    }
    return result;
}

function datesModify(dateString) {
    if (typeof dateString !== 'string') {
        console.error('Invalid input: not a string');
        return null;
    }

    const parts = dateString.split('-');

    if (parts.length !== 3) {
        console.error('Invalid date format, expected YYYY-MM-DD:', dateString);
        return null;
    }

    let [year, month, day] = parts;

    if (month.length === 1) month = '0' + month;
    if (day.length === 1) day = '0' + day;

    return year + month + day;
}

function checkDate(inputDate1, inputDate2, specifiedDate) {
    const start = datesModify(inputDate1);
    const end = datesModify(inputDate2);
    const target = datesModify(specifiedDate);

    if (start === null || end === null || target === null) {
        return false;
    }

    let rangeStart;
    let rangeEnd;

    if (start <= end) {
        rangeStart = start;
        rangeEnd = end;
    } else {
        rangeStart = end;
        rangeEnd = start;
    }

    return target >= rangeStart && target <= rangeEnd;
}


console.log(checkDate('2025-02-01', '2025-01-01', '2025-02-01'));
// console.log(checkDate('2025-01-01', '2025-02-01', '2025-02-01'));
// console.log(checkDate('2025-02-01', '2025-01-01', '2024-12-31'));
// console.log(checkDate('2025-02-01', 'invalid', '2025-01-15'));
// console.log(checkDate('2025-01-01', '2025-02-01', null));


// console.log(checkDate('2025-01-01', '2025-02-01', '2025-02-01'))
// console.log(checkInRange([100, 10], -50))
// console.log(checkInRange([100, 10], 40))
// console.log(checkInRange([1, 10.8], 10.2))
// console.log(checkInRange([1, 10], 224))
// console.log(checkInRange([10, 100], 5))
// console.log(checkInRange([1, 10], "hi"))
// console.log(checkInRange("hello world!", 4))
// console.log(checkInRange([10000, 10], 4))
// console.log(checkInRange([1, 10], null))
