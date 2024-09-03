process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isLiteracyRateAround75 = (population, literatedPeople) => {
    const literacyRateInPercentage = (literatedPeople / population) * 100;
    
    (literacyRateInPercentage >= 75)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [population, literatedPeople] = testcase;
        isLiteracyRateAround75(population, literatedPeople);
    })
});