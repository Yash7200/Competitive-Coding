let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isSimilarToValidPhoneNumber = (itemsCount, itemPrice) => {
    const billValue = String(itemsCount * itemPrice);
    
    (billValue.length === 5)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [itemsCount, itemPrice] = testcase;
        isSimilarToValidPhoneNumber(itemsCount, itemPrice);
    });
});