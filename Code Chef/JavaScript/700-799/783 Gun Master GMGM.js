let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const combinedArr = strArray.reduce((acc, _, index, array) => {
        if((index % 2) !== 0){
            acc.push(
                array[index - 1].trim().split(' ').slice(1)
                + ' ' +
                array[index].trim()
            );
        }
        return acc;
    }, []);
    
    const intArray = combinedArr.map((strItem) => strItem.trim().split(' ').map(Number));

    return intArray;
};

const countGunSwitch = (gunRange, shootingRanges) => {
    let gun = 'closeRange';
    let gunSwitchCount = 0;
    
    shootingRanges.forEach((distance, index) => {
        if( (distance > gunRange) && (gun === 'closeRange') ){
            gun = 'longRange';
            ++gunSwitchCount;
        }

        if( (distance <= gunRange) && (gun === 'longRange') ){
            gun = 'closeRange';
            ++gunSwitchCount;
        }
    });
    
    console.log(gunSwitchCount);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [gunRange, ...shootingRanges] = testcase;
        countGunSwitch(gunRange, shootingRanges);
    });
});