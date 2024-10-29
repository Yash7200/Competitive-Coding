let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const joinedStrInput = strArray.reduce((acc, _, index, array) => {
        if((index % 2) !== 0){
            acc.push(
                array[index - 1].trim().split(' ').slice(1)
                + ' ' +
                array[index].trim()
            );
        }
        
        return acc;
    }, []);
    
    const intArray = joinedStrInput.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countWolverine = (modifier, minions) => {
    let count = 0;
    const isWolverine = (num) => (num % 7) === 0;
    
    minions.forEach((minion) => {
        const newMinion = minion + modifier;
        
        (isWolverine(newMinion)) ? ++count : {};
    });
    console.log(count);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [modifier, ...minions] = testcase;
        countWolverine(modifier, minions);
    });
});