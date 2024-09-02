process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canAnyOf2BuySubscription = (moneyOfAlice, moneyOfBob, moneyOfCharlie, costOfSubscription) => {
    ( (moneyOfAlice + moneyOfBob >= costOfSubscription) ||
      (moneyOfBob + moneyOfCharlie >= costOfSubscription) ||
      (moneyOfAlice + moneyOfCharlie >= costOfSubscription) )
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [moneyOfAlice, moneyOfBob, moneyOfCharlie, costOfSubscription] = testcase;
        canAnyOf2BuySubscription(moneyOfAlice, moneyOfBob, moneyOfCharlie, costOfSubscription);
    });
});