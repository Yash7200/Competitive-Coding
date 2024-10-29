let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((acc, item, index) => {
        if((index % 2) !== 0){
            acc.push(
                item.trim().split(' ').map(Number)
            );
        }
        
        return acc;
    }, []);
    
    return intArray;
};

const countMinStepToMake0 = (numArray) => {
    const numCount = numArray.length;
    const sum = numArray.reduce((acc, num) => acc + num, 0);
    
    const isEvenNumCount = (numCount % 2) === 0;
    const stepToMake0 = (sum === 0)
        ? 0
        : (isEvenNumCount)
            ? Math.abs(sum / 2)
            : -1;
            
    console.log(stepToMake0);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((numArray) => {
        countMinStepToMake0(numArray);
    });
});