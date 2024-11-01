let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isValidNewNums = (multiplication, secondNum) => {
    if((multiplication % secondNum) === 0){
        return [multiplication, secondNum];
    }else{
        return false, false;
    }
};

const findNewNums = (num1, num2, num3) => {
    const nums  = isValidNewNums((num2 * num3), num1) ||
        isValidNewNums((num1 * num3), num2) ||
        isValidNewNums((num1 * num2), num3);

    const numsOrError = (nums)
        ? `${nums[0]} ${nums[1]}`
        : -1;
    console.log(numsOrError);
    
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {

        const [num1, num2, num3] = testcase;
        findNewNums(num1, num2, num3);
    });
});
