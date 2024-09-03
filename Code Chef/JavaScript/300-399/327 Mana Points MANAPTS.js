process.stdin.setEncoding("utf-8");

let input = "";

const strToInt = (strArray) => {
    strArray.shift();
    const intArray  = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const findMaxAttacks = (attackCost, currentPoints) => {
    const maxAttacks = ((currentPoints === 0) || (attackCost > currentPoints))
        ? 0
        : Math.floor(currentPoints/attackCost);
    
    console.log(maxAttacks);
};

process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [attackCost, currentPoints] = testcase;
        
        findMaxAttacks(attackCost, currentPoints);
    });
});