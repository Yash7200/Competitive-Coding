process.stdin.setEncoding('utf-8');

let input = "";

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canChefRace = (winnerFinishTime, chefFinishTime) => {
    const deadline = ((winnerFinishTime * 107) / 100).toFixed(2);

    (chefFinishTime <= deadline)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [winnerFinishTime, chefFinishTime] = testcase;
        canChefRace(winnerFinishTime, chefFinishTime);
    });
});