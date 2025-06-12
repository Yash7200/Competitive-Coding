let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    strArray = strArray.filter((_, index) => (index % 2) === 1);
    
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    return intArray;
};

const countMaxHours = (hoursList) => {
    const getSumOfHours = (isOddDays) => {
        hours = (isOddDays) 
            ? hoursList.filter((_, index) => (index % 2) === 0)
            : hoursList.filter((_, index) => (index % 2) === 1)
        ;

        const sumOfHours = hours.reduce((acc, item) => acc + item, 0);
        return sumOfHours;
    }
    
    if(hoursList.length > 1){
        const sumOfOddDaysHrs = getSumOfHours(true);
        const sumOfEvenDaysHrs = getSumOfHours(false)
        
        const maxHrs = Math.max(sumOfOddDaysHrs, sumOfEvenDaysHrs);
        console.log(maxHrs);
    }else{
        console.log(hoursList[0]);
    }
}

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        countMaxHours(testcase);
    });
});
