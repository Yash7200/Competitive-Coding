let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const findMaxRectangleSide = (rectangleSize) => {
    const length = Math.floor(rectangleSize / 4);
    const width = Math.floor(rectangleSize / 2) - length;
    
    const area1 = length * width;
    const area2 = (length - 1) * (width + 1);
    
    const maxArea = Math.max(area1, area2);
    console.log(maxArea);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((rectangleSize) => {
        findMaxRectangleSide(rectangleSize);
    });
});