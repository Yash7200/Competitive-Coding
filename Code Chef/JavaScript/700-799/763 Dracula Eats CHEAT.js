let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countTheTuesdays = (daysLeft) => {
    const minTuesdayCount = parseInt(daysLeft / 7);
    
    const tuesdayCount = (daysLeft % 7) >= 2
        ? minTuesdayCount + 1
        : minTuesdayCount;

    console.log(tuesdayCount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((daysLeft) => {
        countTheTuesdays(daysLeft);
    });
});