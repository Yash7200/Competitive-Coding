let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getBMIindex = (weight, height) => {
    const bmi = weight / (height * height);
    
    const isUnderweight = bmi <= 18;
    const isNormalBMI = bmi <= 24;
    const isOverweight = bmi <= 29;
    
    const bmiIndex = (isUnderweight) ? 1
        : (isNormalBMI) ? 2
        : (isOverweight) ? 3
        : 4
    ;
    console.log(bmiIndex);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [weight, height] = testcase;
        getBMIindex(weight, height);
    });
});
