
function toMinutes(timeInput, options) {
    if (typeof timeInput !== 'string') {
        console.error('Invalid input: timeInput must be a string');
        return;
    }

    var roundingStrategy;
    var isOptionsValid = options && typeof options === 'object';
    var hasValidRoundOption = isOptionsValid && typeof options.round === 'string';

    if (hasValidRoundOption) {
        roundingStrategy = options.round;
    } else {
        roundingStrategy = 'down';
    }

    if (
        roundingStrategy !== 'down' &&
        roundingStrategy !== 'nearest' &&
        roundingStrategy !== 'up'
    ) {
        console.error('Invalid round option');
        return;
    }

    var trimmedInput = '';
    var inputStarted = false;
    var inputIndex = 0;

    while (inputIndex < timeInput.length) {
        var currentCharacter = timeInput[inputIndex];
        if (!inputStarted && currentCharacter === ' ') {
            inputIndex++;
            continue;
        }
        inputStarted = true;
        trimmedInput += currentCharacter;
        inputIndex++;
    }

    var lastCharacterIndex = trimmedInput.length - 1;
    while (lastCharacterIndex >= 0 && trimmedInput[lastCharacterIndex] === ' ') {
        lastCharacterIndex--;
    }

    var cleanedTimeString = '';
    var cleanedIndex = 0;
    while (cleanedIndex <= lastCharacterIndex) {
        cleanedTimeString += trimmedInput[cleanedIndex];
        cleanedIndex++;
    }

    var isTwelveHourFormat = false;
    var isAfternoon = false;
    var cleanedLength = cleanedTimeString.length;

    if (cleanedLength >= 2) {
        var secondLastChar = cleanedTimeString[cleanedLength - 2];
        var lastChar = cleanedTimeString[cleanedLength - 1];

        var hasAM = (secondLastChar === 'a' || secondLastChar === 'A') &&
            (lastChar === 'm' || lastChar === 'M');
        var hasPM = (secondLastChar === 'p' || secondLastChar === 'P') &&
            (lastChar === 'm' || lastChar === 'M');

        if (hasAM || hasPM) {
            isTwelveHourFormat = true;
            isAfternoon = hasPM;

            var timeWithoutSuffix = '';
            var characterPosition = 0;
            while (characterPosition < cleanedLength - 2) {
                var suffixChar = cleanedTimeString[characterPosition];
                if (suffixChar !== ' ') {
                    timeWithoutSuffix += suffixChar;
                }
                characterPosition++;
            }

            cleanedTimeString = timeWithoutSuffix;
        }
    }

    var timeSegments = [];
    var currentSegment = '';
    var segmentIndex = 0;

    while (segmentIndex < cleanedTimeString.length) {
        var timeChar = cleanedTimeString[segmentIndex];
        if (timeChar === ':') {
            timeSegments.push(currentSegment);
            currentSegment = '';
        } else {
            currentSegment += timeChar;
        }
        segmentIndex++;
    }
    timeSegments.push(currentSegment);

    if (timeSegments.length < 2 || timeSegments.length > 3) {
        console.error('Invalid time format');
        return;
    }

    function parsePositiveInteger(numericString) {
        var number = 0;
        var digitIndex = 0;

        if (numericString.length === 0) return -1;

        while (digitIndex < numericString.length) {
            var charCode = numericString[digitIndex].charCodeAt(0);
            if (charCode < 48 || charCode > 57) return -1;
            number = number * 10 + (charCode - 48);
            digitIndex++;
        }

        return number;
    }

    var hour = parsePositiveInteger(timeSegments[0]);
    var minute = parsePositiveInteger(timeSegments[1]);
    var second;

    if (timeSegments.length === 3) {
        second = parsePositiveInteger(timeSegments[2]);
    } else {
        second = 0;
    }

    if (
        hour < 0 ||
        minute < 0 || minute >= 60 ||
        second < 0 || second >= 60
    ) {
        console.error('Invalid time values');
        return;
    }

    if (isTwelveHourFormat) {
        if (hour < 1 || hour > 12) {
            console.error('Invalid hour for 12-hour format');
            return;
        }

        if (hour === 12) {
            hour = 0;
        }

        if (isAfternoon) {
            hour = hour + 12;
        }
    }

    var totalMinutes = hour * 60 + minute;

    if (roundingStrategy === 'nearest') {
        if (second >= 30) {
            totalMinutes = totalMinutes + 1;
        }
    } else if (roundingStrategy === 'up') {
        if (second > 0) {
            totalMinutes = totalMinutes + 1;
        }
    }

    return totalMinutes;
}


console.log(toMinutes("2:30"));
console.log(toMinutes("12:00 am"));
console.log(toMinutes("12:00 pm"));
console.log(toMinutes("9:15:45", { round: 'nearest' }));
console.log(toMinutes("23:59:59", { round: 'up' }));
console.log(toMinutes("07:45 pm"));
console.log(toMinutes("5:60"));
console.log(toMinutes("13:30 am"));
console.log(toMinutes("10:30:xx"));
console.log(toMinutes(123));
