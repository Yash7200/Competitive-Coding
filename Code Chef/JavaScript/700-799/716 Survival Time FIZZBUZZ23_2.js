let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countSurvivalTime = (totalBuns, bunsPerPerson, extraDays) => {
    const bunsUsedPerDay = bunsPerPerson * 5;
    const isEnoughBunsPerDay = totalBuns >= bunsUsedPerDay;

    const bunsUseDayCount = parseInt(totalBuns / bunsUsedPerDay);
    
    const survivalTime = (!isEnoughBunsPerDay)
        ? extraDays
        : bunsUseDayCount + extraDays;
    console.log(survivalTime);    
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [totalBuns, bunsPerPerson, extraDays] = testcase;
        countSurvivalTime(totalBuns, bunsPerPerson, extraDays);
    });
});