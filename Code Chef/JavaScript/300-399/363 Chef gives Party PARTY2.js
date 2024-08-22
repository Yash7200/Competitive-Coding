process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const canChefGiveParty = (totalFriends, costPerBurger, budget) => {
    const totalCost = totalFriends * costPerBurger;
    
    (totalCost <= budget)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [totalFriends, costPerBurger, budget] = testcase;
        
        canChefGiveParty(totalFriends, costPerBurger, budget);
    });
});