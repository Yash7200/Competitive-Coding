let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const giveGrade = (attendance, marks) => {
    
    (attendance < 50)
        ? console.log("Z")
        : (marks < 50)
            ? console.log("F")
            : console.log("A");
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [attendance, marks] = testcase;
        giveGrade(attendance, marks);
    });
});