let strInput = '';
process.stdin.on('data', (data) => strInput += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((acc, item, index) => {
        ((index % 2) !== 0)
            ? acc.push(
                item.trim().split(' ').map(Number)
            )
            : {};
        
        return accumulator;
    }, []);
    
    return intArray;
};

const findMax = (numArray) => {
    const maxNum = Math.max(...numArray);
    console.log(maxNum);
};

const maxVal = () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((numArray) => {
        findMax(numArray);
    });
};
