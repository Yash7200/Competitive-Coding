let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const convertToInt = (input) => input.trim().split(' ').map(Number);
    
    const intArray = strArray.reduce((acc, item, index) => {
        if((index % 2) !== 0) return acc;
        
        const payload = [];
        payload.push(convertToInt(item))
        payload.push(convertToInt(strArray[index + 1]));
        
        acc.push(payload);
        return acc;
    }, []);

    return intArray;
};

const getLifespansOfPendingBulbs = (bulbsCount, minAvgLifespan, lifespansOfBulbs) => {
    const totalLifespanOfUsedBulbs = lifespansOfBulbs.reduce((acc, lifespan) => acc + lifespan, 0);
    const calculatedLifespan = (minAvgLifespan * bulbsCount) - totalLifespanOfUsedBulbs;
    
    const lifespanOfPendingBulbs = (calculatedLifespan < 0) ? 0 : calculatedLifespan;
    console.log(lifespanOfPendingBulbs);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bulbsCount, minAvgLifespan] = testcase[0];
        const lifespansOfBulbs = testcase[1];
        
        getLifespansOfPendingBulbs(bulbsCount, minAvgLifespan, lifespansOfBulbs);
    });
})
