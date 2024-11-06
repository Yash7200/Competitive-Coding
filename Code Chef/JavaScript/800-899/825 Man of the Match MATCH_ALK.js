let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    let lastItemIndex = 0;
    const combinedInputs = strArray.reduce((acc, _, index, array) => {
        if((index % 22) === 21){
            acc.push( array.slice(lastItemIndex, (index + 1)) );
            lastItemIndex = index + 1;
        }
        
        return acc;
    }, []);

    const intArray = combinedInputs.reduce((acc, strArrayAsItem) => {
        let testcase = [];
        strArrayAsItem.forEach((strItem) => {
            testcase.push(
                strItem.trim().split(' ').map(Number)
            );
            
        });
        acc.push(testcase);
        
        return acc;
    }, [])

    return intArray;
};

const getManOfTheMatch = (scoreList) => {
    const totalScoresList = [];
    scoreList.forEach((playerInfo) => {
        const [runs, wickets] = playerInfo;
        const totalScore = runs + (20 * wickets);
        
        totalScoresList.push(totalScore);
    });
    
    const maxScore = Math.max(...totalScoresList);
    const manOfTheMatch = totalScoresList.indexOf(maxScore) + 1;
    
    console.log(manOfTheMatch);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((scoreList) => {
        getManOfTheMatch(scoreList);
    });
});
