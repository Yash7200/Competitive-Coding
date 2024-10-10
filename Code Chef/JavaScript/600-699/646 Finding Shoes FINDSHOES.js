let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countShoesToBuy = (friends, leftShoes) => {
    const shoesToBuy = (friends <= leftShoes)
        ? friends
        : (leftShoes + ((friends - leftShoes) * 2));
    console.log(shoesToBuy);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [friends, leftShoes] = testcase;
        countShoesToBuy(friends, leftShoes);
    });
});