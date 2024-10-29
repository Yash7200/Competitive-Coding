let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinSteps = (placeOfChef, placeOfChefina, maxChange) => {
    const distance = Math.abs(placeOfChefina - placeOfChef);
    const minSteps =  (distance === 0)
        ? 0
        :(maxChange > distance)
            ? 1
            : Math.ceil(distance / maxChange);
    
    console.log(minSteps);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [placeOfChef, placeOfChefina, maxChange] = testcase;
        countMinSteps(placeOfChef, placeOfChefina, maxChange);
    });
});