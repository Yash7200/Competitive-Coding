process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getGymAccessStatus = (gymFee, trainerFee, budget) => {
    const totalCost = gymFee + trainerFee;
    
    (totalCost <= budget)
        ? console.log(2)
        : (gymFee <= budget)
            ? console.log(1)
            : console.log(0);
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [gymFee, trainerFee, budget] = testcase;
        getGymAccessStatus(gymFee, trainerFee, budget);
    });
});