let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getExamResult = (questions, rightAns, passingMarks) => {
    const rightAnsScore = rightAns * 3;
    
    const wrongAnsCount = questions - rightAns;
    const scoreToRemove = wrongAnsCount * (-1);
    
    
    const totalScore = rightAnsScore + scoreToRemove;
    const examResult = (totalScore >= passingMarks)
        ? 'PASS' : 'FAIL';
        
    console.log(examResult);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [questions, rightAns, passingMarks] = testcase;
        getExamResult(questions, rightAns, passingMarks);
    });
});