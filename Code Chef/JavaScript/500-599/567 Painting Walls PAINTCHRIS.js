let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countHowmanyCanBePaint = (wallHeight, wallWidth, budget) => {
    const wallArea = wallHeight * wallWidth;
    const oneWallPaintCost = wallArea * 2;
    
    const maxWallsCanBePaint = parseInt(budget / oneWallPaintCost);
    console.log(maxWallsCanBePaint);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [wallHeight, wallWidth, budget] = testcase;
        countHowmanyCanBePaint(wallHeight, wallWidth, budget);
    });
});