process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const countMinScoreToEndGame = (scoreOfAlice, scoreOfBob) => {
    const minScoreToEndGame = Math.min((7 - scoreOfAlice), (7 - scoreOfBob));
    
    console.log(minScoreToEndGame);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((match) => {
       const [scoreOfAlice, scoreOfBob] = match;
       
       countMinScoreToEndGame(scoreOfAlice, scoreOfBob);
    });
});