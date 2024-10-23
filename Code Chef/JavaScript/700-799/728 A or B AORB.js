let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getScore = (timeToSolveGivenProblem, lastProblemTime, problemScore, scoreReducedPerMin) => {
    const totalTime = timeToSolveGivenProblem + lastProblemTime;
    const reducedScore = totalTime * scoreReducedPerMin;
    const totalProblemScore = problemScore - reducedScore;
    
    return totalProblemScore;
};

const getMaxScore = (que1solveTime, que2solveTime) => {
    
    let minTimeProblemScore, maxTimeProblemScore;
    let totalScore1, totalScore2;
    
    minTimeProblemScore = getScore(que2solveTime, 0, 1000, 4);
    maxTimeProblemScore = getScore(que1solveTime, que2solveTime, 500, 2);
    totalScore1 = minTimeProblemScore + maxTimeProblemScore;
    
    minTimeProblemScore = getScore(que1solveTime, 0, 500, 2);
    maxTimeProblemScore = getScore(que2solveTime, que1solveTime, 1000, 4);
    totalScore2 = minTimeProblemScore + maxTimeProblemScore;    

    const maxScore = Math.max(totalScore1, totalScore2);
    console.log(maxScore);
};

process.stdin.on('end', () => {
   const testcases = strToInt(input.trim().split('\n'));
   
   testcases.forEach((testcase) => {
       const [que1solveTime, que2solveTime] = testcase;
       getMaxScore(que1solveTime, que2solveTime);
   });
});