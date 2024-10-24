let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const get2ndLargest = (array) => {
    const sortedArray = array.sort((a,b) => a-b);
    const secondLargest = sortedArray[1];
    
    console.log(secondLargest);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((array) => {
        get2ndLargest(array);
    });
});