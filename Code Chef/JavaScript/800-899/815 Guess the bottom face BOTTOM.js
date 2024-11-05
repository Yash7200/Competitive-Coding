let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findBottomFaceNum = (diceNum) => {
    const bottomeFaceNum = 7 - diceNum;
    console.log(bottomeFaceNum);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((diceNum) => findBottomFaceNum(diceNum));
});
