process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const minimumCostOfSubscription = (groupOfFriends, subscriptionCost) => {
    const minimumSubscriptionNeeded = (groupOfFriends <= 6)
        ? 1
        : (groupOfFriends % 6 === 0)
            ? (groupOfFriends / 6)
            : parseInt(groupOfFriends / 6) + 1;
            
    const costOfSubscriptions = minimumSubscriptionNeeded * subscriptionCost;
    console.log(costOfSubscriptions);
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [groupOfFriends, subscriptionCost] = testcase;
        minimumCostOfSubscription(groupOfFriends, subscriptionCost);
    });
});