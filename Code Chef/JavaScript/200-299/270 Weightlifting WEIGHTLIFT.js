let input = '';
process.stdin.on('data', (data) => input += data);

const countTotalScore = (scoreList) => {
    let totalScore = 0;
    
    for (score in scoreList){
        ((score % 2) !== 0)
            ? totalScore += Math.max(scoreList[score - 1], scoreList[score])
            : {}
    }
    console.log(totalScore);
};

process.stdin.on('end', () => {
    let scoreList = input.trim().split(' ').map((strItem) => Number(strItem.trim()));
    countTotalScore(scoreList);
});