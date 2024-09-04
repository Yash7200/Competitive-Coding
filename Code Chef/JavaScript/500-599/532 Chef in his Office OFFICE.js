let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countWorkingHours = (monToThuWorkHours, friWorkHours) => {
    const totalWorkingHours = (4 * monToThuWorkHours) + friWorkHours;
    console.log(totalWorkingHours);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [monToThuWorkHours, friWorkHours] = testcase;
        countWorkingHours(monToThuWorkHours, friWorkHours);
    });
});