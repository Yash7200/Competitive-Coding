let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const classifySteelGrade = (hardness, carbon, tensileStrength) => {
    const isEnoughHard = hardness > 50;
    const hasLowCarbon = carbon < 0.7;
    const hasHighTensileStrength = tensileStrength > 5600;
    
    const isGrade10Steel = isEnoughHard && hasLowCarbon && hasHighTensileStrength;
    const isGrade9Steel = isEnoughHard && hasLowCarbon;
    const isGrade8Steel = hasLowCarbon && hasHighTensileStrength;
    const isGrade7Steel = isEnoughHard && hasHighTensileStrength;
    const isGrade6Steel = isEnoughHard || hasLowCarbon || hasHighTensileStrength;
    
    const gradeOfSteel = (isGrade10Steel) ? 10
        : (isGrade9Steel) ? 9
        : (isGrade8Steel) ? 8
        : (isGrade7Steel) ? 7
        : (isGrade6Steel) ? 6
        : 5
    ;
    console.log(gradeOfSteel);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [hardness, carbon, tensileStrength] = testcase;
        classifySteelGrade(hardness, carbon, tensileStrength);
    });
});
