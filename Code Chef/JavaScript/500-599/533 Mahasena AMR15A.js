let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const readyOrNotReady = (soldiers) => {
    let luckySoldiers = 0, unluckySoldiers = 0;

    soldiers.forEach((weapons) => {
        ((weapons % 2) === 0)
            ? ++luckySoldiers
            : ++unluckySoldiers;
    });
    
    (luckySoldiers > unluckySoldiers)
        ? console.log("READY FOR BATTLE")
        : console.log("NOT READY");
}

process.stdin.on('end', () => {
    const testcase = strToInt(input.trim().split('\n'));
    
    testcase.forEach((soldiers) => {
        readyOrNotReady(soldiers);
    });
});