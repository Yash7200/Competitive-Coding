let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const maxBottlesToFill = (bottles, bottleCapacity, waterTankCapacity) => {
    const maxWaterToFill = bottles * bottleCapacity;
    const filledBottles = (bottleCapacity > waterTankCapacity)
        ? 0
        : (maxWaterToFill <= waterTankCapacity)
            ? bottles
            : parseInt(waterTankCapacity / bottleCapacity);
            
    console.log(filledBottles);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bottles, bottleCapacity, waterTankCapacity] = testcase;
        maxBottlesToFill(bottles, bottleCapacity, waterTankCapacity);
    });
});