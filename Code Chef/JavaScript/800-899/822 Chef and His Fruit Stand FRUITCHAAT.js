let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMaxDishes = (bananas, apples) => {
    const isAnyFruitMissing = (bananas === 0) || (apples === 0);
    const isMoreOrExactApples = parseInt(bananas / 2) <= apples;
    
    const maxDishes = (isAnyFruitMissing)
        ? 0
        : (isMoreOrExactApples)
            ? parseInt(bananas / 2) : apples;
    console.log(maxDishes);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [bananas, apples] = testcase;
        countMaxDishes(bananas, apples);
    })
});
