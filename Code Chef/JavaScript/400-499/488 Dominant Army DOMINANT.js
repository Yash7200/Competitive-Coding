process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isArmyDominant = (armyAsize, armyBsize, armyCsize) => {
    ( (armyAsize > armyBsize + armyCsize) ||
      (armyBsize > armyAsize + armyCsize) ||
      (armyCsize > armyAsize + armyBsize) )
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [armyAsize, armyBsize, armyCsize] = testcase;
        isArmyDominant(armyAsize, armyBsize, armyCsize);
    });
});