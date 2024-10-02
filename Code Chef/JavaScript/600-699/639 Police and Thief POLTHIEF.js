let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countTimeToCatchTheif = (policePosition, thiefPosition) => {
    const timeToCatchTheif = Math.abs(policePosition - thiefPosition);
    console.log(timeToCatchTheif);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [policePosition, thiefPosition] = testcase;
        countTimeToCatchTheif(policePosition, thiefPosition);
    });
});