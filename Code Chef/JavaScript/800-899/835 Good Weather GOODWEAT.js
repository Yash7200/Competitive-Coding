let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const hasGoodWeather = (weatherStatus) => {
    const sunnyDays = weatherStatus.filter((weatherOfTheDay) => weatherOfTheDay === 1).length;
    const rainyDays = weatherStatus.length - sunnyDays;
    
    (sunnyDays > rainyDays)
        ? console.log('YES')
        : console.log('NO')
    ;
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((weatherStatus) => {
        hasGoodWeather(weatherStatus);
    });
});
