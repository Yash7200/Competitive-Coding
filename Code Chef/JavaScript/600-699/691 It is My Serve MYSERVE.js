let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const whoWillServe = (aliceScore, bobScore) => {
    const currentServe = (aliceScore + bobScore) + 1;
    const canAliceServe = (currentServe % 4 === 1) || (currentServe % 4 === 2);
    
    (canAliceServe)
        ? console.log('Alice')
        : console.log('Bob');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [aliceScore, bobScore] = testcase;
        whoWillServe(aliceScore, bobScore);
    });
});