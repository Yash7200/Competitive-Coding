let strInput = '';
process.stdin.on('data', (data) => strInput += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((accumulator, _, index, array) => {
        if((index % 2) !== 0){
            accumulator.push(
                array[index].trim().split(' ').map(Number)
            );
        }
        
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
