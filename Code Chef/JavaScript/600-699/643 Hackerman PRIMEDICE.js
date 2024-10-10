let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findWhoWon = (numberOfAlice, numberOfBob) => {
    const sum = numberOfAlice + numberOfBob;
    
    (sum === 2 || sum === 3 || sum === 5 || sum === 7 || sum === 11)
        ? console.log('Alice')
        : console.log('Bob');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [numberOfAlice, numberOfBob] = testcase;
        findWhoWon(numberOfAlice, numberOfBob);
    });
});