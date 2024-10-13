let input = '';
process.stdin.on('data', (data) => input += data);

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

const findMaxMarks = (correctAns) => {
    const maxMarks = Math.max(...correctAns);
    console.log(maxMarks);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((correctAns) => {
        findMaxMarks(correctAns);
    });
});