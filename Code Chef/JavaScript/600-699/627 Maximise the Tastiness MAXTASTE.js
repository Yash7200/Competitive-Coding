let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findTotalTastiness = (ingredient1taste, ingredient2taste, ingredient3taste, ingredient4taste) => {
    const totalTastiness = Math.max(ingredient1taste, ingredient2taste) + Math.max(ingredient3taste, ingredient4taste);
    console.log(totalTastiness);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((prices) => {
       const [ingredient1taste, ingredient2taste, ingredient3taste, ingredient4taste] = prices;
       findTotalTastiness(ingredient1taste, ingredient2taste, ingredient3taste, ingredient4taste);
    });
});