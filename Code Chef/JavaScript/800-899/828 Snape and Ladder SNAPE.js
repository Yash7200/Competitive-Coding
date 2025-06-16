let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getMinMaxOfRightSide = (gapSize, leftSide) => {
    const sqrOfleftSide = leftSide * leftSide;
    const sqrOfGapSize = gapSize * gapSize;
    
    const minSizeOfRightSide = Math.sqrt(sqrOfleftSide - sqrOfGapSize);
    const maxSizeOfRightSide = Math.sqrt(sqrOfleftSide + sqrOfGapSize);
    
    console.log(`${minSizeOfRightSide} ${maxSizeOfRightSide}`);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [gapSize, leftSide] = testcase;
        getMinMaxOfRightSide(gapSize, leftSide);
    });
});
