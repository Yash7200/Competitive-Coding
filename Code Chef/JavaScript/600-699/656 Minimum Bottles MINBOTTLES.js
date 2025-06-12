let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const getIntArray = (array) => array.trim().split(' ').map(Number);
    
    const intArray = strArray.reduce((acc, item, index) => {
        if((index % 2) === 0) return acc;
        
        const prevItem = getIntArray(strArray[index - 1]);
        const currentItem = getIntArray(item);
        
        acc.push([prevItem, currentItem]);
        return acc;
    }, []);
    
    return intArray;
};

const countBottlesToCarry = (testcase) => {
    const bottleCapacity = testcase[0][1];
    const totalWater = testcase[1].reduce((acc, item) => acc + item, 0);
    
    const bottlesToCarry = ((totalWater % bottleCapacity) === 0)
        ? (totalWater / bottleCapacity)
        : parseInt(totalWater / bottleCapacity) + 1
    ;
    console.log(bottlesToCarry);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        countBottlesToCarry(testcase);
    });
});
