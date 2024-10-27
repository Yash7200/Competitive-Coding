let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.reduce((acc, item, index) => {
        ((index % 2) !== 0)
            ? acc.push(
                item.trim().split(' ').map(Number)
            )
            : {};
        
        return acc;
    }, []);
    
    return intArray;
};

const countEligibleWomen = (women) => {
    let eligibleWomen = 0;
    
    women.forEach((woman) => {
        ((woman >= 10) && (woman <= 60))
            ? ++eligibleWomen
            : {}
    });
    
    console.log(eligibleWomen);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((women) => {
        countEligibleWomen(women);
    });
});