let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const whoDrivesFaster = (distanceForAlice, timeUsedByAlice, distanceForBob, timeUsedByBob) => {
    const speedOfAlice = distanceForAlice / timeUsedByAlice;
    const speedOfBob = distanceForBob / timeUsedByBob;
    
    (speedOfAlice === speedOfBob)
        ? console.log('Equal')
        : (speedOfAlice > speedOfBob)
            ? console.log('Alice')
            : console.log('Bob');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [distanceForAlice, timeUsedByAlice, distanceForBob, timeUsedByBob] = testcase;
        whoDrivesFaster(distanceForAlice, timeUsedByAlice, distanceForBob, timeUsedByBob);
    });
});