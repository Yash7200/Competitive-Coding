let input = '';
process.stdin.on('data', (data) => input += data);

const combineInput = (strArray) => {
    strArray.shift();
    const combinedInput = strArray.reduce((acc, _, index, array) => {
        if((index % 2) !== 0){
            acc.push([
                array[index - 1].trim(),
                array[index].trim()
            ]);
        }
        
        return acc;
    }, []);

    return combinedInput;
};

const printStrMatchResult = (hiddenWord, matchWord) => {
    const matchResult = hiddenWord.split('').reduce((acc, item, index) => {
        return acc + ((item === matchWord[index]) ? 'G' : 'B');
    }, '');
    
    console.log(matchResult);
};

process.stdin.on('end', () => {
    const testcases = combineInput(input.trim().split('\n'));

    testcases.forEach((testcase) => {
        const [hiddenWord, matchWord] = testcase;
        printStrMatchResult(hiddenWord, matchWord);
    });
});
