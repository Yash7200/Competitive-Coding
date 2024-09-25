let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findShopWithBetterDeal = (discountAtShop1, discountAtShop2) => {
    const productCostAtShop1 = 100 - discountAtShop1;
    const productCostAtShop2 = 200 - (discountAtShop2 * 2);
    
    (productCostAtShop1 === productCostAtShop2)
        ? console.log('BOTH')
        : (productCostAtShop1 < productCostAtShop2)
            ? console.log('FIRST')
            : console.log('SECOND');
}

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [discountAtShop1, discountAtShop2] = testcase;
        findShopWithBetterDeal(discountAtShop1, discountAtShop2);
    });
});