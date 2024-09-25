let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMinPayForTeaGoal = (teaGoal, jarCapacity, pricePerRefill) => {
    const jarRefillCount = (jarCapacity >= teaGoal)
        ? 1
        : (teaGoal % jarCapacity === 0)
            ? (teaGoal / jarCapacity)
            : parseInt(teaGoal / jarCapacity) + 1;
    
    const moneyForTeaGoal = jarRefillCount * pricePerRefill;
    console.log(moneyForTeaGoal);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [teaGoal, jarCapacity, pricePerRefill] = testcase;
        findMinPayForTeaGoal(teaGoal, jarCapacity, pricePerRefill);
    });
});