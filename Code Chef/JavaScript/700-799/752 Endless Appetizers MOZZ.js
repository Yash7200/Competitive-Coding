let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countPlatesOrdered = (minSticks, sticksPerPlate, moneyReceived) => {
    const extraSticks = moneyReceived / 30;
    const totalSticks = (moneyReceived === 0)
        ? minSticks
        : minSticks + extraSticks;
    
    const minPlates = parseInt(totalSticks / sticksPerPlate);
    const totalPlatesOrdered = ((totalSticks % sticksPerPlate) === 0)
        ? minPlates : (minPlates + 1);
        
    console.log(totalPlatesOrdered);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [minSticks, sticksPerPlate, moneyReceived] = testcase;
        countPlatesOrdered(minSticks, sticksPerPlate, moneyReceived);
    });
});