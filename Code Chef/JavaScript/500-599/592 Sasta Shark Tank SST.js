let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countValuation = (offer, stake) => {
    const valuation = (100 * offer) / stake;
    return valuation;
};

const findGoodDeal = (offer1, offer2) => {
    const valuationOnOffer1 = countValuation(offer1, 10);
    const valuationOnOffer2 = countValuation(offer2, 20);
    
    (valuationOnOffer1 === valuationOnOffer2)
        ? console.log('ANY')
        : (valuationOnOffer1 > valuationOnOffer2)
            ? console.log('FIRST')
            : console.log('SECOND');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [offer1, offer2] = testcase;
        findGoodDeal(offer1, offer2);
    });
});